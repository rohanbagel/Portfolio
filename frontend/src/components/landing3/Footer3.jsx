import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

const Footer3 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['JetBrains_Mono'] text-sm"
          >
            <span className="text-fuchsia-400">{"<"}</span>
            <span className="text-cyan-400">RB</span>
            <span className="text-fuchsia-400">{"/>"}</span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['JetBrains_Mono'] text-xs text-white/40 text-center"
          >
            {"// "} {currentYear} {personalInfo.name} • Built with{" "}
            <span className="text-cyan-400">React</span> +{" "}
            <span className="text-fuchsia-400">Tailwind</span>
          </motion.p>

          {/* Back to Top */}
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            className="font-['JetBrains_Mono'] text-xs text-cyan-400/50 hover:text-cyan-400 flex items-center gap-2 transition-colors"
          >
            <span>{">"} scroll_to_top()</span>
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

export default Footer3;
