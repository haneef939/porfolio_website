import DigitFallClock from "../components/DigitFallClock";

export default function Hero() {
  const handleScrollToWork = () => {
    const el = document.querySelector("#work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] bg-void overflow-hidden flex">
      {/* Left content - 40% */}
      <div className="relative z-10 w-full lg:w-[40%] flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-24">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate mb-6">
            Flutter Developer / Software Engineer
          </p>

          <h1 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] text-off-white leading-[1.1] mb-4">
            Muhammad
            <br />
            Haneef
          </h1>

          <h2 className="font-mono font-normal text-xl sm:text-2xl lg:text-[32px] text-saffron mb-8">
            Flutter Developer
          </h2>

          <p className="text-base sm:text-lg text-slate leading-relaxed max-w-lg mb-10">
            I build scalable mobile applications serving{" "}
            <span className="text-saffron font-medium">20K+ users</span>.
            Specializing in offline-first architecture, AI-driven platforms, and
            performance optimization — turning complex problems into elegant,
            high-impact solutions.
          </p>

          <button
            onClick={handleScrollToWork}
            className="inline-flex items-center gap-2 bg-saffron text-void font-grotesk font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-[#E67D00] transition-colors"
          >
            View My Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3v10M3 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right canvas clock - 60% */}
      <div className="hidden lg:block absolute top-0 right-0 w-[60%] h-full">
        <DigitFallClock />
      </div>

      {/* Mobile: clock on top */}
      <div className="lg:hidden absolute top-16 left-0 right-0 h-[50vh]">
        <DigitFallClock />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none z-20" />
    </section>
  );
}
