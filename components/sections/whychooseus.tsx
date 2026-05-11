// components/packages/WhyChooseUs.tsx

export function WhyChooseUs() {
  const stats = [
    { value: "14+", label: "Safari Packages" },
    { value: "98%", label: "Happy Travelers" },
    { value: "24/7", label: "Travel Support" },
    { value: "Tanzania", label: "Top Destinations" },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">
      {/* BACKGROUND ACCENT */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f7faf9] to-white" />

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)]"
          >
            {/* SOFT GLOW ON HOVER */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-safari-forest/10 via-transparent to-transparent" />

            {/* VALUE */}
            <div className="relative text-4xl md:text-5xl font-extrabold text-safari-forest tracking-tight">
              {item.value}
            </div>

            {/* LABEL */}
            <div className="relative mt-3 text-sm md:text-base text-gray-500 font-medium tracking-wide">
              {item.label}
            </div>

            {/* SUBTLE LINE ACCENT */}
            <div className="mt-6 mx-auto h-[2px] w-10 bg-gradient-to-r from-transparent via-safari-forest/30 to-transparent group-hover:w-16 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}