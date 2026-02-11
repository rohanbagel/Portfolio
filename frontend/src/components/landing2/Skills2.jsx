import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

const Skills2 = () => {
  const allSkills = [
    ...skills.languages.map((s) => ({ name: s, category: "language" })),
    ...skills.technologies.map((s) => ({ name: s, category: "tech" })),
    ...skills.concepts.map((s) => ({ name: s, category: "concept" })),
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "language":
        return "bg-[#d4e6d7] text-[#3d5c45]";
      case "tech":
        return "bg-[#f0d9e5] text-[#7a4a5a]";
      case "concept":
        return "bg-[#d5e4f0] text-[#3d5a7a]";
      default:
        return "bg-[#f5e6d3] text-[#7a5a3d]";
    }
  };

  return (
    <section id="skills" className="bg-white py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Manrope'] text-[#81a88d] text-sm uppercase tracking-[0.3em] mb-4">
            What I Work With
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#2d3436]">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {allSkills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`${getCategoryColor(
                skill.category
              )} px-5 py-3 rounded-full font-['Manrope'] text-sm cursor-default transition-transform`}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {[
            { label: "Languages", color: "bg-[#d4e6d7]" },
            { label: "Technologies", color: "bg-[#f0d9e5]" },
            { label: "Concepts", color: "bg-[#d5e4f0]" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="font-['Manrope'] text-sm text-[#636e72]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[#d4e6d7]/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#f0d9e5]/30 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default Skills2;
