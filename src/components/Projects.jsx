import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

// ===== Project Images =====
import signatureAI from "../assets/signature-ai.jpg";
import barcodeSystem from "../assets/barcode-system.jpg";
import agriRover from "../assets/agriRover.jpg";
import sentimentAnalysis from "../assets/sentiment-analysis.jpg";
import sebachakra from "../assets/sebachakra.jpg";
import bengaliDip from "../assets/bengali_dep.png";

// ===== Demo Images =====
import demo1 from "../assets/demo1.jpg";
import demo2 from "../assets/demo2.jpg";
import demo3 from "../assets/demo3.jpg";
import demo4 from "../assets/demo4.jpg";

const projects = [
  {
    title: "Barcode Product Sorting",
    category: "AI + Automation",
    image: barcodeSystem,
    link: "https://drive.google.com/file/d/1HWykaYMDVz9ysKYoMpGaZbGMhsCTrRhj/view?usp=sharing",
  },

  {
    title: "Agri-Rover Farming Robot",
    category: "IoT + Robotics",
    image: agriRover,
    link: "https://drive.google.com/file/d/1wo16GX47KmLp3BCrgzjDKNxuUSN-itcd/view?usp=sharing",
  },

  {
    title: "Signature Verification AI",
    category: "Deep Learning",
    image: signatureAI,
    link: "https://drive.google.com/file/d/1syv6T0M6Gj7qA40qXl2kwIwVu7vhy9wU/view?usp=sharing",
  },

  {
    title: "Social Media Sentiment Analysis",
    category: "Machine Learning",
    image: sentimentAnalysis,
    link: "https://drive.google.com/file/d/1LzVcfxkYnpaG-rZdTv8lvGVDKA_je7bk/view?usp=sharing",
  },

  {
    title: "SebaChakra Service Platform",
    category: "Full Stack Web App",
    image: sebachakra,
    link: "https://drive.google.com/",
  },

  {
    title: "Bengali Depression Detection",
    category: "Transfer Learning",
    image: bengaliDip,
    link: "https://drive.google.com/file/d/1Eapv0dewOZ20SnzhgDEFivk4r0IdtjGs/view?usp=sharing",
  },

  {
    title: "Smart Traffic Monitoring",
    category: "Computer Vision",
    image: demo2,
    link: "https://drive.google.com/",
  },

  {
    title: "E-Commerce Web App",
    category: "React + Node.js",
    image: demo3,
    link: "https://drive.google.com/",
  },

  {
    title: "IoT Home Automation",
    category: "Embedded System",
    image: demo4,
    link: "https://drive.google.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-green-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/20 blur-[120px] rounded-full"></div>

      {/* ===== TITLE ===== */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          AI, Robotics, Research, IoT & Modern Web Development Projects
        </p>
      </motion.div>

      {/* ===== PROJECT GRID ===== */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            {/* ===== IMAGE ===== */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* ===== DARK OVERLAY ===== */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"></div>

            {/* ===== HOVER GLOW ===== */}
            <div className="absolute inset-0 border border-transparent group-hover:border-green-400/50 rounded-3xl transition-all duration-500"></div>

            {/* ===== CONTENT ===== */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              {/* CATEGORY */}
              <span className="inline-block text-xs uppercase tracking-widest text-green-400 bg-green-500/10 px-3 py-1 rounded-full mb-4 border border-green-500/20">
                {project.category}
              </span>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-white leading-snug">
                {project.title}
              </h3>

              {/* BUTTON */}
              <div className="mt-5 flex items-center justify-between">
                <p className="flex items-center gap-2 text-green-400 font-medium group-hover:gap-4 transition-all duration-300">
                  View Project
                  <FaArrowRight />
                </p>

                <div className="bg-white/10 p-3 rounded-full text-white group-hover:bg-green-500 group-hover:rotate-12 transition duration-500">
                  <FaExternalLinkAlt />
                </div>
              </div>
            </div>

            {/* ===== TOP SHINE EFFECT ===== */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;