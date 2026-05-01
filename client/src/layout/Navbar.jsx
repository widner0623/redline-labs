import { useState } from "react";
import Logo from "../assets/NavLogo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-red-600/20 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 relative">
          {/* Logo */}
          <div className="relative h-15 w-48 md:w-64">
          <a href="#hero" className="relative block h-20 w-48 md:w-54">
            <img
              src={Logo}
              alt="Redline Systems Co"
              className="absolute left-0 top-1/3 -translate-y-1/2 h-30 md:h-38 w-auto object-contain cursor-pointer hover:opacity-80 transition"
            />
          </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-xl font-medium text-gray-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-red-600 hover:bg-red-700 hover:scale-105 text-white px-6 py-3 text-lg font-semibold rounded transition">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl hover:text-red-500 transition"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Page Blur Overlay - click anywhere outside menu to close */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-md transition-all duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Side Menu */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[82%] max-w-sm border-l border-red-600/20 bg-black/95 shadow-[-20px_0_60px_rgba(220,38,38,0.15)] backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          open
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-56 w-56 rounded-full bg-red-700/10 blur-3xl" />

        {/* Menu Header */}
        <div className="relative flex items-center justify-between px-6 py-6">
          

          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-5 text-white text-3xl hover:text-red-500 transition"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile Links */}
        <div className="relative flex flex-col gap-8 px-8 pt-16 text-white">
          <a
            onClick={() => setOpen(false)}
            href="#services"
            className="text-3xl font-semibold hover:text-red-500 transition"
          >
            Services
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#about"
            className="text-3xl font-semibold hover:text-red-500 transition"
          >
            About
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="text-3xl font-semibold hover:text-red-500 transition"
          >
            Contact
          </a>

          <button
            onClick={() => setOpen(false)}
            className="mt-6 bg-red-600 hover:bg-red-700 hover:scale-105 text-white px-8 py-4 text-lg font-semibold rounded transition shadow-[0_0_30px_rgba(220,38,38,0.35)]"
          >
            Get Started
          </button>
        </div>
      </aside>
    </>
  );
}

export default Navbar;