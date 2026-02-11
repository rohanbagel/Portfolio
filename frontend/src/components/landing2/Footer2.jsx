import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

const Footer2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 border-t border-[#e8e4df]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-['Cormorant_Garamond'] text-2xl text-[#2d3436]">
              rohan.
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['Manrope'] text-sm text-[#636e72] text-center"
          >
            © {currentYear} {personalInfo.name}. Crafted with care.
          </motion.p>

          {/* Back to Top */}
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            className="font-['Manrope'] text-sm text-[#636e72] hover:text-[#81a88d] flex items-center gap-2 transition-colors"
          >
            Back to top
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
