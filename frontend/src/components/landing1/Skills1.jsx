import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";
import { useTheme } from "../../context/ThemeContext";

const Skills1 = () => {
  const { isDark } = useTheme();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className={`py-12 md:py-20 relative transition-colors duration-300 ${
      isDark ? "bg-black text-white" : "bg-white text-black"
    }`}>
      {/* Diagonal Line */}
      <div className={`absolute top-0 left-0 w-full h-4 transform -skew-y-1 ${
        isDark ? "bg-white" : "bg-black"
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-['Bebas_Neue'] text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] leading-none">
            SKILLS
          </h2>
          <div className="w-24 sm:w-32 h-2 bg-red-500 mt-4" />
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`border-l-4 pl-6 ${
              isDark ? "border-white" : "border-black"
            }`}
          >
            <h3 className="font-['Space_Mono'] text-lg sm:text-xl uppercase tracking-widest mb-6">
              Languages
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.languages.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: isDark ? "#fff" : "#000", 
                    color: isDark ? "#000" : "#fff" 
                  }}
                  className={`font-['Space_Mono'] text-xs sm:text-sm px-3 sm:px-4 py-2 border-2 cursor-default transition-colors ${
                    isDark ? "border-white text-white" : "border-black text-black"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-l-4 border-red-500 pl-6"
          >
            <h3 className="font-['Space_Mono'] text-lg sm:text-xl uppercase tracking-widest mb-6">
              Technologies
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.technologies.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  whileHover={{ scale: 1.1, backgroundColor: "#ef4444", color: "#fff" }}
                    className={`font-['Space_Mono'] text-xs sm:text-sm px-3 sm:px-4 py-2 border-2 border-red-500 cursor-default transition-colors ${
                    isDark ? "text-red-500" : "text-red-500"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`border-l-4 pl-6 ${
              isDark ? "border-white" : "border-black"
            }`}
          >
            <h3 className="font-['Space_Mono'] text-lg sm:text-xl uppercase tracking-widest mb-6">
              Concepts
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.concepts.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: isDark ? "#fff" : "#000", 
                    color: isDark ? "#000" : "#fff" 
                  }}
                  className={`font-['Space_Mono'] text-xs sm:text-sm px-3 sm:px-4 py-2 border-2 cursor-default transition-colors ${
                    isDark ? "border-white text-white" : "border-black text-black"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="relative">
            <div className={`w-20 h-20 border-4 ${
              isDark ? "border-white" : "border-black"
            }`} />
            <div className="w-20 h-20 border-4 border-red-500 absolute -top-4 -left-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills1;
