import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 border-b-4 transition-colors duration-300 ${
        isDark ? "bg-black border-white" : "bg-white border-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className={`font-['Bebas_Neue'] text-3xl md:text-4xl tracking-wider hover:text-red-500 transition-colors ${
              isDark ? "text-white" : "text-black"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            RB.
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`font-['Space_Mono'] text-sm hover:text-red-500 transition-colors relative group ${
                  isDark ? "text-white" : "text-black"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`hidden md:flex items-center justify-center w-10 h-10 border-2 hover:bg-red-500 hover:border-red-500 transition-all ${
              isDark ? "border-white text-white" : "border-black text-black"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            <div className="w-8 h-6 relative flex flex-col justify-between">
              <span
                className={`w-full h-1 transition-all duration-300 ${
                  isDark ? "bg-white" : "bg-black"
                } ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-full h-1 transition-all duration-300 ${
                  isDark ? "bg-white" : "bg-black"
                } ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-1 transition-all duration-300 ${
                  isDark ? "bg-white" : "bg-black"
                } ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
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
        className={`md:hidden overflow-hidden border-t-2 transition-colors duration-300 ${
          isDark ? "bg-black border-white" : "bg-white border-black"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block font-['Space_Mono'] text-lg hover:text-red-500 transition-colors ${
                isDark ? "text-white" : "text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 font-['Space_Mono'] text-lg hover:text-red-500 transition-colors ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar1;
