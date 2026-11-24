import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import profileImg from "./assets/profile.png";

function App() {
  return (
    <div className="relative text-white overflow-hidden">

      {/* GLOBAL BLURRED BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center blur scale-110"
        style={{
          backgroundImage: `url(${profileImg})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/80" />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;