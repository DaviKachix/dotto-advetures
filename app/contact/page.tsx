export default function ContactPage() {
  const contacts = [
    {
      title: "WhatsApp",
      desc: "Fast responses for safari and Kilimanjaro planning.",
      value: "Chat on WhatsApp",
      image:
        "/images/back-view-african-american-male-watching-elephants-safari.jpg",
    },
    {
      title: "Phone",
      desc: "Direct support for bookings and route guidance.",
      value: "+255 787 031 075 ",
      image:
        "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
    },
    {
      title: "Email",
      desc: "Perfect for detailed travel inquiries and itineraries.",
      value: "hello@dottoafricanadventures.com",
      image:
        "/images/african-elephants-together-nature.jpg",
    },
    {
      title: "Location",
      desc: "Arusha, Tanzania — gateway to safari and Kilimanjaro.",
      value: "View Location",
      image:
        "/images/wide-angle-shot-giraffe-standing-tall-trees-savannah.jpg",
    },
  ];

  return (
    <main className="bg-[#f7faf7] text-gray-800 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/reflection-lionesses-drinking-water-from-small-pond.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0f3d2e]/75 to-black/70" />

        <div className="relative z-20 text-center px-6 max-w-5xl text-white">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm mb-6">
            Contact Dotto African Adventures & Safaris
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Start Planning Your Adventure
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Reach out for Kilimanjaro trekking advice, safari planning,
            Zanzibar holidays and custom Tanzania travel experiences.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#contact-form"
              className="bg-[#d6c6a5] text-[#0f3d2e] px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Send Inquiry
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0f3d2e] font-semibold">
              Travel Planning Support
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
              We Help You Plan The Right Journey
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Whether you are planning a safari, Kilimanjaro climb or Zanzibar
              escape, we help you choose the best routes, timing, accommodation
              and travel experience based on your goals and budget.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <InfoCard value="Safari" label="Travel Planning" />
              <InfoCard value="Kilimanjaro" label="Route Guidance" />
              <InfoCard value="Custom" label="Private Trips" />
              <InfoCard value="24/7" label="Support Team" />
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
                Professional planning for unforgettable travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <p className="text-[#0f3d2e] font-semibold">
            Direct Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Reach Our Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {contacts.map((item, i) => (
            <ContactCard key={i} {...item} />
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="bg-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* FORM */}
          <div>
            <p className="text-[#0f3d2e] font-semibold">
              Booking Inquiry
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Send Your Request
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Share your travel plans and we will help you create the best
              Kilimanjaro or safari experience.
            </p>

            <form className="mt-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  className="input-modern"
                  placeholder="Full Name"
                />

                <input
                  className="input-modern"
                  placeholder="Email Address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  className="input-modern"
                  placeholder="Phone / WhatsApp"
                />

                <select className="input-modern">
                  <option>Trip Type</option>
                  <option>Safari</option>
                  <option>Kilimanjaro</option>
                  <option>Zanzibar</option>
                  <option>Day Trip</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  className="input-modern"
                  placeholder="Number of Travelers"
                />

                <input
                  className="input-modern"
                  placeholder="Preferred Dates"
                />
              </div>

              <input
                className="input-modern"
                placeholder="Route or Destination"
              />

              <textarea
                className="input-modern min-h-[180px]"
                placeholder="Tell us about your adventure plans..."
              />

              <button
                type="button"
                className="w-full bg-[#0f3d2e] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* SIDE */}
          <div className="relative overflow-hidden rounded-[36px] min-h-[760px]">
            <img
              src="/images/closeup-lioness-licking-her-face-after-hunting-her-prey.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#0f3d2e]/80" />

            <div className="relative z-20 p-10 text-white h-full flex flex-col justify-between">
              <div>
                <p className="text-[#d6c6a5] font-semibold">
                  Why Contact Us Early
                </p>

                <h3 className="text-4xl font-black mt-4 leading-tight">
                  Better Planning Creates Better Adventures
                </h3>

                <p className="mt-6 text-white/80 leading-8 text-lg">
                  Early planning helps secure the best Kilimanjaro routes,
                  safari lodges, seasonal wildlife experiences and optimized
                  travel logistics.
                </p>
              </div>

              <div className="space-y-5 mt-12">
                <BenefitItem text="Kilimanjaro route recommendations" />
                <BenefitItem text="Safari season guidance" />
                <BenefitItem text="Luxury and budget travel options" />
                <BenefitItem text="Private and group trip planning" />
                <BenefitItem text="Flexible Tanzania itineraries" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTRA INFO */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="/images/buffalo-group-river.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0f3d2e]/85" />

        <div className="relative z-20 max-w-6xl mx-auto text-white text-center">
          <p className="text-[#d6c6a5] font-semibold">
            Helpful Inquiry Details
          </p>

          <h2 className="text-5xl font-black mt-3">
            What To Include
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <InfoBox text="Preferred travel dates" />
            <InfoBox text="Number of travelers" />
            <InfoBox text="Destination or route" />
            <InfoBox text="Budget or special requests" />
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

function ContactCard({
  title,
  desc,
  value,
  image,
}: any) {
  return (
    <div className="group bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-2 transition duration-500">
      <div className="overflow-hidden h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-black">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {desc}
        </p>

        <div className="mt-5 text-[#0f3d2e] font-semibold">
          {value}
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ text }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm">
        ✓
      </div>

      <span className="text-white/85">
        {text}
      </span>
    </div>
  );
}

function InfoBox({ text }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[28px] p-8">
      <div className="text-xl font-semibold leading-8">
        {text}
      </div>
    </div>
  );
}