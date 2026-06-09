import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiDownload,
  FiLayout,
  FiMonitor,
  FiPackage,
  FiSmartphone,
  FiZap,
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

const templates = [
  {
    title: "Contractor Website",
    category: "Service Business",
    status: "Available Soon",
    description:
      "A clean starter website for contractors, repair services, landscapers, and home service businesses.",
    tech: ["React", "Tailwind CSS", "Responsive", "SEO Ready"],
  },
  {
    title: "Barbershop Website",
    category: "Local Business",
    status: "Available Soon",
    description:
      "A modern template for barbershops, salons, stylists, and appointment-based service businesses.",
    tech: ["React", "Tailwind CSS", "Services", "Gallery"],
  },
  {
    title: "Insurance Website",
    category: "Professional Services",
    status: "Available Soon",
    description:
      "A professional starter template for agencies that need services, trust sections, and quote requests.",
    tech: ["React", "Tailwind CSS", "Forms", "SEO Ready"],
  },
  {
    title: "Restaurant Website",
    category: "Food & Hospitality",
    status: "Available Soon",
    description:
      "A simple restaurant template for menus, business hours, location details, and strong visuals.",
    tech: ["React", "Tailwind CSS", "Menu Layout", "Mobile Friendly"],
  },
  {
    title: "Small Business Website",
    category: "General Business",
    status: "Available Soon",
    description:
      "A flexible starter template for small businesses that need a professional online presence fast.",
    tech: ["React", "Tailwind CSS", "Contact Form", "Responsive"],
  },
  {
    title: "Landing Page Template",
    category: "Marketing",
    status: "Available Soon",
    description:
      "A focused landing page template built for promotions, offers, product launches, and lead capture.",
    tech: ["React", "Tailwind CSS", "CTA Sections", "SEO Ready"],
  },
];

const included = [
  "React project structure",
  "Tailwind CSS styling",
  "Responsive layouts",
  "Basic SEO structure",
  "Reusable sections",
  "Clean starter code",
  "Setup instructions",
  "Single business license",
];

const notIncluded = [
  "Custom backend systems",
  "Database integration",
  "Advanced animations",
  "Custom branding work",
  "Booking or payment systems",
  "Ongoing maintenance",
];

const Templates = () => {
  return (
    <>
      <Helmet>
        <title>Templates | Redline Systems Co.</title>
        <meta
          name="description"
          content="Explore upcoming Redline Systems Co. starter website templates built with React and Tailwind CSS for businesses, contractors, barbershops, restaurants, and more."
        />
        <link rel="canonical" href="https://redlinesystemsco.com/templates" />
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
              Redline Templates
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Starter Website Templates Built for Real Businesses
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Redline templates are designed to give businesses and developers a
              clean starting point without giving away the full custom build
              experience.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#templates"
                className="inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                View Templates <FiArrowRight />
              </a>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
              >
                Need Custom Work?
              </Link>
            </div>
          </motion.div>

          {/* Why Templates */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mb-24 grid gap-8 md:grid-cols-3"
          >
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
            >
              <FiLayout className="mb-5 text-5xl text-red-500" />

              <h2 className="text-2xl font-bold">
                Clean Starting Point
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Templates provide a simple structure you can build from
                without starting every project from a blank screen.
              </p>
            </motion.article>

            <motion.article
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
            >
              <FiCode className="mb-5 text-5xl text-red-500" />

              <h2 className="text-2xl font-bold">
                Developer Friendly
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Built with React and Tailwind CSS so the code stays modern,
                readable, and easier to customize.
              </p>
            </motion.article>

            <motion.article
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
            >
              <FiSmartphone className="mb-5 text-5xl text-red-500" />

              <h2 className="text-2xl font-bold">
                Responsive by Default
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Each template is planned with mobile, tablet, and desktop
                layouts in mind from the start.
              </p>
            </motion.article>
          </motion.section>

          {/* Template Grid */}
          <motion.section
            id="templates"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-24"
          >
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Template Library
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Available Soon
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                These templates are being designed as basic starter projects,
                not full custom Redline builds. They are intended for simple
                launches, learning, or fast business starter sites.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <motion.article
                  key={template.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/50 hover:shadow-[0_0_60px_rgba(220,38,38,0.16)]"
                >
                  <div className="absolute right-4 top-4 rounded-full border border-blue-400/60 bg-blue-950/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                    {template.status}
                  </div>

                  <FiPackage className="mb-6 mt-10 text-5xl text-red-500" />

                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
                    {template.category}
                  </p>

                  <h3 className="text-2xl font-bold">{template.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {template.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {template.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    disabled
                    className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded border border-white/10 px-5 py-3 font-semibold text-gray-500"
                  >
                    Available Soon <FiDownload />
                  </button>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* What's Included */}
          <div className="mb-24 grid gap-8 lg:grid-cols-2">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-green-500/30 bg-[#080808] p-8 shadow-[0_0_45px_rgba(34,197,94,0.08)]"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                Included
              </p>

              <h2 className="text-3xl font-bold">What Templates Include</h2>

              <ul className="mt-8 space-y-4 text-gray-300">
                {included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-red-600/30 bg-[#080808] p-8 shadow-[0_0_45px_rgba(220,38,38,0.08)]"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Not Included
              </p>

              <h2 className="text-3xl font-bold">What Requires Custom Work</h2>

              <ul className="mt-8 space-y-4 text-gray-300">
                {notIncluded.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiZap className="mt-1 shrink-0 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Custom Work CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-black p-10 text-center"
          >
            <FiMonitor className="mx-auto mb-5 text-5xl text-red-500" />

            <h2 className="text-3xl font-bold md:text-5xl">
              Want Something Built Specifically for Your Business?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Templates are a great starting point, but custom websites allow
              for unique design, advanced functionality, backend systems,
              integrations, and long-term scalability.
            </p>

            <Link
              to="/pricing"
              className="mt-8 inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              View Custom Website Pricing <FiArrowRight />
            </Link>
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default Templates;