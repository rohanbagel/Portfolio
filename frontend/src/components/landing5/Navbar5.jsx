import { motion } from "framer-motion";
import { useState } from "react";

const Navbar5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "WORKS", href: "#projects" },
    { label: "AWARDS", href: "#achievements" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#1a1a2e]"
    >
      {/* Gold Line Top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-['Playfair_Display'] text-3xl font-bold text-[#d4af37]">
              RB
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#d4af37]" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-['Archivo_Black'] text-xs tracking-[0.2em] text-white/70 hover:text-[#d4af37] transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 bg-[#d4af37] rotate-45" />
            <span className="w-2 h-2 border border-[#d4af37] rotate-45" />
            <span className="w-2 h-2 bg-[#d4af37] rotate-45" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#d4af37] p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#d4af37] transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#d4af37] transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#d4af37] transition-all duration-300 ${
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
        className="md:hidden overflow-hidden bg-[#1a1a2e]"
      >
        <div className="px-4 py-6 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block font-['Archivo_Black'] text-sm tracking-wider text-white/70 hover:text-[#d4af37] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Gold Line Bottom */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
    </motion.nav>
  );
};

export default Navbar5;
