import { motion } from "framer-motion";
import { socialLinks, personalInfo } from "../../data/portfolio";

const Contact4 = () => {
  const socials = [
    { name: "LinkedIn", url: socialLinks.linkedin },
    { name: "GitHub", url: socialLinks.github },
    { name: "Instagram", url: socialLinks.instagram },
  ];

  return (
    <section id="contact" className="bg-[#fafafa] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="font-['Outfit'] text-sm uppercase tracking-[0.3em] text-black/40 mb-4">
            05 / Contact
          </p>
          <h2 className="font-['DM_Serif_Display'] text-5xl md:text-7xl text-black max-w-3xl">
            Let's work together on your next project
          </h2>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left - Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="font-['Outfit'] text-sm uppercase tracking-[0.3em] text-black/40 mb-4">
              Email
            </p>
            <a
              href={`mailto:${socialLinks.email}`}
              className="font-['DM_Serif_Display'] text-3xl md:text-4xl text-black hover:opacity-60 transition-opacity inline-block border-b-2 border-black pb-2"
            >
              {socialLinks.email}
            </a>

            <div className="mt-12">
              <p className="font-['Outfit'] text-sm uppercase tracking-[0.3em] text-black/40 mb-4">
                Location
              </p>
              <p className="font-['Outfit'] text-xl text-black">
                {personalInfo.location}
              </p>
            </div>
          </motion.div>

          {/* Right - Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-['Outfit'] text-sm uppercase tracking-[0.3em] text-black/40 mb-6">
              Connect
            </p>
            <div className="space-y-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group flex items-center justify-between py-4 border-b border-black/10 hover:border-black transition-colors"
                >
                  <span className="font-['DM_Serif_Display'] text-2xl text-black group-hover:translate-x-2 transition-transform">
                    {social.name}
                  </span>
                  <svg
                    className="w-5 h-5 text-black/40 group-hover:text-black group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact4;
