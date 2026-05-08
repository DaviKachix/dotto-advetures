import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-safari-forest text-white relative overflow-hidden">

      {/* soft background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[500px] h-[500px] bg-safari-accent blur-3xl top-[-100px] left-1/2 -translate-x-1/2" />
      </div>

      <div className="text-center z-10 max-w-md px-6">

        <h1 className="text-6xl font-black">404</h1>

        <p className="mt-4 text-white/80">
          Hurray… this trail seems lost in the savannah.
        </p>

        <p className="mt-2 text-white/60 text-sm">
          The page you’re looking for doesn’t exist or has moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex px-6 py-3 rounded-full bg-white text-safari-forest font-semibold hover:scale-105 transition"
        >
          Return Home
        </Link>

      </div>
    </div>
  );
}