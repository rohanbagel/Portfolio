/**
 * Sameshi Chess Engine — JavaScript port
 * Original C engine by datavorous: https://github.com/datavorous/sameshi
 *
 * 120-square mailbox board representation
 * Negamax search with alpha-beta pruning
 * Quiescence search (captures only at depth 0)
 * Pure material evaluation
 * Castling support (kingside + queenside for both sides)
 *
 * Piece encoding: positive = white, negative = black
 *   0 = empty, ±1 = pawn, ±2 = knight, ±3 = bishop,
 *   ±4 = rook, ±5 = queen, ±6 = king, 7 = off-board sentinel
 */

// Material values indexed by absolute piece type
const PIECE_VALUES = [0, 1, 3, 3, 5, 9, 99];

// Knight move offsets in the 10-wide mailbox
const KNIGHT_OFFSETS = [-21, -19, -12, -8, 8, 12, 19, 21];

// King / sliding piece offsets: [0..3] = orthogonal (rook), [4..7] = diagonal (bishop)
const KING_OFFSETS = [-1, 1, -10, 10, -11, -9, 9, 11];

// FEN piece character → mailbox piece value
const FEN_TO_PIECE = {
  P: 1, N: 2, B: 3, R: 4, Q: 5, K: 6,
  p: -1, n: -2, b: -3, r: -4, q: -5, k: -6,
};

const SEARCH_DEPTH = 5;
const INF = 9999;

// ─── Module state (reset per getBestMove call) ───────────────────────────────

let board = new Array(120);
let bestSource = 0;
let bestDest = 0;

// Castling rights (parsed from FEN field 3: e.g. "KQkq", "Kq", "-")
// K/Q = white kingside/queenside, k/q = black kingside/queenside
let castlingRights = { K: false, Q: false, k: false, q: false };

// Mailbox indices for castling squares
// White king: e1=25, kingside rook: h1=28, queenside rook: a1=21
// Black king: e8=95, kingside rook: h8=98, queenside rook: a8=91
const CASTLE_KING_WHITE = 25, CASTLE_KING_BLACK = 95;

// ─── Board ↔ FEN conversion ─────────────────────────────────────────────────

/**
 * Convert a mailbox index (21–98, valid squares) to algebraic notation.
 * Mailbox layout: row = Math.floor(idx / 10), col = idx % 10
 * Row 2 = rank 1 (white back rank), Row 9 = rank 8 (black back rank)
 * Col 1 = a-file, Col 8 = h-file
 */
function toAlgebraic(idx) {
  const file = (idx % 10) - 1;   // 0..7
  const rank = Math.floor(idx / 10) - 2; // 0..7
  return String.fromCharCode(97 + file) + (rank + 1);
}

/**
 * Convert algebraic notation (e.g. "e2") to a mailbox index.
 */
function fromAlgebraic(sq) {
  const file = sq.charCodeAt(0) - 96; // a=1, h=8
  const rank = parseInt(sq[1], 10);    // 1..8
  return (rank + 1) * 10 + file;       // row = rank+1, col = file
}

/**
 * Populate the board array from a FEN string.
 */
function fromFEN(fen) {
  // Fill everything with sentinel
  board.fill(7);

  const parts = fen.split(" ");
  const rows = parts[0].split("/");

  // FEN rows go from rank 8 (top) to rank 1 (bottom)
  for (let r = 0; r < 8; r++) {
    const rank = 7 - r; // rank 7..0 → mailbox rows 9..2
    const mailboxRow = rank + 2;
    let col = 1;
    for (let ci = 0; ci < rows[r].length; ci++) {
      const ch = rows[r][ci];
      if (ch >= "1" && ch <= "8") {
        const empty = parseInt(ch, 10);
        for (let e = 0; e < empty; e++) {
          board[mailboxRow * 10 + col] = 0;
          col++;
        }
      } else {
        board[mailboxRow * 10 + col] = FEN_TO_PIECE[ch] || 0;
        col++;
      }
    }
  }

  // Parse castling rights from FEN field 3
  const castling = parts[2] || "-";
  castlingRights.K = castling.includes("K");
  castlingRights.Q = castling.includes("Q");
  castlingRights.k = castling.includes("k");
  castlingRights.q = castling.includes("q");
}

