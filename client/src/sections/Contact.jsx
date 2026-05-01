import { useState } from "react";
import { FiMail, FiPhone, FiMessageCircle, FiCheck, FiArrowRight } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa6";

function ContactCard({ icon: Icon, label, value }) {
  return (
    <div className="cursor-default group border-b-4 border-red-600 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-3xl text-red-600 transition group-hover:scale-110">
        <Icon />
      </div>
      <p className="mb-3 text-sm font-semibold tracking-widest text-gray-500">{label}</p>
      <p className="font-semibold text-black">{value}</p>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // phone formatter
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length <= 3) {
      return digits ? `(${digits}` : "";
    }

    if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }

    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  // UPDATED
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // validation
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    if (!phoneRegex.test(formData.phone)) {
      setStatus("error");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white px-6 py-38 text-black">
      <div className="cursor-default mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 text-sm font-medium tracking-[0.25em] text-red-600">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s Create Something
            <br />
            <span className="text-red-600">Extraordinary Together</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Have a project in mind? Let&apos;s discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          <ContactCard icon={FiMail} label="EMAIL" value="derrick.widner@icloud.com" />
          <ContactCard icon={FiPhone} label="PHONE" value="+1 (509) 336-8537" />
          <ContactCard icon={FiMessageCircle} label="LIVE CHAT" value="Coming Soon. . ." />
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="mb-5 text-3xl font-bold">Ready to Start?</h3>

            <p className="mb-8 max-w-xl leading-7 text-gray-600">
              Fill out the form and I&apos;ll get back to you within 24 hours.
              Let&apos;s discuss your project goals, timeline, and how we can work together.
            </p>

            <div className="mb-10 space-y-5">
              {["Free initial consultation", "Detailed project proposal", "Transparent pricing"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                    <FiCheck />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h4 className="mb-4 font-bold">Connect With Me</h4>

            <div className="flex gap-3">
              <a href="https://www.facebook.com/redlinesystemsco" target="_blank" rel="noreferrer" className="rounded-full text-2xl flex h-12 w-12 items-center justify-center bg-black text-white transition hover:bg-red-600">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/derrick-w-549757211/" target="_blank" rel="noreferrer" className="rounded-full text-2xl flex h-12 w-12 items-center justify-center bg-black text-white transition hover:bg-red-600">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/widner0623/" target="_blank" rel="noreferrer" className="rounded-full text-2xl flex h-12 w-12 items-center justify-center bg-black text-white transition hover:bg-red-600">
                <FaGithub />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-2xl">
            <div className="mb-6">
              <label className="mb-2 block font-semibold">Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="John Doe"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:scale-[1.01] focus:border-red-600 focus:bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-semibold">Phone *</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="(123) 456-7890"
                pattern="\(\d{3}\) \d{3}-\d{4}"
                maxLength="14"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:scale-[1.01] focus:border-red-600 focus:bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-semibold">Email *</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="john@example.com"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:scale-[1.01] focus:border-red-600 focus:bg-white"
              />
            </div>

            <div className="mb-8">
              <label className="mb-2 block font-semibold">Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                required
                className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:scale-[1.01] focus:border-red-600 focus:bg-white"
              />
            </div>

            {status === "success" && (
              <p className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-green-700">
                Message sent successfully. I&apos;ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-red-700">
                Please enter a valid phone number: (123) 456-7890
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;