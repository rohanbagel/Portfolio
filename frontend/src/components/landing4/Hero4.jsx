import { motion } from "framer-motion";
import { personalInfo, stats } from "../../data/portfolio";

const Hero4 = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#fafafa] pt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="py-16 md:py-24 border-b border-black/10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <p className="font-['Outfit'] text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
                Computer Engineering Student
              </p>
              <h1 className="font-['DM_Serif_Display'] text-6xl md:text-7xl lg:text-8xl text-black leading-[1.05]">
                {personalInfo.name.split(" ")[0]}
                <br />
                {personalInfo.name.split(" ")[1]}
              </h1>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="font-['Outfit'] text-lg text-black/60 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
              <div className="flex gap-6">
                <a
                  href="#contact"
                  className="font-['Outfit'] text-sm text-black border-b-2 border-black pb-1 hover:opacity-60 transition-opacity"
                >
                  Get in touch →
                </a>
                <a
                  href="#projects"
                  className="font-['Outfit'] text-sm text-black/60 border-b border-black/20 pb-1 hover:text-black hover:border-black transition-all"
                >
                  View work
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { value: stats.hackathonsWon, label: "Hackathons Won" },
            { value: stats.nationalWins, label: "National Wins" },
            { value: stats.projectsBuilt + "+", label: "Projects" },
            { value: stats.techStack + "+", label: "Technologies" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-black mb-2">
                {stat.value}
              </p>
              <p className="font-['Outfit'] text-sm text-black/40 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* College Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="py-8 border-t border-black/10"
        >
          <p className="font-['Outfit'] text-sm text-black/40">
            Currently at{" "}
            <span className="text-black">{personalInfo.college}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero4;
