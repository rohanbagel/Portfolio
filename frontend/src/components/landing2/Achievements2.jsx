import { motion } from "framer-motion";
import { achievements, stats } from "../../data/portfolio";

const Achievements2 = () => {
  return (
    <section id="achievements" className="bg-white py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Manrope'] text-[#81a88d] text-sm uppercase tracking-[0.3em] mb-4">
            Recognition
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#2d3436]">
            Awards & Achievements
          </h2>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          <div className="text-center">
            <p className="font-['Cormorant_Garamond'] text-6xl text-[#81a88d] font-semibold">
              {stats.hackathonsWon}
            </p>
            <p className="font-['Manrope'] text-sm text-[#636e72] mt-2">
              Hackathons Won
            </p>
          </div>
          <div className="text-center">
            <p className="font-['Cormorant_Garamond'] text-6xl text-[#c9a0b0] font-semibold">
              {stats.nationalWins}
            </p>
            <p className="font-['Manrope'] text-sm text-[#636e72] mt-2">
              National Level
            </p>
          </div>
        </motion.div>

        {/* Achievements List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className={`flex items-center gap-6 p-6 rounded-2xl transition-colors ${
                achievement.highlight
                  ? "bg-[#d4e6d7]"
                  : "bg-[#faf8f5] hover:bg-[#f0d9e5]/30"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  achievement.highlight ? "bg-[#81a88d]" : "bg-white"
                }`}
              >
                {achievement.highlight ? (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-[#81a88d]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`font-['Cormorant_Garamond'] text-xl ${
                    achievement.highlight ? "text-[#2d3436]" : "text-[#2d3436]"
                  }`}
                >
                  {achievement.title}
                </h3>
                <p
                  className={`font-['Manrope'] text-sm mt-1 ${
                    achievement.highlight ? "text-[#3d5c45]" : "text-[#636e72]"
                  }`}
                >
                  {achievement.level}
                </p>
              </div>

              {/* Badge */}
              {achievement.highlight && (
                <span className="hidden sm:block font-['Manrope'] text-xs px-3 py-1 bg-white rounded-full text-[#81a88d]">
                  Featured
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements2;