// ─── Check detection ─────────────────────────────────────────────────────────

/**
 * Returns true if side `s` (1=white, -1=black) is in check.
 */
function isInCheck(s) {
  const enemy = -s;

  // Find king
  let kingPos = 0;
  for (let i = 21; i < 99; i++) {
    if (board[i] === 6 * s) {
      kingPos = i;
      break;
    }
  }
  if (!kingPos) return false;

  // Pawn attacks
  if (s === 1) {
    if (board[kingPos + 9] === -1 || board[kingPos + 11] === -1) return true;
  } else {
    if (board[kingPos - 9] === 1 || board[kingPos - 11] === 1) return true;
  }

  // Knight attacks
  for (let i = 0; i < 8; i++) {
    if (board[kingPos + KNIGHT_OFFSETS[i]] === 2 * enemy) return true;
  }

  // King proximity (prevents kings from being adjacent)
  for (let i = 0; i < 8; i++) {
    if (board[kingPos + KING_OFFSETS[i]] === 6 * enemy) return true;
  }

  // Rook / Queen on orthogonal lines (KING_OFFSETS[0..3])
  for (let i = 0; i < 4; i++) {
    let t = kingPos;
    while (true) {
      t += KING_OFFSETS[i];
      if (board[t] === 7) break;    // off-board
      if (!board[t]) continue;       // empty, keep sliding
      // Found a piece — is it an enemy rook or queen?
      const abs = board[t] < 0 ? -board[t] : board[t];
      if ((board[t] > 0) === (enemy > 0) && (abs === 4 || abs === 5)) return true;
      break; // any other piece blocks
    }
  }

  // Bishop / Queen on diagonal lines (KING_OFFSETS[4..7])
  for (let i = 4; i < 8; i++) {
    let t = kingPos;
    while (true) {
      t += KING_OFFSETS[i];
      if (board[t] === 7) break;
      if (!board[t]) continue;
      const abs = board[t] < 0 ? -board[t] : board[t];
      if ((board[t] > 0) === (enemy > 0) && (abs === 3 || abs === 5)) return true;
      break;
    }
  }

  return false;
}

// ─── Castling execution ──────────────────────────────────────────────────────

/**
 * Execute a castling move: move king + rook, check three safety conditions:
 *   1. King is not currently in check (verified before calling)
 *   2. King does not pass through an attacked transit square
 *   3. King does not land in check
 * All conditions must pass; otherwise the move is illegal and alpha is returned unchanged.
 */
function executeCastle(s, depth, alpha, beta, from, to, piece, legalFlag) {
  const isKingside = to > from;
  // Rook positions: kingside rook is 3 squares right, queenside rook is 4 squares left
  const rookFrom = isKingside ? from + 3 : from - 4;
  const rookTo   = isKingside ? from + 1 : from - 1;
  const transit  = isKingside ? from + 1 : from - 1; // square king passes through
  const rookPiece = board[rookFrom];

  // Condition 2: king must not pass through an attacked square
  // Temporarily place king on transit square and test for check
  board[transit] = piece;
  board[from] = 0;
  const passesThroughCheck = isInCheck(s);
  board[from] = piece;
  board[transit] = 0;
  if (passesThroughCheck) return alpha;

  // Make the full castling move (king + rook)
  board[to]       = piece;
  board[from]     = 0;
  board[rookTo]   = rookPiece;
  board[rookFrom] = 0;

  // Condition 3: king must not land in check
  if (isInCheck(s)) {
    board[from]     = piece;
    board[to]       = 0;
    board[rookFrom] = rookPiece;
    board[rookTo]   = 0;
    return alpha;
  }

  legalFlag.found = true;
  const nextDepth = depth ? depth - 1 : 0;
  const score = -search(-s, nextDepth, -beta, -alpha);

  // Unmake
  board[from]     = piece;
  board[to]       = 0;
  board[rookFrom] = rookPiece;
  board[rookTo]   = 0;

  if (score > alpha) {
    alpha = score;
    if (depth === SEARCH_DEPTH) {
      bestSource = from;
      bestDest   = to;
    }
  }

  return alpha >= beta ? beta : alpha;
}

