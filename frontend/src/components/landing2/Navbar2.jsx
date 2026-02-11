import { motion } from "framer-motion";
import { useState } from "react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Awards", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#faf8f5]/90 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#2d3436] tracking-wide"
            whileHover={{ scale: 1.02 }}
          >
            rohan.
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-['Manrope'] text-sm text-[#636e72] hover:text-[#2d3436] transition-colors relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#2d3436] p-2"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                className="w-full h-0.5 bg-[#2d3436] rounded-full origin-left"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-full h-0.5 bg-[#2d3436] rounded-full"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                className="w-full h-0.5 bg-[#2d3436] rounded-full origin-left"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[#faf8f5]"
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block font-['Manrope'] text-lg text-[#636e72] hover:text-[#2d3436] transition-colors"
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

export default Navbar2;
