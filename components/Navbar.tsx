"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">

      {/* NAV CONTAINER (WHITE FLOATING CARD) */}
      <nav className="
        mx-auto max-w-7xl
        bg-white/90 backdrop-blur-xl
        shadow-lg
        rounded-2xl
        border border-black/5
        px-5 py-4
        flex items-center justify-between
      ">

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-3 font-bold text-safari-forest"
        >
       <img
  src="/images/DOTTO.png"
  alt="Dotto African Adventures"
  className="h-16 w-16 object-cover"
/>
          <span className="hidden sm:block">
            Dotto African Adventures
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-safari-forest
                font-medium
                text-sm
                transition
                hover:text-yellow-600
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="/contact"
            className="
              bg-safari-forest
              text-white
              px-5 py-2
              rounded-full
              font-semibold
              transition
              hover:bg-yellow-500
              hover:text-safari-forest
            "
          >
            Book Now
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

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >

        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`
            absolute left-0 top-0 h-full w-[85%] max-w-sm
            bg-white rounded-r-3xl shadow-2xl
            transform transition-transform duration-500
            ${open ? "translate-x-0" : "-translate-x-full"}
            flex flex-col justify-between
          `}
        >

          {/* TOP */}
          <div className="p-6">

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-safari-forest font-bold text-lg">
                Menu
              </h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    px-3 py-3 rounded-xl
                    text-safari-forest font-medium
                    hover:bg-yellow-100
                    hover:text-yellow-700
                    transition
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="/contact"
              className="
                mt-6 block text-center
                bg-safari-forest text-white
                py-3 rounded-full font-semibold
                hover:bg-yellow-500 hover:text-safari-forest
                transition
              "
            >
              Book Safari
            </a>

          </div>

          {/* IMAGE FOOTER */}
          <div className="relative h-40">
            <img
              src="/images/wide-angle-shot-giraffe-standing-tall-trees-savannah.jpg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <p className="absolute bottom-3 left-4 text-white text-sm font-medium">
              Explore Tanzania
            </p>
          </div>

        </div>
      </div>

    </header>
  );
}