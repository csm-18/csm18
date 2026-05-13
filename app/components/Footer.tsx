export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#profile"
                className="text-gray-400 hover:text-cyan-300 transition text-sm"
              >
                Profile
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-cyan-300 transition text-sm block"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-cyan-300 transition text-sm block"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-gray-400 hover:text-cyan-300 transition text-sm block"
              >
                Experience
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-4">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href="https://github.com/csm-18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition text-sm block"
              >
                GitHub
              </a>
              <a
                href="https://devpost.com/csubrahmanyam2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition text-sm block"
              >
                Devpost
              </a>
              <a
                href="mailto:csubrahmanyam2@gmail.com"
                className="text-gray-400 hover:text-cyan-300 transition text-sm block"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-4">
              Based In
            </h4>
            <p className="text-gray-400 text-sm mb-2">
              📍 Hyderabad, Telangana, India
            </p>
            <p className="text-gray-500 text-sm">
              Available for remote opportunities worldwide
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Subrahmanyam Chimalamarri. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Built with <span className="text-cyan-400">React</span> &{" "}
            <span className="text-blue-400">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
