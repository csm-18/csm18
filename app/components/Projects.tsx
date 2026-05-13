export default function Projects() {
  const projectCards = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Showcasing my recent work and contributions
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projectCards.map((project) => (
            <div
              key={project.id}
              className="group relative p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:from-gray-900 hover:to-gray-800 transition min-h-[300px] flex flex-col justify-center items-center"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10 text-center space-y-4">
                <div className="text-6xl mb-4">📌</div>
                <p className="text-gray-400 text-lg">Project {project.id}</p>
                <p className="text-gray-500 text-sm">Coming soon...</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl border border-gray-700 bg-gradient-to-r from-gray-900/30 to-gray-800/30 text-center">
          <p className="text-gray-300 mb-4">
            👉 Check out my work on{" "}
            <a
              href="https://github.com/csm-18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
