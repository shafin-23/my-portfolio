import { motion } from "framer-motion";

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
    image: barcodeSystem,
    link: "https://drive.google.com/file/d/1HWykaYMDVz9ysKYoMpGaZbGMhsCTrRhj/view?usp=sharing",
  },
  {
    title: "Agri-Rover Farming Robot",
    image: agriRover,
    link: "https://drive.google.com/file/d/1wo16GX47KmLp3BCrgzjDKNxuUSN-itcd/view?usp=sharing",
  },
  {
    title: "Signature Verification AI",
    image: signatureAI,
    link: "https://drive.google.com/file/d/1syv6T0M6Gj7qA40qXl2kwIwVu7vhy9wU/view?usp=sharing",
  },
  {
    title: "Social Media Sentiment Analysis",
    image: sentimentAnalysis,
    link: "https://drive.google.com/file/d/1LzVcfxkYnpaG-rZdTv8lvGVDKA_je7bk/view?usp=sharing",
  },
  {
    title: "SebaChakra Service Platform",
    image: sebachakra,
    link: "https://drive.google.com/",
  },
  {
    title: "Bengali Depression Detection using Transfer Learning",
    image: bengaliDip,
    link: "https://drive.google.com/file/d/1Eapv0dewOZ20SnzhgDEFivk4r0IdtjGs/view?usp=sharing",
  },
  // {
  //   title: "Smart Traffic Monitoring",
  //   image: demo2,
  //   link: "https://drive.google.com/",
  // },
  // {
  //   title: "E-Commerce Web App",
  //   image: demo3,
  //   link: "https://drive.google.com/",
  // },
  // {
  //   title: "IoT Home Automation",
  //   image: demo4,
  //   link: "https://drive.google.com/",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent">
      
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">My Projects</h2>
        <div className="w-20 h-1 bg-green-400 mx-auto mt-3 rounded-full"></div>

        <p className="px-4 text-gray-400 mt-4 text-lg">
          AI, Robotics, Research & Web Development Projects
        </p>
      </div>

      {/* Grid */}
      <div className="px-6 grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            
            className="
              group relative overflow-hidden rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-sm shadow-xl
              hover:border-green-400
              transition-all duration-300
            "
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-green-400 text-sm mt-2">
                View Details →
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;