"use client";

import { useState } from "react";

const gallery = [
  "/images/beautiful-bird.jpg",
 "/images/migration-great.jpg",
 "/images/african-leopard-resting-rock.jpg",
  "/images/migration.jpg",
  "/images/african-elephants-together-nature.jpg",
  "/images/wide-angle-shot-giraffe-standing-tall-trees-savannah.jpg",
  "/images/reflection-lionesses-drinking-water-from-small-pond.jpg",
  "/images/beautiful-view-two-giraffes-grazing-by-trees-ol-pejeta-kenya.jpg",
  "/images/group-magnificent-lions-gravel-road-surrounded-by-grassy-fields-trees.jpg",
  "/images/closeup-lioness-licking-her-face-after-hunting-her-prey.jpg",
  "/images/zanzibar-beach.jpg",
  "/images/cool-zanzibar.jpg"

];

export function TravelGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* HEADER */}
      <div className="text-center mb-14">
        <p className="text-safari-forest font-semibold uppercase tracking-[0.2em] text-xs">
          Travel Moments
        </p>

        <h2 className="text-4xl md:text-5xl font-black mt-3 text-safari-forest">
          Tanzania Through The Lens
        </h2>
      </div>

      {/* HORIZONTAL 3D SCROLL GALLERY */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 px-2 scroll-smooth [perspective:1200px]">

        {gallery.map((img, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="
              snap-center
              flex-shrink-0
              w-[88%] sm:w-[70%] md:w-[45%] lg:w-[38%]
              h-[460px]
              relative
              rounded-[28px]
              overflow-hidden
              cursor-pointer
              shadow-2xl
              transition-transform duration-700
              hover:scale-[1.02]
              hover:rotate-y-1
              bg-black
            "
            style={{
              transform: `
                rotateY(${i % 2 === 0 ? "-6deg" : "6deg"})
                translateZ(${i % 3 === 0 ? "20px" : "0px"})
              `,
            }}
          >

            {/* IMAGE */}
            <img
              src={img}
              className="
                w-full h-full object-cover
                scale-110 hover:scale-125
                transition duration-700 ease-out
              "
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* label */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs tracking-[0.25em] uppercase opacity-80">
                Safari Moment {i + 1}
              </p>

              <h3 className="text-lg text-white font-semibold mt-1">
                Wildlife Story
              </h3>
            </div>

          </div>
        ))}

      </div>

      {/* SCROLL HINT */}
      <div className="text-center text-sm text-safari-forest/60 mt-4">
        Scroll horizontally — each moment is intentionally paused for experience
      </div>

      {/* SIMPLE LIGHTBOX (OPTIONAL BASIC VIEWER) */}
      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <img
            src={gallery[active]}
            className="max-w-[90%] max-h-[85vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}