export default function Experience() {
  const experiences = [
    {
      title: "Online Hackathons",
      link: "https://devpost.com/csubrahmanyam2",
      icon: "🏆",
      description: "Active participant in coding competitions and hackathons",
    },
    {
      title: "Open Source Projects",
      link: "https://github.com/csm-18",
      icon: "🔗",
      description:
        "Contributing to open source community and building projects",
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:from-gray-900 hover:to-gray-800 transition"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:scale-110 transition">
                  {exp.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 transition mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition mb-3">
                    {exp.description}
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition">
                    Visit →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">
              🎓 Education
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-200">BCA - IGNOU</p>
                <p className="text-sm text-gray-400">2023 - 2026</p>
              </div>
              <div>
                <p className="font-semibold text-gray-200">
                  META Introduction to Front-End Development
                </p>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/YAWGNE8LDY6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Verify Certificate →
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">
              💼 Career Goals
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Build scalable web applications
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Master modern frontend stack
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Contribute to impactful projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
