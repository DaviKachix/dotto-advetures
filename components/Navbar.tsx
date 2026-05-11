"use client";

import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Kilimanjaro", href: "/kilimanjaro" },
    { name: "Safaris", href: "/safaris" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="fixed top-5 left-0 w-full z-[100] px-4">

      {/* NAVBAR */}
      <nav className="
        mx-auto max-w-7xl
        bg-white/80 backdrop-blur-2xl
        border border-black/5
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        rounded-3xl
        px-6 py-4
        flex items-center justify-between
      ">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/images/DOTTO.png"
              alt="Dotto African Adventures"
              className="h-20 w-20 rounded-xl object-contain shadow-md"
            />
          </div>

          <div className="leading-tight sm:block">
            <p className="text-safari-forest font-bold text-sm tracking-wide">
              Dotto African Adventures
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin size={12} /> Tanzania Safaris
            </p>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="
                text-sm font-medium
                text-safari-forest/80
                hover:text-yellow-600
                transition
              "
            >
              {l.name}
            </a>
          ))}

          <a
            href="/contact"
            className="
              px-5 py-2 rounded-full
              bg-safari-forest text-white
              text-sm font-semibold
              hover:bg-yellow-500 hover:text-safari-forest
              transition
            "
          >
            Plan Safari
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-safari-forest"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[200] transition ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
<br>
</br>
<br>
</br>
<br>
</br>
        {/* PANEL */}
        <div
          className={`
            absolute left-0 top-0 h-full w-[88%] max-w-sm
            bg-white
            shadow-2xl
            transform transition-transform duration-500 ease-out
            ${open ? "translate-x-0" : "-translate-x-full"}
            flex flex-col
          `}
        >

          {/* HEADER */}
          <div className="p-6 flex items-center justify-between border-b">
            <div>
              <p className="text-safari-forest font-bold">Menu</p>
              <p className="text-xs text-gray-500">Dotto African Adventures</p>
            </div>

            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {/* LINKS */}
          <div className="p-6 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="
                  px-4 py-3 rounded-xl
                  text-safari-forest font-medium
                  hover:bg-yellow-50 hover:text-yellow-700
                  transition
                "
              >
                {l.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="px-6 mt-auto mb-6">
            <a
              href="/contact"
              className="
                block text-center
                bg-safari-forest text-white
                py-3 rounded-2xl font-semibold
                hover:bg-yellow-500 hover:text-safari-forest
                transition
              "
            >
              Book Safari
            </a>
          </div>

          {/* IMAGE FOOTER */}
          <div className="relative h-44">
            <img
              src="/images/wide-angle-shot-giraffe-standing-tall-trees-savannah.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
              Safari Begins Here
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}