import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Web Development",
  "Cloud Solutions",
  "Automation",
  "AI Solutions",
];

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-bold text-slate-900">
              NewSolutions
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Build, automate, and grow with modern digital solutions.
            </p>

            <div className="mt-5 flex gap-4 text-slate-500"></div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-600 transition hover:text-blue-700"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>

            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-3">
                <Mail size={16} />
                hello@newsolutions.com
              </p>

              <p className="flex items-center gap-3">
                <Phone size={16} />
                +1 (555) 123-4567
              </p>

              <p className="flex items-center gap-3">
                <MapPin size={16} />
                Valencia, Spain
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NewSolutions. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="#" className="hover:text-slate-900">
              Privacy Policy
            </Link>

            <Link to="#" className="hover:text-slate-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
