import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";
import { useTheme } from "../../context/ThemeContext";

const Projects1 = () => {
  const { isDark } = useTheme();
  
  return (
    <section
      id="projects"
      className={`py-20 md:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute font-['Bebas_Neue'] text-[20rem] leading-none whitespace-nowrap ${
              isDark ? "text-white" : "text-black"
            }`}
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
              <div className={`border-4 p-6 md:p-8 lg:p-10 transition-all duration-500 relative overflow-hidden ${
                isDark
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-black hover:bg-black hover:text-white"
              }`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Project Number */}
                  <div className="flex-shrink-0">
                    <span className="font-['Bebas_Neue'] text-6xl md:text-8xl text-red-500 group-hover:text-red-600">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
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
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="font-['Space_Mono'] text-sm flex items-center gap-3"
                        >
                          <span className="w-2 h-2 bg-red-500 shrink-0" />
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
                {/* Links absolutely bottom right */}
                <div className="absolute right-6 bottom-6 flex flex-col gap-3 items-end z-10">
                  <motion.a
                    href={project.links?.live || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={project.links?.live ? { scale: 1.05 } : {}}
                    whileTap={project.links?.live ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-2 font-['Space_Mono'] text-sm px-4 py-2 border-2 transition-all duration-300 w-full justify-center ${
                      isDark 
                        ? "border-red-500 bg-red-500 text-white hover:bg-transparent hover:text-white disabled:opacity-40" 
                        : "border-red-500 bg-red-500 text-white hover:bg-transparent hover:text-black disabled:opacity-40"
                    } ${!project.links?.live ? "opacity-50 pointer-events-none" : ""}`}
                    tabIndex={project.links?.live ? 0 : -1}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    LIVE PREVIEW
                  </motion.a>
                  <motion.a
                    href={project.links?.github || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={project.links?.github ? { scale: 1.05 } : {}}
                    whileTap={project.links?.github ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-2 font-['Space_Mono'] text-sm px-4 py-2 border-2 transition-all duration-300 w-full justify-center ${
                      isDark
                        ? "border-white text-white hover:bg-white hover:text-black disabled:opacity-40"
                        : "border-black text-black hover:bg-black hover:text-white disabled:opacity-40"
                    } ${!project.links?.github ? "opacity-50 pointer-events-none" : ""}`}
                    tabIndex={project.links?.github ? 0 : -1}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GITHUB
                  </motion.a>
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
