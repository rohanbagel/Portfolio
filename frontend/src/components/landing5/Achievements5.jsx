import { motion } from "framer-motion";
import { achievements, stats } from "../../data/portfolio";

const Achievements5 = () => {
  return (
    <section id="achievements" className="bg-[#0f0f1a] py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,0 100,50 50,100 0,50"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.5"
          />
          <polygon
            points="50,10 90,50 50,90 10,50"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.5"
          />
          <polygon
            points="50,20 80,50 50,80 20,50"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#d4af37]" />
            <span className="w-2 h-2 bg-[#d4af37] rotate-45" />
            <span className="w-12 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white mb-4">
            Awards & <span className="text-[#d4af37] italic">Recognition</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-16 md:gap-24 mb-16"
        >
          <div className="text-center">
            <p className="font-['Playfair_Display'] text-7xl md:text-8xl text-[#d4af37]">
              {stats.hackathonsWon}
            </p>
            <p className="font-['Archivo_Black'] text-[10px] tracking-[0.2em] text-white/40 mt-2">
              HACKATHON WINS
            </p>
          </div>
          <div className="w-[1px] bg-[#d4af37]/30" />
          <div className="text-center">
            <p className="font-['Playfair_Display'] text-7xl md:text-8xl text-[#d4af37]">
              {stats.nationalWins}
            </p>
            <p className="font-['Archivo_Black'] text-[10px] tracking-[0.2em] text-white/40 mt-2">
              NATIONAL LEVEL
            </p>
          </div>
        </motion.div>

        {/* Achievements List */}
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center gap-6 py-6 border-b border-[#d4af37]/20 ${
                achievement.highlight ? "bg-[#d4af37]/5 -mx-6 px-6" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${
                  achievement.highlight
                    ? "bg-[#d4af37] text-[#0f0f1a]"
                    : "border border-[#d4af37]/30"
                }`}
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              >
                <span className="text-lg">
                  {achievement.highlight ? "★" : String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`font-['Playfair_Display'] text-xl md:text-2xl ${
                    achievement.highlight ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  {achievement.title}
                </h3>
                <p className="font-['Crimson_Pro'] text-sm text-white/40 mt-1">
                  {achievement.level}
                </p>
              </div>

              {/* Badge */}
              {achievement.highlight && (
                <span className="font-['Archivo_Black'] text-[10px] tracking-wider px-3 py-1 bg-[#d4af37] text-[#0f0f1a]">
                  FEATURED
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements5;
