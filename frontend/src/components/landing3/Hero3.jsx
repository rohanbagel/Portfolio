import { motion } from "framer-motion";
import { personalInfo, stats } from "../../data/portfolio";

const Hero3 = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0a0f] text-white pt-20 relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00ffff10 1px, transparent 1px),
              linear-gradient(to bottom, #00ffff10 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      {/* Glitch Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 0.5,
              delay: i * 3 + Math.random() * 2,
              repeat: Infinity,
              repeatDelay: 10,
            }}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-['JetBrains_Mono'] text-xs text-cyan-400/50 mb-8"
        >
          <span className="text-green-400">root@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$ </span>
          <span className="text-cyan-400">./display_profile.sh</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="ml-1"
          >
            █
          </motion.span>
        </motion.div>

        {/* Name with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 relative"
        >
          <h1 className="font-['Syne'] text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight relative">
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400">
                {personalInfo.name.split(" ")[0]}
              </span>
            </span>
            <br />
            <span className="text-white">
              {personalInfo.name.split(" ")[1]}
            </span>
          </h1>
        </motion.div>

        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 rounded">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00ffff]" />
            <span className="font-['JetBrains_Mono'] text-sm text-cyan-400">
              {personalInfo.role}
            </span>
          </div>
        </motion.div>

        {/* Stats Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#0d0d14] border border-cyan-500/30 rounded-lg p-6 max-w-2xl mb-12"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="font-['JetBrains_Mono'] text-xs text-white/50 ml-4">
              stats.json
            </span>
          </div>
          <div className="font-['JetBrains_Mono'] text-sm space-y-2">
            <p>
              <span className="text-fuchsia-400">{"{"}</span>
            </p>
            <p className="pl-4">
              <span className="text-cyan-400">"hackathons_won"</span>
              <span className="text-white">: </span>
              <span className="text-yellow-400">{stats.hackathonsWon}</span>
              <span className="text-white">,</span>
            </p>
            <p className="pl-4">
              <span className="text-cyan-400">"national_wins"</span>
              <span className="text-white">: </span>
              <span className="text-yellow-400">{stats.nationalWins}</span>
              <span className="text-white">,</span>
            </p>
            <p className="pl-4">
              <span className="text-cyan-400">"projects_built"</span>
              <span className="text-white">: </span>
              <span className="text-yellow-400">{stats.projectsBuilt}</span>
              <span className="text-white">,</span>
            </p>
            <p className="pl-4">
              <span className="text-cyan-400">"tech_stack"</span>
              <span className="text-white">: </span>
              <span className="text-yellow-400">{stats.techStack}</span>
            </p>
            <p>
              <span className="text-fuchsia-400">{"}"}</span>
            </p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-['JetBrains_Mono'] text-base md:text-lg text-white/70 max-w-2xl leading-relaxed"
        >
          {"/* "}
          {personalInfo.bio}
          {" */"}
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
          className="absolute top-1/3 right-10 hidden xl:block"
        >
          <div className="w-64 h-64 border border-cyan-500/20 rotate-45" />
          <div className="w-64 h-64 border border-fuchsia-500/20 rotate-45 -mt-60 ml-4" />
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
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="font-['JetBrains_Mono'] text-xs text-cyan-400/50 flex flex-col items-center gap-2"
        >
          <span>SCROLL</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3;
