"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

const slides = [
  {
    title: "Luxury Tanzania Safaris",
    subtitle:
      "Experience unforgettable wildlife adventures across Serengeti, Ngorongoro & Tarangire.",
    image:
      "/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg",
    tag: "Most Booked Safari",
    cta: "Explore Safaris",
  },
  {
    title: "Kilimanjaro Trekking Adventures",
    subtitle: "Conquer Africa’s highest peak with professional mountain guides.",
    image:
      "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
    tag: "Top Climbing Package",
    cta: "View Climbs",
  },
  {
    title: "Zanzibar Beach Escapes",
    subtitle: "Relax on white sandy beaches with premium island experiences.",
    image:
      "/images/pexels-sergey-pesterev-69811391-8427984.jpg",
    tag: "Luxury Beach Holiday",
    cta: "Explore Zanzibar",
  },
  {
    title: "Wildlife Photography Tours",
    subtitle:
      "Capture lions, elephants, giraffes and breathtaking African landscapes.",
    image: "/images/african-elephants-together-nature.jpg",
    tag: "Photographer Favorite",
    cta: "Discover Tours",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover scale-110 animate-[slowZoom_12s_linear_infinite]"
          />

          {/* CLEAN OVERLAY LAYER */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center text-white">

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-safari-sand animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-white/80">
              {slides[current].tag}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            {slides[current].title}
          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            {slides[current].subtitle}
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="accent">{slides[current].cta}</Button>
            <Button variant="outline">Plan Your Adventure</Button>
          </div>

          {/* QUICK INFO (SIMPLIFIED) */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "14+ Packages", desc: "Curated safari experiences" },
              { title: "Expert Guides", desc: "Local certified professionals" },
              { title: "Zanzibar & Parks", desc: "Top destinations in Tanzania" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-left"
              >
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-sm text-white/70 mt-1">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* DOT NAV */}
          <div className="mt-10 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-8 h-2 bg-safari-sand"
                    : "w-2 h-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}