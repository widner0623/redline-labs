function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-gray-800 bg-[#0a0a0a]/80 p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-red-600/70 hover:shadow-[0_0_35px_rgba(220,38,38,0.18)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 text-red-500 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110">
        <Icon className="text-2xl" />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-400">
        {desc}
      </p>
    </div>
  );
}

export default FeatureCard;