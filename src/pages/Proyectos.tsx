export default function Proyectos() {
  const projects = [
    {
      title: "Portafolio Personal",
      description:
        "Portafolio de @Chiki que muestra sus logros, habilidades y proyectos profesionales.",
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "Git",
        "GitHub",
      ],
      icon: "fa-solid fa-user",
      repoUrl: "https://github.com/Chiki738/portafolio",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "E-commerce Marbellin",
      description:
        "Plataforma e-commerce para la venta de ropa interior, optimizando la gestión de productos y procesos de compra.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Supabase",
        "PHP",
        "Laravel",
        "Git",
        "GitHub",
      ],
      icon: "fa-solid fa-cart-shopping",
      repoUrl: "https://github.com/Chiki738/ecommerce-marbellin",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Challenge Encriptador",
      description:
        "Aplicación web que permite encriptar y desencriptar mensajes de texto de manera sencilla.",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      icon: "fa-solid fa-lock",
      repoUrl: "https://github.com/Chiki738/challenge-encriptador",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "CineFlix (Front & Back)",
      description:
        "Plataforma web para la gestión de películas y series. Desarrollé el frontend completo y colaboré en el backend.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Vercel",
        "Git",
        "GitHub",
        "Java",
        "Spring Boot",
        "Docker",
        "MongoDB Atlas",
      ],
      icon: "fa-solid fa-film",
      repoUrl: "https://github.com/Chiki738/cineflix",
      extraRepo: "https://github.com/cj-laos/CinexFlix",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Siroc (Front & Back)",
      description:
        "Sistema con arquitectura hexagonal. Desarrollé el frontend y participé en el backend usando principios de Clean Architecture.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Vercel",
        "Git",
        "GitHub",
        "Java",
        "Spring Boot",
        "Supabase",
      ],
      icon: "fa-solid fa-gears",
      repoUrl: "https://github.com/Chiki738/siroc",
      extraRepo: "https://github.com/cj-laos/hexagonal",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Mis{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              Proyectos
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explora los proyectos en los que he trabajado, desde aplicaciones
            personales hasta sistemas colaborativos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div
                className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <i className={`${project.icon} text-4xl`}></i>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    Proyecto {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[80px]">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Tecnologías:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white py-3 rounded-lg transition-colors font-medium">
                    <i className="fa-brands fa-github"></i>
                    <span>Repositorio Frontend</span>
                  </a>

                  {project.extraRepo && (
                    <a
                      href={project.extraRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-500 text-white py-3 rounded-lg transition-colors font-medium">
                      <i className="fa-brands fa-github"></i>
                      <span>Repositorio Backend</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
