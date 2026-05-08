export default function Loading() {
  return (
    <div className="min-h-screen bg-[#faf8f3] flex items-center justify-center px-6">

      <div className="text-center">

        {/* Safari Loader Circle */}
        <div className="relative w-24 h-24 mx-auto">

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#D6C6A5] opacity-40"></div>

          {/* Animated Ring */}
          <div className="absolute inset-0 rounded-full border-t-4 border-[#F4A300] border-r-4 border-r-transparent border-b-4 border-b-transparent border-l-4 border-l-transparent animate-spin"></div>

          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-[#0B3D2E] text-3xl"
              style={{
                fontFamily: '"Pacifico", cursive',
              }}
            >
              D
            </span>
          </div>
        </div>

        {/* Brand */}
        <h1
          className="mt-8 text-3xl text-[#0B3D2E]"
          style={{
            fontFamily: '"Pacifico", cursive',
          }}
        >
          Dotto African Adventures
        </h1>

        {/* Subtitle */}
        <p
          className="mt-3 text-gray-500 tracking-wide"
          style={{
            fontFamily: '"Josefin Sans", sans-serif',
          }}
        >
          Chase the Wild, Conquer the Sky
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">

          <div className="w-2 h-2 rounded-full bg-[#F4A300] animate-bounce"></div>

          <div
            className="w-2 h-2 rounded-full bg-[#F4A300] animate-bounce"
            style={{
              animationDelay: "0.15s",
            }}
          ></div>

          <div
            className="w-2 h-2 rounded-full bg-[#F4A300] animate-bounce"
            style={{
              animationDelay: "0.3s",
            }}
          ></div>

        </div>

      </div>

    </div>
  );
}