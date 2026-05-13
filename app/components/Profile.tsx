export default function Profile() {
  return (
    <section id="profile" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Profile
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="p-8 rounded-xl border border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50 transition">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                About
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Frontend developer specializing in React and Next.js. Built 3
                deployed projects with modern web technologies. Passionate about
                creating clean, performant, and user-friendly interfaces.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50 transition">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                Opportunities
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Open to frontend SDE roles at project-focused companies. Looking
                to work on scalable applications and contribute to meaningful
                projects.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-xl border border-blue-500/30 bg-blue-500/5">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:csubrahmanyam2@gmail.com"
                  className="flex items-center text-gray-300 hover:text-cyan-300 transition"
                >
                  <span className="mr-3">📧</span>
                  csubrahmanyam2@gmail.com
                </a>
                <a
                  href="https://github.com/csm-18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyan-300 transition"
                >
                  <span className="mr-3">🐙</span>
                  github.com/csm-18
                </a>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">
                Location
              </h3>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="mr-2">📍</span>
                  Hyderabad, Telangana, India
                </p>
                <p className="text-gray-400 text-sm">
                  Available for remote opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
