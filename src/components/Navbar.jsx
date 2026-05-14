import { useState } from "react";
import logo from "../assets/newLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain cursor-pointer"
          />
          <span className="text-2xl font-bold cursor-pointer">
            SHAFIN
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm items-center">
          <li><a href="#about" className="hover:text-green-400">About</a></li>
          <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;