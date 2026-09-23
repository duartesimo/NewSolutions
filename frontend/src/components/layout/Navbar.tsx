import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-bold text-slate-900">
          NewSolutions
        </Link>

        <div className="flex items-center gap-8">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="text-slate-600 transition hover:text-blue-600"
            >
              {page.name}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
