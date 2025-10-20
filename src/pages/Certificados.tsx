export default function Certificados() {
  const certificates = [
    {
      title: "Certificación en Desarrollo Web Full Stack",
      description:
        "Curso completo de desarrollo web moderno con React, Node.js y bases de datos.",
      institution: "Platzi",
      date: "2024",
      icon: "fa-solid fa-award",
      driveUrl: "https://drive.google.com/file/d/tu-certificado-1",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Java Programming Masterclass",
      description:
        "Dominio de Java, POO, estructuras de datos y desarrollo de aplicaciones empresariales.",
      institution: "Udemy",
      date: "2023",
      icon: "fa-solid fa-certificate",
      driveUrl: "https://drive.google.com/file/d/tu-certificado-2",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "SQL Server Database Administration",
      description:
        "Gestión avanzada de bases de datos, optimización de consultas y seguridad.",
      institution: "Microsoft Learn",
      date: "2023",
      icon: "fa-solid fa-database",
      driveUrl: "https://drive.google.com/file/d/tu-certificado-3",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Power BI Data Analytics",
      description:
        "Análisis y visualización de datos, creación de dashboards interactivos.",
      institution: "DataCamp",
      date: "2024",
      icon: "fa-solid fa-chart-pie",
      driveUrl: "https://drive.google.com/file/d/tu-certificado-4",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Spring Framework Professional",
      description:
        "Desarrollo de aplicaciones empresariales con Spring Boot, Spring Security y Spring Data.",
      institution: "Baeldung",
      date: "2023",
      icon: "fa-solid fa-leaf",
      driveUrl: "https://drive.google.com/file/d/tu-certificado-5",
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "Git & GitHub: Version Control",
      description:
        "Control de versiones, colaboración en equipo y mejores prácticas de desarrollo.",
      institution: "GitHub Learning Lab",
      date: "2023",
      icon: "fa-brands fa-git-alt",
      driveUrl: "https://drive.google.com/file/d/tu-certificado-6",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
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
            en diferentes tecnologías
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
              Mi compromiso con el aprendizaje continuo me impulsa a mantenerme
              actualizado con las últimas tecnologías y mejores prácticas en el
              desarrollo de software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
