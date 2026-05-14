import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zg8wzqi",
        "template_6qe8qx8",
        form.current,
        "8D5ygiQmZ33eog2te"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          alert("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 max-w-6xl mx-auto overflow-hidden"
    >

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 max-w-xl mx-auto">
          Feel free to reach out for collaborations, projects, or just a
          friendly hello.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {/* LEFT - FORM */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-green-400/50 transition-all duration-500 shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-white">
            Send Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            {/* NAME */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                required
              />
            </div>

            {/* SUBJECT */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                required
              />
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                required
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] hover:shadow-green-500/30 hover:shadow-lg transition-all duration-300 p-4 rounded-xl font-semibold text-white"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          {/* CONTACT INFO */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-green-400/50 transition-all duration-500 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-white">
              Contact Info
            </h3>

            <div className="space-y-6">
              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl text-green-400 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-white">Location</h4>

                  <p className="text-gray-400">
                    Sekhertek-4, Mohammadpur, Dhaka
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl text-green-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-white">Email</h4>

                  <a
                    href="mailto:shafinshadman2@gmail.com"
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    shafinshadman2@gmail.com
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl text-green-400 text-xl">
                  <FaWhatsapp />
                </div>

                <div>
                  <h4 className="font-semibold text-white">WhatsApp</h4>

                  <a
                    href="https://wa.me/8801783213536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-green-400/50 transition-all duration-500 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-white">
              Social Links
            </h3>

            <div className="flex flex-wrap gap-4">
              {/* GITHUB */}
              <a
                href="https://github.com/shafin-23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/30 border border-white/10 hover:border-green-400 px-5 py-3 rounded-xl text-gray-300 hover:text-green-400 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/30 border border-white/10 hover:border-green-400 px-5 py-3 rounded-xl text-gray-300 hover:text-green-400 transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/share/1Btdaabvoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/30 border border-white/10 hover:border-green-400 px-5 py-3 rounded-xl text-gray-300 hover:text-green-400 transition-all duration-300"
              >
                <FaFacebook className="text-xl" />
                Facebook
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/30 border border-white/10 hover:border-green-400 px-5 py-3 rounded-xl text-gray-300 hover:text-green-400 transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;