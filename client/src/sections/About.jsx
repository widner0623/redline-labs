import { FiZap, FiLock, FiTrendingUp, FiMonitor } from "react-icons/fi";
import useScrollAnimation from "../hooks/useScrollAnimation";

function ValueCard({ icon: Icon, title, text, delay }) {
  const {ref, visible } = useScrollAnimation({
    threshold: 0,
    rootMargin: "0px 0px -300px 0px",
  });

  return (
    <div
      ref={ref}
      style={{ animationDelay: visible ? delay : "0ms" }}
      className={`cursor-default group border border-gray-800 bg-[#0b0b0b] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-600/70 hover:shadow-[0_0_35px_rgba(220,38,38,0.15)] ${
        visible
          ? "opacity-100 animate-[slideInSoft_0.8s_cubic-bezier(0.22,1,0.36,1)_both]"
          : "opacity-0"
      }`}
    >
      <Icon className="mb-6 text-4xl text-red-500 transition-transform duration-300 group-hover:scale-110" />

      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {text}
      </p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-black px-6 py-38 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center cursor-default">
          <p className="mb-5 text-sm font-medium tracking-[0.25em] text-red-600">
            ABOUT REDLINE SYSTEMS CO.
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Building Tomorrow&apos;s Web, Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Custom websites, web applications, and digital solutions
            designed to help businesses attract customers, build
            credibility, and grow online.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon={FiZap}
            title="Performance First"
            text="Fast, optimized websites designed to deliver exceptional user experiences and strong performance."
            delay="0ms"
          />

          <ValueCard
            icon={FiMonitor}
            title="Responsive Design"
            text="Professional designs that look and function flawlessly across desktop, tablet, and mobile devices."
            delay="100ms"
          />

          <ValueCard
            icon={FiLock}
            title="Secure by Default"
            text="Built using modern security practices to help protect your business, data, and customers."
            delay="200ms"
          />

          <ValueCard
            icon={FiTrendingUp}
            title="Scalable Architecture"
            text="Flexible solutions designed to support growth, new features, and evolving business needs."
            delay="300ms"
          />
        </div>

        {/* Tech Stack */}
        <div className="mt-20 text-center">
          <h3 className="mb-8 text-3xl font-bold">
            Technology Stack
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["React", "Frontend"],
              ["Vite", "Build Tool"],
              ["Node.js", "Backend"],
              ["TypeScript", "Language"],
              ["Tailwind CSS", "Styling"],
              ["MongoDB", "Database"],
            ].map(([name, type]) => (
              <div
                key={name}
                className="cursor-default border border-gray-800 bg-[#0b0b0b] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/70 hover:shadow-[0_0_25px_rgba(220,38,38,0.12)]"
              >
                <p className="text-lg text-white">{name}</p>
                <p className="mt-1 text-sm text-gray-500">{type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-24 text-center cursor-default">
          <h3 className="mb-10 text-3xl font-bold">
            Why Choose Redline Systems Co?
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-xl font-semibold text-red-600">
                Direct Communication
              </h4>
              <p className="mx-auto max-w-xs leading-7 text-gray-400">
                Work directly with the developer building your project, ensuring clear communication and faster results.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-semibold text-red-600">
                Built Around Your Business
              </h4>
              <p className="mx-auto max-w-xs leading-7 text-gray-400">
                Every project is tailored to your goals, audience, and workflow rather than relying on one-size-fits-all solutions.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-semibold text-red-600">
                Quality That Lasts
              </h4>
              <p className="mx-auto max-w-xs leading-7 text-gray-400">
                Clean code, modern technologies, and scalable architecture built to support your business long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;