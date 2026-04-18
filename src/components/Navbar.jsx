import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  // 🔥 Smooth scroll hide/show (fixed)
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return; // don't hide nav when menu open

      if (window.scrollY > lastScrollY.current && window.scrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // 🔥 Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // 🔥 Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          {/* Logo */}
          <Link to={"/"} className="text-lg md:text-xl font-[font5] tracking-widest">
            ELEVON
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center font-[font4] gap-10 text-[18px]">
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-5 py-2 font-[font5] hover:opacity-80 transition"
            >
              Let’s Grow
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl z-[60]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* 🔥 FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 backdrop-blur-xl bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#7a1f1f]/60 via-black to-black" />

        {/* Glow */}
        <div className="absolute w-[300px] h-[300px] bg-orange-400/20 blur-[120px] top-0 left-0 rounded-full" />
        <div className="absolute w-[250px] h-[250px] bg-red-500/20 blur-[120px] bottom-0 right-0 rounded-full" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6">

          {/* Top */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-[font5] tracking-widest">
              ELEVON
            </h1>

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 text-2xl font-[font4] mt-10">
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-lg font-[font5]">
            <Link to="/contact">Let’s Grow</Link>
          </div>
        </div>
      </div>
    </>
  );
}