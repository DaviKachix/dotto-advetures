export default function KilimanjaroPage() {
  const routes = [
    {
      title: "Lemosho Route",
      tag: "Scenic Premium Route",
      image: "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
      description:
        "One of Kilimanjaro’s most beautiful routes with quiet rainforest entry, wide landscapes, and excellent acclimatization for a safe and scenic summit journey.",
      accommodation:
        "Quality mountain tents with dining tent setup for meals, rest, and shelter throughout the climb.",
      meals:
        "Freshly prepared breakfast, lunch, and dinner served daily by the Dotto Adventures & Safaris mountain crew.",
      highlights:
        "Rainforest trek, Shira Plateau views, gradual ascent, high summit success rate.",
      duration: ["7 Days", "8 Days"],
      price: "From $2500",
    },
    {
      title: "Northern Circuit",
      tag: "Longest Scenic Route",
      image: "/images/pexels-balazsimon-15994039.jpg",
      description:
        "The longest Kilimanjaro route offering unmatched scenery, low traffic trails, and the best acclimatization profile on the mountain.",
      accommodation:
        "Full camping experience supported by professional guides, porters, and expedition crew.",
      meals:
        "Three daily meals prepared at altitude for energy, strength, and endurance.",
      highlights:
        "Remote trails, panoramic views, highest success rate, extended acclimatization.",
      duration: ["8–9 Days"],
      price: "From $3200",
    },
    {
      title: "Machame Route",
      tag: "Most Popular Route",
      image: "/images/pexels-wladimir-kuhne-670646709-19171295.jpg",
      description:
        "A classic Kilimanjaro route known for dramatic scenery, forest trails, and strong summit success rates.",
      accommodation:
        "Mountain tents with full dining setup and crew support at every camp.",
      meals:
        "Daily hot meals prepared by experienced mountain cooks from start to summit.",
      highlights:
        "Forest trails, lava tower, Barranco Wall, diverse ecosystems.",
      duration: ["6 Days", "7 Days"],
      price: "From $2065",
    },
    {
      title: "Marangu Route",
      tag: "Classic Hut Route",
      image: "/images/pexels-wladimir-kuhne-670646709-19168338.jpg",
      description:
        "The only Kilimanjaro route with hut accommodation, offering a structured and more comfortable climbing experience.",
      accommodation:
        "Shared mountain huts with sleeping and dining facilities along the route.",
      meals:
        "Breakfast, lunch, and dinner served daily with full mountain crew support.",
      highlights:
        "Hut stays, direct path, beginner-friendly structure, consistent trail.",
      duration: ["5 Days", "6 Days"],
      price: "From $2000",
    },
    {
      title: "Rongai Route",
      tag: "Quiet Northern Trail",
      image: "/images/lodge.jpg",
      description:
        "A calm northern approach near the Kenyan border with fewer crowds and a gradual ascent profile.",
      accommodation:
        "Camping tents fully supported by porters, guides, and cook team.",
      meals:
        "Daily mountain-prepared meals designed for altitude endurance.",
      highlights:
        "Remote wilderness, dry northern side, gradual climb, peaceful trail.",
      duration: ["5 Days", "6–7 Days"],
      price: "From $2150",
    },
    {
      title: "Umbwe Route",
      tag: "Steep Adventure Route",
      image: "/images/pexels-marri-shyam-366418-7463697.jpg",
      description:
        "A direct and steep route designed for experienced trekkers seeking a more intense Kilimanjaro ascent.",
      accommodation:
        "Fully supported camping with experienced guides and expedition logistics.",
      meals:
        "Full meal support provided throughout the climb for endurance and recovery.",
      highlights:
        "Steep ascent, fast approach, technical sections, demanding terrain.",
      duration: ["5–7 Days"],
      price: "From $2100",
    },
  ];

  const trips = [
    {
      title: "Lemosho / Shira Day Hike",
      image: "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
      duration: "1 Day",
      price: "$400",
      desc: "A scenic short hike offering Kilimanjaro views, rainforest trails, and highland atmosphere without summit commitment.",
    },
    {
      title: "Machame Day Trip",
      image: "/images/pexels-wladimir-kuhne-670646709-19168338.jpg",
      duration: "1 Day",
      price: "$350",
      desc: "A forest trail experience introducing Kilimanjaro ecosystems, nature, and altitude feel.",
    },
    {
      title: "Marangu Day Hike",
      image: "/images/pexels-balazsimon-15994039.jpg",
      duration: "1 Day",
      price: "$400",
      desc: "A classic route introduction through Marangu forest zone with mountain atmosphere experience.",
    },
    {
      title: "Marangu Overnight Trek",
      image: "/images/pexels-wladimir-kuhne-670646709-19168338.jpg",
      duration: "2 Days",
      price: "$800",
      desc: "A deeper mountain experience with hut overnight stay and extended trail exposure.",
    },
  ];

  return (
    <main className="bg-[#f7faf7] text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center">
        <img
          src="/images/pexels-balazsimon-15994039.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center text-white max-w-5xl px-6">
          <div className="text-sm mb-5 bg-white/10 inline-block px-4 py-2 rounded-full">
            Dotto African Adventures & Safaris
          </div>

          <h1 className="text-5xl md:text-7xl font-black">
            Climb Africa’s Highest Peak
          </h1>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Explore Mount Kilimanjaro through carefully structured routes,
            professional mountain crews, daily meals, and safe ascent planning
            designed for comfort, confidence, and a memorable summit experience.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="bg-[#0f3d2e] text-white px-7 py-4 rounded-full font-semibold"
            >
              Start Planning
            </a>

            <a
              href="/contact"
              className="bg-white/10 border border-white/20 px-7 py-4 rounded-full"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-black">
          Kilimanjaro Route Experiences
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Each route is carefully selected to match different climbing styles,
          fitness levels, and scenery preferences. Whether you prefer camping
          adventures or hut comfort, every journey is fully supported.
        </p>
      </section>

      {/* ROUTES */}
      <section className="max-w-7xl mx-auto px-6 pb-28 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {routes.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border hover:shadow-lg transition"
          >
            <img src={r.image} className="h-64 w-full object-cover" />

            <div className="p-6">
              <div className="text-sm text-[#0f3d2e] font-semibold">
                {r.tag}
              </div>

              <h3 className="text-2xl font-black mt-2">
                {r.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {r.description}
              </p>

              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p><strong>Accommodation:</strong> {r.accommodation}</p>
                <p><strong>Meals:</strong> {r.meals}</p>
                <p><strong>Highlights:</strong> {r.highlights}</p>
              </div>

              <div className="mt-5 flex gap-2 flex-wrap">
                {r.duration.map((d, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#eef5ef] text-[#0f3d2e] rounded-full text-sm"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="font-black text-[#0f3d2e]">
                  {r.price}
                </div>

                <a
                  href="/contact"
                  className="bg-[#0f3d2e] text-white px-4 py-2 rounded-full text-sm"
                >
                  Book Route
                </a>
              </div>
            </div>
          </div>
        ))}

      </section>

      {/* DAY TRIPS */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-black text-[#0f3d2e]">
            Kilimanjaro Day Experiences
          </h2>

          <p className="text-gray-600 mt-3">
            Short hiking options for travelers who want mountain views without full summit climbs.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {trips.map((t, i) => (
            <div
              key={i}
              className="bg-[#f8faf8] rounded-3xl overflow-hidden border"
            >
              <img src={t.image} className="h-56 w-full object-cover" />

              <div className="p-5">
                <div className="text-sm text-[#0f3d2e]">
                  {t.duration}
                </div>

                <h3 className="text-xl font-black mt-2">
                  {t.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {t.desc}
                </p>

                <div className="mt-4 font-black text-[#0f3d2e]">
                  {t.price}
                </div>

                <a
                  href="/contact"
                  className="mt-4 inline-block bg-[#0f3d2e] text-white px-4 py-2 rounded-full text-sm"
                >
                  Book Trip
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>

     {/* WHY SECTION */}
<section className="relative py-28 px-6 text-white overflow-hidden">

  {/* Background Image (low visibility) */}
  <img
    src="/images/pexels-balazsimon-15994039.jpg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0f3d2e]/95 via-[#0f3d2e]/90 to-[#0f3d2e]/95" />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto text-center">

    <span className="inline-block text-xs text-white tracking-widest uppercase bg-white/10 px-4 py-2 rounded-full mb-6">
      Mountain Experience
    </span>

    <h2 className="text-4xl md:text-5xl text-white  leading-tight">
      Why Climb With Dotto Adventures
    </h2>

    <p className="mt-6 text-white leading-relaxed max-w-3xl mx-auto">
      Every expedition is structured around safety, acclimatization,
      comfort, and professional mountain guidance. We focus on a smooth
      and supported summit journey from start to finish.
    </p>

    {/* Feature Grid */}
    <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition">
        <h3 className="font-bold text-lg">Expert Guides</h3>
        <p className="text-white/70 mt-2 leading-relaxed">
          Certified mountain guides with deep Kilimanjaro experience ensuring safety and success.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition">
        <h3 className="font-bold text-lg">Daily Meals</h3>
        <p className="text-white/70 mt-2 leading-relaxed">
          Freshly prepared meals every day designed to maintain strength and altitude performance.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition">
        <h3 className="font-bold text-lg">Full Support Crew</h3>
        <p className="text-white/70 mt-2 leading-relaxed">
          Dedicated porters, cooks, and logistics team supporting every stage of your climb.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-14">
      <a
        href="/contact"
        className="bg-white text-[#0f3d2e] px-8 py-4 rounded-full font-semibold hover:scale-105 transition inline-block"
      >
        Start Your Climb
      </a>
    </div>

  </div>
</section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 px-6 text-center">

        <h2 className="text-4xl font-black">
          Ready for the Summit?
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Plan your Kilimanjaro climb with structured routes, professional
          guidance, and full mountain support from Dotto African Adventures & Safaris.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-[#0f3d2e] text-white px-7 py-4 rounded-full"
          >
            Contact & Booking
          </a>

          <a
            href="/contact"
            className="border border-gray-300 px-7 py-4 rounded-full"
          >
            Get Custom Plan
          </a>
        </div>

      </section>

    </main>
  );
}