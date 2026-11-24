import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 text-white scroll-mt-24"
    >

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">Experience</h2>

        <div className="w-20 h-1 bg-green-400 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-400 mt-4">
          My professional journey so far
        </p>
      </div>

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-6">

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-400 transition"
        >

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

            {/* ROLE */}
            <div>
              <h3 className="text-2xl font-semibold text-green-400">
                Graphics Designer (Freelance)
              </h3>
              <p className="text-gray-400">
                Fiverr • Remote
              </p>
            </div>

            {/* TIME */}
            <span className="text-sm text-gray-400">
              2023 – Present
            </span>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-300 leading-relaxed">
            Worked as a freelance Graphics Designer on Fiverr, creating
            professional logos, social media posts, banners, and branding
            materials for international clients. Focused on delivering modern,
            clean, and client-oriented designs with fast delivery and high
            satisfaction rate.
          </p>

          {/* SKILLS */}
          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "Logo Design",
              "Brand Identity",
              "Line Art",
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Client Communication",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-black/30 border border-white/10 rounded-full text-sm hover:border-green-400 transition"
              >
                {item}
              </span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;