import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import profileImg from "../assets/profile.png";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >

      {/*CLEAR IMAGE ONLY FOR HERO (OVER GLOBAL BACKGROUND) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${profileImg})`,
        }}
      />

      {/* DARK OVERLAY (ONLY FOR TEXT READABILITY) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* RIGHT SIDE GRADIENT (optional professional look) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* MOUSE GLOW */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.2), transparent 60%)",
          left: mouse.x - 250,
          top: mouse.y - 250,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl px-6 ml-10 md:ml-20">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold leading-tight"
        >
          Hello, I am{" "}
          <span className="text-green-400">
            Md. Shafin Shadman
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-200 text-lg md:text-xl"
        >
          Full Stack Developer • AI Researcher • Problem Solver
        </motion.p>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-6 text-gray-200"
        >

          <a
            href="mailto:shafinshadman2@gmail.com"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaEnvelope />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/md-shafin-shadman-44216a40a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Mohammadpur, Dhaka</span>
          </div>

          <a
            href="tel:+8801783213536"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaPhone />
            <span>01783213536</span>
          </a>

        </motion.div>

        {/* CV BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="https://drive.google.com/file/d/12oS3fZtWkOr5wd6y_mc2XENvt3udEgA6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Download CV
          </a>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;