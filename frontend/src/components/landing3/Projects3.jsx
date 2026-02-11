import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

const Projects3 = () => {
  return (
    <section id="projects" className="bg-[#0d0d14] py-24 md:py-32 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ff00ff15 1px, transparent 1px),
              linear-gradient(to bottom, #ff00ff15 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-['JetBrains_Mono'] text-xs text-fuchsia-400/50 mb-4">
            {"// SECTION: FEATURED_PROJECTS"}
          </div>
          <h2 className="font-['Syne'] text-6xl md:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              PROJECTS
            </span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#0a0a0f] border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d14] border-b border-cyan-500/20">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="font-['JetBrains_Mono'] text-xs text-white/50 ml-4">
                    project_{index + 1}.tsx
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Project Number */}
                    <div className="flex-shrink-0">
                      <span className="font-['Syne'] text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400/50 to-transparent">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Project Info */}
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="font-['Syne'] text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-['JetBrains_Mono'] text-sm text-white/60 leading-relaxed mb-6">
                        <span className="text-green-400">{"// "}</span>
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span
                            key={tech}
                            className={`font-['JetBrains_Mono'] text-xs px-3 py-1 rounded ${
                              i % 3 === 0
                                ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                                : i % 3 === 1
                                ? "bg-fuchsia-400/10 text-fuchsia-400 border border-fuchsia-400/30"
                                : "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="font-['JetBrains_Mono'] text-xs space-y-2">
                        <p className="text-fuchsia-400">features: [</p>
                        {project.highlights.map((highlight) => (
                          <p key={highlight} className="pl-4 text-white/60">
                            "<span className="text-cyan-400">{highlight}</span>",
                          </p>
                        ))}
                        <p className="text-fuchsia-400">]</p>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 10 }}
                      className="hidden lg:flex items-center justify-center w-12 h-12 border border-cyan-500/30 rounded group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.div>
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

export default Projects3;
