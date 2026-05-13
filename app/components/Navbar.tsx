export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          CSM
        </div>
        <div className="flex gap-8">
          <a
            href="#profile"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Profile
          </a>
          <a
            href="#skills"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Experience
          </a>
        </div>
        <a
          href="mailto:csubrahmanyam2@gmail.com"
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
