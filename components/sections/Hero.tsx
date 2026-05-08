"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

const slides = [
  {
    title: "Luxury Tanzania Safaris",
    subtitle: "Experience unforgettable wildlife adventures across Serengeti, Ngorongoro & Tarangire.",
    image: "/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg",
    tag: "Most Booked Safari",
    cta: "Explore Safaris",
  },
  {
    title: "Kilimanjaro Trekking Adventures",
    subtitle: "Conquer Africa’s highest peak with professional mountain guides.",
    image: "/images/group-tourists-hiking-top-etna-volcano-sicily-italy.jpg",
    tag: "Top Climbing Package",
    cta: "View Climbs",
  },
  {
    title: "Zanzibar Beach Escapes",
    subtitle: "Relax on white sandy beaches with premium island experiences.",
    image: "/images/pexels-sergey-pesterev-69811391-8427984.jpg",
    tag: "Luxury Beach Holiday",
    cta: "Explore Zanzibar",
  },
  {
    title: "Wildlife Photography Tours",
    subtitle: "Capture lions, elephants, giraffes and breathtaking African landscapes.",
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* BACKGROUND IMAGES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105 animate-[slowZoom_8s_linear_infinite]"
          />

          {/* DARK + GREEN OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-safari-forest/60 to-black/60" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="max-w-5xl text-center text-white">
          {/* HIGHLIGHT */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm tracking-wide">
              {slides[current].tag}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            {slides[current].title}
      </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {slides[current].subtitle}
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              variant="accent"
              className="bg-safari-sand text-safari-forest hover:scale-105 transition-all duration-300 shadow-2xl px-7 py-4 text-base"
            >
              {slides[current].cta}
            </Button>

            <Button
              variant="outline"
              className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-7 py-4 text-white"
            >
              Plan Your Adventure
            </Button>
          </div>

          {/* PACKAGE HIGHLIGHTS */}
          <div className="grid md:grid-cols-3 gap-4 mt-14">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-bold">14+</div>
              <div className="text-sm text-white/70 mt-1">
                Safari Packages
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-bold">Kilimanjaro</div>
              <div className="text-sm text-white/70 mt-1">
                Guided Mountain Climbs
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-bold">Zanzibar</div>
              <div className="text-sm text-white/70 mt-1">
                Premium Beach Holidays
              </div>
            </div>
          </div>

          {/* SLIDER INDICATORS */}
          <div className="flex justify-center gap-3 mt-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-safari-sand w-10"
                    : "bg-white/40 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATION */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}