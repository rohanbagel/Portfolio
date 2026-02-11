import { motion } from "framer-motion";
import { useState } from "react";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      className="fixed top-0 left-0 w-full z-50 bg-black border-b-4 border-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-['Bebas_Neue'] text-3xl md:text-4xl text-white tracking-wider hover:text-red-500 transition-colors"
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
                className="font-['Space_Mono'] text-sm text-white hover:text-red-500 transition-colors relative group"
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
            className="md:hidden text-white p-2"
          >
            <div className="w-8 h-6 relative flex flex-col justify-between">
              <span
                className={`w-full h-1 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-full h-1 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-1 bg-white transition-all duration-300 ${
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
        className="md:hidden overflow-hidden bg-black border-t-2 border-white"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block font-['Space_Mono'] text-lg text-white hover:text-red-500 transition-colors"
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
