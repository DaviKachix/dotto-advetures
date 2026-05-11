"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  ShieldCheck,
  Users,
  Camera,
  Mountain,
  Palmtree,
  Compass,
  Check,
  Star,
  Plane,
  Binoculars,
  Sun,
  Waves,
  Trees,
} from "lucide-react";

const categories = [
  "All Packages",
  "Safari",
  "Kilimanjaro",
  "Zanzibar",
  "Day Trips",
];

const featuredPackages = [
  {
    category: "Safari",
    title: "Great Migration Safari",
    duration: "8 Days",
    price: "$2400",
    image:
      "/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg",
    badge: "Most Booked",
    description:
      "Experience the world-famous Great Wildebeest Migration in Serengeti National Park with luxury lodges, expert guides, and unforgettable wildlife encounters.",
    highlights: [
      "Serengeti & Ngorongoro",
      "4x4 Land Cruiser",
      "Luxury lodges",
      "Big Five game drives",
    ],
  },
  {
    category: "Safari",
    title: "Luxury Lodge Safari",
    duration: "6 Days",
    price: "$1960",
    image: "/images/african-elephants-together-nature.jpg",
    badge: "Luxury",
    description:
      "Premium safari adventure designed for travelers seeking elegant accommodation, comfort, and exceptional wildlife experiences.",
    highlights: [
      "Premium lodges",
      "Airport transfers",
      "Professional guide",
      "All park fees included",
    ],
  },
  {
    category: "Kilimanjaro",
    title: "Machame Route Climb",
    duration: "7 Days",
    price: "$1940",
    image: "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
    badge: "Scenic Route",
    description:
      "Climb Africa’s highest mountain through the scenic Machame Route with experienced mountain guides and full support crew.",
    highlights: [
      "Camping equipment",
      "Mountain crew",
      "Rescue fees included",
      "Summit support",
    ],
  },
  {
    category: "Zanzibar",
    title: "Zanzibar Beach Holiday",
    duration: "4 Nights",
    price: "$960",
    image: "/images/zanzibar.jpg",
    badge: "Beach Escape",
    description:
      "Relax on Zanzibar’s white-sand beaches with tropical resorts, ocean activities, and guided island experiences.",
    highlights: [
      "Beach resorts",
      "Island transfers",
      "Ocean excursions",
      "Flexible itinerary",
    ],
  },
];

const safariPackages = [
  {
    title: "Great Migration Safari",
    duration: "8 Days",
    price: "$2400",
    tag: "Popular",
    desc: "Witness river crossings, predators, and massive wildebeest herds across Serengeti.",
  },
  {
    title: "Luxury Lodge Safari",
    duration: "6 Days",
    price: "$1960",
    tag: "Luxury",
    desc: "Elegant safari lodges with premium wildlife experiences and private game drives.",
  },
  {
    title: "Camping Safari",
    duration: "5 Days",
    price: "$1500",
    tag: "Affordable",
    desc: "Authentic outdoor safari with camping accommodation and immersive nature experiences.",
  },
  {
    title: "Serengeti Lodge Safari",
    duration: "6 Days",
    price: "$1950",
    tag: "Top Pick",
    desc: "Classic Serengeti safari focused on wildlife, comfort, and scenic landscapes.",
  },
  {
    title: "5-Night Safari Tour",
    duration: "5 Nights",
    price: "$1560",
    tag: "Best Value",
    desc: "Balanced Tanzania safari with smooth travel logistics and comfortable stays.",
  },
  {
    title: "6-Night Safari Tour",
    duration: "6 Nights",
    price: "$1690",
    tag: "Extended",
    desc: "Longer safari experience designed for deeper wildlife exploration.",
  },
];

const kilimanjaroPackages = [
  {
    title: "Marangu Route Climb",
    duration: "6 Days",
    price: "$1790",
    tag: "Classic Route",
  },
  {
    title: "Machame Route Climb",
    duration: "7 Days",
    price: "$1940",
    tag: "Scenic Route",
  },
  {
    title: "Rongai Route Climb",
    duration: "6 Days",
    price: "$1820",
    tag: "Quiet Route",
  },
  {
    title: "Lemosho Route Climb",
    duration: "10 Days",
    price: "$3190",
    tag: "Premium Trek",
  },
];

const dayTrips = [
  {
    title: "Marangu Day Hike",
    duration: "1 Day",
    price: "$300",
  },
  {
    title: "Lemosho / Shira Plateau",
    duration: "1 Day",
    price: "$350",
  },
  {
    title: "Chemka Hot Springs",
    duration: "1 Day",
    price: "$80",
  },
];

const parks = [
  "Serengeti National Park",
  "Ngorongoro Crater",
  "Tarangire National Park",
  "Lake Manyara",
  "Arusha National Park",
  "Lake Natron",
  "Ruaha National Park",
  "Nyerere National Park",
];

