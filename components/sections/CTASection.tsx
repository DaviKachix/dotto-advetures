// components/packages/CTASection.tsx

export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* BACKGROUND IMAGE (VERY SUBTLE) */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08] scale-110"
          style={{
            backgroundImage: "url('/images/safari.jpg')",
          }}
        />
      </div>

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0b3d2e] via-[#0b3d2e]/95 to-[#0b3d2e]/85" />

      {/* SOFT GLOW */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d6c6a5] blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-[#f4a300] blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

        <p className="text-white uppercase tracking-[0.25em] text-xs mb-4 opacity-0 animate-[fadeUp_0.8s_ease_forwards]">
          Hurray — Your Journey Starts Here
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight text-white opacity-0 animate-[fadeUp_1s_ease_forwards]">
          Let’s Turn Your African Dream Into Reality
        </h2>

        <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-2xl mx-auto opacity-0 animate-[fadeUp_1.2s_ease_forwards]">
          Imagine waking up to golden savannahs, hearing lions in the distance,
          and watching Kilimanjaro glow at sunrise.  
          We don’t just plan trips — we craft unforgettable African stories for you.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap opacity-0 animate-[fadeUp_1.4s_ease_forwards]">

          <button className="bg-[#d6c6a5] text-[#0b3d2e] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Start Your Safari
          </button>

          <button className="border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full hover:bg-white hover:text-[#0b3d2e] transition">
            Talk to a Travel Expert
          </button>

        </div>

        {/* TRUST LINE */}
        <p className="mt-8 text-sm text-white/70 opacity-0 animate-[fadeUp_1.6s_ease_forwards]">
          Trusted by travelers across the world for authentic Tanzania experiences.
        </p>

      </div>
    </section>
  );
}