import { FiZap, FiPenTool, FiLock, FiTrendingUp } from "react-icons/fi";
import useScrollAnimation from "../hooks/useScrollAnimation";

function ValueCard({ icon: Icon, title, text, delay }) {
  const {ref, visible } = useScrollAnimation({
    threshold: 0,
    rootMargin: "0px 0px -500px 0px",
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
            ABOUT REDLINE LABS
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Building Tomorrow&apos;s Web, Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A modern web development studio focused on creating exceptional
            digital experiences through clean code, stunning design, and
            cutting-edge technology.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon={FiZap}
            title="Performance First"
            text="Optimized code for lightning-fast load times"
            delay="0ms"
          />

          <ValueCard
            icon={FiPenTool}
            title="Pixel Perfect"
            text="Designs that look stunning on every device"
            delay="100ms"
          />

          <ValueCard
            icon={FiLock}
            title="Secure by Default"
            text="Built with security best practices from day one"
            delay="200ms"
          />

          <ValueCard
            icon={FiTrendingUp}
            title="Scalable Architecture"
            text="Solutions that grow with your business"
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
              ["Next.js", "Framework"],
              ["Node.js", "Backend"],
              ["TypeScript", "Language"],
              ["Tailwind CSS", "Styling"],
              ["PostgreSQL", "Database"],
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
            Why Choose Redline Labs?
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-xl font-semibold text-red-600">
                Direct Communication
              </h4>
              <p className="mx-auto max-w-xs leading-7 text-gray-400">
                Work directly with an experienced developer, no middlemen or account managers.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-semibold text-red-600">
                Agile & Flexible
              </h4>
              <p className="mx-auto max-w-xs leading-7 text-gray-400">
                Quick iterations and adaptable processes that fit your timeline and budget.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-semibold text-red-600">
                Quality Focused
              </h4>
              <p className="mx-auto max-w-xs leading-7 text-gray-400">
                Every line of code is crafted with care, ensuring long-term maintainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;