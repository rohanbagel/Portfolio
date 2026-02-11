import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

const Footer5 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f1a] border-t border-[#d4af37]/20 py-12 relative overflow-hidden">
      {/* Art Deco Corner Decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#d4af37]/10">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M25 0 L25 25 L0 25 L0 30 L30 30 L30 0 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#d4af37]/10">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M25 0 L25 25 L0 25 L0 30 L30 30 L30 0 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#d4af37]/10">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M25 0 L25 25 L0 25 L0 30 L30 30 L30 0 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#d4af37]/10">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M25 0 L25 25 L0 25 L0 30 L30 30 L30 0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-4">
              <span className="w-6 h-[1px] bg-[#d4af37]/50" />
              <span className="font-['Playfair_Display'] text-2xl text-white">
                {personalInfo.name.split(' ')[0]}
                <span className="text-[#d4af37] italic ml-2">{personalInfo.name.split(' ')[1]}</span>
              </span>
              <span className="w-6 h-[1px] bg-[#d4af37]/50" />
            </div>
          </motion.div>

          {/* Decorative Diamond */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-3 h-3 bg-[#d4af37] rotate-45"
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-['Crimson_Pro'] text-white/40 text-sm tracking-wide"
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-['Archivo_Black'] text-[10px] tracking-[0.3em] text-[#d4af37]/50"
          >
            CRAFTED WITH PASSION
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
