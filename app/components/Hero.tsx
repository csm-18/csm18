import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-cyan-900/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Heading */}
        <div className="mb-6 sm:mb-8 animate-in fade-in duration-700">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Subrahmanyam Chimalamarri
          </h1>
        </div>

        {/* Role + Skills */}
        <div className="mb-6 sm:mb-8">
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-light mb-4">
            Frontend Developer
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-300">
            <span className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-500/50 bg-blue-500/10">
              React
            </span>

            <span className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-cyan-500/50 bg-cyan-500/10">
              TypeScript
            </span>

            <span className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-500/50 bg-blue-500/10">
              Next.js
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Building modern, performant web applications with React and Next.js.
          Open to frontend SDE roles at project-focused companies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-12 w-full sm:w-auto">
          <a
            href="https://github.com/csm-18"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition"
          >
            View GitHub
          </a>

          <a
            href="mailto:csubrahmanyam2@gmail.com"
            className="w-full sm:w-auto px-8 py-3 border border-cyan-400/50 text-cyan-300 rounded-lg font-medium hover:bg-cyan-400/10 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Location */}
        <div className="text-xs sm:text-sm text-gray-500">
          📍 Hyderabad, Telangana, India (Remote)
        </div>
      </div>
    </section>
  );
}
