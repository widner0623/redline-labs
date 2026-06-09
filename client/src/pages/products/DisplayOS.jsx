import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiMonitor,
  FiClock,
  FiGrid,
  FiSettings,
  FiWifi,
  FiImage,
  FiBarChart2,
  FiTv,
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

const features = [
  {
    icon: FiGrid,
    title: "Custom Display Layouts",
    text: "Create digital signs for menus, services, announcements, wait times, promotions, business hours, and more.",
  },
  {
    icon: FiSettings,
    title: "Easy Content Control",
    text: "Update what appears on your display without needing to edit code or rebuild the entire website.",
  },
  {
    icon: FiImage,
    title: "Slides & Promotions",
    text: "Show rotating slides for ads, gift cards, events, featured services, seasonal offers, or important updates.",
  },
  {
    icon: FiBarChart2,
    title: "Live Business Data",
    text: "Display useful real-time information like status, wait times, availability, featured services, or future integrations.",
  },
  {
    icon: FiTv,
    title: "Built for Screens",
    text: "Designed for TVs, lobby displays, waiting rooms, barbershops, offices, restaurants, stores, and public spaces.",
  },
  {
    icon: FiWifi,
    title: "Web-Based System",
    text: "DisplayOS is planned as a browser-based platform, making it easier to run on devices with web access.",
  },
];

const useCases = [
  "Barbershops showing wait times, services, and shop status",
  "Restaurants displaying menus, specials, and announcements",
  "Offices showing welcome screens and company updates",
  "Retail shops promoting products, deals, and events",
  "Waiting rooms displaying information and rotating slides",
  "Local businesses replacing printed signs with digital displays",
];

const DisplayOS = () => {
  return (
    <>
      <Helmet>
        <title>DisplayOS | Redline Systems Co.</title>
        <meta
          name="description"
          content="DisplayOS is an in-development digital display platform by Redline Systems Co. for businesses that need custom screens, digital signage, announcements, promotions, menus, wait times, and live updates."
        />
        <link rel="canonical" href="https://redlinesystemsco.com/displayos" />
      </Helmet>

      <main className="min-h-screen bg-black px-6 py-24 text-white">
        <section className="mx-auto max-w-7xl">
          {/* Hero */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
                DisplayOS
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                A Digital Display Platform Built for Modern Businesses
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                DisplayOS is an in-development web-based display system designed
                to help businesses show live information, promotions, menus,
                announcements, wait times, services, images, and updates on TVs
                or digital screens.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
                >
                  Join Waitlist <FiArrowRight />
                </a>

                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
                >
                  Need Custom Work?
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-red-600/30 bg-[#080808] p-6 shadow-[0_0_80px_rgba(220,38,38,0.18)]"
            >
              <div className="rounded-xl border border-white/10 bg-black p-5">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-red-500">
                      Live Display Preview
                    </p>
                    <h2 className="mt-1 text-2xl font-bold">
                      Main Street Display
                    </h2>
                  </div>

                  <span className="rounded-full border border-green-400/50 bg-green-950/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-300">
                    Open
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <FiClock className="mb-3 text-3xl text-red-500" />
                    <p className="text-sm text-gray-400">Current Wait</p>
                    <p className="mt-2 text-3xl font-bold">25 min</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <FiMonitor className="mb-3 text-3xl text-red-500" />
                    <p className="text-sm text-gray-400">Featured Service</p>
                    <p className="mt-2 text-2xl font-bold">Classic Cut</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
                    <p className="text-sm uppercase tracking-widest text-red-500">
                      Announcement
                    </p>
                    <p className="mt-3 text-xl font-semibold">
                      Gift certificates available this week.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-red-600/30 bg-red-950/20 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                  In Development
                </p>
                <p className="mt-2 text-gray-400">
                  Planned release window: 2026
                </p>
              </div>
            </motion.div>
          </div>

          {/* What It Is */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-24 rounded-2xl border border-white/10 bg-[#080808] p-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              What Is DisplayOS?
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              A Control System for Business Screens
            </h2>

            <div className="mt-6 grid gap-8 leading-8 text-gray-400 lg:grid-cols-2">
              <p>
                DisplayOS is being designed as a customizable digital signage
                platform for businesses that want to use TVs or screens to show
                important information. Instead of relying on printed signs,
                static images, or manually changed slides, businesses will be
                able to manage display content through a web-based system.
              </p>

              <p>
                The goal is to make digital displays easier for small businesses
                to use. A shop owner could update wait times, show promotions,
                feature services, display announcements, or rotate images
                without needing a developer to change the screen every time.
              </p>
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-24"
          >
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Planned Features
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Designed for Real Business Use
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                DisplayOS is planned around the types of information businesses
                actually need to show on a daily basis.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    key={feature.title}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
                  >
                    <Icon className="mb-5 text-5xl text-red-500" />

                    <h3 className="text-2xl font-bold">{feature.title}</h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {feature.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          {/* Use Cases */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-24 rounded-2xl border border-white/10 bg-[#080808] p-8"
          >
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                  Use Cases
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  More Than Just a Slideshow
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  DisplayOS is planned to help businesses turn ordinary screens
                  into useful, branded, constantly updated communication tools.
                </p>
              </div>

              <div className="grid gap-4">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-gray-300"
                  >
                    <FiCheckCircle className="mt-1 shrink-0 text-red-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-black p-10 text-center"
          >
            <FiTv className="mx-auto mb-5 text-5xl text-red-500" />

            <h2 className="text-3xl font-bold md:text-5xl">
              Want Early Access to DisplayOS?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              DisplayOS is currently in development. Businesses interested in
              digital displays, smart signage, menus, wait times, announcements,
              or custom screen systems can reach out to join the early interest
              list.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Join Waitlist <FiArrowRight />
            </a>
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default DisplayOS;