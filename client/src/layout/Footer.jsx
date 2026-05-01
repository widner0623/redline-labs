import Logo from "../assets/FootLogo.png";
import { FiArrowRight } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={Logo} alt="Redline Systems Co" className="mb-5 h-14 w-auto object-contain" />

            <p className="max-w-xs leading-7 text-gray-400">
              Pushing the boundaries of web development, one project at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-semibold">Services</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-red-500 transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-red-500 transition">Frontend Development</a></li>
              <li><a href="#services" className="hover:text-red-500 transition">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-red-500 transition">Backend Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-red-500 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-red-500 transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 font-semibold">Newsletter</h3>

            <p className="mb-5 leading-7 text-gray-400">
              Stay updated with our latest projects and insights.
            </p>

            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 border border-white/10 bg-[#111] px-4 py-3 text-white outline-none transition focus:border-red-600"
              />

              <button
                type="submit"
                className="bg-red-600 px-5 text-white transition hover:bg-red-700"
                aria-label="Subscribe"
              >
                <FiArrowRight />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Redline Systems Co. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="/PrivacyPolicy.pdf" target="_blank" className="transition hover:text-red-500">Privacy Policy</a>
            <a href="/TermOfUse.pdf" target="_blank" className="transition hover:text-red-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;