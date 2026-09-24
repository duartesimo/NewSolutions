import { useState } from "react";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-slate-300 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link to="/" className="text-2xl md:text-3xl font-bold text-slate-900">
          NewSolutions
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="text-slate-600 text-lg transition hover:text-blue-600"
            >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700 md:block"
        >
          Get Started
        </Link>

        {/* Mobile button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t px-6 py-5 md:hidden">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              onClick={() => setMenuOpen(false)}
              className="text-slate-600"
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
