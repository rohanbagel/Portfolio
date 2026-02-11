import { motion } from "framer-motion";
import { useState } from "react";

const Navbar4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Recognition", href: "#achievements" },
    { label: "Connect", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 border-b border-black/10">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-['DM_Serif_Display'] text-2xl text-black"
            whileHover={{ opacity: 0.6 }}
          >
            Rohan Benegal
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-['Outfit'] text-sm text-black/60 hover:text-black transition-colors tracking-wide"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black p-2"
          >
            <span className="font-['Outfit'] text-sm">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "100vh" : 0 }}
        className="md:hidden overflow-hidden bg-[#fafafa] fixed inset-0 top-20"
      >
        <div className="px-6 py-12 space-y-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 }}
              className="block font-['DM_Serif_Display'] text-4xl text-black hover:text-black/60 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar4;
