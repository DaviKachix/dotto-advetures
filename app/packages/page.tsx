export default function PackagesPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-safari-forest text-white text-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Airo Adventures & Safaris
        </h1>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Explore Tanzania with unforgettable travel packages
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#packages"
            className="bg-safari-sand text-safari-forest px-6 py-3 rounded-full font-semibold"
          >
            Plan My Trip
          </a>

          <a
            href="/contact"
            className="border border-white/30 px-6 py-3 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-6 text-center">
        <Stat label="Packages" value="14+" />
        <Stat label="Categories" value="4" />
        <Stat label="Destinations" value="Tanzania" />
        <Stat label="Travel Style" value="Private & Group" />
      </section>

      {/* FILTERS (UI placeholder) */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-3 text-sm">
          {["All Packages", "Safari", "Kilimanjaro", "Zanzibar", "Day Trips"].map(
            (f) => (
              <button
                key={f}
                className="border px-4 py-2 rounded-full hover:bg-gray-100"
              >
                {f}
              </button>
            )
          )}
        </div>
      </section>

      {/* SAFARI */}
      <PackageSection
        title="Safari Packages"
        subtitle="Wildlife experiences across Tanzania"
        packages={[
          {
            title: "Great Migration Safari",
            tag: "Popular",
            days: "8 Days",
            price: "$2400",
            desc: "Witness Tanzania’s iconic wildlife migration with guided game drives and lodge stays.",
          },
          {
            title: "Luxury Lodge Safari",
            tag: "Luxury",
            days: "6 Days",
            price: "$1960",
            desc: "Premium safari experience with elegant lodges and expert guides.",
          },
          {
            title: "Camping Safari",
            tag: "Affordable",
            days: "5 Days",
            price: "$1500",
            desc: "Close-to-nature safari with camping accommodation and game drives.",
          },
          {
            title: "Serengeti Lodge Safari",
            tag: "Top Pick",
            days: "6 Days",
            price: "$1950",
            desc: "Classic Serengeti safari with lodge comfort and wildlife focus.",
          },
        ]}
      />

      {/* KILIMANJARO */}
      <PackageSection
        title="Kilimanjaro Packages"
        subtitle="Mountain climbing adventures"
        packages={[
          {
            title: "Marangu Route Climb",
            tag: "Classic",
            days: "6 Days",
            price: "$1790",
            desc: "Comfortable hut-based climb via the famous Coca-Cola route.",
          },
          {
            title: "Machame Route Climb",
            tag: "Scenic",
            days: "7 Days",
            price: "$1940",
            desc: "Dramatic scenery and strong acclimatization profile.",
          },
          {
            title: "Rongai Route Climb",
            tag: "Quiet",
            days: "6 Days",
            price: "$1820",
            desc: "Less crowded northern route with peaceful trekking experience.",
          },
          {
            title: "Lemosho Route Climb",
            tag: "Premium",
            days: "10 Days",
            price: "$3190",
            desc: "Best acclimatization and premium summit experience.",
          },
        ]}
      />

      {/* ZANZIBAR */}
      <PackageSection
        title="Zanzibar Packages"
        subtitle="Beach relaxation and island escapes"
        packages={[
          {
            title: "Zanzibar Beach Holiday",
            tag: "Relax",
            days: "4 Nights",
            price: "$960",
            desc: "Beachside relaxation with island transfers and guided activities.",
          },
        ]}
      />

      {/* DAY TRIPS */}
      <PackageSection
        title="Day Trips"
        subtitle="Short adventures and experiences"
        packages={[
          {
            title: "Marangu Day Hike",
            tag: "Day Trip",
            days: "1 Day",
            price: "$300",
            desc: "Short Kilimanjaro hiking experience with guide support.",
          },
          {
            title: "Lemosho / Shira Plateau",
            tag: "Scenic",
            days: "1 Day",
            price: "$350",
            desc: "Beautiful mountain views and highland experience.",
          },
          {
            title: "Chemka Hot Springs",
            tag: "Relax",
            days: "1 Day",
            price: "$80",
            desc: "Natural turquoise hot springs near Moshi.",
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-safari-forest text-white text-center py-14 px-6 mt-16">
        <h2 className="text-3xl font-bold">Need Help Planning?</h2>
        <p className="mt-3 text-white/80 max-w-xl mx-auto">
          We design custom safari, Kilimanjaro, and Zanzibar itineraries based
          on your budget, time, and travel style.
        </p>

        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <a
            href="/contact"
            className="bg-safari-sand text-safari-forest px-6 py-3 rounded-full font-semibold"
          >
            Start Planning
          </a>

          <a
            href="/destinations"
            className="border border-white/30 px-6 py-3 rounded-full"
          >
            Explore Destinations
          </a>
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ label, value }: any) {
  return (
    <div className="border rounded-xl p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

function PackageSection({ title, subtitle, packages }: any) {
  return (
    <section id="packages" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-gray-500 mt-1">{subtitle}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {packages.map((p: any, i: number) => (
          <div key={i} className="border rounded-xl p-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <span className="text-xs border px-3 py-1 rounded-full">
                {p.tag}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              {p.days} • From {p.price} per person
            </p>

            <p className="mt-3 text-gray-700">{p.desc}</p>

            <div className="mt-5 flex gap-3">
              <button className="bg-safari-forest text-white px-4 py-2 rounded-full text-sm">
                View Package
              </button>

              <button className="border px-4 py-2 rounded-full text-sm">
                Inquire
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}