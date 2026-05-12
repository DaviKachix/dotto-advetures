import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter,FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative mt-20 text-white overflow-hidden">

      {/* BACKGROUND IMAGE (SLIGHTLY VISIBLE NOW) */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.5] scale-110 brightness-90"
          style={{
            backgroundImage: "url('/images/kilimanjaro-peak.jpg')",
          }}
        />
      </div>

      {/* SOFT GREEN OVERLAY (REDUCED A BIT) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-safari-forest via-safari-forest/85 to-safari-forest/70" />

      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-safari-accent blur-3xl animate-[float_16s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-safari-sand blur-3xl animate-[float_22s_ease-in-out_infinite]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* BRAND */}
        <div className="animate-[fadeUp_0.8s_ease_forwards]">
          <h2 className="text-2xl font-bold tracking-wide text-white">
            Dotto African Adventures
          </h2>

          <p className="mt-5 text-sm leading-7 text-white">
            Premium Tanzania safaris, Kilimanjaro trekking experiences,
            wildlife adventures, and cultural tours crafted with comfort,
            safety, and authentic African hospitality.
          </p>
        </div>

        {/* LINKS */}
        <div className="animate-[fadeUp_0.8s_ease_forwards] delay-100">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white">
            {[
              ["Home", "/"],
              ["Kilimanjaro", "/kilimanjaro"],
              ["Safaris", "/safaris"],
              ["Destinations", "/destinations"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="w-fit text-white transition duration-300 hover:opacity-70 hover:translate-x-1"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
<div className="animate-[fadeUp_0.8s_ease_forwards] delay-200">
  <h3 className="text-lg font-semibold text-white">Contact</h3>

  <div className="mt-5 space-y-5 text-sm text-white">

    {/* Location */}
    <div className="flex items-start gap-3 text-white">
      <MapPin size={15} className="text-white " />
      <p className="text-white">Arusha, Tanzania</p>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-3 text-white">
      <Phone size={15} className="text-white " />
      <div className="flex flex-col leading-relaxed text-white">
        <p className="text-white">+255 787 031 075</p>
        <p className="text-white">+39 349 782 5282</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-3 text-white">
      <Mail size={15} className="text-white " />
      <p className="break-all text-white">hello@dottoafricanadventures.com</p>
    </div>

  </div>
        </div>

       {/* SOCIAL */}
<div className="animate-[fadeUp_0.8s_ease_forwards] delay-300">
  <h3 className="text-lg font-semibold text-white">Follow Us</h3>

  <p className="mt-5 text-sm leading-7 text-white/80">
    Follow our safari journeys, wildlife moments, and travel stories from Tanzania.
  </p>

  <div className="mt-6 flex items-center gap-4">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/17QW8LrbTH/"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-full border border-white/30 p-3 transition hover:-translate-y-0.5 hover:border-white"
      aria-label="Facebook"
    >
      <FaFacebookF size={16} className="text-white group-hover:opacity-80" />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/dottoafricanadventuretours?igsh=MXFzZDNobDM0bHd3ZA=="
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-full border border-white/30 p-3 transition hover:-translate-y-0.5 hover:border-white"
      aria-label="Instagram"
    >
      <FaInstagram size={16} className="text-white group-hover:opacity-80" />
    </a>

    {/* X (Twitter) - optional placeholder */}
    <a
      href="#"
      className="group rounded-full border border-white/30 p-3 transition hover:-translate-y-0.5 hover:border-white"
      aria-label="X (Twitter)"
    >
      <FaXTwitter size={16} className="text-white group-hover:opacity-80" />
    </a>

    {/* TikTok */}
    <a
      href="https://vt.tiktok.com/ZS9wLRXpq/"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-full border border-white/30 p-3 transition hover:-translate-y-0.5 hover:border-white"
      aria-label="TikTok"
    >
      <FaTiktok size={16} className="text-white group-hover:opacity-80" />
    </a>
  </div>
</div>

      </div>

      {/* BOTTOM */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-white md:flex-row lg:px-8">

          <p className="hover:opacity-80 transition text-white">
            © 2026 Dotto African Adventures & Safaris. All rights reserved.
          </p>

          <p className="hover:opacity-80 transition text-white">
            Crafted for unforgettable Tanzania safari experiences.
          </p>

        </div>
      </div>

    </footer>
  );
}