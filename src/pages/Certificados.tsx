export default function Certificados() {
  const certificates = [
    {
      title: "Certificación en Excel Intermedio",
      description:
        "Manejo de funciones, tablas dinámicas y análisis de datos con herramientas avanzadas de Excel.",
      institution: "Universidad Tecnológica del Perú (UTP)",
      date: "2023",
      icon: "fa-solid fa-file-excel",
      driveUrl:
        "https://drive.google.com/file/d/1cC9kQ2RNVvNXqOfg9OkHUGOBg0d2Szeo/view?usp=sharing",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Certificación en Git y Control de Versiones",
      description:
        "Aprendizaje del control de versiones, ramas, fusión de cambios y colaboración en proyectos con GitHub.",
      institution: "Alura Latam",
      date: "2024",
      icon: "fa-brands fa-git-alt",
      driveUrl:
        "https://drive.google.com/file/d/1unyyg-HKZUFiTlct4U6xGZle9wNwV9xt/view?usp=sharing",
      color: "from-gray-700 to-gray-900",
    },
    {
      title: "Certificación en Inglés A2 (MCER)",
      description:
        "Nivel A2 según el Marco Común Europeo de Referencia (MCER): comprensión y comunicación básica en inglés.",
      institution: "Universidad Tecnológica del Perú (UTP)",
      date: "2023",
      icon: "fa-solid fa-language",
      driveUrl:
        "https://drive.google.com/file/d/1UyZqk7mP-NUtFqdK7wXv0ZlcIZtg8_VC/view?usp=sharing",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Certificación en Soporte de TI (Hardware)",
      description:
        "Mantenimiento, diagnóstico y reparación de equipos de cómputo, aplicando buenas prácticas técnicas.",
      institution: "Universidad Tecnológica del Perú (UTP)",
      date: "2023",
      icon: "fa-solid fa-computer",
      driveUrl:
        "https://drive.google.com/file/d/13ycyAOV7maa_AugPWhskduKYqo4B5MAq/view?usp=sharing",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Mis{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              Certificados
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Certificaciones que validan mi formación continua y especialización
            en diferentes áreas tecnológicas y profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <i className={`${cert.icon} text-4xl`}></i>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  {cert.title}
                </h3>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 min-h-[60px]">
                    {cert.description}
                  </p>
                  <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 flex items-center gap-2">
                    <i className="fa-solid fa-building-columns"></i>
                    {cert.institution}
                  </p>
                </div>

                <a
                  href={cert.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg transition-colors font-medium shadow-md">
                  <i className="fa-brands fa-google-drive"></i>
                  <span>Ver Certificado</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="max-w-2xl mx-auto">
            <i className="fa-solid fa-graduation-cap text-5xl text-yellow-600 dark:text-yellow-400 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              Aprendizaje Continuo
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Mi compromiso con el aprendizaje constante me impulsa a seguir
              mejorando mis habilidades técnicas y profesionales para ofrecer
              soluciones más completas y eficientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
