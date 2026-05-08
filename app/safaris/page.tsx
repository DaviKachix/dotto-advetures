"use client";

import Link from "next/link";

const packages = [
  {
    title: "1 Day Safari",
    price: "$1200",
    parks: "Tarangire / Lake Manyara / Ngorongoro",
    description:
      "A focused sunrise safari experience designed for travelers with limited time. One park, one full wildlife encounter, and a same-day return to Arusha.",
    image: "/images/african-elephants-together-nature.jpg",
    link: "/safaris/1-day",
  },
  {
    title: "2 Day Safari",
    price: "$1500",
    parks: "Tarangire / Lake Manyara / Ngorongoro",
    description:
      "A balanced journey with one park per day and a relaxed overnight stay that lets you experience the rhythm of the wild.",
    image: "/images/wide-angle-shot-giraffe-standing-tall-trees-savannah.jpg",
    link: "/safaris/2-day",
  },
  {
    title: "3 Day Safari",
    price: "$1900",
    parks: "Serengeti / Ngorongoro / Tarangire",
    description:
      "A deeper northern circuit experience with iconic wildlife, scenic transitions, and nights under the African sky.",
    image:
      "/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg",
    link: "/safaris/3-day",
  },
  {
    title: "5 Day Safari",
    price: "$2800",
    parks: "Serengeti / Ngorongoro / Tarangire / Lake Manyara",
    description:
      "An immersive safari journey covering Tanzania’s most iconic parks with extended game drives and richer wildlife moments.",
    image: "/images/reflection-lionesses-drinking-water-from-small-pond.jpg",
    link: "/safaris/5-day",
  },
];

export default function SafariPage() {
  return (
    <main className="bg-safari-background text-safari-dark">

      {/* HERO */}
      <section className="relative overflow-hidden bg-safari-forest text-white py-32 px-6">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-[700px] h-[700px] bg-safari-accent blur-3xl top-[-150px] left-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.25em] text-xs text-white/70">
            Dotto African Adventures & Safaris
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Discover Northern Tanzania Through Real Safari Moments
          </h1>

          <p className="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed">
            From Serengeti’s endless plains to Ngorongoro’s ancient crater,
            every journey is carefully shaped to feel natural, unhurried, and deeply immersive.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full">Sunrise Game Drives</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">One Park Per Day</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Smooth Travel Flow</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-safari-forest">
          Designed for a Slower, Richer Safari Experience
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Instead of rushing between parks, each safari is structured around meaningful time in nature.
          This allows you to actually feel Tanzania — not just pass through it.
        </p>

      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {packages.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="group rounded-[30px] overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-115 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-safari-forest">
                  {item.title}
                </h3>

                <p className="text-xs uppercase tracking-wide text-gray-500 mt-2">
                  {item.parks}
                </p>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 font-semibold text-safari-forest">
                  From {item.price}
                </div>

                <div className="mt-6 w-full text-center bg-safari-forest text-white py-3 rounded-full hover:bg-safari-forestLight transition">
                  View Safari Details
                </div>

              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* FLOW */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-safari-forest">
            How Your Safari Flows
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Every journey is designed to feel natural — not rushed, not crowded,
            just pure immersion into Tanzania’s wilderness.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">

            {[
              {
                title: "1 Day Safari",
                text: "Early departure, sunrise game drive, one park focus, return in evening.",
              },
              {
                title: "2 Day Safari",
                text: "One park per day with a relaxed overnight stay in or near the park.",
              },
              {
                title: "3+ Day Safari",
                text: "Multi-park journey with deeper wildlife exposure and slower pacing.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-[26px] border border-black/5 bg-safari-background"
              >
                <h3 className="font-bold text-safari-forest">
                  {f.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}