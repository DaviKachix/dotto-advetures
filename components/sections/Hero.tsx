"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

const slides = [
  {
    title: "Luxury Tanzania Safaris",
    subtitle:
      "Experience unforgettable wildlife adventures across Serengeti, Ngorongoro, Tarangire and Tanzania’s iconic safari landscapes.",
    image:
      "/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg",
    tag: "Most Booked Safari",
    cta: "Explore Safaris",
    href: "/safaris",
  },
  {
    title: "Kilimanjaro Trekking Adventures",
    subtitle:
      "Conquer Africa’s highest peak with experienced mountain guides, scenic routes and fully supported trekking journeys.",
    image:
      "/images/kilimanjaro-peak.jpg",
    tag: "Top Climbing Package",
    cta: "View Climbs",
    href: "/kilimanjaro",
  },
  {
    title: "Zanzibar Beach Escapes",
    subtitle:
      "Relax on white sand beaches and enjoy luxury island experiences, ocean views and tropical sunsets in Zanzibar.",
    image: "/images/cool-zanzibar.jpg",
    tag: "Luxury Beach Holiday",
    cta: "Explore Zanzibar",
    href: "/zanzibar",
  },
  {
    title: "Wildlife Photography Tours",
    subtitle:
      "Capture lions, elephants, giraffes and breathtaking African landscapes through curated photography journeys.",
    image: "/images/african-elephants-together-nature.jpg",
    tag: "Photographer Favorite",
    cta: "Discover Tours",
    href: "/photography-tours",
  },
];

const quickStats = [
  {
    title: "14+ Packages",
    desc: "Curated safari & adventure experiences",
  },
  {
    title: "Local Guides",
    desc: "Professional Tanzanian experts",
  },
  {
    title: "Custom Trips",
    desc: "Tailor-made travel itineraries",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = useMemo(() => slides[current], [current]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* BACKGROUND SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover animate-[heroZoom_12s_linear_forwards]"
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-5xl pt-28 pb-16 md:pt-36">
            {/* TAG */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-safari-sand animate-pulse" />

              <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-white/80 font-medium">
                {activeSlide.tag}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              {activeSlide.title}
            </h1>

            {/* SUBTITLE */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base md:text-lg md:leading-8">
              {activeSlide.subtitle}
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={activeSlide.href} className="w-full sm:w-auto">
                <Button
                  variant="accent"
                  className="w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    {activeSlide.cta}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Button>
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-black sm:w-auto"
              >
                Plan Your Adventure
              </Link>
            </div>

            {/* QUICK STATS */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickStats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* DOT NAV */}
            <div className="mt-10 flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrent(index)}
                  aria-label={`View ${slide.title}`}
                  className={`rounded-full transition-all duration-300 ${
                    current === index
                      ? "h-2.5 w-8 bg-safari-sand"
                      : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-28 bg-gradient-to-t from-black/70 to-transparent" />

      <style jsx>{`
        @keyframes heroZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}