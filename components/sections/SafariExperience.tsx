// components/packages/SafariExperiences.tsx

const experiences = [
  {
    title: "Wildlife Safaris",
    image: "/images/african-elephants-together-nature.jpg",
    desc: "Close encounters with Africa’s iconic wildlife in their natural habitat.",
  },
  {
    title: "Mountain Trekking",
    image:
      "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
    desc: "Guided climbs and scenic trekking adventures across Tanzania’s peaks.",
  },
  {
    title: "Beach Holidays",
    image: "/images/zanzibar-beach.jpg",
    desc: "Relax on Zanzibar’s pristine beaches with turquoise ocean views.",
  },
];

export function SafariExperiences() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      
      {/* HEADER */}
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="text-safari-forest font-semibold tracking-wide uppercase text-sm">
            Explore Experiences
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-safari-forest">
            Discover Tanzania
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            From wildlife safaris to mountain adventures and island escapes,
            explore experiences crafted for unforgettable journeys.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((item, i) => (
          <div
            key={i}
            className="group relative h-[440px] rounded-[28px] overflow-hidden shadow-safari transition-transform duration-500 hover:-translate-y-2"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover scale-105 group-hover:scale-115 transition duration-700 ease-out"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* SOFT ACCENT GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-t from-safari-forest/30 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-7 left-7 right-7 text-white">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-white/80 leading-6">
                {item.desc}
              </p>

              <button className="mt-5 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium transition hover:bg-white hover:text-safari-forest">
                Explore Experience
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}