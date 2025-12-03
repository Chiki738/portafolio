import {
  Github,
  ShoppingCart,
  Lock,
  Film,
  Settings,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

export default function Proyectos() {
  const projects = [
    {
      title: "Portafolio Personal",
      description:
        "Portafolio profesional diseñado para mostrar trayectoria, habilidades técnicas y proyectos destacados con una experiencia de usuario fluida.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "Vercel",
      ],
      icon: <FolderGit2 size={32} />,
      repoUrl: "https://github.com/Chiki738/portafolio",
      color: "from-yellow-500 to-amber-600",
      shadow: "shadow-yellow-500/20",
      // Sin extraRepo -> Mostrará "Ver Repositorio"
    },
    {
      title: "E-commerce Marbellin",
      description:
        "Solución integral de comercio electrónico para gestión de inventario, carritos de compra y procesamiento de pedidos de ropa interior.",
      technologies: ["PHP", "Laravel", "Bootstrap", "MySQL", "Supabase"],
      icon: <ShoppingCart size={32} />,
      repoUrl: "https://github.com/Chiki738/ecommerce-marbellin",
      color: "from-pink-500 to-rose-600",
      shadow: "shadow-pink-500/20",
      // Sin extraRepo -> Mostrará "Ver Repositorio"
    },
    {
      title: "Challenge Encriptador",
      description:
        "Herramienta lógica para encriptación y desencriptación de mensajes basada en reglas de sustitución, con una interfaz limpia y responsive.",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      icon: <Lock size={32} />,
      repoUrl: "https://github.com/Chiki738/challenge-encriptador",
      color: "from-blue-500 to-cyan-600",
      shadow: "shadow-blue-500/20",
      // Sin extraRepo -> Mostrará "Ver Repositorio"
    },
    {
      title: "CineFlix (Full Stack)",
      description:
        "Plataforma de streaming. Desarrollé el Frontend en React consumiendo una API RESTful Java/Spring Boot en la que colaboré activamente.",
      technologies: [
        "React",
        "Java",
        "Spring Boot",
        "MongoDB",
        "Docker",
        "JWT",
      ],
      icon: <Film size={32} />,
      repoUrl: "https://github.com/Chiki738/cineflix",
      extraRepo: "https://github.com/cj-laos/CinexFlix", // Tiene extraRepo -> Divide en Front/Back
      color: "from-indigo-500 to-purple-600",
      shadow: "shadow-indigo-500/20",
    },
    {
      title: "Siroc (Arquitectura Hexagonal)",
      description:
        "Sistema complejo implementando Arquitectura Hexagonal y principios Clean Code. Separación estricta de capas de dominio e infraestructura.",
      technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "Supabase"],
      icon: <Settings size={32} />,
      repoUrl: "https://github.com/Chiki738/siroc",
      extraRepo: "https://github.com/cj-laos/hexagonal", // Tiene extraRepo -> Divide en Front/Back
      color: "from-emerald-500 to-green-600",
      shadow: "shadow-emerald-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-20 relative overflow-hidden transition-colors duration-500">
      {/* Fondo Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-yellow-100/50 to-transparent dark:from-yellow-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Mis{" "}
            <span className="text-yellow-500 relative inline-block">
              Proyectos
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Una colección de mis trabajos más recientes, abarcando desde
            aplicaciones web interactivas hasta sistemas backend robustos.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                group flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden 
                border border-gray-100 dark:border-gray-800
                shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 dark:hover:shadow-yellow-900/10
                transition-all duration-300 hover:-translate-y-2
                animate-fade-up
              `}
              style={{ animationDelay: `${index * 100}ms` }}>
              {/* Header de la Card con Gradiente */}
              <div
                className={`relative h-32 bg-gradient-to-r ${project.color} p-6 flex items-center justify-between overflow-hidden`}>
                {/* Decoración de fondo en el header */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10 text-white p-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 shadow-inner">
                  {project.icon}
                </div>

                <span className="relative z-10 text-xs font-bold text-white/90 bg-black/20 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md 
                        bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300
                        border border-gray-200 dark:border-gray-700
                        group-hover:border-yellow-200 dark:group-hover:border-yellow-900/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones de Acción - LÓGICA MODIFICADA */}
                <div className="space-y-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center justify-center gap-2 w-full px-4 py-2.5 
                    bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                    rounded-xl font-bold text-sm shadow-lg 
                    hover:bg-gray-800 dark:hover:bg-gray-100 
                    hover:scale-[1.02] active:scale-95 transition-all duration-200">
                    <Github size={18} />
                    {/* Texto condicional */}
                    <span>
                      {project.extraRepo
                        ? "Repositorio Frontend"
                        : "Ver Repositorio"}
                    </span>
                    <ExternalLink size={14} className="opacity-50" />
                  </a>

                  {project.extraRepo && (
                    <a
                      href={project.extraRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center justify-center gap-2 w-full px-4 py-2.5 
                      bg-white dark:bg-gray-800 text-gray-700 dark:text-white 
                      border border-gray-200 dark:border-gray-700
                      rounded-xl font-bold text-sm
                      hover:bg-gray-50 dark:hover:bg-gray-700 
                      hover:scale-[1.02] active:scale-95 transition-all duration-200">
                      <Github size={18} />
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
