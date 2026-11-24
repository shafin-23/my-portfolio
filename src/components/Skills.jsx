
import { motion } from "framer-motion";

import figmaLogo from "../assets/tools/figma.png";
import githubLogo from "../assets/tools/github.png";
import arduinoLogo from "../assets/tools/arduino.png";
import esp32Logo from "../assets/tools/esp32.png";
import blynkLogo from "../assets/tools/blynk.png";

const skillGroups = [
  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Node.js",
      "REST API Integration",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["C / C++", "JavaScript", "Python", "Dart"],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      "Sentiment Analysis",
      "NLP",
      "Naive Bayes",
      "Logistic Regression",
      "KNN",
      "SVM",
      "Transformer Models (T5)",
    ],
  },
  {
    title: "Core Skills",
    skills: [
      "Teamwork",
      "Problem Solving",
      "Critical Thinking",
      "Creativity",
      "Debugging",
      "Performance Optimization",
      "UI/UX Basics",
    ],
  },
];

const tools = [
  { name: "Figma", img: figmaLogo },
  { name: "Git & GitHub", img: githubLogo },
  { name: "Arduino", img: arduinoLogo },
  { name: "ESP32", img: esp32Logo },
  { name: "Blynk", img: blynkLogo },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-full overflow-hidden py-16 sm:py-20 scroll-mt-20"
    >
      {/* Section Heading */}
      <div className="w-full px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Skills & Expertise
        </h2>

        <div className="w-20 h-1 bg-green-400 mx-auto mt-4 rounded-full" />

        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto">
          Technical skills, AI knowledge & tools I use
        </p>
      </div>

      {/* Skills Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Skill Groups */}
        {skillGroups.map((group, index) => (
          <div key={group.title} className="w-full min-w-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-5 sm:mb-6">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="max-w-full px-3 sm:px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-xs sm:text-sm text-gray-200 break-words"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Tools & Technologies */}
        <div className="w-full min-w-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-7 sm:mb-8">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-8">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.05 }}
                className="min-w-0 flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-green-400/40 transition-colors"
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />

                <p className="text-xs sm:text-sm text-gray-300 text-center break-words">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
