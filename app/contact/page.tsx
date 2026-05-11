"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const TYPES = [
  "General Inquiry",
  "Safari Package",
  "Kilimanjaro Trek",
  "Zanzibar Holiday",
  "Custom Itinerary",
  "Group Booking",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "General Inquiry",
    travelers: "",
    dates: "",
    destination: "",
    budget: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const showTrip = useMemo(() => form.type !== "General Inquiry", [form.type]);

  const showBudget = useMemo(
    () => form.type === "Custom Itinerary" || form.type === "Group Booking",
    [form.type]
  );

  function handleChange(e: any) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function buildBody() {
    return `
NEW INQUIRY

NAME: ${form.name}
EMAIL: ${form.email}
PHONE: ${form.phone}

TYPE: ${form.type}

${showTrip ? `TRAVELERS: ${form.travelers}` : ""}
${showTrip ? `DATES: ${form.dates}` : ""}
${showTrip ? `DESTINATION: ${form.destination}` : ""}

${showBudget ? `BUDGET: ${form.budget}` : ""}

MESSAGE:
${form.message}
    `;
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      const mailto = `mailto:hello@dottoafricanadventures.com?subject=${encodeURIComponent(
        `Inquiry - ${form.type}`
      )}&body=${encodeURIComponent(buildBody())}`;

      window.location.href = mailto;
      setSending(false);
    }, 800);
  }

  const input =
    "w-full rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-3 text-sm outline-none transition focus:border-[#0f3d2e] focus:ring-2 focus:ring-[#0f3d2e]/10";

  const quickAction =
    "flex items-center gap-3 px-4 py-3 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur hover:border-[#0f3d2e] hover:text-[#0f3d2e] transition text-sm";

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-[#f7faf7] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/kilimanjaro-landcuiser.jpg"
          className="w-full h-full object-cover opacity-90"
          alt=""
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-5xl bg-white/90 backdrop-blur-xl rounded-[28px] shadow-xl border border-gray-100 overflow-hidden"
      >
<br></br>
<br></br>
<br></br>
<br></br>

        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#0f3d2e] to-[#123f31] text-white p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-black">
            Plan Your Adventure
          </h1>

          <p className="mt-2 text-white/80 text-sm md:text-base max-w-xl">
            Tell us your travel idea and we will design a tailored safari or climb experience.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">

          {/* CONTACT */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#0f3d2e]">
              Contact Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" onChange={handleChange} className={input} placeholder="Full Name" />
              <input name="email" onChange={handleChange} className={input} placeholder="Email Address" />
              <input name="phone" onChange={handleChange} className={input} placeholder="Phone / WhatsApp" />

              <select name="type" onChange={handleChange} className={input}>
                {TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </section>

          {/* TRIP */}
          <AnimatePresence>
            {showTrip && (
              <motion.section
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <h2 className="text-sm font-semibold text-[#0f3d2e]">
                  Travel Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <input name="travelers" onChange={handleChange} className={input} placeholder="Number of Travelers" />
                  <input name="dates" onChange={handleChange} className={input} placeholder="Travel Dates" />
                </div>

                <input name="destination" onChange={handleChange} className={input} placeholder="Destination / Route" />
              </motion.section>
            )}
          </AnimatePresence>

          {/* BUDGET */}
          <AnimatePresence>
            {showBudget && (
              <motion.section className="space-y-4">
                <h2 className="text-sm font-semibold text-[#0f3d2e]">
                  Budget (Optional)
                </h2>

                <input name="budget" onChange={handleChange} className={input} placeholder="Estimated Budget" />
              </motion.section>
            )}
          </AnimatePresence>

          {/* MESSAGE */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#0f3d2e]">
              Message
            </h2>

            <textarea
              name="message"
              onChange={handleChange}
              className={`${input} min-h-[140px]`}
              placeholder="Tell us about your ideal safari or climb experience..."
            />
          </section>

          {/* CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4">
            <p className="text-xs text-gray-500">
              We usually respond within a few hours.
            </p>

            <button
              type="submit"
              disabled={sending}
              className="w-full md:w-auto bg-[#0f3d2e] text-white px-10 py-4 rounded-full font-semibold transition hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Inquiry"}
            </button>
          </div>

          {/* QUICK CONTACT ACTIONS (NEW ADDITION) */}
          <div className="mt-10 border-t pt-6">
            <p className="text-xs text-gray-500 mb-4">
              Or contact us directly
            </p>

            <div className="grid md:grid-cols-4 gap-3">

              <a href="tel:+255787031075" className={quickAction}>
                <Phone size={16} />
                Call
              </a>

              <a
                href="https://wa.me/255787031075"
                target="_blank"
                className={quickAction}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <a
                href="mailto:hello@dottoafricanadventures.com"
                className={quickAction}
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                className={quickAction}
              >
                <MapPin size={16} />
                Location
              </a>

            </div>
          </div>

        </form>
      </motion.div>
    </main>
  );
}