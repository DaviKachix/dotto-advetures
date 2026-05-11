"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock3,
  ArrowRight,
  Compass,
  Star,
  Phone,
  Check,
} from "lucide-react";

const safaris = [
  {
    title: "Great Migration Safari",
    days: "7 Days",
    price: "$2,450",
    image: "/images/nyumbu.jpg",
    park: "Serengeti National Park",
    tag: "Most Popular",
    description:
      "Follow the dramatic movement of thousands of wildebeests and zebras across the Serengeti ecosystem. Experience sunrise game drives, luxury tented camps, river crossings, and unforgettable predator action in one of the world’s greatest wildlife spectacles.",
    highlights: [
      "Great Migration game drives",
      "Luxury safari camps",
      "Big Five encounters",
      "Professional safari guide",
    ],
  },
  {
    title: "Luxury Balloon Safari",
    days: "5 Days",
    price: "$3,180",
    image: "/images/kilimanjaro-view.jpg",
    park: "Ngorongoro & Tarangire",
    tag: "Luxury Experience",
    description:
      "Discover Tanzania from above with a sunrise balloon safari drifting over wildlife-filled plains. Combine elegant lodges, fine dining, cultural encounters, and premium safari experiences designed for travelers seeking comfort and exclusivity.",
    highlights: [
      "Hot air balloon safari",
      "Luxury lodges",
      "Private game drives",
      "Fine dining experiences",
    ],
  },
  {
    title: "Northern Circuit Safari",
    days: "9 Days",
    price: "$3,950",
    image: "/images/kilimanjaro-landcruiser.jpg",
    park: "Serengeti • Ngorongoro • Tarangire",
    tag: "Complete Tanzania",
    description:
      "Explore Tanzania’s most iconic safari destinations on a complete northern circuit adventure. From endless Serengeti plains to the Ngorongoro Crater and elephant-rich Tarangire, this journey combines wildlife, landscapes, and authentic African hospitality.",
    highlights: [
      "Serengeti exploration",
      "Ngorongoro Crater safari",
      "Tarangire elephants",
      "Luxury safari vehicle",
    ],
  },
  {
    title: "Big Cats Safari",
    days: "6 Days",
    price: "$2,890",
    image:
      "/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg",
    park: "Central Serengeti",
    tag: "Wildlife Focus",
    description:
      "Designed for wildlife lovers and photographers, this safari focuses on tracking lions, leopards, and cheetahs through the Serengeti plains. Expect thrilling game drives, dramatic sightings, and close encounters with Africa’s top predators.",
    highlights: [
      "Big cat tracking",
      "Photographic moments",
      "Experienced local guides",
      "Sunset safari drives",
    ],
  },
  {
    title: "Ngorongoro Crater Safari",
    days: "4 Days",
    price: "$2,150",
    image: "/images/african-elephants-together-nature.jpg",
    park: "Ngorongoro Conservation Area",
    tag: "Big Five",
    description:
      "Descend into the world-famous Ngorongoro Crater, home to one of Africa’s highest wildlife concentrations. Discover rhinos, lions, elephants, and flamingos while surrounded by breathtaking volcanic landscapes.",
    highlights: [
      "Crater floor game drive",
      "Big Five sightings",
      "Luxury crater lodge",
      "Scenic landscapes",
    ],
  },
  {
    title: "Ruaha Wilderness Safari",
    days: "8 Days",
    price: "$4,280",
    image:
      "/images/close-shot-leopard-laying-tree-with-blue-sky-background.jpg",
    park: "Ruaha National Park",
    tag: "Remote Adventure",
    description:
      "Escape the crowds and experience raw African wilderness in Ruaha National Park. Known for dramatic landscapes, large lion prides, and untouched safari experiences, this journey is ideal for travelers seeking exclusivity and authentic adventure.",
    highlights: [
      "Remote wilderness camps",
      "Walking safaris",
      "Predator-rich landscapes",
      "Authentic safari atmosphere",
    ],
  },
];