// ─── Move execution ──────────────────────────────────────────────────────────

/**
 * Make a move, check legality, recurse, unmake.
 * Returns updated alpha (or beta on cutoff).
 */
function executeAndScore(s, depth, alpha, beta, from, to, piece, captured, legalFlag) {
  // Make move
  board[to] = piece;
  board[from] = 0;

  // Legality check: if our own king is in check after the move, it's illegal
  if (isInCheck(s)) {
    board[from] = piece;
    board[to] = captured;
    return alpha;
  }

  // At least one legal move exists
  legalFlag.found = true;

  // Recurse: negamax sign flip
  const nextDepth = depth ? depth - 1 : 0;
  const score = -search(-s, nextDepth, -beta, -alpha);

  // Unmake move
  board[from] = piece;
  board[to] = captured;

  // Update alpha and store best move at root
  if (score > alpha) {
    alpha = score;
    if (depth === SEARCH_DEPTH) {
      bestSource = from;
      bestDest = to;
    }
  }

  // Beta cutoff
  return alpha >= beta ? beta : alpha;
}

// ─── Search ──────────────────────────────────────────────────────────────────

/**
 * Negamax search with alpha-beta pruning.
 * At depth 0: quiescence search (stand-pat + captures only).
 * Otherwise: pass 0 = captures, pass 1 = quiet moves.
 */
