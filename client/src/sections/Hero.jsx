import { FiArrowRight, FiCode, FiZap, FiLayers } from "react-icons/fi";
import FeatureCard from "../components/FeatureCard";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-15 bg-black text-white">
      {/* Background glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-900/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
        {/* Badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-2 text-sm font-medium tracking-widest text-red-500 animate-[fadeUp_0.7s_ease-out_forwards]">
          <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)]" />
          WEB DEVELOPMENT EXCELLENCE
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-tight tracking-tight opacity-0 animate-[fadeUp_0.8s_ease-out_0.1s_forwards] md:text-7xl">
          Building the Future,
          <br />
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
            One Line at a Time
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] md:text-lg">
          Custom websites, business systems, and digital solutions built for
          speed, clarity, and growth. Redline Labs helps businesses turn ideas
          into powerful online experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards] sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-7 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]"
          >
            Start Your Project
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#services"
            className="rounded-lg border border-gray-700 px-7 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-red-600/70 hover:bg-white/5"
          >
            View Services
          </a>
        </div>

        {/* Cards */}
        <div className="mt-18 grid gap-6 opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards] md:grid-cols-3">
          <FeatureCard
            icon={FiZap}
            title="Lightning Fast"
            desc="Optimized websites that load quickly, feel smooth, and keep visitors engaged."
          />

          <FeatureCard
            icon={FiCode}
            title="Clean Development"
            desc="Built with organized code, modern tools, and scalable structure from day one."
          />

          <FeatureCard
            icon={FiLayers}
            title="Business Focused"
            desc="Designed around real business goals: leads, trust, conversions, and growth."
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;