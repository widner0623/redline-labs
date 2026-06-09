import Logo from "../assets/FootLogo.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

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

          {/* Resources */}
          <div>
            <h3 className="mb-5 font-semibold">Resources</h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/pricing" className="hover:text-red-500 transition">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-red-500 transition">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-red-500 transition">Blog</Link></li>
              <li><Link to="/support" className="hover:text-red-500 transition">Support</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 font-semibold">Products</h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/website-audit" className="hover:text-red-500 transition">Website Audit</Link></li>
              <li><Link to="/shop" className="hover:text-red-500 transition">Shop</Link></li>
              <li><Link to="/templates" className="hover:text-red-500 transition">Templates</Link></li>
              <li><Link to="/displayos" className="hover:text-red-500 transition">DisplayOS</Link></li>
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
            <a href="/TermsOfUse.pdf" target="_blank" className="transition hover:text-red-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;