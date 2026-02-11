import { motion } from "framer-motion";
import { personalInfo, stats } from "../../data/portfolio";

const Hero5 = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1a1a2e] pt-24 relative overflow-hidden"
    >
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="artdeco" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0L20 10L10 20L0 10Z" fill="none" stroke="#d4af37" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="2" fill="none" stroke="#d4af37" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#artdeco)" />
        </svg>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-8 w-32 h-32 border-l-2 border-t-2 border-[#d4af37]/30" />
      <div className="absolute top-24 right-8 w-32 h-32 border-r-2 border-t-2 border-[#d4af37]/30" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-[#d4af37]/30" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-[#d4af37]/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Decorative Top Element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="w-3 h-3 border border-[#d4af37] rotate-45" />
          <span className="font-['Archivo_Black'] text-xs tracking-[0.3em] text-[#d4af37]/70">
            PORTFOLIO
          </span>
          <span className="w-3 h-3 border border-[#d4af37] rotate-45" />
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </motion.div>

        {/* Main Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="font-['Playfair_Display'] text-7xl md:text-8xl lg:text-9xl text-white leading-none">
            <span className="text-[#d4af37]">{personalInfo.name.split(" ")[0]}</span>
            <br />
            <span className="font-light italic">{personalInfo.name.split(" ")[1]}</span>
          </h1>
        </motion.div>

        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="relative px-8 py-3 border border-[#d4af37]">
            <span className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#d4af37]" />
            <span className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[#d4af37]" />
            <span className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[#d4af37]" />
            <span className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[#d4af37]" />
            <p className="font-['Archivo_Black'] text-xs tracking-[0.3em] text-[#d4af37]">
              {personalInfo.role.toUpperCase()}
            </p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-['Crimson_Pro'] text-xl md:text-2xl text-white/70 text-center max-w-3xl mx-auto leading-relaxed mb-16"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: stats.hackathonsWon, label: "Hackathons" },
            { value: stats.nationalWins, label: "National Wins" },
            { value: stats.projectsBuilt, label: "Projects" },
            { value: stats.techStack, label: "Technologies" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-[#d4af37]/10 border border-[#d4af37]/30 p-6 text-center group hover:bg-[#d4af37]/20 transition-colors"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#d4af37]" />
              <p className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#d4af37] mb-2">
                {stat.value}
              </p>
              <p className="font-['Archivo_Black'] text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {stat.label}
              </p>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#d4af37]" />
            </motion.div>
          ))}
        </motion.div>

        {/* College */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="font-['Crimson_Pro'] text-lg text-white/40 italic">
            {personalInfo.college}
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent" />
          <span className="w-2 h-2 border border-[#d4af37] rotate-45" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero5;
