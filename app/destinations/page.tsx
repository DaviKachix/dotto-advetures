export default function DestinationsPage() {
  const destinations = [
    {
      title: "Serengeti National Park",
      subtitle: "Wildlife & Great Migration",
      image:
        "/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg",
      desc: "One of Africa’s most iconic safari destinations with endless plains and the Great Migration.",
    },
    {
      title: "Ngorongoro Crater",
      subtitle: "UNESCO World Heritage Site",
      image:
        "/images/reflection-lionesses-drinking-water-from-small-pond.jpg",
      desc: "A natural wonder filled with dense wildlife, crater views, and unforgettable safari experiences.",
    },
    {
      title: "Tarangire National Park",
      subtitle: "Elephants & Baobabs",
      image: "/images/african-elephants-together-nature.jpg",
      desc: "Known for giant elephant herds, baobab landscapes, and peaceful safari routes.",
    },
    {
      title: "Lake Manyara",
      subtitle: "Scenic & Diverse",
      image:
        "/images/beautiful-view-two-giraffes-grazing-by-trees-ol-pejeta-kenya.jpg",
      desc: "Home to flamingos, forests, tree-climbing lions and rich birdlife.",
    },
    {
      title: "Mount Kilimanjaro",
      subtitle: "Africa’s Highest Peak",
      image:
        "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
      desc: "World-famous mountain trekking destination with scenic climbing routes.",
    },
    {
      title: "Zanzibar",
      subtitle: "Luxury Island Escape",
      image: "/images/zanzibar-beach.jpg",
      desc: "White sandy beaches, turquoise waters and unforgettable island relaxation.",
    },
  ];

  return (
    <main className="bg-[#f7faf7] text-gray-800 overflow-hidden">
      {/* HERO */}
      
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/wide-angle-shot-giraffe-standing-tall-trees-savannah.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
<br></br>
<br></br>
<br></br>
<br></br>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0f3d2e]/70 to-black/70" />

        <div className="relative z-20 text-center px-6 max-w-5xl text-white">
          <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-sm mb-6">
            Explore Tanzania
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Extraordinary African Destinations
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover legendary safari landscapes, mountain adventures,
            breathtaking wildlife and luxury beach escapes across Tanzania.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/packages"
              className="bg-[#d6c6a5] text-[#0f3d2e] px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Packages
            </a>

            <a
              href="/contact"
              className="border border-white/20 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full hover:bg-white/20 transition"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#0f3d2e] font-semibold">
              Tanzania Travel Experiences
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
              Destinations Designed For Adventure
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              From the endless plains of Serengeti to the snow-capped summit
              of Kilimanjaro, Tanzania offers diverse landscapes and world-class
              travel experiences for safari lovers, climbers and beach explorers.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <InfoCard value="6+" label="Top Destinations" />
              <InfoCard value="Wildlife" label="Big Five Safaris" />
              <InfoCard value="Kilimanjaro" label="Mountain Treks" />
              <InfoCard value="Zanzibar" label="Island Escapes" />
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/close-shot-leopard-laying-tree-with-blue-sky-background.jpg"
              alt=""
              className="rounded-[32px] h-[650px] w-full object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white">
              <div className="text-3xl font-black">Northern Tanzania</div>

              <p className="mt-2 text-white/80">
                The heart of Tanzania’s most iconic safari experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <Highlight
            title="Wildlife Experiences"
            desc="Witness lions, elephants, giraffes, zebras and the Great Migration in iconic safari parks."
          />

          <Highlight
            title="Luxury & Adventure"
            desc="Blend premium lodges, mountain trekking and island relaxation into one unforgettable journey."
          />

          <Highlight
            title="Tailored Travel"
            desc="Custom itineraries designed around your comfort, time, and travel preferences."
          />
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-[#0f3d2e] font-semibold">
            Top Destinations
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Explore Tanzania
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {destinations.map((item, i) => (
            <DestinationCard key={i} {...item} />
          ))}
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="/images/buffalo-group-river.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0f3d2e]/80" />

        <div className="relative z-20 max-w-5xl mx-auto text-center text-white">
          <p className="font-semibold text-[#d6c6a5]">
            Featured Destination
          </p>

          <h2 className="text-5xl font-black mt-4">
            Ngorongoro Crater
          </h2>

          <p className="mt-6 text-lg text-white/80 leading-8 max-w-3xl mx-auto">
            One of Africa’s most remarkable safari destinations featuring
            dramatic crater landscapes, dense wildlife populations and
            unforgettable game drive experiences.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/packages"
              className="bg-[#d6c6a5] text-[#0f3d2e] px-7 py-4 rounded-full font-semibold"
            >
              Explore Safaris
            </a>

            <a
              href="/contact"
              className="border border-white/20 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black">
            Begin Your Tanzania Adventure
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            Whether you are planning a luxury safari, Kilimanjaro trek or
            Zanzibar escape, we help you create unforgettable travel experiences.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-[#0f3d2e] text-white px-7 py-4 rounded-full font-semibold"
            >
              Start Planning
            </a>

            <a
              href="/packages"
              className="border border-gray-200 px-7 py-4 rounded-full"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Highlight({ title, desc }: any) {
  return (
    <div className="bg-white rounded-[28px] border border-gray-100 p-8 shadow-sm">
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 text-gray-600 leading-7">
        {desc}
      </p>
    </div>
  );
}

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

function DestinationCard({ title, subtitle, image, desc }: any) {
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
          {subtitle}
        </div>

        <h3 className="text-2xl font-black mt-2">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {desc}
        </p>

        <button className="mt-6 bg-[#0f3d2e] text-white px-5 py-3 rounded-full text-sm hover:bg-[#14543f] transition">
          Explore Destination
        </button>
      </div>
    </div>
  );
}