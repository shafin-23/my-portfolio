import { motion } from "framer-motion";

import figmaLogo from "../assets/tools/figma.png";
import githubLogo from "../assets/tools/github.png";
import arduinoLogo from "../assets/tools/arduino.png";
import esp32Logo from "../assets/tools/esp32.png";
import blynkLogo from "../assets/tools/blynk.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-transparent scroll-mt-24"
    >
      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold">
          Skills & Expertise
        </h2>

        <div className="w-20 h-1 bg-green-400 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-400 mt-4">
          Technical skills, AI knowledge & tools I use
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">

        {/* WEB DEVELOPMENT */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-6">
            Web Development
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript (ES6+)",
              "React.js",
              "Node.js",
              "REST API Integration",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-sm transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* PROGRAMMING */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-6">
            Programming Languages
          </h3>

          <div className="flex flex-wrap gap-3">
            {["C / C++", "JavaScript", "Python"].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-sm transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* AI / ML */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-6">
            AI / Machine Learning
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Sentiment Analysis",
              "NLP",
              "Naive Bayes",
              "Logistic Regression",
              "KNN",
              "SVM",
              "Transformer Models (T5)",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-sm transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CORE SKILLS */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-6">
            Core Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Teamwork",
              "Problem Solving",
              "Critical Thinking",
              "Creativity",
              "Debugging",
              "Performance Optimization",
              "UI/UX Basics",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-sm transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* TOOLS & TECHNOLOGIES */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-8">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {[
              { name: "Figma", img: figmaLogo },
              { name: "Git & GitHub", img: githubLogo },
              { name: "Arduino", img: arduinoLogo },
              { name: "ESP32", img: esp32Logo },
              { name: "Blynk", img: blynkLogo },
            ].map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-12 h-12 object-contain"
                />

                <p className="mt-2 text-sm text-gray-300">
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