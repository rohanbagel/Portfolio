import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

const Projects2 = () => {
  const colors = [
    { bg: "bg-[#d4e6d7]", accent: "#81a88d" },
    { bg: "bg-[#f0d9e5]", accent: "#c9a0b0" },
    { bg: "bg-[#d5e4f0]", accent: "#8aacc8" },
    { bg: "bg-[#f5e6d3]", accent: "#c9a878" },
  ];

  return (
    <section
      id="projects"
      className="bg-[#faf8f5] py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-[#d4e6d7]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-[#f0d9e5]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Manrope'] text-[#81a88d] text-sm uppercase tracking-[0.3em] mb-4">
            Featured Work
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#2d3436]">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className={`${colors[index % colors.length].bg} rounded-3xl p-8 h-full transition-shadow duration-300 hover:shadow-xl`}
              >
                {/* Project Number */}
                <span
                  className="font-['Cormorant_Garamond'] text-6xl font-semibold opacity-20"
                  style={{ color: colors[index % colors.length].accent }}
                >
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#2d3436] mt-4 mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-['Manrope'] text-[#636e72] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-['Manrope'] text-xs px-3 py-1 bg-white/60 rounded-full text-[#636e72]"
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
                      className="font-['Manrope'] text-sm text-[#636e72] flex items-start gap-2"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{
                          backgroundColor: colors[index % colors.length].accent,
                        }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center gap-2 font-['Manrope'] text-sm text-[#2d3436] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
