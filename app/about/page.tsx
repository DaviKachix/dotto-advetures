
export default function AboutPage() {
  const values = [
    {
      title: "Experienced Team",
      desc: "Our guides, cooks, and mountain crew are trained in real field conditions, focused on safety, comfort, and meaningful travel experiences.",
    },
    {
      title: "Local Expertise",
      desc: "We were born and raised in Tanzania. We understand the land, the wildlife patterns, the mountains, and the culture deeply.",
    },
    {
      title: "Honest Planning",
      desc: "We provide clear itineraries, realistic expectations, and transparent communication from booking to the final day of your journey.",
    },
  ];

  return (
    <main className="bg-[#f7faf7] text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

        <img
          src="/images/back-view-african-american-male-watching-elephants-safari.jpg"
          alt="Safari experience in Tanzania"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0f3d2e]/75 to-black/70" />

        <div className="relative z-20 text-center px-6 max-w-5xl text-white">

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm mb-6">
            About Dotto African Adventures & Safaris
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            From Local Trails to Global Adventures
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Founded in 2023 in Tanzania, Dotto African Adventures & Safaris
            began as a small guiding effort driven by passion for nature and
            mountains. Today, we design authentic safaris and Kilimanjaro climbs
            that connect travelers with Africa’s wild beauty in a real and
            meaningful way.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/packages"
              className="bg-[#d6c6a5] text-[#0f3d2e] px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Adventures
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

      {/* INTRO / STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-[#0f3d2e] font-semibold">
              Our Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
              Built from the Ground, Guided by Experience
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              When we started in 2023, we were not a big company. We were a small
              team of local guides sharing what we knew best—Tanzania’s wildlife,
              mountains, and hidden paths.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Over time, travelers trusted us with their once-in-a-lifetime
              journeys. That trust shaped who we are today: a growing safari and
              trekking company focused on real experiences, not shortcuts.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <InfoCard value="2023" label="Founded in Tanzania" />
              <InfoCard value="Growing" label="Trusted by Travelers" />
              <InfoCard value="Local" label="Field-Based Team" />
              <InfoCard value="Real" label="On-Ground Experience" />

            </div>

          </div>

          <div className="relative">

            <img
              src="/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg"
              alt="Wildlife safari experience"
              className="rounded-[32px] h-[650px] w-full object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white">

              <div className="text-3xl font-black">
                Tanzania Through Real Experience
              </div>

              <p className="mt-2 text-white/80">
                Every journey is shaped by what we’ve lived in the field.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-[#0f3d2e] font-semibold">
              What Guides Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Our Core Values
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">

            <img
              src="/images/african-elephants-together-nature.jpg"
              alt="Safari wildlife experience"
              className="rounded-[32px] h-[650px] w-full object-cover"
            />

          </div>

          <div>

            <p className="text-[#0f3d2e] font-semibold">
              What We Focus On
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
              Safaris & Kilimanjaro Adventures
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              We specialize in two powerful experiences: wildlife safaris across
              Tanzania’s national parks and guided climbs to Mount Kilimanjaro,
              Africa’s highest peak.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Each journey is carefully prepared based on real field conditions,
              ensuring safety, comfort, and meaningful travel moments.
            </p>

            <div className="mt-8 space-y-4">

              <CheckItem text="Experienced local safari & mountain guides" />
              <CheckItem text="Safe, well-planned travel itineraries" />
              <CheckItem text="Small groups for better experience" />
              <CheckItem text="Authentic Tanzania travel encounters" />

            </div>

            <div className="mt-10 flex gap-4 flex-wrap">

              <a
                href="/kilimanjaro"
                className="bg-[#0f3d2e] text-white px-7 py-4 rounded-full font-semibold"
              >
                Explore Kilimanjaro
              </a>

              <a
                href="/packages"
                className="border border-gray-200 px-7 py-4 rounded-full"
              >
                Safari Packages
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* MOTTO */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#0f3d2e] font-semibold">
            Our Philosophy
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5 leading-tight">
            Travel Slowly. Feel Deeply.
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-9">
            We believe travel is not about rushing through destinations—it’s
            about connection, emotion, and lasting memories from real experiences.
          </p>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">

            <a
              href="/contact"
              className="bg-[#0f3d2e] text-white px-7 py-4 rounded-full font-semibold"
            >
              Start Your Adventure
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

/* COMPONENTS */
function InfoCard({ value, label }: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="text-2xl font-black text-[#0f3d2e]">{value}</div>
      <div className="text-gray-500 mt-1 text-sm">{label}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: any) {
  return (
    <div className="bg-[#f8faf8] rounded-[30px] border border-gray-100 p-8">
      <div className="w-14 h-14 rounded-2xl bg-[#0f3d2e] mb-6" />
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 text-gray-600 leading-7">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#0f3d2e] flex items-center justify-center text-white text-xs">
        ✓
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}