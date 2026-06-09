import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiDownload,
  FiMonitor,
  FiPackage,
  FiShoppingBag,
  FiStar,
  FiTool,
  FiCpu,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const categories = [
  {
    icon: FiCpu,
    title: "Tech Accessories",
    text: "Useful technology items such as flash drives, storage tools, cable accessories, and workspace essentials.",
  },
  {
    icon: FiStar,
    title: "Redline Merchandise",
    text: "Future Redline Systems Co. branded items including shirts, hats, stickers, and other business merchandise.",
  },
  {
    icon: FiDownload,
    title: "Digital Products",
    text: "Downloadable guides, checklists, templates, starter files, and business technology resources.",
  },
  {
    icon: FiTool,
    title: "Business Tools",
    text: "Helpful tools and resources designed to support small businesses, websites, and digital operations.",
  },
];

const upcomingProducts = [
  {
    name: "Redline Flash Drives",
    category: "Tech Accessories",
    status: "Planned",
    description:
      "Branded flash drives for file storage, client delivery, business backups, and everyday tech use.",
  },
  {
    name: "Redline Apparel",
    category: "Merchandise",
    status: "Planned",
    description:
      "Professional Redline Systems Co. shirts and branded apparel designed around the company identity.",
  },
  {
    name: "Business Starter Kits",
    category: "Business Tools",
    status: "Planned",
    description:
      "Digital and physical starter kits built to help small businesses organize their web presence and technology setup.",
  },
  {
    name: "Website Resources",
    category: "Digital Downloads",
    status: "Planned",
    description:
      "Checklists, guides, and downloadable resources for businesses improving or launching their websites.",
  },
];

const shopBenefits = [
  "Technology-focused products",
  "Business-ready resources",
  "Future digital downloads",
  "Redline branded merchandise",
  "Tools for small business owners",
  "Products built around real client needs",
];

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop | Redline Systems Co.</title>
        <meta
          name="description"
          content="The Redline Systems Co. shop is coming soon with technology accessories, branded merchandise, digital downloads, templates, and business tools."
        />
        <link rel="canonical" href="https://redlinesystemsco.com/shop" />
      </Helmet>

      <main className="min-h-screen bg-black px-6 py-24 text-white">
        <section className="mx-auto max-w-7xl">
          {/* Hero */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-16 text-center"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
              Redline Shop
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Products, Tools, and Resources Built for Modern Businesses
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              The Redline shop is being built as a place for technology
              accessories, branded merchandise, digital downloads, templates,
              and practical business resources.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#shop-preview"
                className="inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Preview Shop <FiArrowRight />
              </a>

              <Link
                to="/templates"
                className="inline-flex items-center justify-center rounded border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
              >
                View Templates
              </Link>
            </div>
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-24 rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-[#080808] p-8 text-center shadow-[0_0_70px_rgba(220,38,38,0.12)]"
          >
            <FiShoppingBag className="mx-auto mb-5 text-5xl text-red-500" />

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Coming Soon
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              The Shop Is Currently in Development
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-400">
              Products are being planned carefully so the shop feels useful,
              professional, and aligned with what Redline Systems Co. actually
              provides: technology, business tools, digital products, and
              resources that help people build and operate better.
            </p>
          </motion.section>

          {/* Categories */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-24"
          >
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Product Categories
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                What Will Be Available
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                The shop will focus on products and resources that fit the
                Redline brand and support businesses, developers, and everyday
                technology users.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
                  >
                    <Icon className="mb-5 text-5xl text-red-500" />

                    <h3 className="text-2xl font-bold">{item.title}</h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          {/* Product Preview */}
          <motion.section
            id="shop-preview"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-24"
          >
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Shop Preview
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Planned Products
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                These products are planned for the future Redline shop. Items
                will be added carefully instead of rushing out a store full of
                random products.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {upcomingProducts.map((product) => (
                <motion.article
                  key={product.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/50 hover:shadow-[0_0_60px_rgba(220,38,38,0.16)]"
                >
                  <div className="absolute right-4 top-4 rounded-full border border-blue-400/60 bg-blue-950/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                    {product.status}
                  </div>

                  <FiPackage className="mb-6 mt-10 text-5xl text-red-500" />

                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
                    {product.category}
                  </p>

                  <h3 className="text-2xl font-bold">{product.name}</h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {product.description}
                  </p>

                  <button
                    type="button"
                    disabled
                    className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded border border-white/10 px-5 py-3 font-semibold text-gray-500"
                  >
                    Coming Soon <FiShoppingBag />
                  </button>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Why Redline Shop */}
          <div className="mb-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-8"
            >
              <FiMonitor className="mb-5 text-5xl text-red-500" />

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Why a Shop?
              </p>

              <h2 className="text-3xl font-bold">
                More Than Merchandise
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                The goal of the Redline shop is not to sell random products. It
                is being built as a place for useful technology items, business
                tools, digital downloads, and future Redline products that align
                with the company&apos;s work.
              </p>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-red-600/30 bg-[#080808] p-8"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Focus Areas
              </p>

              <h2 className="text-3xl font-bold">Built With Purpose</h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {shopBenefits.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-gray-300"
                  >
                    <FiCheckCircle className="mt-1 shrink-0 text-red-500" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-black p-10 text-center"
          >
            <FiShoppingBag className="mx-auto mb-5 text-5xl text-red-500" />

            <h2 className="text-3xl font-bold md:text-5xl">
              Want to Know When the Shop Opens?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              The Redline shop is currently being planned. If you are interested
              in future templates, tools, merchandise, or digital products, reach
              out and let us know what you would like to see first.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Contact Redline <FiArrowRight />
            </a>
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default Shop;