import { motion } from "framer-motion";
import { personalInfo, stats } from "../../data/portfolio";

const Hero2 = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#faf8f5] pt-20 relative overflow-hidden"
    >
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4e6d7] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute top-1/3 -left-40 w-80 h-80 bg-[#f0d9e5] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#d5e4f0] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-['Manrope'] text-[#81a88d] text-sm uppercase tracking-[0.3em] mb-4"
            >
              Hello, I'm
            </motion.p>

            <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl lg:text-8xl text-[#2d3436] leading-[1.1] mb-6">
              {personalInfo.name.split(" ")[0]}
              <br />
              <span className="text-[#81a88d]">
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>

            <p className="font-['Manrope'] text-lg text-[#636e72] leading-relaxed mb-8 max-w-lg">
              {personalInfo.bio}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-[#2d3436] text-white font-['Manrope'] text-sm rounded-full hover:bg-[#81a88d] transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-[#2d3436] text-[#2d3436] font-['Manrope'] text-sm rounded-full hover:bg-[#2d3436] hover:text-white transition-all duration-300"
              >
                View Work
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: stats.hackathonsWon, label: "Hackathon\nVictories", color: "bg-[#d4e6d7]" },
              { value: stats.nationalWins, label: "National\nWins", color: "bg-[#f0d9e5]" },
              { value: stats.projectsBuilt + "+", label: "Projects\nCompleted", color: "bg-[#d5e4f0]" },
              { value: stats.techStack + "+", label: "Technologies\nMastered", color: "bg-[#f5e6d3]" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`${stat.color} p-8 rounded-3xl text-center`}
              >
                <p className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#2d3436] font-semibold mb-2">
                  {stat.value}
                </p>
                <p className="font-['Manrope'] text-sm text-[#636e72] whitespace-pre-line">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* College Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-[#81a88d] rounded-full animate-pulse" />
            <span className="font-['Manrope'] text-sm text-[#636e72]">
              {personalInfo.college}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#636e72]/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#636e72]/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero2;
