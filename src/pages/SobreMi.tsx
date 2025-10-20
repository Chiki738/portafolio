import { useState } from "react";

export default function SobreMi() {
  const softSkills = [
    { name: "Trabajo en equipo", icon: "fa-solid fa-people-group" },
    { name: "Metodologías ágiles (Scrum)", icon: "fa-solid fa-sitemap" },
    { name: "Comunicación efectiva", icon: "fa-solid fa-comments" },
    { name: "Resolución de problemas", icon: "fa-solid fa-lightbulb" },
    { name: "Gestión del tiempo", icon: "fa-solid fa-clock" },
    { name: "Pensamiento crítico", icon: "fa-solid fa-brain" },
    { name: "Adaptabilidad", icon: "fa-solid fa-repeat" },
    { name: "Liderazgo", icon: "fa-solid fa-user-tie" },
    { name: "Proactividad", icon: "fa-solid fa-bolt" },
    { name: "Aprendizaje continuo", icon: "fa-solid fa-book-open" },
  ];

  type Nivel = "Todos" | "Avanzado" | "Intermedio" | "Básico";

  // 1. Objeto de configuración de habilidades:
  const skillConfiguration: Record<string, Exclude<Nivel, "Todos">> = {
    // Nivel Avanzado (HTML, CSS, Word, Excel, PowerPoint)
    html: "Avanzado",
    css: "Avanzado",
    word: "Avanzado", // <--- MOVIDO A AVANZADO
    excel: "Avanzado", // <--- MOVIDO A AVANZADO
    powerpoint: "Avanzado", // <--- MOVIDO A AVANZADO

    // Nivel Básico (Spring, PowerBI, Docker, Postman)
    spring: "Básico",
    powerbi: "Básico",
    docker: "Básico", // <--- MOVIDO A BÁSICO
    postman: "Básico", // <--- MOVIDO A BÁSICO
  };

  // 2. Lista maestra de todas las tecnologías (únicas, sin vite, git, o github)
  const allTechnologies = [
    "java",
    "js",
    "ts",
    "php",
    "html",
    "css",
    "react",
    "bootstrap",
    /* 'vite' eliminado */ "spring",
    "laravel",
    "mysql",
    "postgres",
    "mongodb",
    "supabase" /* 'git' eliminado */ /* 'github' eliminado */,
    /* 'postman' movido a config */ /* 'docker' movido a config */ "notion",
    "obsidian" /* 'word' movido a config */,
    /* 'excel' movido a config */ /* 'powerpoint' movido a config */
    "sqlserver",
    "word",
    "excel",
    "powerpoint",
    "docker",
    "postman",
    "powerbi",
  ].filter((value, index, self) => self.indexOf(value) === index); // Filtra duplicados si los hay

  // 3. Objeto de niveles final, calculado dinámicamente:
  const niveles: Record<Nivel, string[]> = {
    Todos: allTechnologies,
    Avanzado: allTechnologies.filter(
      (tech) => skillConfiguration[tech] === "Avanzado"
    ),
    Básico: allTechnologies.filter(
      (tech) => skillConfiguration[tech] === "Básico"
    ),
    // Intermedio: Son las tecnologías que no son Avanzado NI Básico (el resto)
    Intermedio: allTechnologies.filter(
      (tech) =>
        skillConfiguration[tech] !== "Avanzado" &&
        skillConfiguration[tech] !== "Básico"
    ),
  };

  const [nivelSeleccionado, setNivelSeleccionado] = useState<Nivel>("Todos");

  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Básico" },
  ];

  // Función para generar la URL de los íconos con tamaño aumentado
  const generateSkillIconsUrl = (nivel: Nivel) => {
    const technologies = niveles[nivel].join(",");
    // Mantenemos &size=64 para íconos más grandes
    return `https://go-skill-icons.vercel.app/api/icons?i=${technologies}&size=64&theme=light`;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
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

        {/* Sección de tecnologías */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <i className="fa-solid fa-code text-yellow-600 dark:text-yellow-400"></i>
            Tecnologías
          </h2>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {(["Todos", "Avanzado", "Intermedio", "Básico"] as Nivel[]).map(
              (nivel) => (
                <button
                  key={nivel}
                  onClick={() => setNivelSeleccionado(nivel)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                    nivelSeleccionado === nivel
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-yellow-100 dark:hover:bg-gray-600"
                  }`}>
                  {nivel}
                </button>
              )
            )}
          </div>

          {/* IMAGEN ÚNICA DE HABILIDADES */}
          <div className="flex justify-center">
            <img
              src={generateSkillIconsUrl(nivelSeleccionado)}
              alt={`Tecnologías: ${nivelSeleccionado}`}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <i className="fa-solid fa-heart text-yellow-600 dark:text-yellow-400"></i>
            Habilidades Blandas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        {/* Idiomas */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-3">
            <i className="fa-solid fa-language text-yellow-600 dark:text-yellow-400"></i>
            Idiomas
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-gray-50 dark:bg-gray-700 px-6 py-3 rounded-lg shadow-sm">
                <span className="text-yellow-700 dark:text-yellow-300 font-semibold">
                  {lang.name}
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
