import { motion } from "framer-motion";
import { achievements, stats } from "../../data/portfolio";

const Achievements4 = () => {
  const highlightedAchievements = achievements.filter((a) => a.highlight);
  const otherAchievements = achievements.filter((a) => !a.highlight);

  return (
    <section id="achievements" className="bg-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="font-['Outfit'] text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
            04 / Recognition
          </p>
          <h2 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-white">
            Awards & Achievements
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 mb-16 pb-16 border-b border-white/10"
        >
          <div>
            <p className="font-['DM_Serif_Display'] text-7xl md:text-8xl text-white">
              {stats.hackathonsWon}
            </p>
            <p className="font-['Outfit'] text-sm uppercase tracking-wider text-white/40 mt-2">
              Hackathon Victories
            </p>
          </div>
          <div>
            <p className="font-['DM_Serif_Display'] text-7xl md:text-8xl text-white">
              {stats.nationalWins}
            </p>
            <p className="font-['Outfit'] text-sm uppercase tracking-wider text-white/40 mt-2">
              National Level
            </p>
          </div>
        </motion.div>

        {/* Featured Achievements */}
        <div className="mb-16">
          <p className="font-['Outfit'] text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
            Featured
          </p>
          <div className="space-y-6">
            {highlightedAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start md:items-center gap-6 py-6 border-b border-white/10 hover:border-white/30 transition-colors"
              >
                <span className="font-['DM_Serif_Display'] text-3xl text-white/20 group-hover:text-white/40 transition-colors">
                  ★
                </span>
                <div className="flex-1">
                  <h3 className="font-['DM_Serif_Display'] text-2xl md:text-3xl text-white">
                    {achievement.title}
                  </h3>
                </div>
                <span className="font-['Outfit'] text-sm text-white/40">
                  {achievement.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Achievements */}
        <div>
          <p className="font-['Outfit'] text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
            Other Recognition
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {otherAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <h3 className="font-['DM_Serif_Display'] text-xl text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="font-['Outfit'] text-sm text-white/40">
                  {achievement.level}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements4;