const bestMonths = [
  {
    season: "January – March",
    title: "Calving Season",
    desc: "Perfect for wildebeest calving, predator action, and green landscapes.",
  },
  {
    season: "June – October",
    title: "Dry Season Safari",
    desc: "Best wildlife visibility with excellent game viewing and river crossings.",
  },
  {
    season: "November – December",
    title: "Green Season",
    desc: "Fewer crowds, beautiful scenery, and discounted safari experiences.",
  },
];

export default function PackagesPage() {
  return (
    <main className="bg-white text-gray-800 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg"
            alt="Tanzania Safari"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-emerald-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white mb-6">
              <Compass className="w-4 h-4" />
              Tanzania Safari & Adventure Packages 2026–2027
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
              Discover Tanzania With Premium Safari Experiences
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              Explore Serengeti, Ngorongoro, Kilimanjaro, Zanzibar, and
              Tanzania’s most breathtaking destinations with carefully designed
              safari tours, mountain treks, beach holidays, and cultural
              adventures.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#packages"
                className="bg-safari-sand text-safari-forest px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Explore Packages
              </Link>

              <Link
                href="/contact"
                className="border border-white/30 text-white px-7 py-4 rounded-full hover:bg-white/10 transition"
              >
                Plan Custom Safari
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
              <HeroStat value="14+" label="Safari Packages" />
              <HeroStat value="Big Five" label="Wildlife Experiences" />
              <HeroStat value="Kilimanjaro" label="Mountain Treks" />
              <HeroStat value="Zanzibar" label="Beach Escapes" />
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-auto">
          {categories.map((item) => (
            <button
              key={item}
              className="whitespace-nowrap px-5 py-2 rounded-full border border-gray-200 hover:bg-safari-forest hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-safari-forest font-semibold uppercase tracking-widest text-sm">
              Tanzania Safari Guide
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
              Wildlife, Mountains & Beaches In One Destination
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Tanzania is one of Africa’s most iconic travel destinations,
              offering unforgettable safari experiences across Serengeti,
              Ngorongoro Crater, Tarangire, Lake Manyara, and beyond. Travelers
              can witness the Great Wildebeest Migration, explore volcanic
              landscapes, climb Mount Kilimanjaro, and relax on the white sandy
              beaches of Zanzibar.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Whether you are planning a luxury honeymoon safari, family
              adventure, photography expedition, private safari, or affordable
              group trip, Dotto African Adventures & Safaris provides
              personalized itineraries designed around your travel style,
              comfort, and budget.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <Feature
                icon={<ShieldCheck className="w-5 h-5" />}
                text="Professional safari guides"
              />
              <Feature
                icon={<Plane className="w-5 h-5" />}
                text="Airport transfers included"
              />
              <Feature
                icon={<Binoculars className="w-5 h-5" />}
                text="Big Five wildlife experiences"
              />
              <Feature
                icon={<Users className="w-5 h-5" />}
                text="Private & group tours"
              />
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden h-[550px] shadow-2xl">
            <Image
              src="/images/african-elephants-together-nature.jpg"
              alt="Safari"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Star className="w-4 h-4 fill-current" />
                Trusted Tanzania Travel Experiences
              </div>

              <h3 className="text-3xl font-bold mt-3">
                Explore Africa’s Most Iconic Safari Destination
              </h3>
            </div>
          </div>
        </div>
      </section>
{/* FEATURED PACKAGES */}
<section
  id="packages"
  className="bg-gray-50 py-20 border-y border-gray-100 overflow-hidden"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto px-6">
      <span className="text-safari-forest uppercase tracking-widest text-sm font-semibold">
        Featured Experiences
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-4">
        Popular Tanzania Travel Packages
      </h2>

      <p className="text-gray-600 mt-5 leading-8">
        Carefully curated safari, mountain, beach, and adventure packages
        built for different budgets, travel styles, and unforgettable
        African experiences.
      </p>
    </div>

    {/* HORIZONTAL SCROLL */}
    <div className="mt-14 overflow-x-auto scrollbar-hide scroll-smooth px-6">
      <div className="flex gap-8 min-w-max snap-x snap-mandatory pb-4">
        {featuredPackages.map((item, index) => (
          <div
            key={index}
            className="group w-[360px] md:w-[520px] shrink-0 snap-start bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* BADGE */}
              <div className="absolute top-5 left-5 bg-safari-sand text-safari-forest text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                {item.badge}
              </div>

              {/* CATEGORY */}
              <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full">
                {item.category}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <CalendarDays className="w-4 h-4" />
                  {item.duration}
                </div>

                <h3 className="text-3xl font-black mt-3 leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* BODY */}
            <div className="p-8">
              {/* PRICE */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    Starting From
                  </div>

                  <div className="text-3xl font-black text-safari-forest mt-1">
                    {item.price}
                  </div>
                </div>

                <div className="bg-safari-forest/10 text-safari-forest px-4 py-2 rounded-full text-sm font-semibold">
                  Customizable
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 text-gray-600 leading-7">
                {item.description}
              </p>

              {/* HIGHLIGHTS */}
              <div className="grid sm:grid-cols-2 gap-3 mt-7">
                {item.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-xl px-3 py-3"
                  >
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="flex-1 bg-safari-forest text-white px-6 py-4 rounded-full font-semibold text-center hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                >
                  Get Custom Itinerary
                </Link>

                <Link
                  href="https://wa.me/255620517139"
                  target="_blank"
                  className="flex-1 border border-gray-300 px-6 py-4 rounded-full font-semibold text-center hover:bg-gray-100 transition-all duration-300"
                >
                  Talk To Safari Expert
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* PACKAGE SECTIONS */}
      <PackageGrid
        title="Safari Packages"
        icon={<Camera className="w-6 h-6" />}
        description="Explore Tanzania’s legendary wildlife destinations including Serengeti, Ngorongoro, Tarangire, and Lake Manyara."
        items={safariPackages}
      />

      <PackageGrid
        title="Kilimanjaro Climbing Packages"
        icon={<Mountain className="w-6 h-6" />}
        description="Climb Africa’s highest mountain through world-famous routes with experienced guides and professional mountain crews."
        items={kilimanjaroPackages}
      />

      <PackageGrid
        title="Day Trips & Excursions"
        icon={<Trees className="w-6 h-6" />}
        description="Short adventures around Moshi, Arusha, and Kilimanjaro for travelers with limited time."
        items={dayTrips}
      />

{/* BEST TIME */}
<section className="bg-safari-forest text-white py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="max-w-3xl">
      <span className="uppercase tracking-widest text-white/60 text-sm font-semibold">
        Travel Seasons
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-4">
        Best Time To Visit Tanzania
      </h2>

      <p className="mt-6 text-white/80 leading-8">
        Tanzania safaris operate throughout the year, but each season
        offers unique wildlife experiences, weather conditions, and travel
        opportunities.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-14">
      {bestMonths.map((item, i) => (
        <div
          key={i}
          className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 text-white"
        >
          <div className="text-sm uppercase tracking-widest text-white/70">
            {item.season}
          </div>

          <h3 className="text-2xl font-bold mt-3 text-white">
            {item.title}
          </h3>

          <p className="text-white/80 mt-4 leading-7">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* PARKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-widest text-safari-forest text-sm font-semibold">
              Destinations
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Tanzania National Parks
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Explore iconic African landscapes filled with wildlife,
              breathtaking scenery, volcanic craters, lakes, savannahs, and
              unforgettable safari moments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {parks.map((park, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-[1.5rem] p-6 hover:shadow-xl transition"
              >
                <MapPin className="w-8 h-8 text-safari-forest" />

                <h3 className="font-bold text-lg mt-5">{park}</h3>

                <p className="text-gray-500 mt-3 text-sm leading-7">
                  Wildlife experiences, landscapes, photography opportunities,
                  and unforgettable African adventures.
                </p>
<Link
  href="/contact"
  className="mt-6 inline-flex items-center gap-2 text-safari-forest font-semibold hover:gap-3 transition-all duration-300"
>
  Talk To Us About This Destination →
</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-[520px] rounded-[2rem] overflow-hidden">
            <Image
              src="/images/pexels-sergey-pesterev-69811391-8427984.jpg"
              alt="Zanzibar"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Waves className="w-4 h-4" />
                Safari • Kilimanjaro • Zanzibar
              </div>

              <h3 className="text-3xl font-bold mt-3">
                Complete Tanzania Adventure Experiences
              </h3>
            </div>
          </div>

          <div>
            <span className="uppercase tracking-widest text-safari-forest text-sm font-semibold">
              Why Travel With Us
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Personalized Safari Planning With Expert Support
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We create seamless safari experiences combining wildlife,
              mountain trekking, cultural encounters, beach holidays, and luxury
              accommodation. Every journey is tailored to your interests,
              schedule, and comfort level.
            </p>

            <div className="space-y-5 mt-10">
              <InfoRow
                icon={<Sun className="w-5 h-5" />}
                title="Year-Round Safari Experiences"
                text="Travel during the dry season, green season, migration period, or calving season."
              />

              <InfoRow
                icon={<Users className="w-5 h-5" />}
                title="Private & Family Safaris"
                text="Perfect for couples, families, solo travelers, photographers, and groups."
              />

              <InfoRow
                icon={<ShieldCheck className="w-5 h-5" />}
                title="Comfort & Safety"
                text="Professional safari guides, modern safari vehicles, and carefully selected lodges."
              />

              <InfoRow
                icon={<Camera className="w-5 h-5" />}
                title="Wildlife Photography Opportunities"
                text="Capture lions, elephants, giraffes, cheetahs, rhinos, and dramatic landscapes."
              />
            </div>

<div className="flex flex-wrap gap-4 mt-10">
  <Link
    href="/contact"
    className="bg-safari-forest text-white px-7 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
  >
    Request Custom Itinerary
  </Link>

  <Link
    href="/contact"
    className="border border-gray-300 px-7 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
  >
    Talk To Safari Expert
  </Link>
</div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="uppercase tracking-widest text-safari-forest text-sm font-semibold">
              Frequently Asked Questions
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Tanzania Safari FAQs
            </h2>
          </div>

          <div className="space-y-6 mt-14">
            <Faq
              q="What is the best time for a Tanzania safari?"
              a="The best wildlife viewing is usually from June to October during the dry season. January to March is also excellent for wildebeest calving season in southern Serengeti."
            />

            <Faq
              q="How many days should I spend on safari?"
              a="A 5–7 day safari is ideal for experiencing Serengeti, Ngorongoro, Tarangire, and other northern circuit parks."
            />

            <Faq
              q="Can I combine safari with Zanzibar?"
              a="Yes. Many travelers combine wildlife safari adventures with Zanzibar beach holidays for a complete Tanzania experience."
            />

            <Faq
              q="What should I wear on safari?"
              a="Neutral-colored clothing such as khaki, olive, or gray is recommended. Comfortable shoes, hats, sunscreen, and light jackets are also important."
            />

            <Faq
              q="Are Tanzania safaris family-friendly?"
              a="Yes. Safaris are suitable for families, couples, solo travelers, and groups with customized itineraries available."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg"
            alt="Adventure"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <span className="uppercase tracking-widest text-safari-sand text-sm font-semibold">
            Start Your Adventure
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-5 leading-tight">
            Plan Your Tanzania Safari With Dotto African Adventures & Safaris
          </h2>

          <p className="mt-6 text-white/80 leading-8 max-w-3xl mx-auto">
            From Serengeti wildlife safaris and Kilimanjaro trekking to
            Zanzibar beach escapes and cultural tours, we help travelers create
            unforgettable African experiences with comfort, safety, and expert
            local guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <Link
              href="/contact"
              className="bg-safari-sand text-safari-forest px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Request Safari Quote
            </Link>

            <Link
              href="/destinations"
              className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTS */

function HeroStat({ value, label }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-white">
      <div className="text-3xl font-black">{value}</div>
      <div className="text-sm text-white/70 mt-1">{label}</div>
    </div>
  );
}

function Feature({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 border border-gray-200 rounded-2xl p-4">
      <div className="w-10 h-10 rounded-full bg-safari-forest/10 flex items-center justify-center text-safari-forest">
        {icon}
      </div>

      <span className="font-medium">{text}</span>
    </div>
  );
}

function PackageGrid({ title, description, items, icon }: any) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 text-safari-forest">
        {icon}
        <span className="uppercase tracking-widest text-sm font-semibold">
          Travel Packages
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black mt-4">{title}</h2>

      <p className="text-gray-600 mt-5 max-w-3xl leading-8">
        {description}
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">
        {items.map((item: any, i: number) => (
          <div
            key={i}
            className="border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl transition"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs bg-safari-forest/10 text-safari-forest px-4 py-2 rounded-full font-semibold">
                {item.tag}
              </span>

              <span className="text-sm text-gray-500">
                {item.duration}
              </span>
            </div>

            <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

            <div className="text-3xl font-black mt-5">
              From {item.price}
            </div>

            <p className="text-gray-600 mt-5 leading-7">{item.desc}</p>

            <div className="space-y-3 mt-8">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-600" />
                Professional guide included
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-600" />
                Accommodation & logistics support
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-600" />
                Flexible travel options
              </div>
            </div>

            <div className="flex gap-3 mt-8">
           <div className="flex gap-3 mt-8">
  <Link
    href="/contact"
    className="flex-1 bg-safari-forest text-white py-3 rounded-full font-semibold text-center hover:scale-[1.02] transition-all duration-300"
  >
    More On Packages
  </Link>

  <Link
    href="/contact"
    className="flex-1 border border-gray-300 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition-all duration-300"
  >
    Enquire Now
  </Link>
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoRow({ icon, title, text }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-safari-forest/10 text-safari-forest flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-600 mt-1 leading-7">{text}</p>
      </div>
    </div>
  );
}

function Faq({ q, a }: any) {
  return (
    <div className="border border-gray-200 rounded-[1.5rem] p-8">
      <h3 className="text-xl font-bold">{q}</h3>
      <p className="text-gray-600 mt-4 leading-8">{a}</p>
    </div>
  );
}
