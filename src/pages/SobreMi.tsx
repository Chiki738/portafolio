import { useState } from "react";

export default function SobreMi() {
  // Definiciones de datos
  // Habilidades blandas actualizadas
  const softSkills = [
    { name: "Trabajo en equipo", icon: "fa-solid fa-people-group" },
    { name: "Comunicación efectiva", icon: "fa-solid fa-comments" },
    { name: "Resolución de problemas", icon: "fa-solid fa-lightbulb" },
    { name: "Gestión del tiempo", icon: "fa-solid fa-clock" },
    { name: "Pensamiento crítico", icon: "fa-solid fa-brain" },
    { name: "Adaptabilidad", icon: "fa-solid fa-repeat" },
    { name: "Liderazgo", icon: "fa-solid fa-user-tie" },
    { name: "Proactividad", icon: "fa-solid fa-bolt" },
    { name: "Aprendizaje continuo", icon: "fa-solid fa-book-open" },
    { name: "Empatía", icon: "fa-solid fa-handshake" },
    { name: "Creatividad", icon: "fa-solid fa-palette" },
    { name: "Pensamiento analítico", icon: "fa-solid fa-chart-line" },
  ];

  type Nivel = "Todos" | "Avanzado" | "Intermedio" | "Básico";

  // Objeto de configuración de habilidades:
  const skillConfiguration: Record<string, Exclude<Nivel, "Todos">> = {
    // Nivel Avanzado
    html: "Avanzado",
    css: "Avanzado",
    word: "Avanzado",
    excel: "Avanzado",
    powerpoint: "Avanzado",

    // Nivel Básico
    spring: "Básico",
    powerbi: "Básico",
    docker: "Básico",
    postman: "Básico",
  };

  // Lista maestra de todas las tecnologías
  const allTechnologies = [
    "java",
    "js",
    "ts",
    "php",
    "html",
    "css",
    "react",
    "bootstrap",
    "spring",
    "laravel",
    "mysql",
    "postgres",
    "mongodb",
    "supabase",
    "notion",
    "obsidian",
    "sqlserver",
    "word",
    "excel",
    "powerpoint",
    "docker",
    "postman",
  ]
    .filter((value, index, self) => self.indexOf(value) === index)
    // Se añade .sort() para ordenar alfabéticamente la lista completa de tecnologías
    .sort();

  // Objeto de niveles final, calculado dinámicamente:
  const niveles: Record<Nivel, string[]> = {
    Todos: allTechnologies,
    Avanzado: allTechnologies.filter(
      (tech) => skillConfiguration[tech] === "Avanzado"
    ),
    Básico: allTechnologies.filter(
      (tech) => skillConfiguration[tech] === "Básico"
    ),
    // Intermedio: Son las tecnologías que no tienen nivel específico (el resto)
    Intermedio: allTechnologies.filter(
      (tech) =>
        skillConfiguration[tech] !== "Avanzado" &&
        skillConfiguration[tech] !== "Básico"
    ),
  };

  // Se añade el estado para gestionar el filtro
  const [nivelSeleccionado, setNivelSeleccionado] = useState<Nivel>("Todos");

  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Básico" },
  ];

  // Función auxiliar para generar la URL de un ícono individual
  const generateIndividualIconUrl = (iconName: string) => {
    // Usamos size=100 y titles=false para un tamaño uniforme y sin texto debajo.
    return `https://go-skill-icons.vercel.app/api/icons?i=${iconName}&size=100&theme=light&titles=false`;
  };

  return (
    <div className="min-h-screen from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal - Centrado */}
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3 justify-center">
            <i className="fa-solid fa-code text-yellow-600 dark:text-yellow-400"></i>
            Tecnologías por Nivel
          </h2>

          {/* Filtros - Ahora con ancho uniforme */}
          <div className="flex justify-center mb-8">
            {/* Contenedor Grid: Usa 4 columnas en desktop (sm:grid-cols-4) para el ancho uniforme. */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
              {(["Todos", "Avanzado", "Intermedio", "Básico"] as Nivel[]).map(
                (nivel) => (
                  <button
                    key={nivel}
                    onClick={() => setNivelSeleccionado(nivel)}
                    // Se usa 'w-full' para que el botón ocupe todo el espacio de su celda en el grid
                    className={`w-full px-2 py-2 rounded-full text-sm font-semibold border transition-all text-center ${
                      nivelSeleccionado === nivel
                        ? "bg-yellow-500 text-white border-yellow-500 shadow-md"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-yellow-100 dark:hover:bg-gray-600"
                    }`}>
                    {nivel}
                  </button>
                )
              )}
            </div>
          </div>

          {/* IMAGEN DE HABILIDADES (Ahora individual) */}
          <div className="flex justify-center min-h-[150px] items-start">
            {niveles[nivelSeleccionado].length > 0 ? (
              // Usamos flexbox para envolver los íconos individualmente
              <div className="flex flex-wrap justify-center gap-4 max-w-full">
                {niveles[nivelSeleccionado].map((tech) => (
                  <img
                    key={tech}
                    src={generateIndividualIconUrl(tech)}
                    alt={tech}
                    // Se usa w-12 h-12 (48px) para dar un tamaño fijo en el DOM y garantizar que
                    // si la imagen se redimensiona, no se vea distorsionada. El size=100 en la URL
                    // le da la calidad de "más pixel" que solicitaste para este tamaño.
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No hay habilidades definidas para este nivel.
              </p>
            )}
          </div>
        </div>

        {/* Habilidades Blandas - Se mantuvo el estilo original */}
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

        {/* Idiomas - Se mantuvo el estilo original */}
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
