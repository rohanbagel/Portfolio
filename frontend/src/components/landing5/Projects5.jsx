import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

const Projects5 = () => {
  return (
    <section id="projects" className="bg-[#1a1a2e] py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="artdeco2" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M0 15L15 0L30 15L15 30Z" fill="none" stroke="#d4af37" strokeWidth="0.3" />
          </pattern>
          <rect width="100" height="100" fill="url(#artdeco2)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Selected <span className="text-[#d4af37] italic">Works</span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative border border-[#d4af37]/30 bg-[#0f0f1a] p-8 md:p-12 hover:bg-[#d4af37]/5 transition-colors duration-500">
                {/* Corner Decorations */}
                <span className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#d4af37] transition-all duration-300 group-hover:w-12 group-hover:h-12" />
                <span className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#d4af37] transition-all duration-300 group-hover:w-12 group-hover:h-12" />
                <span className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#d4af37] transition-all duration-300 group-hover:w-12 group-hover:h-12" />
                <span className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#d4af37] transition-all duration-300 group-hover:w-12 group-hover:h-12" />

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Number */}
                  <div className="md:col-span-2">
                    <span className="font-['Playfair_Display'] text-7xl text-[#d4af37]/30 group-hover:text-[#d4af37]/50 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7">
                    <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white mb-4 group-hover:text-[#d4af37] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-['Crimson_Pro'] text-lg text-white/60 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="font-['Crimson_Pro'] text-sm text-white/40 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-[#d4af37]" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="md:col-span-3">
                    <p className="font-['Archivo_Black'] text-[10px] tracking-[0.2em] text-[#d4af37]/70 mb-4">
                      TECHNOLOGIES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-['Crimson_Pro'] text-sm text-white/60 px-3 py-1 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects5;
