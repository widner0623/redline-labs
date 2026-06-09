import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
  FiSmartphone,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiFileText,
  FiMonitor,
  FiTarget,
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

const auditPackages = [
  {
    name: "Basic Audit",
    price: "$49",
    badge: "Quick Review",
    description:
      "A focused review for small websites that need clear, simple improvement recommendations.",
    features: [
      "Homepage review",
      "Mobile experience check",
      "Basic SEO overview",
      "Performance notes",
      "Design and layout feedback",
      "Priority improvement list",
      "Written summary report",
    ],
  },
  {
    name: "Professional Audit",
    price: "$99",
    badge: "Most Popular",
    description:
      "A deeper review for businesses that want a stronger understanding of what is helping or hurting their website.",
    features: [
      "Review of up to 5 key pages",
      "Mobile and desktop review",
      "SEO structure review",
      "Performance and speed review",
      "Conversion and CTA review",
      "Design and trust signal feedback",
      "Priority action plan",
      "Detailed PDF report",
    ],
  },
  {
    name: "Premium Audit",
    price: "$199",
    badge: "Full Review",
    description:
      "A full website audit for businesses that want a detailed breakdown and clear improvement roadmap.",
    features: [
      "Review of up to 10 key pages",
      "Performance and technical review",
      "SEO and content structure review",
      "Mobile, tablet, and desktop review",
      "Conversion path review",
      "Competitor comparison notes",
      "Detailed PDF report",
      "Optional video walkthrough",
      "Recommended next-step strategy",
    ],
  },
];

const reviewAreas = [
  {
    icon: FiZap,
    title: "Performance",
    text: "Review loading speed, large images, page weight, and areas that may slow visitors down.",
  },
  {
    icon: FiSearch,
    title: "SEO Basics",
    text: "Check page titles, descriptions, headings, structure, and search visibility foundations.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Experience",
    text: "Review how your site looks and functions across phones, tablets, and smaller screens.",
  },
  {
    icon: FiMonitor,
    title: "Design & Layout",
    text: "Evaluate visual quality, spacing, readability, trust signals, and overall presentation.",
  },
  {
    icon: FiShield,
    title: "Security Review",
    text: "Check for basic security concerns, SSL usage, form concerns, and technical setup issues.",
  },
  {
    icon: FiTarget,
    title: "Conversions",
    text: "Review calls-to-action, contact flow, lead capture, and how easy it is for visitors to take action.",
  },
];

const deliverables = [
  "Detailed website audit summary",
  "Priority improvement list",
  "Performance and mobile notes",
  "SEO and content recommendations",
  "Design and conversion feedback",
  "Suggested next steps",
];

const API_URL = import.meta.env.VITE_API_URL;

