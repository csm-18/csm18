export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Golang"],
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Frameworks",
      skills: ["React.js", "Next.js", "Express", "Tailwind CSS"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      category: "Tools",
      skills: ["Linux terminal", "Git", "GitHub", "Vercel", "VS Code"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:from-gray-900 hover:to-gray-800 transition"
            >
              <div
                className={`inline-block mb-6 px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white text-sm font-semibold`}
              >
                {category.category}
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center p-3 rounded-lg border border-gray-700 group-hover:border-cyan-500/30 bg-gray-800/30 group-hover:bg-cyan-500/5 transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3" />
                    <span className="text-gray-300 group-hover:text-white transition">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl border border-blue-500/30 bg-blue-500/5">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Experience Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-gray-200">
                  3 Deployed Projects
                </p>
                <p className="text-sm text-gray-400">
                  Production-ready applications
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="font-semibold text-gray-200">
                  Continuous Learner
                </p>
                <p className="text-sm text-gray-400">
                  Meta & Coursera Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
