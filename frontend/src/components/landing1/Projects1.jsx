import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

const Projects1 = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute font-['Bebas_Neue'] text-[20rem] text-white leading-none whitespace-nowrap"
            style={{ top: `${i * 250}px`, left: "-100px" }}
          >
            BUILD CREATE INNOVATE
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-right"
        >
          <h2 className="font-['Bebas_Neue'] text-8xl md:text-9xl lg:text-[12rem] leading-none">
            PROJECTS
          </h2>
          <div className="w-32 h-2 bg-red-500 mt-4 ml-auto" />
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="border-4 border-white p-6 md:p-8 lg:p-10 hover:bg-white hover:text-black transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Project Number */}
                  <div className="flex-shrink-0">
                    <span className="font-['Bebas_Neue'] text-6xl md:text-8xl text-red-500 group-hover:text-red-600">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <h3 className="font-['Bebas_Neue'] text-4xl md:text-5xl mb-4">
                      {project.title}
                    </h3>
                    <p className="font-['Space_Mono'] text-sm md:text-base mb-6 leading-relaxed opacity-80">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-['Space_Mono'] text-xs px-3 py-1 border border-current"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="font-['Space_Mono'] text-sm flex items-center gap-3"
                        >
                          <span className="w-2 h-2 bg-red-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 hidden lg:block">
                    <motion.svg
                      whileHover={{ x: 10 }}
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects1;
