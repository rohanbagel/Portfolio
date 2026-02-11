import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

const Skills1 = () => {
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
    <section id="skills" className="bg-white text-black py-20 md:py-32 relative">
      {/* Diagonal Line */}
      <div className="absolute top-0 left-0 w-full h-4 bg-black transform -skew-y-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-['Bebas_Neue'] text-8xl md:text-9xl lg:text-[12rem] leading-none">
            SKILLS
          </h2>
          <div className="w-32 h-2 bg-red-500 mt-4" />
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-l-4 border-black pl-6"
          >
            <h3 className="font-['Space_Mono'] text-xl uppercase tracking-widest mb-6">
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
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  className="font-['Space_Mono'] text-sm px-4 py-2 border-2 border-black cursor-default transition-colors"
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
            <h3 className="font-['Space_Mono'] text-xl uppercase tracking-widest mb-6">
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
                  className="font-['Space_Mono'] text-sm px-4 py-2 border-2 border-red-500 cursor-default transition-colors"
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
            className="border-l-4 border-black pl-6"
          >
            <h3 className="font-['Space_Mono'] text-xl uppercase tracking-widest mb-6">
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
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  className="font-['Space_Mono'] text-sm px-4 py-2 border-2 border-black cursor-default transition-colors"
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
            <div className="w-20 h-20 border-4 border-black" />
            <div className="w-20 h-20 border-4 border-red-500 absolute -top-4 -left-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills1;
