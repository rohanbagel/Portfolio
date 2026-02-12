import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, stats } from "../../data/portfolio";
import { useTheme } from "../../context/ThemeContext";

const Hero1 = () => {
  const { isDark } = useTheme();
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  return (
    <section
      id="about"
      className={`min-h-screen pt-20 md:pt-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${isDark ? 'white' : 'black'} 1px, transparent 1px),
              linear-gradient(to bottom, ${isDark ? 'white' : 'black'} 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Large Name and Resume Buttons - Above Role Bar */}
        <div className="flex justify-between items-end gap-8 mb-8">
          {/* Large Name */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-['Bebas_Neue'] text-[15vw] md:text-[12vw] lg:text-[10vw] leading-none tracking-tight">
              {personalInfo.name.split(" ")[0]}
              <br />
              <span className="text-red-500">
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>
          </motion.div>

          {/* Resume Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3"
          >
            <button
              onClick={() => setShowResumeModal(true)}
              className={`px-6 py-3 border-2 font-['Space_Mono'] text-sm md:text-base uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                isDark
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              View Resume
            </button>
            <a
              href="/resume.pdf"
              download
              className={`px-6 py-3 border-2 font-['Space_Mono'] text-sm md:text-base uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                isDark
                  ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                  : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Role Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`py-4 px-6 mb-12 origin-left transition-colors duration-300 ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <p className="font-['Space_Mono'] text-lg md:text-xl uppercase tracking-widest">
            {personalInfo.role}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: stats.hackathonsWon, label: "HACKATHONS WON" },
            { value: stats.nationalWins, label: "NATIONAL WINS" },
            { value: stats.projectsBuilt + "+", label: "PROJECTS" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`border-4 p-4 md:p-6 text-center transition-colors duration-300 ${
                isDark 
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-black hover:bg-black hover:text-white"
              }`}
            >
              <p className="font-['Bebas_Neue'] text-5xl md:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="font-['Space_Mono'] text-xs md:text-sm mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-3xl"
        >
          <p className={`font-['Space_Mono'] text-lg md:text-xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}>
            {personalInfo.bio}
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="w-4 h-4 bg-red-500"></span>
            <p className={`font-['Space_Mono'] text-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}>
              {personalInfo.college}
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <div className="w-40 h-40 border-4 border-red-500 rotate-45" />
        </motion.div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowResumeModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`w-full max-w-4xl h-[90vh] rounded-lg overflow-hidden shadow-2xl ${
              isDark ? "bg-gray-900" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`flex justify-between items-center p-4 border-b ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}>
              <h2 className="font-['Space_Mono'] text-lg font-bold">Resume</h2>
              <button
                onClick={() => setShowResumeModal(false)}
                className={`text-2xl font-bold transition-colors hover:text-red-500 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                ✕
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-full bg-gray-100">
              <iframe
                src="/resume.pdf#toolbar=1"
                className="w-full h-full border-none"
                title="Resume"
                type="application/pdf"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero1;
