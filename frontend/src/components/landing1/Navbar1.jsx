import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

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
            className={`flex items-center gap-3 font-['Bebas_Neue'] text-3xl md:text-4xl tracking-wider hover:text-red-500 transition-colors ${
              isDark ? "text-white" : "text-black"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <span>RB.</span>
            <span className="text-lg md:text-xl font-['Space_Mono'] tracking-widest uppercase">Portfolio</span>
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
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar1;
