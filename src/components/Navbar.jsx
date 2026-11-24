import logo from "../assets/logo2.png";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo + Name → Scroll to Hero */}
        <a
          href="#hero"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain cursor-pointer"
          />

          <span className="text-2xl font-bold cursor-pointer">
            SHAFIN
          </span>
        </a>

        {/* Navigation */}
        <ul className="flex gap-8 text-sm items-center">

          <li>
            <a href="#about" className="hover:text-green-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-green-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-green-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;