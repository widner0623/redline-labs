import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiShield,
  FiTool,
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

const supportOptions = [
  {
    icon: FiTool,
    title: "One-Time Support",
    text: "Need a quick fix, content update, bug repair, or small website change? One-time support is available for specific tasks.",
  },
  {
    icon: FiShield,
    title: "Monthly Maintenance",
    text: "Ongoing support to keep your website updated, monitored, secure, and performing well after launch.",
  },
  {
    icon: FiZap,
    title: "Emergency Fixes",
    text: "For urgent issues such as broken pages, contact form problems, hosting issues, or site errors that need fast attention.",
  },
];

const maintenancePlans = [
  {
    name: "Basic",
    price: "$50",
    features: ["Site monitoring", "Bug fixes", "Minor updates", "Security checks"],
  },
  {
    name: "Growth",
    price: "$100",
    features: [
      "Everything in Basic",
      "Content updates",
      "Small improvements",
      "SEO adjustments",
    ],
  },
  {
    name: "Pro",
    price: "$150",
    features: [
      "Everything in Growth",
      "Priority support",
      "Ongoing development tweaks",
      "Performance monitoring",
      "Unlimited small edits",
    ],
  },
];

const supportAreas = [
  "Website updates",
  "Content changes",
  "Bug fixes",
  "Hosting assistance",
  "Domain support",
  "SSL setup",
  "DNS changes",
  "Contact form issues",
  "Performance checks",
  "Security reviews",
  "Backup guidance",
  "Feature improvements",
];

const supportFaqs = [
  {
    question: "Do I need a maintenance plan to request support?",
    answer:
      "No. One-time support is available, but maintenance plans are recommended for businesses that want regular updates, monitoring, and priority help.",
  },
  {
    question: "How do I request website changes?",
    answer:
      "You can send a clear request with the page, change needed, and any content or images required. Larger updates may need a separate quote.",
  },
  {
    question: "Can you support websites you did not build?",
    answer:
      "In many cases, yes. The website first needs to be reviewed so the platform, code, hosting, and access can be understood.",
  },
  {
    question: "What happens if my website goes down?",
    answer:
      "If you are on a maintenance plan, support is handled based on your plan level. Emergency fixes may also be available as a one-time service.",
  },
];

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support | Redline Systems Co.</title>
        <meta
          name="description"
          content="Website support and maintenance from Redline Systems Co. Get help with updates, bug fixes, hosting, domains, security, and ongoing website care."
        />
        <link rel="canonical" href="https://redlinesystemsco.com/support" />
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
              Support & Maintenance
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Keep Your Website Running Strong
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Redline Systems Co. provides website support, maintenance, bug
              fixes, updates, hosting guidance, and technical help to keep your
              website secure, reliable, and ready for growth.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Request Support <FiArrowRight />
              </Link>
            </div>
          </motion.div>

          {/* Support Options */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-3"
          >
            {supportOptions.map((option) => {
              const Icon = option.icon;

              return (
                <motion.article
                  key={option.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
                >
                  <Icon className="mb-5 text-5xl text-red-500" />

                  <h2 className="text-2xl font-bold">{option.title}</h2>

                  <p className="mt-4 leading-7 text-gray-400">
                    {option.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Maintenance Plans */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-24"
          >
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Maintenance Plans
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Ongoing Care After Launch
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                A website should not be left alone after it goes live.
                Maintenance plans help with updates, monitoring, security,
                performance, and continued improvements.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {maintenancePlans.map((plan) => (
                <motion.article
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
                >
                  <h3 className="text-2xl font-bold text-red-500">
                    {plan.name}
                  </h3>

                  <p className="mt-4 text-4xl font-bold">
                    {plan.price}
                    <span className="text-base font-medium text-gray-400">
                      {" "}
                      / month
                    </span>
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <ul className="space-y-4 text-gray-400">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <FiCheckCircle className="mt-1 shrink-0 text-red-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* What Support Covers */}
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
                  What Support Covers
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  Technical Help Without the Confusion
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  Website support can cover anything from small updates to
                  technical troubleshooting. The goal is to keep your website
                  working properly while giving your business a reliable place to
                  turn when something needs attention.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {supportAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-gray-300"
                  >
                    <FiCheckCircle className="shrink-0 text-red-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Hosting / Domains / Security */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-8"
            >
              <FiGlobe className="mb-5 text-5xl text-red-500" />
              <h2 className="text-2xl font-bold">Hosting & Domains</h2>
              <p className="mt-4 leading-7 text-gray-400">
                Get help with hosting setup, DNS records, domain connections,
                SSL certificates, deployment settings, and website launch
                configuration.
              </p>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-8"
            >
              <FiShield className="mb-5 text-5xl text-red-500" />
              <h2 className="text-2xl font-bold">Security & Monitoring</h2>
              <p className="mt-4 leading-7 text-gray-400">
                Maintenance can include security checks, performance monitoring,
                basic issue detection, backup guidance, and ongoing review of
                important website systems.
              </p>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-8"
            >
              <FiClock className="mb-5 text-5xl text-red-500" />
              <h2 className="text-2xl font-bold">Response Times</h2>
              <p className="mt-4 leading-7 text-gray-400">
                Support timing depends on the request type and maintenance plan.
                Priority requests are handled faster for clients on higher-level
                support plans.
              </p>
            </motion.section>
          </div>

          {/* Support FAQ */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-24"
          >
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Support Questions
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Before You Request Support
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {supportFaqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-[#080808] p-6"
                >
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
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
            <FiTool className="mx-auto mb-5 text-5xl text-red-500" />

            <h2 className="text-3xl font-bold md:text-5xl">
              Need Help With Your Website?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Whether you need a small update, ongoing maintenance, hosting
              help, or a technical fix, Redline Systems Co. can help keep your
              website moving forward.
            </p>

            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Request Support <FiArrowRight />
            </Link>
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default Support;