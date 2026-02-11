import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

const Skills4 = () => {
  return (
    <section id="skills" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="font-['Outfit'] text-sm uppercase tracking-[0.3em] text-black/40 mb-4">
            02 / Expertise
          </p>
          <h2 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-black">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-['DM_Serif_Display'] text-2xl text-black mb-6 pb-4 border-b border-black/10">
              Languages
            </h3>
            <ul className="space-y-4">
              {skills.languages.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="font-['Outfit'] text-black/70 flex items-center gap-3"
                >
                  <span className="w-1 h-1 bg-black rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-['DM_Serif_Display'] text-2xl text-black mb-6 pb-4 border-b border-black/10">
              Technologies
            </h3>
            <ul className="space-y-4">
              {skills.technologies.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="font-['Outfit'] text-black/70 flex items-center gap-3"
                >
                  <span className="w-1 h-1 bg-black rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-['DM_Serif_Display'] text-2xl text-black mb-6 pb-4 border-b border-black/10">
              Concepts
            </h3>
            <ul className="space-y-4">
              {skills.concepts.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="font-['Outfit'] text-black/70 flex items-center gap-3"
                >
                  <span className="w-1 h-1 bg-black rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills4;
