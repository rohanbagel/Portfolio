import { useState, useEffect, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { getBestMove } from "../engine/sameshi";

const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const ChessPage = () => {
  const { isDark } = useTheme();
  const gameRef = useRef(new Chess());
  const [boardPosition, setBoardPosition] = useState(START_FEN);
  const [moveHistory, setMoveHistory] = useState([]);
  const [status, setStatus] = useState("your-turn");
  const [isThinking, setIsThinking] = useState(false);
  const [boardWidth, setBoardWidth] = useState(480);

  // Responsive board size
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 480) setBoardWidth(w - 32);
      else if (w < 768) setBoardWidth(420);
      else setBoardWidth(480);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Check game-over status
  function checkGameOver(g) {
    if (g.isCheckmate()) {
      setStatus(g.turn() === "w" ? "engine-wins" : "you-win");
      return true;
    }
    if (g.isStalemate()) {
      setStatus("stalemate");
      return true;
    }
    if (g.isDraw()) {
      setStatus("draw");
      return true;
    }
    return false;
  }

  // Engine move — reads directly from gameRef, no stale closure issues
  function computeEngineMove() {
    const g = gameRef.current;
    if (g.isGameOver()) return;

    const fen = g.fen();
    console.log("[sameshi] computing for FEN:", fen);
    const result = getBestMove(fen);
    console.log("[sameshi] engine result:", result);

    if (!result) {
      if (g.isCheckmate()) setStatus("you-win");
      else setStatus("stalemate");
      setIsThinking(false);
      return;
    }

    // Determine if promotion is needed
    const piece = g.get(result.from);
    let promotion = undefined;
    if (piece && piece.type === "p") {
      const targetRank = result.to[1];
      if (targetRank === "1" || targetRank === "8") {
        promotion = "q";
      }
    }

    const move = g.move({
      from: result.from,
      to: result.to,
      promotion,
    });

    if (!move) {
      console.warn("[sameshi] engine move illegal, trying fallback");
      const legalMoves = g.moves({ verbose: true });
      if (legalMoves.length > 0) {
        g.move(legalMoves[0]);
      } else {
        setIsThinking(false);
        return;
      }
    }

    setBoardPosition(g.fen());
    setMoveHistory([...g.history()]);
    setIsThinking(false);

    if (!checkGameOver(g)) {
      setStatus("your-turn");
    }
  }

  // Handle user's piece drop (react-chessboard v5 passes a single object)
  function onDrop({ sourceSquare, targetSquare }) {
    if (isThinking) return false;

    const g = gameRef.current;
    if (g.turn() !== "w") return false;

    const move = g.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (!move) return false;

    setBoardPosition(g.fen());
    setMoveHistory([...g.history()]);

    if (checkGameOver(g)) return true;

    // Trigger engine response
    setIsThinking(true);
    setStatus("thinking");
    setTimeout(computeEngineMove, 50);

    return true;
  }

  // New game
  function handleNewGame() {
    gameRef.current = new Chess();
    setBoardPosition(START_FEN);
    setMoveHistory([]);
    setStatus("your-turn");
    setIsThinking(false);
  }

  // Status display text
  function getStatusText() {
    switch (status) {
      case "your-turn":
        return "Your turn (White)";
      case "thinking":
        return "Engine thinking...";
      case "you-win":
        return "Checkmate — You win!";
      case "engine-wins":
        return "Checkmate — Engine wins!";
      case "stalemate":
        return "Stalemate — Draw!";
      case "draw":
        return "Draw!";
      default:
        return "";
    }
  }

  function getStatusColor() {
    if (status === "you-win") return "text-green-400";
    if (status === "engine-wins") return "text-red-400";
    if (status === "thinking") return "text-yellow-400";
    if (status === "stalemate" || status === "draw") return "text-gray-400";
    return isDark ? "text-white" : "text-black";
  }

  // Format move history as numbered pairs
  function formatMoves() {
    const pairs = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      const num = Math.floor(i / 2) + 1;
      const white = moveHistory[i];
      const black = moveHistory[i + 1] || "";
      pairs.push({ num, white, black });
    }
    return pairs;
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-4 py-8 md:py-12"
      >
        {/* Header */}
        <div className="w-full max-w-140 mb-6">
          <div className="flex items-center justify-between">
            <h1
              className={`font-['Bebas_Neue'] text-4xl md:text-5xl tracking-wider ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Play Chess
            </h1>
            <Link
              to="/"
              className={`font-['Space_Mono'] text-sm hover:text-red-500 transition-colors ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              ← BACK
            </Link>
          </div>
          <p
            className={`font-['Space_Mono'] text-xs mt-1 ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Powered by{" "}
            <a
              href="https://github.com/datavorous/sameshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              sameshi
            </a>{" "}
            engine
          </p>
        </div>

        {/* Status */}
        <motion.div
          key={status}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`font-['Space_Mono'] text-sm md:text-base mb-4 font-bold ${getStatusColor()}`}
        >
          {isThinking && (
            <span className="inline-block animate-pulse mr-2">●</span>
          )}
          {getStatusText()}
        </motion.div>

        {/* Board */}
        <div
          className={`border-4 ${
            isDark ? "border-white" : "border-black"
          }`}
        >
          <Chessboard
            options={{
              id: "sameshi-board",
              position: boardPosition,
              onPieceDrop: onDrop,
              animationDurationInMs: 200,
              allowDragging: !isThinking && status === "your-turn",
              boardStyle: {
                borderRadius: "0px",
                width: `${boardWidth}px`,
                height: `${boardWidth}px`,
              },
              darkSquareStyle: {
                backgroundColor: "#779952",
              },
              lightSquareStyle: {
                backgroundColor: "#edeed1",
              },
            }}
          />
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleNewGame}
            className={`font-['Space_Mono'] text-sm px-6 py-2 border-2 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 ${
              isDark
                ? "border-white text-white"
                : "border-black text-black"
            }`}
          >
            NEW GAME
          </button>
        </div>

        {/* Move History */}
        {moveHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`w-full max-w-140 mt-6 border-2 ${
              isDark ? "border-white" : "border-black"
            }`}
          >
            <div
              className={`px-4 py-2 border-b-2 font-['Bebas_Neue'] text-lg tracking-wider ${
                isDark
                  ? "border-white text-white"
                  : "border-black text-black"
              }`}
            >
              Moves
            </div>
            <div className="max-h-40 overflow-y-auto px-4 py-2">
              <div className="grid grid-cols-[40px_1fr_1fr] gap-x-2 gap-y-1">
                {formatMoves().map((m) => (
                  <div key={m.num} className="contents">
                    <span
                      className={`font-['Space_Mono'] text-xs ${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {m.num}.
                    </span>
                    <span
                      className={`font-['Space_Mono'] text-xs ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {m.white}
                    </span>
                    <span
                      className={`font-['Space_Mono'] text-xs ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {m.black}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ChessPage;
