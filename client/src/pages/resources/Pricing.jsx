import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiXCircle,
  FiZap,
  FiShield,
  FiPlus,
  FiDollarSign,
  FiLayers,
  FiTool,
  FiClock,
} from "react-icons/fi";

const heroImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80";

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

const packages = [
  {
    name: "Starter",
    price: "$400",
    tagline: "Simple. Clean. Effective.",
    color: "green",
    bestFor: "New businesses, personal brands, or simple online presence.",
    features: [
      "1–3 page website",
      "Mobile responsive design",
      "Clean modern layout",
      "Contact form setup",
      "Basic SEO setup",
      "Performance optimization",
      "Social media links",
      "1 revision round",
    ],
  },
  {
    name: "Standard",
    price: "$900",
    tagline: "Professional. Modern. Built to convert.",
    badge: "Most Popular",
    color: "blue",
    bestFor: "Growing businesses ready for a stronger online presence.",
    features: [
      "4–6 page website",
      "Fully custom design",
      "Mobile and tablet optimization",
      "Smooth animations",
      "Contact form + backend integration",
      "SEO-ready structure",
      "Performance optimization",
      "Brand consistency",
      "2 revision rounds",
    ],
  },
  {
    name: "Premium",
    price: "$1,800 – $2,200",
    tagline: "Advanced. Scalable. Future-ready.",
    color: "red",
    bestFor: "Established businesses needing advanced features.",
    features: [
      "6–10+ pages",
      "High-end UI/UX",
      "Backend development",
      "Database integration",
      "Advanced forms and logic",
      "API integrations",
      "Full SEO structure",
      "Performance tuning",
      "Scalable architecture",
      "3+ revision rounds",
    ],
  },
  {
    name: "Custom Systems",
    price: "$3,000+",
    tagline: "Tailored software built around your workflow.",
    color: "purple",
    bestFor: "Businesses needing dashboards, portals, tools, or apps.",
    features: [
      "Custom web applications",
      "Dashboards or portals",
      "Real-time features",
      "Advanced backend systems",
      "Custom integrations",
      "Payments, SMS, APIs, and more",
      "Secure scalable architecture",
    ],
  },
];

