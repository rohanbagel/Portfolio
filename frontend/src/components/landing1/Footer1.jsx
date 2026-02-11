import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

const Footer1 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-8 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-['Bebas_Neue'] text-4xl">
              {personalInfo.name.split(" ")[0][0]}
              {personalInfo.name.split(" ")[1][0]}.
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['Space_Mono'] text-sm text-center"
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>

          {/* Back to Top */}
          <motion.a
            href="#"
            whileHover={{ y: -5 }}
            className="font-['Space_Mono'] text-sm flex items-center gap-2 hover:text-red-500 transition-colors"
          >
            BACK TO TOP
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

export default Footer1;
