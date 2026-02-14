import { motion } from "framer-motion";
import { achievements } from "../../data/portfolio";
import { useTheme } from "../../context/ThemeContext";

const Achievements1 = () => {
  const { isDark } = useTheme();
  
  return (
    <section
      id="achievements"
      className={`py-12 md:py-20 relative transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-['Bebas_Neue'] text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] leading-none">
            WINS
          </h2>
          <p className="font-['Space_Mono'] text-base sm:text-lg md:text-xl uppercase tracking-widest mt-3 md:mt-4">
            Achievements & Recognition
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-5 sm:p-6 md:p-8 border-4 transition-all duration-300 ${
                achievement.highlight
                  ? "border-red-500 bg-red-500 text-white"
                  : isDark 
                    ? "border-white bg-black hover:bg-white hover:text-black"
                    : "border-black bg-white hover:bg-black hover:text-white"
              }`}
            >
              {/* Highlight Badge */}
              {achievement.highlight && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-black flex items-center justify-center">
                  <span className="text-white text-xl">★</span>
                </div>
              )}

              {/* Content */}
              <div className="flex items-start gap-4">
                <span className="font-['Bebas_Neue'] text-4xl sm:text-5xl opacity-30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-['Bebas_Neue'] text-xl sm:text-2xl md:text-3xl mb-2">
                    {achievement.title}
                  </h3>
                  <p className="font-['Space_Mono'] text-xs sm:text-sm uppercase tracking-wider opacity-70">
                    {achievement.level}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="font-['Bebas_Neue'] text-6xl sm:text-7xl md:text-8xl">6</p>
            <p className="font-['Space_Mono'] text-xs sm:text-sm uppercase">
              Total Hackathon Wins
            </p>
          </div>
          <div className="text-center">
            <p className="font-['Bebas_Neue'] text-6xl sm:text-7xl md:text-8xl text-red-500">
              3
            </p>
            <p className="font-['Space_Mono'] text-xs sm:text-sm uppercase">
              National Level
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements1;
