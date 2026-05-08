export default function AboutPage() {
  const values = [
    {
      title: "Experienced Team",
      desc: "Professional guides, chefs and porters focused on safety, comfort and memorable experiences.",
    },
    {
      title: "Local Expertise",
      desc: "Deep understanding of Tanzania’s mountains, wildlife parks and travel experiences.",
    },
    {
      title: "Trusted Planning",
      desc: "Clear communication and structured itineraries from inquiry to summit or safari.",
    },
  ];

  return (
    <main className="bg-[#f7faf7] text-gray-800 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/back-view-african-american-male-watching-elephants-safari.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0f3d2e]/75 to-black/70" />

        <div className="relative z-20 text-center px-6 max-w-5xl text-white">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm mb-6">
            About Dotto African Adventures & Safaris
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Chase The Wild, Conquer The Sky
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Premium Kilimanjaro climbing and Tanzania safari experiences
            designed around trust, adventure, comfort and authentic local
            expertise.
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

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0f3d2e] font-semibold">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
              Authentic Tanzania Adventure Experiences
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Dotto African Adventures & Safaris specializes in Kilimanjaro
              trekking, wildlife safaris and unforgettable Tanzania travel
              experiences supported by professional mountain crews, guides and
              local experts.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Our focus is creating journeys that feel inspiring, smooth,
              organized and deeply connected to Tanzania’s natural beauty and
              culture.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <InfoCard value="Kilimanjaro" label="Mountain Adventures" />
              <InfoCard value="Safari" label="Wildlife Experiences" />
              <InfoCard value="Local" label="Expert Guides" />
              <InfoCard value="Premium" label="Travel Planning" />
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg"
              alt=""
              className="rounded-[32px] h-[650px] w-full object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white">
              <div className="text-3xl font-black">
                Tanzania Adventures
              </div>

              <p className="mt-2 text-white/80">
                Safari experiences and mountain journeys crafted with passion.
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
              What Defines Us
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

      {/* EXPERIENCE SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/images/african-elephants-together-nature.jpg"
              alt=""
              className="rounded-[32px] h-[650px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[#0f3d2e] font-semibold">
              Our Focus
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
              Kilimanjaro & Tanzania Safaris
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              We specialize in two unforgettable experiences: climbing Mount
              Kilimanjaro and exploring Tanzania’s world-famous safari parks
              including Serengeti, Ngorongoro and Tarangire.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              By combining local expertise with structured planning and
              personalized support, we create journeys that feel immersive,
              reliable and rewarding.
            </p>

            <div className="mt-8 space-y-4">
              <CheckItem text="Professional mountain crews and safari guides" />
              <CheckItem text="Camping and luxury safari experiences" />
              <CheckItem text="Personalized travel planning and support" />
              <CheckItem text="Authentic Tanzania adventures" />
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

      {/* STATS */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="/images/wide-angle-shot-giraffe-standing-tall-trees-savannah.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0f3d2e]/85" />

        <div className="relative z-20 max-w-7xl mx-auto text-white">
          <div className="text-center mb-16">
            <p className="text-[#d6c6a5] font-semibold">
              Why Travelers Choose Us
            </p>

            <h2 className="text-5xl font-black mt-3">
              Built Around Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <StatCard value="Kilimanjaro" label="Expert Treks" />
            <StatCard value="Safari" label="Wildlife Adventures" />
            <StatCard value="Local" label="Professional Guides" />
            <StatCard value="24/7" label="Travel Support" />
          </div>
        </div>
      </section>

      {/* MOTTO */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0f3d2e] font-semibold">
            Our Motto
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5 leading-tight">
            Chase the Wild, Conquer the Sky
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-9">
            A reflection of our passion for African wildlife adventures and
            the ambition of reaching the summit of Mount Kilimanjaro.
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

function FeatureCard({ title, desc }: any) {
  return (
    <div className="bg-[#f8faf8] rounded-[30px] border border-gray-100 p-8">
      <div className="w-14 h-14 rounded-2xl bg-[#0f3d2e] mb-6" />

      <h3 className="text-2xl font-black">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {desc}
      </p>
    </div>
  );
}

function CheckItem({ text }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#0f3d2e] flex items-center justify-center text-white text-xs">
        ✓
      </div>

      <span className="text-gray-700">
        {text}
      </span>
    </div>
  );
}

function StatCard({ value, label }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[30px] p-8 text-center">
      <div className="text-4xl font-black">
        {value}
      </div>

      <div className="mt-3 text-white/70">
        {label}
      </div>
    </div>
  );
}