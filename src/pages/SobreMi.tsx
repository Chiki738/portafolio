export default function SobreMi() {
  const technologies = [
    { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-600" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "text-blue-600" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-500" },
    { name: "React", icon: "fa-brands fa-react", color: "text-cyan-500" },
    { name: "Java", icon: "fa-brands fa-java", color: "text-red-600" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "text-orange-500" },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      color: "text-gray-800 dark:text-white",
    },
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "text-green-600" },
  ];

  const additionalSkills = [
    "Spring Framework",
    "SQL Server",
    "Power BI",
    "TypeScript",
    "TailwindCSS",
    "RESTful APIs",
  ];

  const softSkills = [
    { name: "Trabajo en equipo", icon: "fa-solid fa-people-group" },
    { name: "Resolución de problemas", icon: "fa-solid fa-lightbulb" },
    { name: "Comunicación efectiva", icon: "fa-solid fa-comments" },
    { name: "Aprendizaje continuo", icon: "fa-solid fa-graduation-cap" },
    { name: "Adaptabilidad", icon: "fa-solid fa-arrows-rotate" },
    { name: "Pensamiento crítico", icon: "fa-solid fa-brain" },
  ];

  const technicalSkills = [
    { name: "Desarrollo Frontend", icon: "fa-solid fa-laptop-code" },
    { name: "Desarrollo Backend", icon: "fa-solid fa-server" },
    { name: "Bases de Datos", icon: "fa-solid fa-database" },
    { name: "Control de Versiones", icon: "fa-solid fa-code-branch" },
    { name: "Análisis de Datos", icon: "fa-solid fa-chart-line" },
    { name: "Diseño Responsivo", icon: "fa-solid fa-mobile-screen" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Sobre{" "}
            <span className="text-yellow-600 dark:text-yellow-400">Mí</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Conoce las tecnologías que manejo y las habilidades que me definen
            como profesional
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <i className="fa-solid fa-code text-yellow-600 dark:text-yellow-400"></i>
            Tecnologías
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all transform hover:scale-105">
                <i className={`${tech.icon} text-5xl ${tech.color} mb-2`}></i>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-heart text-yellow-600 dark:text-yellow-400"></i>
              Habilidades Blandas
            </h2>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-yellow-50 dark:hover:bg-gray-600 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                    <i
                      className={`${skill.icon} text-2xl text-yellow-600 dark:text-yellow-400`}></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-wrench text-yellow-600 dark:text-yellow-400"></i>
              Habilidades Técnicas
            </h2>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-yellow-50 dark:hover:bg-gray-600 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                    <i
                      className={`${skill.icon} text-2xl text-yellow-600 dark:text-yellow-400`}></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
