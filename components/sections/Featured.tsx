// components/packages/FeaturedPackages.tsx

const packages = [
  {
    title: "Great Migration Safari",
    days: "8 Days",
    price: "$2400",
    image: "/images/lodge.jpg",
    link: "/contact",
    location: "Serengeti National Park",
    badge: "Best Seller",
    description:
      "Follow the movement of thousands of wildebeest and zebras across the Serengeti ecosystem with unforgettable river crossings, golden savannah sunsets, and exceptional wildlife encounters.",
  },
  {
    title: "Luxury Lodge Safari",
    days: "6 Days",
    price: "$1960",
    image: "/images/african-elephants-together-nature.jpg",
    link: "/contact",
    location: "Ngorongoro & Tarangire",
    badge: "Luxury",
    description:
      "Stay in carefully selected safari lodges surrounded by nature while enjoying private game drives, Big Five experiences, fine dining, and peaceful evenings under African skies.",
  },
  {
    title: "Machame Route Climb",
    days: "7 Days",
    price: "$1940",
    image:
      "/images/beautiful-scenery-yellow-tents-kilimanjaro-national-park(1).jpg",
    link: "/contact",
    location: "Mount Kilimanjaro",
    badge: "Adventure",
    description:
      "Climb Africa’s highest mountain through rainforest, alpine desert, and glacier landscapes with experienced mountain crews, scenic camps, and breathtaking summit views.",
  },
  {
    title: "Zanzibar Beach Holiday",
    days: "4 Nights",
    price: "$960",
    image: "/images/zanzibar-beach.jpg",
    link: "/contact",
    location: "Zanzibar Island",
    badge: "Beach Escape",
    description:
      "Relax on white-sand beaches with turquoise Indian Ocean views, luxury beachfront stays, spice tours, cultural experiences, and romantic island sunsets.",
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
        {/* HEADER */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-safari-forest font-semibold uppercase tracking-[0.25em] text-xs">
              Featured Tours
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-safari-forest leading-tight">
              Signature Tanzania Travel Experiences
            </h2>

            <p className="mt-6 text-safari-forest/70 max-w-2xl leading-relaxed text-[15px]">
              Discover handcrafted safari adventures designed for travelers who
              want more than just sightseeing. From the Great Migration in
              Serengeti to luxury lodges, Kilimanjaro trekking, and Zanzibar
              beach escapes, every journey combines authentic experiences,
              comfort, wildlife, and unforgettable moments across Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 min-w-[280px]">
            {[
              ["15K+", "Happy Travelers"],
              ["4.9", "Guest Rating"],
              ["24/7", "Travel Support"],
              ["100%", "Customizable"],
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-safari-forest/10 bg-white/60 backdrop-blur-sm px-5 py-4"
              >
                <h3 className="text-2xl font-bold text-safari-forest">
                  {item[0]}
                </h3>

                <p className="text-sm text-safari-forest/70 mt-1">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
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
              <div className="relative h-[520px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full text-white object-cover scale-110 group-hover:scale-125 transition duration-700"
                />

                {/* cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                {/* badge */}
                <div className="absolute top-5 left-5 rounded-full bg-white/15 border border-white/20 backdrop-blur-md px-4 py-2">
                  <span className="text-white text-xs tracking-wide font-medium">
                    {item.badge}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-7 text-white">
                  <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-3">
                    {item.location}
                  </p>

                  <h3 className="text-2xl text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-white text-sm leading-7 mt-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-6 text-sm">
                    <span className="text-white/80">
                      {item.days}
                    </span>

                    <span className="font-semibold text-white">
                      From {item.price}
                    </span>
                  </div>

                  <div className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur py-3 text-sm font-medium text-white transition hover:bg-white hover:text-safari-forest">
                    Explore Journey
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* MOBILE SCROLL */}
        <div className="md:hidden flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory">
          {packages.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="relative flex-shrink-0 w-[310px] snap-center rounded-[30px] overflow-hidden shadow-2xl border border-white/10"
              style={{
                transform: i % 2 === 0 ? "translateY(0px)" : "translateY(10px)",
              }}
            >
              {/* IMAGE */}
              <div className="h-[500px] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* BADGE */}
              <div className="absolute top-5 left-5 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-2">
                <span className="text-white text-[11px] font-medium">
                  {item.badge}
                </span>
              </div>

              {/* TEXT */}
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-white/70 uppercase tracking-[0.2em] text-[10px] mb-2">
                  {item.location}
                </p>

                <h3 className="text-xl text-white ">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm mt-3 leading-6">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-5 text-sm">
                  <span className="text-white/80">
                    {item.days}
                  </span>

                  <span className="font-semibold">
                    From {item.price}
                  </span>
                </div>

                <div className="mt-5 inline-flex w-full items-center justify-center px-4 py-3 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur text-white">
                  Explore Journey
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}