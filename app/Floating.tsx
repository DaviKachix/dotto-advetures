"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Headset } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          relative w-16 h-16 rounded-full
          bg-safari-forest text-white
          shadow-2xl
          flex items-center justify-center
          transition-all duration-500
          hover:scale-110
          hover:rotate-12
        "
      >
        <Headset className="animate-pulse" />

        {/* spinning ring */}
        <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" />
      </button>

      {/* ACTIONS */}
      <div
        className={`
          absolute bottom-20 right-0 flex flex-col gap-3
          transition-all duration-500 origin-bottom-right
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
        `}
      >

        {/* EMAIL */}
        <a
          href="mailto:hello@dottoafricanadventures.com"
          className="
            flex items-center gap-3
            bg-white text-safari-forest
            px-4 py-3 rounded-full
            shadow-lg
            hover:scale-105 hover:rotate-3
            transition
          "
        >
          <Mail size={18} />
          <span className="text-sm font-semibold">Email</span>
        </a>

        {/* PHONE */}
        <a
          href="tel:+255787031075"
          className="
            flex items-center gap-3
            bg-white text-safari-forest
            px-4 py-3 rounded-full
            shadow-lg
            hover:scale-105 hover:-rotate-3
            transition
          "
        >
          <Phone size={18} />
          <span className="text-sm font-semibold">Call</span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/255787031075"
          target="_blank"
          className="
            flex items-center gap-3
            bg-[#25D366] text-white
            px-4 py-3 rounded-full
            shadow-lg
            hover:scale-105 hover:rotate-3
            transition
          "
        >
          <MessageCircle size={18} />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>

      </div>
    </div>
  );
}