export default function TanzaniaSafariPage() {
  return (
    <main className="bg-[#f8f6f1] text-[#1b1b1b] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="/images/buffalo-group-river.jpg"
          alt="Tanzania Safari"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
              <Compass className="w-4 h-4" />

              <span className="uppercase tracking-[0.25em] text-sm">
                Tanzania Safari Experiences 2026 / 2027
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black leading-[0.95]">
              Discover Tanzania Through Extraordinary Safari Journeys
            </h1>

            <p className="mt-8 text-lg text-white/80 leading-8 max-w-3xl">
              Experience the untamed beauty of Tanzania with carefully crafted
              safari adventures across Serengeti, Ngorongoro, Tarangire, Ruaha,
              and beyond. Witness the Great Migration, encounter the Big Five,
              enjoy luxury lodges, explore authentic local cultures, and create
              unforgettable memories in Africa’s most iconic wilderness.
            </p>

          

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#d8b36a] text-black font-bold flex items-center gap-2 hover:scale-105 transition"
              >
                Plan Your Safari
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
              >
                Request Custom Itinerary
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SAFARI PACKAGES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-20">
            <span className="uppercase tracking-[0.3em] text-[#b68b3d] text-sm font-semibold">
              Tanzania Safari Packages
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-5 leading-tight">
              Authentic Safari Experiences Designed Around Real Adventure
            </h2>

            <p className="mt-8 text-[#666] leading-8 text-lg">
              Every safari is designed to give travelers a deeper connection to
              Tanzania’s wildlife, landscapes, and culture. From witnessing the
              Great Migration in Serengeti to exploring the Ngorongoro Crater
              and remote southern parks, our experiences combine comfort,
              adventure, expert local guides, and unforgettable wildlife
              encounters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {safaris.map((safari, index) => (
              <div
                key={index}
                className="group bg-white rounded-[34px] overflow-hidden border border-[#ece8df] hover:shadow-2xl transition duration-500"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <Image
                    src={safari.image}
                    alt={safari.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 rounded-full bg-[#d8b36a] text-black text-sm font-bold">
                      {safari.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {safari.park}
                    </div>

                    <h3 className="text-3xl text-white leading-tight">
                      {safari.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[#666] leading-8">
                    {safari.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-8">
                    {safari.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#444]"
                      >
                        <Check className="w-4 h-4 text-[#b68b3d] mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#ece8df]">
                    <div className="flex items-center gap-3">
                      <Clock3 className="w-5 h-5 text-[#b68b3d]" />

                      <div>
                        <p className="text-sm text-[#777]">Duration</p>
                        <h4 className="font-semibold">{safari.days}</h4>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-[#777]">Starting From</p>

                      <h4 className="text-2xl font-black text-[#b68b3d]">
                        {safari.price}
                      </h4>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 w-full py-4 rounded-2xl bg-[#111] text-white font-semibold hover:bg-[#d8b36a] hover:text-black transition flex items-center justify-center gap-2"
                  >
                    More Information
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-white border border-[#ece8df] rounded-[40px] p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="uppercase tracking-[0.3em] text-[#b68b3d] text-sm font-semibold">
                  Why Travelers Choose Tanzania
                </span>

                <h3 className="text-4xl font-black mt-5 leading-tight">
                  More Than A Safari — A Personal African Experience
                </h3>

                <p className="mt-6 text-[#666] leading-8">
                  Tanzania offers one of the most diverse safari experiences in
                  Africa. Travelers can witness the Great Migration in
                  Serengeti, descend into the Ngorongoro Crater, walk beside
                  wildlife in Arusha National Park, or enjoy remote wilderness
                  adventures in Ruaha and Nyerere.
                </p>

                <p className="mt-6 text-[#666] leading-8">
                  Every journey is tailored to match different travel styles —
                  luxury escapes, honeymoon safaris, family adventures,
                  photographic expeditions, cultural tours, or private custom
                  itineraries. Our goal is to create meaningful safari moments
                  that feel personal, authentic, and unforgettable.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  "Experienced professional safari guides",
                  "Luxury, midrange, and custom safari options",
                  "Private 4x4 safari vehicles with pop-up roof",
                  "Big Five and Great Migration experiences",
                  "Carefully selected lodges and tented camps",
                  "Flexible itineraries tailored to your travel style",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-[#f8f6f1] rounded-3xl p-6"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#d8b36a] flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-black" />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">{item}</h4>

                      <p className="text-[#666] mt-2 leading-7">
                        Designed to provide comfort, safety, unforgettable
                        wildlife encounters, and authentic Tanzanian hospitality
                        throughout your safari journey.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-36">
        <Image
          src="/images/kilimanjaro-peak.jpg"
          alt="Safari Adventure"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="w-24 h-24 rounded-full bg-[#d8b36a] text-black flex items-center justify-center mx-auto mb-8">
            <Phone className="w-10 h-10" />
          </div>

          <h2 className="text-5xl md:text-7xl text-white leading-tight">
            Start Planning Your Tanzania Safari
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-white/80 leading-8">
            Whether you are planning a honeymoon safari, family adventure,
            luxury wildlife experience, or Great Migration journey, our team is
            ready to help you create a personalized Tanzania safari itinerary.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#d8b36a] text-black font-bold flex items-center gap-2 hover:scale-105 transition"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
            >
              Request Custom Safari
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}