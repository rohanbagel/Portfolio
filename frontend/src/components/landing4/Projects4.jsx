import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

const Projects4 = () => {
  return (
    <section id="projects" className="bg-[#fafafa] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-['Outfit'] text-sm uppercase tracking-[0.3em] text-black/40 mb-4">
              03 / Selected Work
            </p>
            <h2 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-black">
              Projects
            </h2>
          </div>
          <p className="font-['Outfit'] text-black/60 max-w-md">
            A selection of projects showcasing expertise in full-stack development,
            machine learning, and innovative solutions.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-t border-black/10 py-12 md:py-16"
            >
              <div className="grid md:grid-cols-12 gap-8">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-['DM_Serif_Display'] text-4xl text-black/20 group-hover:text-black/40 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-6">
                  <h3 className="font-['DM_Serif_Display'] text-3xl md:text-4xl text-black mb-4 group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="font-['Outfit'] text-black/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="font-['Outfit'] text-sm text-black/50 flex items-center gap-2"
                      >
                        <span className="w-4 h-[1px] bg-black/30" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="md:col-span-5 md:text-right">
                  <p className="font-['Outfit'] text-xs uppercase tracking-wider text-black/40 mb-4">
                    Technologies
                  </p>
                  <div className="flex flex-wrap md:justify-end gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-['Outfit'] text-sm text-black/70 px-3 py-1 border border-black/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects4;