const howPricingWorks = [
  {
    icon: FiLayers,
    title: "Choose a Package",
    text: "Start with the website or system package that best fits your current business needs.",
  },
  {
    icon: FiPlus,
    title: "Add What You Need",
    text: "Add features like booking, SEO, e-commerce, SMS, extra pages, or custom functionality.",
  },
  {
    icon: FiDollarSign,
    title: "Deposit or Subscription",
    text: "Pay a project deposit for one-time builds or choose the monthly subscription option.",
  },
  {
    icon: FiZap,
    title: "Build, Launch, Support",
    text: "Your project is planned, developed, tested, launched, and supported after completion.",
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

const addOns = [
  ["Extra Page", "$100 / page"],
  ["Logo Design", "$100 – $300"],
  ["SEO Setup", "$150 – $300"],
  ["Booking System", "$300 – $600"],
  ["E-Commerce", "$500 – $1,500"],
  ["SMS Notifications", "$150"],
];

const faqs = [
  {
    question: "How much do I need to start?",
    answer:
      "Most one-time projects begin with a deposit. Subscription websites can start at the monthly rate after the agreement is approved.",
  },
  {
    question: "Do I own the website?",
    answer:
      "For one-time projects, ownership transfers after final payment. For subscription websites, ownership transfers after the contract term is completed.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. A Starter website can grow into a larger site, and custom features can be added as your business needs change.",
  },
  {
    question: "Do you handle hosting and setup?",
    answer:
      "Yes. Hosting, domain setup, database setup, deployment, and third-party tools can be handled depending on the package or subscription selected.",
  },
];

const colorClasses = {
  green:
    "border-green-500/40 text-green-400 shadow-[0_0_35px_rgba(34,197,94,0.12)]",
  blue:
    "border-blue-500/50 text-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.15)]",
  red:
    "border-red-600/50 text-red-500 shadow-[0_0_35px_rgba(220,38,38,0.15)]",
  purple:
    "border-purple-500/50 text-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.15)]",
};

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Redline Systems Co.</title>
        <meta
          name="description"
          content="View website pricing, maintenance plans, subscription website options, add-ons, and ownership terms from Redline Systems Co."
        />
        <link rel="canonical" href="https://redlinesystemsco.com/pricing" />
      </Helmet>

      <main className="min-h-screen bg-black px-6 py-24 text-white">
        <section className="mx-auto max-w-7xl">
          {/* Hero */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
                Pricing Guide
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Website Pricing Built Around Your Business
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Transparent pricing for custom websites, web applications,
                maintenance plans, and digital systems built to help your
                business grow online.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
                >
                  Request a Quote <FiArrowRight />
                </Link>

                <a
                  href="#packages"
                  className="inline-flex items-center justify-center rounded border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
                >
                  View Packages
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-red-600/30 bg-[#080808] shadow-[0_0_80px_rgba(220,38,38,0.18)]"
            >
              <img
                src={heroImage}
                alt="Website pricing and development workspace"
                className="h-[420px] w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                  Built With Strategy
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Every project is priced around scope, features, and long-term
                  value.
                </h2>
              </div>
            </motion.div>
          </div>

          {/* How Pricing Works */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-20"
          >
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                How Pricing Works
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Simple, Clear, and Built Around Your Goals
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                Pricing depends on the size of the project, the features needed,
                and whether you prefer a one-time build or a managed monthly
                option.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howPricingWorks.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/10 bg-[#080808] p-6 transition hover:border-red-600/40 hover:shadow-[0_0_45px_rgba(220,38,38,0.12)]"
                  >
                    <Icon className="mb-5 text-4xl text-red-500" />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-gray-400">{step.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Packages */}
          <motion.section
            id="packages"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-24"
          >
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Website Packages
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Choose the Right Starting Point
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                Every package is built to be flexible. Start with what fits your
                business today, then expand as your business grows.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {packages.map((item) => (
                <motion.article
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  key={item.name}
                  className={`relative rounded-2xl border bg-[#080808] p-7 transition ${colorClasses[item.color]}`}
                >
                  {item.badge && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                      {item.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.tagline}</p>

                  <p className="mt-6 text-4xl font-bold text-white">
                    {item.price}
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <ul className="space-y-3 text-sm text-gray-300">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <FiCheckCircle className="mt-1 shrink-0 text-current" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold uppercase tracking-widest text-current">
                      Best For
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.bestFor}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Included */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-white/10 bg-[#080808] p-8 text-center"
          >
            <h2 className="text-xl font-bold uppercase tracking-widest">
              Included In All Packages
            </h2>

            <p className="mx-auto mt-4 max-w-5xl leading-8 text-gray-400">
              Full website design and development, mobile optimization,
              performance optimization, SEO-ready structure, contact system
              setup, deployment and launch support, and modern secure code.
            </p>
          </motion.section>

          {/* Subscription + Maintenance */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-purple-500/40 bg-[#080808] p-8 shadow-[0_0_45px_rgba(168,85,247,0.12)]"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                Subscription Option
              </p>

              <h2 className="text-3xl font-bold">
                No Large Upfront Investment
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                A fully managed website option for businesses that want a
                professional website without paying the full project cost
                upfront. This is ideal for businesses that want predictable
                monthly pricing, updates, hosting, and support included.
              </p>

              <p className="mt-8 text-5xl font-bold text-purple-400">
                $129
                <span className="text-lg font-medium text-gray-400">
                  {" "}
                  / month
                </span>
              </p>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                12-month minimum
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                {[
                  "Full standard-level website build",
                  "Domain, hosting, and database included",
                  "Ongoing updates and maintenance",
                  "Support and security monitoring",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiCheckCircle className="mt-1 text-purple-400" />
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
              className="rounded-2xl border border-white/10 bg-[#080808] p-8"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Maintenance Plans
              </p>

              <h2 className="text-3xl font-bold">
                Keep Your Website Running Smoothly
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                After launch, maintenance plans help keep your website updated,
                monitored, secure, and ready for future improvements.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {maintenancePlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-xl font-bold text-red-500">
                      {plan.name}
                    </h3>

                    <p className="mt-3 text-3xl font-bold">
                      {plan.price}
                      <span className="text-sm font-medium text-gray-400">
                        {" "}
                        / month
                      </span>
                    </p>

                    <ul className="mt-5 space-y-3 text-sm text-gray-400">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <FiCheckCircle className="mt-1 shrink-0 text-red-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Website Audit */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-red-600/40 bg-gradient-to-br from-red-950/25 to-[#080808] p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                  Website Audit
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  Not Sure What Your Website Needs?
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-gray-400">
                  A website audit gives you a clear look at performance, mobile
                  experience, design quality, SEO basics, and conversion issues.
                  It is a simple way to find out what is holding your website
                  back before committing to a larger project.
                </p>

                <div className="mt-6 grid gap-3 text-gray-300 sm:grid-cols-2">
                  {[
                    "Performance review",
                    "Mobile experience check",
                    "SEO overview",
                    "Design and layout feedback",
                    "Conversion recommendations",
                    "Priority improvement list",
                  ].map((item) => (
                    <p key={item} className="flex gap-3">
                      <FiCheckCircle className="mt-1 shrink-0 text-red-500" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-7 text-center">
                <FiTool className="mx-auto mb-4 text-5xl text-red-500" />
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Starting At
                </p>
                <p className="mt-2 text-5xl font-bold">$49</p>
                <Link
                  to="/website-audit"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  Request Audit <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Infrastructure / Add-ons / Terms */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-8"
            >
              <h2 className="mb-5 text-2xl font-bold">
                Infrastructure & Setup
              </h2>

              <div className="space-y-6 text-gray-400">
                <div>
                  <h3 className="font-semibold text-green-400">
                    One-Time Projects
                  </h3>
                  <p className="mt-2 leading-7">
                    Domain setup, hosting setup, database setup, and third-party
                    integrations can be included during launch. After the first
                    year, renewal costs are the client's responsibility.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-400">
                    Subscription Plans
                  </h3>
                  <p className="mt-2 leading-7">
                    Domain, hosting, database, integrations, and ongoing
                    management are included for the duration of the subscription.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-red-600/40 bg-[#080808] p-8"
            >
              <h2 className="mb-5 text-2xl font-bold">Popular Add-Ons</h2>

              <ul className="space-y-4">
                {addOns.map(([name, price]) => (
                  <li
                    key={name}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-gray-300"
                  >
                    <span className="flex items-center gap-3">
                      <FiPlus className="text-red-500" />
                      {name}
                    </span>
                    <span className="text-white">{price}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-8"
            >
              <h2 className="mb-5 text-2xl font-bold">Ownership Terms</h2>

              <div className="space-y-5 text-gray-400">
                <p className="flex gap-3">
                  <FiShield className="mt-1 shrink-0 text-green-400" />
                  One-time project ownership transfers after final payment is
                  received.
                </p>

                <p className="flex gap-3">
                  <FiShield className="mt-1 shrink-0 text-purple-400" />
                  Subscription plan ownership transfers after the contract term
                  is completed.
                </p>

                <p className="flex gap-3">
                  <FiXCircle className="mt-1 shrink-0 text-red-500" />
                  Early cancellation does not grant ownership unless a buyout is
                  agreed upon.
                </p>
              </div>
            </motion.section>
          </div>

          {/* FAQ */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-24"
          >
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Common Questions
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Pricing Questions, Answered
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-[#080808] p-6"
                >
                  <h3 className="flex items-center gap-3 text-xl font-bold">
                    <FiClock className="text-red-500" />
                    {faq.question}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-black p-10 text-center"
          >
            <FiZap className="mx-auto mb-5 text-5xl text-red-500" />

            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to Build Something Great?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Whether you need a simple business website, a custom web
              application, or a fully managed subscription solution, Redline
              Systems Co. is ready to help.
            </p>

            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Request a Quote <FiArrowRight />
            </Link>
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default Pricing;