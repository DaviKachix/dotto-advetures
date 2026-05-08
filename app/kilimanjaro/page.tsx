export default function KilimanjaroPage() {
  const routes = [
    {
      title: "Lemosho Route",
      tag: "Scenic Premium Route",
      image:
        "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
      description:
        "One of Kilimanjaro’s most scenic routes with excellent acclimatization and breathtaking landscapes.",
      duration: ["7 Days", "8 Days"],
      price: "From $2500",
    },
    {
      title: "Machame Route",
      tag: "Most Popular Route",
      image:
        "/images/pexels-wladimir-kuhne-670646709-19171295.jpg",
      description:
        "Known for dramatic scenery, diverse ecosystems and strong summit success rates.",
      duration: ["6 Days", "7 Days"],
      price: "From $2065",
    },
    {
      title: "Marangu Route",
      tag: "Comfortable Hut Route",
      image:
        "/images/pexels-wladimir-kuhne-670646709-19168338.jpg",
      description:
        "The classic Coca-Cola route featuring hut accommodation and structured trekking.",
      duration: ["5 Days", "6 Days"],
      price: "From $2000",
    },
    {
      title: "Northern Circuit",
      tag: "Longest Scenic Route",
      image:
        "/images/pexels-balazsimon-15994039.jpg",
      description:
        "The most complete Kilimanjaro experience with quieter trails and premium acclimatization.",
      duration: ["8–9 Days"],
      price: "From $3200",
    },
    {
      title: "Rongai Route",
      tag: "Quiet Northern Trail",
      image:
        "/images/lodge.jpg",
      description:
        "A peaceful route approaching from the north with gradual ascent and beautiful landscapes.",
      duration: ["5–7 Days"],
      price: "From $2150",
    },
    {
      title: "Umbwe Route",
      tag: "Steep Adventure Route",
      image:
        "/images/pexels-marri-shyam-366418-7463697.jpg",
      description:
        "A more challenging and direct route suited for experienced trekkers.",
      duration: ["5–7 Days"],
      price: "From $2100",
    },
  ];

  const trips = [
    {
      title: "Marangu Day Hike",
      image:
        "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
      duration: "1 Day",
      price: "$400",
    },
    {
      title: "Machame Day Experience",
      image:
        "/images/pexels-wladimir-kuhne-670646709-19168338.jpg",
      duration: "1 Day",
      price: "$350",
    },
    {
      title: "Shira Plateau Hike",
      image:
        "/images/pexels-balazsimon-15994039.jpg",
      duration: "1 Day",
      price: "$400",
    },
    {
      title: "Marangu Overnight Trek",
      image:
        "/images/pexels-seyfidurmaz-5992142.jpg",
      duration: "2 Days",
      price: "$800",
    },
  ];

  return (
    <main className="bg-[#f7faf7] text-gray-800 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/pexels-balazsimon-15994039.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0f3d2e]/70 to-black/70" />

        <div className="relative z-20 text-center px-6 max-w-5xl text-white">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm mb-6">
            Mount Kilimanjaro Adventures
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Climb Africa’s Highest Peak
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover premium Kilimanjaro trekking routes with expert guides,
            scenic landscapes, mountain support crews and unforgettable summit
            experiences.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-[#d6c6a5] text-[#0f3d2e] px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Book Your Climb
            </a>

            <a
              href="/packages"
              className="border border-white/20 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full hover:bg-white/20 transition"
            >
              Explore Packages
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#0f3d2e] font-semibold">
              Kilimanjaro Experiences
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
              Premium Mountain Adventures
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Experience Mount Kilimanjaro through carefully designed trekking
              routes offering incredible scenery, professional support teams,
              quality mountain equipment and strong summit success rates.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <InfoCard value="5895m" label="Africa’s Highest Peak" />
              <InfoCard value="6+" label="Climbing Routes" />
              <InfoCard value="Camping" label="Mountain Experience" />
              <InfoCard value="Expert" label="Mountain Guides" />
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/pexels-wladimir-kuhne-670646709-19171295.jpg"
              alt=""
              className="rounded-[32px] h-[650px] w-full object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white">
              <div className="text-3xl font-black">
                Summit Experiences
              </div>

              <p className="mt-2 text-white/80">
                Scenic trekking routes with unforgettable mountain views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-[#0f3d2e] font-semibold">
            Kilimanjaro Routes
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Choose Your Route
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {routes.map((route, i) => (
            <RouteCard key={i} {...route} />
          ))}
        </div>
      </section>

      {/* DAY TRIPS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#0f3d2e] font-semibold">
              Short Experiences
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Kilimanjaro Day Trips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {trips.map((trip, i) => (
              <DayTripCard key={i} {...trip} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="/images/pexels-balazsimon-15994039.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0f3d2e]/85" />

        <div className="relative z-20 max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <p className="text-white font-semibold">
              Why Trek With Us
            </p>

            <h2 className="text-5xl text-white font-black mt-3">
              Mountain Support You Can Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <WhyCard
              title="Professional Guides"
              desc="Experienced mountain crews focused on safety and summit success."
            />

            <WhyCard
              title="Quality Equipment"
              desc="Reliable camping equipment and mountain logistics support."
            />

            <WhyCard
              title="Daily Mountain Meals"
              desc="Freshly prepared meals designed for trekking performance."
            />

            <WhyCard
              title="Flexible Routes"
              desc="Camping and hut options for different trekking styles."
            />
          </div>

          <div className="mt-12 text-center text-white/70">
            Recommended Tips — Guide: $20+ • Cook: $15+ • Porter: $10+
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black">
            Ready For The Summit?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            Start planning your Kilimanjaro climb with route guidance,
            accommodation planning and expert trekking support.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-[#0f3d2e] text-white px-7 py-4 rounded-full font-semibold"
            >
              Plan Your Trek
            </a>

            <a
              href="/destinations"
              className="border border-gray-200 px-7 py-4 rounded-full"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function InfoCard({ value, label }: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="text-2xl font-black text-[#0f3d2e]">
        {value}
      </div>

      <div className="text-gray-500 mt-1 text-sm">
        {label}
      </div>
    </div>
  );
}

function RouteCard({
  title,
  tag,
  image,
  description,
  duration,
  price,
}: any) {
  return (
    <div className="group bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-2 transition duration-500">
      <div className="overflow-hidden h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-7">
        <div className="text-sm text-[#0f3d2e] font-semibold">
          {tag}
        </div>

        <h3 className="text-2xl font-black mt-2">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {duration.map((d: string, i: number) => (
            <span
              key={i}
              className="bg-[#eef5ef] text-[#0f3d2e] px-4 py-2 rounded-full text-sm"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">
              Starting From
            </div>

            <div className="text-2xl font-black text-[#0f3d2e]">
              {price}
            </div>
          </div>

          <button className="bg-[#0f3d2e] text-white px-5 py-3 rounded-full text-sm">
            Book Route
          </button>
        </div>
      </div>
    </div>
  );
}

function DayTripCard({
  title,
  image,
  duration,
  price,
}: any) {
  return (
    <div className="group bg-[#f8faf8] rounded-[28px] overflow-hidden border border-gray-100">
      <div className="overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-6">
        <div className="text-sm text-[#0f3d2e] font-semibold">
          {duration}
        </div>

        <h3 className="text-xl font-black mt-2">
          {title}
        </h3>

        <div className="mt-5 text-2xl font-black text-[#0f3d2e]">
          {price}
        </div>

        <button className="mt-5 w-full bg-[#0f3d2e] text-white py-3 rounded-full">
          Explore Trip
        </button>
      </div>
    </div>
  );
}

function WhyCard({ title, desc }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[28px] p-8">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-white/75 leading-7">
        {desc}
      </p>
    </div>
  );
}