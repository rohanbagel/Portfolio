import { motion } from "framer-motion";
import { useState } from "react";

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "// ABOUT", href: "#about" },
    { label: "// SKILLS", href: "#skills" },
    { label: "// PROJECTS", href: "#projects" },
    { label: "// WINS", href: "#achievements" },
    { label: "// CONTACT", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-cyan-500/30"
    >
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[2px] animate-scan" />
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-['JetBrains_Mono'] text-xl md:text-2xl text-cyan-400 tracking-wider relative"
            whileHover={{ textShadow: "0 0 20px #00ffff" }}
          >
            <span className="text-magenta-400">{"<"}</span>
            RB
            <span className="text-magenta-400">{"/>"}</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-['JetBrains_Mono'] text-xs text-cyan-400/70 hover:text-cyan-400 transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ textShadow: "0 0 10px #00ffff" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00ffff]" />
              </motion.a>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="hidden md:flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#00ff00]" />
            ONLINE
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-400 p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-cyan-400 transition-all duration-300 shadow-[0_0_5px_#00ffff] ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-cyan-400 transition-all duration-300 shadow-[0_0_5px_#00ffff] ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-cyan-400 transition-all duration-300 shadow-[0_0_5px_#00ffff] ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-[#0a0a0f] border-t border-cyan-500/30"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block font-['JetBrains_Mono'] text-sm text-cyan-400/70 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar3;
