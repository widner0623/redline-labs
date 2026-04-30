import { FiArrowRight } from "react-icons/fi";
import useScrollAnimation from "../hooks/useScrollAnimation";

function ServiceCard({ title, description, items, delay = "0ms" }) {
  const { ref, visible } = useScrollAnimation({
    threshold: 0,
    rootMargin: "0px 0px -450px 0px",
  });

  return (
    <div
      ref={ref}
      style={{ animationDelay: visible ? delay : "0ms" }}
      className={`group border border-gray-300 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_20px_45px_rgba(220,38,38,0.12)] ${
        visible
          ? "opacity-100 scale-100 animate-[servicePop_0.9s_cubic-bezier(0.22,1,0.36,1)_both]"
          : "opacity-0 scale-95"
      }`}
    >
      <div className="mb-8 h-1 w-12 bg-red-600 transition-all duration-300 group-hover:w-20" />

      <h3 className="mb-5 text-2xl font-bold text-black transition-colors duration-300 group-hover:text-red-600">
        {title}
      </h3>

      <p className="mb-8 leading-7 text-gray-600">
        {description}
      </p>

      <ul className="space-y-4 text-gray-600">
        {items.map((item) => (
          <li key={item} className="group/item flex items-center gap-2">
            <FiArrowRight className="text-red-600 transition-transform duration-300 group-hover/item:translate-x-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white px-6 py-38 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center cursor-default">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-red-600">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            What We Do Best
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Full-stack web development services tailored to your unique business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-default">
          <ServiceCard
            delay="0ms"
            title="Web Development"
            description="Custom websites and web applications built with modern technologies like React, Next.js, and Node.js."
            items={["Responsive Design", "Performance Optimization", "SEO-Friendly"]}
          />

          <ServiceCard
            delay="120ms"
            title="UI/UX Design"
            description="Beautiful, intuitive interfaces that users love and that align with your brand identity."
            items={["User Research", "Prototyping", "Design Systems"]}
          />

          <ServiceCard
            delay="220ms"
            title="Frontend Development"
            description="Dynamic, interactive user interfaces built with cutting-edge JavaScript frameworks."
            items={["React & Next.js", "TypeScript", "Tailwind CSS"]}
          />

          <ServiceCard
            delay="320ms"
            title="Backend Development"
            description="Robust server-side solutions and APIs that power your applications reliably."
            items={["RESTful APIs", "Database Design", "Authentication"]}
          />

          <ServiceCard
            delay="420ms"
            title="Web Applications"
            description="Full-stack web applications with seamless user experiences and powerful functionality."
            items={["Real-time Features", "Cloud Integration", "Scalable Architecture"]}
          />

          <ServiceCard
            delay="520ms"
            title="Consulting & Strategy"
            description="Expert guidance to help you make the right technical decisions for your business."
            items={["Tech Stack Selection", "Architecture Planning", "Code Reviews"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;