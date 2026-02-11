import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

const Skills5 = () => {
  return (
    <section id="skills" className="bg-[#0f0f1a] py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#d4af37]" />
            <span className="w-2 h-2 bg-[#d4af37] rotate-45" />
            <span className="w-12 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white mb-4">
            Technical <span className="text-[#d4af37] italic">Expertise</span>
          </h2>
          <p className="font-['Crimson_Pro'] text-lg text-white/50">
            A refined collection of skills and technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-8 border border-[#d4af37]/30 bg-[#d4af37]/5"
          >
            {/* Corner Decorations */}
            <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#d4af37]" />
            <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#d4af37]" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#d4af37]" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#d4af37]" />

            <h3 className="font-['Archivo_Black'] text-xs tracking-[0.3em] text-[#d4af37] mb-6 text-center">
              LANGUAGES
            </h3>
            <div className="space-y-3">
              {skills.languages.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 border border-[#d4af37] rotate-45" />
                  <span className="font-['Crimson_Pro'] text-lg text-white/80">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-8 border border-[#d4af37]/30 bg-[#d4af37]/5"
          >
            {/* Corner Decorations */}
            <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#d4af37]" />
            <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#d4af37]" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#d4af37]" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#d4af37]" />

            <h3 className="font-['Archivo_Black'] text-xs tracking-[0.3em] text-[#d4af37] mb-6 text-center">
              TECHNOLOGIES
            </h3>
            <div className="space-y-3">
              {skills.technologies.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-[#d4af37] rotate-45" />
                  <span className="font-['Crimson_Pro'] text-lg text-white/80">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-8 border border-[#d4af37]/30 bg-[#d4af37]/5"
          >
            {/* Corner Decorations */}
            <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#d4af37]" />
            <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#d4af37]" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#d4af37]" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#d4af37]" />

            <h3 className="font-['Archivo_Black'] text-xs tracking-[0.3em] text-[#d4af37] mb-6 text-center">
              CONCEPTS
            </h3>
            <div className="space-y-3">
              {skills.concepts.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 border border-[#d4af37] rotate-45" />
                  <span className="font-['Crimson_Pro'] text-lg text-white/80">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills5;