const WebsiteAudit = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    name: "",
    email: "",
    phone: "",
    auditType: "",
    concerns: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);

    if (cleaned.length < 4) return cleaned;
    if (cleaned.length < 7) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    }

    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);

    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone,
    }));
  };

  const handleAuditSelect = (auditType) => {
    setFormData((prev) => ({
      ...prev,
      auditType,
    }));

    setTimeout(() => {
      document.getElementById("audit-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      type: "loading",
      message: "Submitting your audit request...",
    });

    try {
      const response = await fetch(`${API_URL}/api/audit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setFormStatus({
        type: "success",
        message:
          "Your audit request was submitted successfully. I'll review your website and follow up with the next step."
      })

      setFormData({
        businessName: "",
        websiteUrl: "",
        name: "",
        email: "",
        phone: "",
        auditType: "",
        concerns: "",
      });
    } catch (err) {
      console.error("AUDIT FORM ERROR:", err);

      setFormStatus({
        type: "error",
        message: err.message || "Failed to submit audit request.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Website Audit | Redline Systems Co.</title>
        <meta
          name="description"
          content="Request a professional website audit from Redline Systems Co. Get a review of your website's performance, SEO, mobile experience, design, security, and conversion opportunities."
        />
        <link
          rel="canonical"
          href="https://redlinesystemsco.com/website-audit"
        />
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
              Website Audit
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Find Out What Your Website Is Missing
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Get a professional review of your website&apos;s performance, SEO,
              mobile experience, design, security, and conversion potential
              before investing in major changes.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#audit-form"
                className="inline-flex items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Request Audit <FiArrowRight />
              </a>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
              >
                Need a Website?
              </Link>
            </div>
          </motion.div>

          {/* Audit Packages */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-24"
          >

            <div className="grid gap-8 lg:grid-cols-3">
              {auditPackages.map((audit) => (
                <motion.article
                  key={audit.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="relative rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/50 hover:shadow-[0_0_60px_rgba(220,38,38,0.16)]"
                >
                  {audit.badge && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                      {audit.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-bold">{audit.name}</h3>

                  <p className="mt-4 text-5xl font-bold text-red-500">
                    {audit.price}
                  </p>

                  <p className="mt-4 leading-7 text-gray-400">
                    {audit.description}
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <ul className="space-y-4 text-gray-300">
                    {audit.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <FiCheckCircle className="mt-1 shrink-0 text-red-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => handleAuditSelect(`${audit.name} - ${audit.price}`)}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                  >
                    Request This Audit <FiArrowRight />
                  </button>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* What We Review */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-24"
          >
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                What We Review
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                A Clear Look at Your Website&apos;s Strengths and Weaknesses
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                A website audit helps uncover problems that may be hurting user
                experience, search visibility, trust, speed, or conversions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reviewAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <motion.article
                    key={area.title}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-white/10 bg-[#080808] p-7 transition hover:border-red-600/40 hover:shadow-[0_0_50px_rgba(220,38,38,0.14)]"
                  >
                    <Icon className="mb-5 text-5xl text-red-500" />

                    <h3 className="text-2xl font-bold">{area.title}</h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {area.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          {/* Why It Matters */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-24 rounded-2xl border border-white/10 bg-[#080808] p-8"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                  Why It Matters
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  Having a Website Is Not the Same as Having a Website That
                  Works
                </h2>
              </div>

              <div className="space-y-5 leading-8 text-gray-400">
                <p>
                  Many businesses already have a website, but that does not mean
                  the website is helping them generate leads, build trust, or
                  convert visitors into customers.
                </p>

                <p>
                  A professional audit gives you a clearer understanding of what
                  is working, what is holding the site back, and which
                  improvements should be prioritized first.
                </p>

                <p>
                  The goal is to give you practical recommendations, not
                  confusing technical jargon.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Deliverables + Form */}
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Deliverables */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-8"
            >
              <FiFileText className="mb-5 text-5xl text-red-500" />

              <h2 className="text-3xl font-bold">What You Receive</h2>

              <p className="mt-4 leading-7 text-gray-400">
                After the audit is completed, you receive a clear breakdown of
                findings and recommended next steps.
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-red-600/30 bg-red-950/20 p-5">
                <h3 className="font-bold text-red-400">After the Audit</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  If you want help implementing the recommendations, Redline
                  Systems Co. can provide a separate quote for website updates,
                  redesigns, optimization, or full rebuilds.
                </p>
              </div>
            </motion.section>

            {/* Form */}
            <motion.section
              id="audit-form"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-red-600/40 bg-[#080808] p-8 shadow-[0_0_60px_rgba(220,38,38,0.12)]"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Request Your Audit
              </p>

              <h2 className="text-3xl font-bold">Submit Your Website</h2>

              <p className="mt-4 leading-7 text-gray-400">
                Fill out the form below. Your website will be reviewed first,
                then an audit option and invoice will be sent before any work
                begins.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-600"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-600"
                    placeholder="https://example.com"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-600"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-600"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength="14"
                    className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-600"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    Audit Package
                  </label>

                  <select
                    name="auditType"
                    value={formData.auditType}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-600"
                  >
                    <option value="" disabled>Select an audit package</option>
                    <option value="Basic Audit - $49">Basic Audit - $49</option>
                    <option value="Professional Audit - $99">
                      Professional Audit - $99
                    </option>
                    <option value="Premium Audit - $199">
                      Premium Audit - $199
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    What concerns do you have?
                  </label>
                  <textarea
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleChange}
                    rows="5"
                    className="w-full resize-none rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-600"
                    placeholder="Tell me what you want reviewed or what problems you have noticed..."
                  />
                </div>

                {formStatus.message && (
                  <div
                    className={`rounded border px-4 py-3 text-sm ${
                      formStatus.type === "success"
                        ? "border-green-500/40 bg-green-950/30 text-green-300"
                        : formStatus.type === "error"
                        ? "border-red-500/40 bg-red-950/30 text-red-300"
                        : "border-white/10 bg-white/5 text-gray-300"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.type === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {formStatus.type === "loading"
                    ? "Submitting..."
                    : "Submit Audit Request"}
                  
                  <FiArrowRight />
                </button>
              </form>
            </motion.section>
          </div>

          {/* CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 rounded-2xl border border-red-600/30 bg-gradient-to-br from-red-950/30 to-black p-10 text-center"
          >
            <FiTrendingUp className="mx-auto mb-5 text-5xl text-red-500" />

            <h2 className="text-3xl font-bold md:text-5xl">
              Turn Website Problems Into a Clear Plan
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              A website audit gives you direction before spending money on
              random changes, redesigns, or marketing.
            </p>

            <a
              href="#audit-form"
              className="mt-8 inline-flex items-center gap-2 rounded bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Start Your Audit Request <FiArrowRight />
            </a>
          </motion.section>
        </section>
      </main>
    </>
  );
};

export default WebsiteAudit;