// components/packages/WhyChooseUs.tsx

export function WhyChooseUs() {
  const stats = [
    { value: "14+", label: "Safari Packages" },
    { value: "98%", label: "Happy Travelers" },
    { value: "24/7", label: "Travel Support" },
    { value: "Tanzania", label: "Top Destinations" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center"
          >
            <div className="text-4xl font-black text-[#0f3d2e]">
              {item.value}
            </div>

            <div className="mt-2 text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}