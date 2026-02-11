import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

const Footer4 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/10 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-['DM_Serif_Display'] text-xl text-black">
              {personalInfo.name}
            </span>
          </motion.div>

          {/* Center */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['Outfit'] text-sm text-black/40 text-center"
          >
            © {currentYear} All Rights Reserved
          </motion.p>

          {/* Right */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            className="font-['Outfit'] text-sm text-black/60 hover:text-black flex items-center gap-2 transition-colors"
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
                strokeWidth={1.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
