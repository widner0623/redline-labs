import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiHelpCircle,
  FiArrowRight,
  FiGlobe,
  FiDollarSign,
  FiTool,
  FiShield,
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
      staggerChildren: 0.12,
    },
  },
};

const faqSections = [
  {
    title: "General Questions",
    icon: FiHelpCircle,
    questions: [
      {
        question: "What does Redline Systems Co. do?",
        answer:
          "Redline Systems Co. builds custom websites, web applications, digital systems, and technology solutions for businesses that want a stronger online presence and better tools to support growth.",
      },
      {
        question: "Do you only work with businesses in Kentucky?",
        answer:
          "No. Redline Systems Co. serves businesses in Kentucky and surrounding states, but projects can also be completed remotely for businesses anywhere in the United States.",
      },
      {
        question: "Do you work with new businesses?",
        answer:
          "Yes. We work with new businesses, growing companies, and established businesses that need a professional website, redesign, or custom digital solution.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We work with local businesses, service providers, startups, and growing companies that need professional websites, web applications, or technology support.",
      },
      {
        question: "Is Redline Systems Co. a one-person company?",
        answer:
          "Yes. Redline Systems Co. is currently operated directly by Derrick Widner, which means clients work directly with the developer building their project.",
      },
      {
        question: "Do you offer free consultations?",
        answer:
          "Yes. Initial project conversations are used to understand your goals, timeline, budget, and what type of solution would make the most sense for your business.",
      },
    ],
  },
  {
    title: "Website Questions",
    icon: FiGlobe,
    questions: [
      {
        question: "How long does a website take to build?",
        answer:
          "Most small business websites take 1–3 weeks depending on the package, page count, content, features, and revision process. Larger websites or custom systems may take longer.",
      },
      {
        question: "Will my website work on phones and tablets?",
        answer:
          "Yes. Every website is built with responsive design so it works across desktop, tablet, and mobile devices.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. Existing websites can be redesigned, rebuilt, optimized, or expanded depending on the current platform, goals, and condition of the site.",
      },
      {
        question: "Can you add features later?",
        answer:
          "Yes. Websites can be expanded over time with new pages, booking systems, e-commerce, dashboards, contact forms, automations, and other custom features.",
      },
      {
        question: "Do I need to already have content and photos?",
        answer:
          "Having your own content and photos helps move the project faster, but guidance can be provided if you need help organizing pages, wording, images, or structure.",
      },
      {
        question: "Can you connect my website to third-party tools?",
        answer:
          "Yes. Websites can be connected to tools such as booking platforms, payment systems, email services, databases, APIs, and other business software when needed.",
      },
      {
        question: "Will my website be optimized for search engines?",
        answer:
          "Every website includes a basic SEO-ready structure. More advanced SEO services can be added depending on your goals and competition.",
      },
    ],
  },
  {
    title: "Pricing Questions",
    icon: FiDollarSign,
    questions: [
      {
        question: "How much does a website cost?",
        answer:
          "Website pricing depends on the size and complexity of the project. Starter websites begin at $400, standard business websites begin around $900, premium projects range from $1,800–$2,200, and custom systems start at $3,000+.",
      },
      {
        question: "Do you offer monthly website options?",
        answer:
          "Yes. Redline Systems Co. offers a subscription website option starting at $129/month with a 12-month minimum. This helps businesses get online without a large upfront investment.",
      },
      {
        question: "Do I need to pay everything upfront?",
        answer:
          "Most one-time projects begin with a deposit, with the remaining balance due based on the project agreement. Subscription websites follow the monthly plan structure.",
      },
      {
        question: "Can I upgrade later?",
        answer:
          "Yes. You can start with a smaller website and upgrade later as your business grows or as new features become necessary.",
      },
      {
        question: "Are prices the same for every business?",
        answer:
          "No. Pricing depends on scope, page count, features, integrations, timeline, and whether the project is a one-time build or subscription website.",
      },
      {
        question: "What counts as an add-on?",
        answer:
          "Add-ons are features outside the base package, such as extra pages, booking systems, e-commerce, SMS notifications, advanced SEO, logo design, or custom integrations.",
      },
      {
        question: "Can I get a quote before committing?",
        answer:
          "Yes. A quote is provided before work begins so you understand the scope, price, timeline, and what is included.",
      },
    ],
  },
  {
    title: "Support & Ownership",
    icon: FiShield,
    questions: [
      {
        question: "Do I own my website?",
        answer:
          "For one-time projects, ownership transfers after final payment is received. For subscription websites, ownership transfers after the contract term is completed.",
      },
      {
        question: "Do you provide website maintenance?",
        answer:
          "Yes. Maintenance plans are available for updates, bug fixes, security checks, content changes, performance monitoring, and ongoing support.",
      },
      {
        question: "What happens if my website needs changes?",
        answer:
          "Small changes can be handled through a maintenance plan or quoted separately. Larger feature requests may require a new project scope.",
      },
      {
        question: "Do you help with hosting and domains?",
        answer:
          "Yes. Hosting, domain setup, database setup, deployment, SSL, and third-party integrations can be handled depending on the package or plan selected.",
      },
      {
        question: "What happens after my website launches?",
        answer:
          "After launch, you can choose a maintenance plan, request updates as needed, or continue adding features as your business grows.",
      },
      {
        question: "What if something breaks on my website?",
        answer:
          "If you are on a maintenance plan, support is handled based on your plan level. If not, fixes can still be quoted separately.",
      },
      {
        question: "Can I move my website later?",
        answer:
          "For one-time projects, ownership transfers after final payment, which allows the website to be moved if needed. Subscription websites transfer after the contract term is completed.",
      },
    ],
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-white/10 bg-{#080808]"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-white">
          {item.question}
        </span>

        <FiChevronDown
          className={`shrink-0 text-2xl text-red-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="border-t border-white/10 px-6 py-5 leading-7 text-gray-400">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <>
      <Helmet>
        <title>FAQ | Redline Systems Co.</title>
        <meta
          name="description"
          content="Find answers to common questions about Redline Systems Co. website pricing, custom web development, support, maintenance, ownership, and project timelines."
        />
        <link rel="canonical" href="https://redlinesystemsco.com/faq" />
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
              Frequently Asked Questions
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Questions Before We Build?
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Get clear answers about website pricing, project timelines,
              ownership, maintenance, support, and how Redline Systems Co. works
              with businesses.
            </p>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mb-20 grid gap-6 md:grid-cols-3"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-red-600/30 bg-[#080808] p-6 shadow-[0_0_45px_rgba(220,38,38,0.12)]"
            >
              <FiDollarSign className="mb-5 text-4xl text-red-500" />
              <h2 className="text-xl font-bold">Transparent Pricing</h2>
              <p className="mt-3 leading-7 text-gray-400">
                Clear package ranges, monthly options, add-ons, and ownership
                terms before a project begins.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-[#080808] p-6"
            >
              <FiTool className="mb-5 text-4xl text-red-500" />
              <h2 className="text-xl font-bold">Custom Builds</h2>
              <p className="mt-3 leading-7 text-gray-400">
                Websites and systems are built around your business goals, not
                forced into a one-size-fits-all template.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-[#080808] p-6"
            >
              <FiShield className="mb-5 text-4xl text-red-500" />
              <h2 className="text-xl font-bold">Support After Launch</h2>
              <p className="mt-3 leading-7 text-gray-400">
                Maintenance and support options are available after launch to
                keep your website running smoothly.
              </p>
            </motion.div>
          </motion.div>

          {/* FAQ Sections */}
          <div className="space-y-16">
            {faqSections.map((section) => {
              const Icon = section.icon;

              return (
                <motion.section
                  key={section.title}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-600/40 bg-red-600/10">
                      <Icon className="text-2xl text-red-500" />
                    </div>

                    <h2 className="text-2xl font-bold md:text-3xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="grid gap-5">
                    {section.questions.map((item, questionIndex) => {
                      const questionId = `${section.title}-${questionIndex}`;
                      const isOpen = openQuestion === questionId;

                      return (
                        <FAQItem
                          key={item.question}
                          item={item}
                          isOpen={isOpen}
                          onClick={() =>
                            setOpenQuestion(isOpen ? null : questionId)
                          }
                        />
                      );
                    })}
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-black p-10 text-center"
          >
            <FiHelpCircle className="mx-auto mb-5 text-5xl text-red-500" />

            <h2 className="text-3xl font-bold md:text-5xl">
              Still Have Questions?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              If you are unsure which package, service, or support option fits
              your business, reach out and we will help point you in the right
              direction.
            </p>

            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Contact Redline <FiArrowRight />
            </Link>
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default FAQ;