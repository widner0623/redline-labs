import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiCode,
  FiGlobe,
  FiMonitor,
  FiSearch,
  FiTool,
  FiTrendingUp,
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
    icon: FiCode,
    title: "Web Development",
    text: "Articles covering modern website development, frontend technologies, best practices, and real-world project insights.",
  },
  {
    icon: FiSearch,
    title: "SEO & Visibility",
    text: "Tips and strategies for helping businesses improve their online presence and search engine visibility.",
  },
  {
    icon: FiMonitor,
    title: "Website Management",
    text: "Guides on maintaining websites, improving performance, and keeping business websites running smoothly.",
  },
  {
    icon: FiGlobe,
    title: "Small Business Technology",
    text: "Technology advice, digital tools, and practical resources for small businesses and entrepreneurs.",
  },
  {
    icon: FiTool,
    title: "Industry Insights",
    text: "Lessons learned from real projects, client work, business growth, and ongoing development.",
  },
  {
    icon: FiTrendingUp,
    title: "Future Products",
    text: "Updates on DisplayOS, templates, digital products, and future Redline Systems Co. initiatives.",
  },
];

const futurePosts = [
  "How Much Does a Website Really Cost?",
  "5 Signs Your Business Website Needs an Upgrade",
  "Common Website Mistakes Small Businesses Make",
  "Website Maintenance: What Most Owners Ignore",
  "The Difference Between a Template and a Custom Website",
  "What Makes a Website Convert Visitors Into Customers?",
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Redline Systems Co.</title>
        <meta
          name="description"
          content="The Redline Systems Co. blog will feature articles about web development, websites, SEO, technology, business growth, and future product updates."
        />
        <link rel="canonical" href="https://redlinesystemsco.com/blog" />
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
              Redline Blog
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Insights, Resources, and Technology Articles
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              The Redline blog is being built as a place to share web
              development knowledge, business technology insights, SEO tips,
              project lessons, and future product updates.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#future-posts"
                className="inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Preview Topics <FiArrowRight />
              </a>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
              >
                Need a Website?
              </Link>
            </div>
          </motion.div>

          {/* Coming Soon */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-24 rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-[#080808] p-8 text-center shadow-[0_0_70px_rgba(220,38,38,0.12)]"
          >
            <FiBookOpen className="mx-auto mb-5 text-5xl text-red-500" />

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Launching Soon
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Articles Are Currently in Development
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-400">
              The goal of the Redline blog is not to publish filler content. It
              will focus on practical information, real-world experiences,
              business technology, websites, SEO, and lessons learned through
              actual projects.
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
                Blog Categories
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                What We'll Be Writing About
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                Articles will be focused on topics that help businesses,
                developers, and entrepreneurs make better technology decisions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <motion.article
                    key={category.title}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
                  >
                    <Icon className="mb-5 text-5xl text-red-500" />

                    <h3 className="text-2xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {category.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          {/* Future Posts */}
          <motion.section
            id="future-posts"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-24 rounded-2xl border border-white/10 bg-[#080808] p-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Planned Articles
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Future Topics
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-gray-400">
              These are examples of the types of articles planned for the
              Redline blog.
            </p>

            <div className="mt-10 grid gap-4">
              {futurePosts.map((post) => (
                <div
                  key={post}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-gray-300"
                >
                  <FiBookOpen className="shrink-0 text-red-500" />
                  <span>{post}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Why This Blog Exists */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-24 rounded-2xl border border-white/10 bg-[#080808] p-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Purpose
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Why Build a Blog?
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-gray-400">
              <p>
                The Redline blog is being created to share useful information
                rather than simply filling pages with content.
              </p>

              <p>
                Topics will focus on websites, technology, business growth,
                digital tools, SEO, maintenance, and practical lessons that can
                help businesses improve their online presence.
              </p>

              <p>
                As Redline Systems Co. continues to grow, the blog will also be
                used to share product updates, development progress, and future
                company initiatives.
              </p>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-black p-10 text-center"
          >
            <FiBookOpen className="mx-auto mb-5 text-5xl text-red-500" />

            <h2 className="text-3xl font-bold md:text-5xl">
              Looking for Professional Website Help?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              While the blog is being built, you can still explore Redline's
              website services, audits, support plans, and future products.
            </p>

            <Link
              to="/pricing"
              className="mt-8 inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              View Website Packages <FiArrowRight />
            </Link>
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default Blog;