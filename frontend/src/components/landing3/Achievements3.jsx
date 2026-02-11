import { motion } from "framer-motion";
import { achievements, stats } from "../../data/portfolio";

const Achievements3 = () => {
  return (
    <section id="achievements" className="bg-[#0a0a0f] py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="font-['JetBrains_Mono'] text-xs text-yellow-400/50 mb-4">
            {"// SECTION: ACHIEVEMENTS_LOG"}
          </div>
          <h2 className="font-['Syne'] text-6xl md:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-cyan-400">
              WINS
            </span>
          </h2>
        </motion.div>

        {/* Stats Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          <div className="text-center">
            <p className="font-['Syne'] text-7xl md:text-8xl font-bold text-cyan-400" style={{ textShadow: "0 0 30px #00ffff" }}>
              {stats.hackathonsWon}
            </p>
            <p className="font-['JetBrains_Mono'] text-xs text-white/50 mt-2">TOTAL_WINS</p>
          </div>
          <div className="text-center">
            <p className="font-['Syne'] text-7xl md:text-8xl font-bold text-fuchsia-400" style={{ textShadow: "0 0 30px #ff00ff" }}>
              {stats.nationalWins}
            </p>
            <p className="font-['JetBrains_Mono'] text-xs text-white/50 mt-2">NATIONAL_LEVEL</p>
          </div>
        </motion.div>

        {/* Achievements List */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0d0d14] border border-cyan-500/20 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0f] border-b border-cyan-500/20">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="font-['JetBrains_Mono'] text-xs text-white/50 ml-4">
                achievements.log
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="font-['JetBrains_Mono'] text-sm space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-4 p-4 rounded border transition-all duration-300 ${
                      achievement.highlight
                        ? "bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
                        : "bg-transparent border-white/10 hover:border-white/30"
                    }`}
                  >
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {achievement.highlight ? (
                        <span className="text-yellow-400 animate-pulse">★</span>
                      ) : (
                        <span className="text-green-400">✓</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p
                        className={`${
                          achievement.highlight ? "text-cyan-400" : "text-white/80"
                        }`}
                      >
                        {achievement.title}
                      </p>
                      <p className="text-white/40 text-xs mt-1">
                        {"// "}{achievement.level}
                      </p>
                    </div>

                    {/* Badge */}
                    {achievement.highlight && (
                      <span className="flex-shrink-0 px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded border border-yellow-400/30">
                        FEATURED
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-cyan-500/20">
                <p className="font-['JetBrains_Mono'] text-xs text-white/30">
                  <span className="text-green-400">[SUCCESS]</span> All achievements loaded • Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements3;