function search(s, depth, alpha, beta) {
  const inQuiescence = !depth;
  const legalFlag = { found: false };

  // Quiescence: stand-pat evaluation
  if (inQuiescence) {
    let score = 0;
    for (let i = 21; i < 99; i++) {
      if (board[i] !== 7) {
        score += board[i] > 0 ? PIECE_VALUES[board[i]] : -PIECE_VALUES[-board[i]];
      }
    }
    score *= s; // from side-to-move's perspective
    if (score > alpha) alpha = score;
    if (alpha >= beta) return beta;
  }

  // z=0: captures, z=1: quiet moves. In quiescence, only z=0.
  const passes = inQuiescence ? 1 : 2;

  for (let z = 0; z < passes; z++) {

    // ── Castling (quiet moves only) — generated FIRST so it's preferred
    // over equal-scoring rook/king shuffles when material is balanced
    if (z === 1 && !isInCheck(s)) {
      if (s === 1 && board[CASTLE_KING_WHITE] === 6) {
        // White kingside (O-O): f1(26) and g1(27) empty, h1(28) = white rook
        if (castlingRights.K &&
            board[26] === 0 && board[27] === 0 && board[28] === 4) {
          alpha = executeCastle(s, depth, alpha, beta, 25, 27, 6, legalFlag);
          if (alpha >= beta) return beta;
        }
        // White queenside (O-O-O): b1(22), c1(23), d1(24) empty, a1(21) = white rook
        if (castlingRights.Q &&
            board[24] === 0 && board[23] === 0 && board[22] === 0 && board[21] === 4) {
          alpha = executeCastle(s, depth, alpha, beta, 25, 23, 6, legalFlag);
          if (alpha >= beta) return beta;
        }
      } else if (s === -1 && board[CASTLE_KING_BLACK] === -6) {
        // Black kingside (o-o): f8(96) and g8(97) empty, h8(98) = black rook
        if (castlingRights.k &&
            board[96] === 0 && board[97] === 0 && board[98] === -4) {
          alpha = executeCastle(s, depth, alpha, beta, 95, 97, -6, legalFlag);
          if (alpha >= beta) return beta;
        }
        // Black queenside (o-o-o): b8(92), c8(93), d8(94) empty, a8(91) = black rook
        if (castlingRights.q &&
            board[94] === 0 && board[93] === 0 && board[92] === 0 && board[91] === -4) {
          alpha = executeCastle(s, depth, alpha, beta, 95, 93, -6, legalFlag);
          if (alpha >= beta) return beta;
        }
      }
    }

    for (let u = 21; u < 99; u++) {
      const piece = board[u];
      if (piece === 7 || !piece || (piece > 0) !== (s > 0)) continue;

      const absPiece = piece < 0 ? -piece : piece;

      // ── Pawn moves ──
      if (absPiece === 1) {
        const forward = s === 1 ? 10 : -10;

        if (z === 0) {
          // Captures
          for (let di = -1; di <= 1; di += 2) {
            const target = u + forward + di;
            const targetPiece = board[target];
            if (targetPiece && targetPiece !== 7 && (targetPiece > 0) !== (s > 0)) {
              alpha = executeAndScore(s, depth, alpha, beta, u, target, piece, targetPiece, legalFlag);
              if (alpha >= beta) return beta;
            }
          }
        } else {
          // Quiet: single push
          if (!board[u + forward]) {
            const target = u + forward;
            alpha = executeAndScore(s, depth, alpha, beta, u, target, piece, 0, legalFlag);
            if (alpha >= beta) return beta;

            // Double push from starting rank only
            // White pawns start at row 3: indices 31-38 (all < 40, and > 28 to exclude back rank)
            // Black pawns start at row 8: indices 81-88
            const canDouble =
              (s === 1 && u >= 31 && u <= 38) || (s === -1 && u >= 81 && u <= 88);
            if (canDouble && !board[u + 2 * forward]) {
              const target2 = u + 2 * forward;
              alpha = executeAndScore(s, depth, alpha, beta, u, target2, piece, 0, legalFlag);
              if (alpha >= beta) return beta;
            }
          }
        }
      } else {
        // ── Non-pawn piece moves ──
        let offsets, startIdx, endIdx;

        if (absPiece === 2) {
          // Knight: all 8 knight offsets, non-sliding
          offsets = KNIGHT_OFFSETS;
          startIdx = 0;
          endIdx = 8;
        } else if (absPiece === 4) {
          // Rook: orthogonal, sliding
          offsets = KING_OFFSETS;
          startIdx = 0;
          endIdx = 4;
        } else if (absPiece === 3) {
          // Bishop: diagonal, sliding
          offsets = KING_OFFSETS;
          startIdx = 4;
          endIdx = 8;
        } else {
          // Queen or King: all 8 directions
          offsets = KING_OFFSETS;
          startIdx = 0;
          endIdx = 8;
        }

        const isSliding = absPiece !== 2 && absPiece !== 6;

        for (let i = startIdx; i < endIdx; i++) {
          const dir = offsets[i];
          let t = u;

          while (true) {
            t += dir;
            const targetPiece = board[t];

            if (targetPiece === 7) break;                            // off-board
            if (targetPiece && (targetPiece > 0) === (s > 0)) break; // own piece

            if (z === 0) {
              // Capture pass: only process squares with enemy pieces
              if (targetPiece) {
                alpha = executeAndScore(s, depth, alpha, beta, u, t, piece, targetPiece, legalFlag);
                if (alpha >= beta) return beta;
                break;
              }
            } else {
              // Quiet pass: only process empty squares
              if (!targetPiece) {
                alpha = executeAndScore(s, depth, alpha, beta, u, t, piece, 0, legalFlag);
                if (alpha >= beta) return beta;
              } else {
                break; // hit a piece, stop sliding
              }
            }

            if (!isSliding) break; // knight and king: one step only
          }
        }
      }
    }
  }

  // No legal moves found in normal search
  if (!legalFlag.found && !inQuiescence) {
    return isInCheck(s) ? -INF : 0; // checkmate or stalemate
  }

  return alpha;
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Given a FEN string, compute the best move for the side to move.
 * Returns { from: "e7", to: "e5" } or null if no move found.
 */
export function getBestMove(fen) {
  // Reset state
  bestSource = 0;
  bestDest = 0;

  // Parse FEN into mailbox
  fromFEN(fen);

  // Determine side to move from FEN
  const parts = fen.split(" ");
  const side = parts[1] === "w" ? 1 : -1;

  // Run search
  search(side, SEARCH_DEPTH, -INF, INF);

  // Convert result
  if (bestSource && bestDest) {
    return {
      from: toAlgebraic(bestSource),
      to: toAlgebraic(bestDest),
    };
  }

  return null;
}
