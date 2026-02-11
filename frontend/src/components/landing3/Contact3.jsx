import { motion } from "framer-motion";
import { socialLinks, personalInfo } from "../../data/portfolio";

const Contact3 = () => {
  const socials = [
    {
      name: "LinkedIn",
      url: socialLinks.linkedin,
      command: "connect --platform=linkedin",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: socialLinks.github,
      command: "git clone github.com/rohan",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: socialLinks.instagram,
      command: "follow @rohanbenegal",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-[#0d0d14] py-24 md:py-32 relative overflow-hidden">
      {/* Glowing Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-['JetBrains_Mono'] text-xs text-cyan-400/50 mb-4">
            {"// SECTION: ESTABLISH_CONNECTION"}
          </div>
          <h2 className="font-['Syne'] text-6xl md:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400">
              CONTACT
            </span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-white/50 text-sm max-w-lg mx-auto">
            {">"} Ready to collaborate on your next project?
            <br />
            {">"} Let's build something extraordinary together.
          </p>
        </motion.div>

        {/* Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0f] border border-cyan-500/30 rounded-lg overflow-hidden mb-12"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d14] border-b border-cyan-500/20">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="font-['JetBrains_Mono'] text-xs text-white/50 ml-4">
              contact.sh
            </span>
          </div>

          {/* Content */}
          <div className="p-6 font-['JetBrains_Mono'] text-sm">
            <p className="text-white/50 mb-4">
              <span className="text-green-400">rohan@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span className="text-cyan-400">cat contact_info.txt</span>
            </p>

            {/* Email */}
            <div className="mb-6">
              <p className="text-fuchsia-400 mb-2">EMAIL:</p>
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-cyan-400 hover:text-white transition-colors hover:underline"
              >
                {socialLinks.email}
              </a>
            </div>

            {/* Location */}
            <div className="mb-6">
              <p className="text-fuchsia-400 mb-2">LOCATION:</p>
              <p className="text-white/70">{personalInfo.location}</p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#00ff00]" />
              Open for opportunities
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-[#0a0a0f] border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-cyan-400 group-hover:text-white transition-colors">
                  {social.icon}
                </div>
                <span className="font-['JetBrains_Mono'] text-white text-sm">
                  {social.name}
                </span>
              </div>
              <p className="font-['JetBrains_Mono'] text-xs text-white/40 group-hover:text-cyan-400/70 transition-colors">
                $ {social.command}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact3;
