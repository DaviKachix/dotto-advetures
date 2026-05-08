// components/packages/FeaturedPackages.tsx

const packages = [
  {
    title: "Great Migration Safari",
    days: "8 Days",
    price: "$2400",
    image:
      "/images/lodge.jpg",
    link: "/packages/great-migration",
  },
  {
    title: "Luxury Lodge Safari",
    days: "6 Days",
    price: "$1960",
    image: "/images/african-elephants-together-nature.jpg",
    link: "/packages/luxury-lodge",
  },
  {
    title: "Machame Route Climb",
    days: "7 Days",
    price: "$1940",
    image:
      "/images/beautiful-scenery-yellow-tents-kilimanjaro-national-park(1).jpg",
    link: "/packages/machame-route",
  },
  {
    title: "Zanzibar Beach Holiday",
    days: "4 Nights",
    price: "$960",
    image: "/images/pexels-sergey-pesterev-69811391-8427984.jpg",
    link: "/packages/zanzibar",
  },
];

export function FeaturedPackages() {
  return (
    <section className="py-28 px-6 bg-safari-background relative overflow-hidden">

      {/* ambient background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-safari-accent blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-safari-forest blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* HEADER (GREEN THEME TEXT OUTSIDE CARDS) */}
        <div className="mb-16">
          <p className="text-safari-forest font-semibold uppercase tracking-[0.2em] text-xs">
            Featured Tours
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-safari-forest">
            Popular Travel Packages
          </h2>

          <p className="mt-5 text-safari-forest/70 max-w-2xl leading-relaxed">
            Carefully designed safari and adventure journeys blending wildlife,
            luxury stays, and iconic Tanzanian landscapes.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {packages.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-120 transition duration-700"
                />

                {/* dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>

              {/* CONTENT (PURE WHITE ON IMAGE FEEL) */}
              <div className="absolute bottom-0 p-6 text-white">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm mt-2">
                  {item.days} ·{" "}
                  <span className="text-white font-medium">
                    From {item.price}
                  </span>
                </p>

                <div className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur py-3 text-sm font-medium text-white transition hover:bg-white hover:text-safari-forest">
                  View Package
                </div>

              </div>

            </a>
          ))}

        </div>

        {/* MOBILE LAYERED SCROLL */}
        <div className="md:hidden flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory">

          {packages.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="relative flex-shrink-0 w-[290px] snap-center rounded-[30px] overflow-hidden shadow-2xl border border-white/10"
              style={{
                transform: i % 2 === 0 ? "translateY(0px)" : "translateY(10px)",
              }}
            >

              {/* IMAGE */}
              <div className="h-[380px] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* TEXT (PURE WHITE) */}
              <div className="absolute bottom-0 p-5 text-white">

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/80 text-xs mt-1">
                  {item.days} · From {item.price}
                </p>

                <div className="mt-4 inline-flex px-4 py-2 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur text-white">
                  View Package
                </div>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}