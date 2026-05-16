import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 mt-20 border-t border-white/10 text-white">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* NAME + COPYRIGHT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-green-400">
            Md. Shafin Shadman
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          {/* <p className="text-gray-500 text-xs mt-1">
            Built with React.js & Tailwind CSS
          </p> */}
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/shafin-23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/md-shafin-shadman-44216a40a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/share/1Btdaabvoz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="mailto:shafinshadman2@gmail.com"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;