import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
} from "react-icons/fa";

const About = () => {
  const education = [
    {
      type: "University",
      institution: "United International University",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "2022 – Present",
      icon: <FaUniversity />,
    },

    {
      type: "College",
      institution: "Mohammadpur Govt. College, Dhaka",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2018 – 2020",
      icon: <FaGraduationCap />,   // ✅ FIXED HERE
    },

    {
      type: "School",
      institution: "Thakurgaon Govt. Boys' High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2009 – 2018",
      icon: <FaSchool />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 max-w-6xl mx-auto overflow-hidden"
    >

      {/* HEADING */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* TEXT */}
      <div className="relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-green-400/40 transition duration-500">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a passionate Computer Science & Engineering student focused on
            building modern web applications and intelligent AI-driven systems.
            I enjoy transforming innovative ideas into impactful digital
            solutions through clean design and efficient development.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            My expertise includes React.js, Node.js, Machine Learning, NLP,
            Artificial Intelligence, UI/UX Design, and IoT-based systems.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Currently, I am seeking opportunities where I can contribute and grow.
          </p>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="mt-24 relative z-10">
        <h3 className="text-4xl font-bold text-center text-white mb-16">
          Education
        </h3>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-400 via-green-500/50 to-transparent"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 pl-20 group"
              >
                {/* ICON */}
                <div className="absolute left-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 text-white text-2xl shadow-lg shadow-green-500/30">
                  {item.icon}
                </div>

                {/* CARD */}
                <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-7 py-6 shadow-2xl transition-all duration-500 hover:border-green-400/50">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[3px] text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                      {item.type}
                    </span>

                    <span className="text-sm text-gray-400">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-white font-bold text-xl mb-2">
                    {item.institution}
                  </h4>

                  <p className="text-gray-400 leading-relaxed">
                    {item.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;