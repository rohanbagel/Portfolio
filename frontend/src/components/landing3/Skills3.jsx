import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

const Skills3 = () => {
  const getColorClass = (index) => {
    const colors = [
      "text-cyan-400 border-cyan-400/50 hover:bg-cyan-400/20 hover:shadow-[0_0_15px_#00ffff]",
      "text-fuchsia-400 border-fuchsia-400/50 hover:bg-fuchsia-400/20 hover:shadow-[0_0_15px_#ff00ff]",
      "text-yellow-400 border-yellow-400/50 hover:bg-yellow-400/20 hover:shadow-[0_0_15px_#ffff00]",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="bg-[#0a0a0f] py-24 md:py-32 relative overflow-hidden">
      {/* Background Code Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <pre className="font-['JetBrains_Mono'] text-xs text-cyan-400 whitespace-pre leading-loose">
          {`function loadSkills() {
  const developer = new Developer();
  developer.learn(["Python", "JavaScript", "React"]);
  developer.build(projects);
  return developer.achievements;
}

class TechStack {
  constructor() {
    this.frontend = ["React", "Next.js", "Tailwind"];
    this.backend = ["Django", "Express", "PostgreSQL"];
    this.ai = ["TensorFlow", "scikit-learn", "pandas"];
  }
}

while (true) {
  code();
  learn();
  build();
  repeat();
}`}
        </pre>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-['JetBrains_Mono'] text-xs text-cyan-400/50 mb-4">
            {"// SECTION: TECHNICAL_SKILLS"}
          </div>
          <h2 className="font-['Syne'] text-6xl md:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              SKILLS
            </span>
          </h2>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-['JetBrains_Mono'] text-sm text-cyan-400">
                {">"} languages[]
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`font-['JetBrains_Mono'] text-sm px-4 py-2 border bg-transparent cursor-default transition-all duration-300 ${getColorClass(0)}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-['JetBrains_Mono'] text-sm text-fuchsia-400">
                {">"} technologies[]
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-fuchsia-400/50 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.technologies.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`font-['JetBrains_Mono'] text-sm px-4 py-2 border bg-transparent cursor-default transition-all duration-300 ${getColorClass(1)}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Concepts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-['JetBrains_Mono'] text-sm text-yellow-400">
                {">"} concepts[]
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-yellow-400/50 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.concepts.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`font-['JetBrains_Mono'] text-sm px-4 py-2 border bg-transparent cursor-default transition-all duration-300 ${getColorClass(2)}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills3;
