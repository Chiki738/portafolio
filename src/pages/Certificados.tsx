import {
  FileSpreadsheet,
  GitBranch,
  Languages,
  Monitor,
  ExternalLink,
  Building2,
  Calendar,
  GraduationCap,
} from "lucide-react";

export default function Certificados() {
  const certificates = [
    {
      title: "Excel Intermedio",
      fullTitle: "Certificación en Excel Intermedio",
      description:
        "Dominio de tablas dinámicas, funciones avanzadas, dashboards y análisis de datos eficiente.",
      institution: "Universidad Tecnológica del Perú (UTP)",
      date: "2023",
      icon: <FileSpreadsheet size={32} />,
      driveUrl:
        "https://drive.google.com/file/d/1cC9kQ2RNVvNXqOfg9OkHUGOBg0d2Szeo/view?usp=sharing",
      color: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/20",
    },
    {
      title: "Git y GitHub",
      fullTitle: "Control de Versiones con Git",
      description:
        "Gestión profesional de código, flujos de trabajo con ramas, resolución de conflictos y colaboración.",
      institution: "Alura Latam",
      date: "2024",
      icon: <GitBranch size={32} />,
      driveUrl:
        "https://drive.google.com/file/d/1unyyg-HKZUFiTlct4U6xGZle9wNwV9xt/view?usp=sharing",
      color: "from-gray-700 to-gray-900",
      shadow: "shadow-gray-500/20",
    },
    {
      title: "Inglés A2 (MCER)",
      fullTitle: "Certificación en Inglés A2",
      description:
        "Comprensión lectora y auditiva, con capacidad de comunicación básica en entornos técnicos y cotidianos.",
      institution: "Universidad Tecnológica del Perú (UTP)",
      date: "2023",
      icon: <Languages size={32} />,
      driveUrl:
        "https://drive.google.com/file/d/1UyZqk7mP-NUtFqdK7wXv0ZlcIZtg8_VC/view?usp=sharing",
      color: "from-blue-500 to-cyan-600",
      shadow: "shadow-blue-500/20",
    },
    {
      title: "Soporte TI (Hardware)",
      fullTitle: "Soporte Técnico de Hardware",
      description:
        "Diagnóstico, mantenimiento preventivo/correctivo y ensamblaje de equipos de cómputo.",
      institution: "Universidad Tecnológica del Perú (UTP)",
      date: "2023",
      icon: <Monitor size={32} />,
      driveUrl:
        "https://drive.google.com/file/d/13ycyAOV7maa_AugPWhskduKYqo4B5MAq/view?usp=sharing",
      color: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/20",
    },
  ];

  // Ordenar de más reciente a menos reciente
  certificates.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-20 relative overflow-hidden transition-colors duration-500">
      {/* Fondo Decorativo (Coherente con Proyectos) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/40 dark:bg-yellow-900/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px] -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Mis{" "}
            <span className="text-yellow-500 relative inline-block">
              Certificados
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Validación oficial de mis conocimientos y el resultado de mi
            compromiso con la especialización técnica constante.
          </p>
        </div>

        {/* Grid de Certificados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`
                group relative flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden 
                border border-gray-100 dark:border-gray-800
                shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 dark:hover:shadow-yellow-900/10
                transition-all duration-300 hover:-translate-y-2
                animate-fade-up
              `}
              style={{ animationDelay: `${index * 100}ms` }}>
              {/* Header Visual */}
              <div
                className={`relative h-28 bg-gradient-to-r ${cert.color} p-6 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-inner">
                    {cert.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 bg-black/20 backdrop-blur-md text-white/90 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  {cert.title}
                </h3>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  {cert.fullTitle}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {cert.description}
                </p>

                <div className="space-y-4">
                  {/* Institución */}
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700/50">
                    <Building2 size={18} className="text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 line-clamp-1">
                      {cert.institution}
                    </span>
                  </div>

                  {/* Botón */}
                  <a
                    href={cert.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group/btn flex items-center justify-center gap-2 w-full py-3 
                    bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-bold text-sm rounded-xl
                    border-2 border-gray-100 dark:border-gray-700
                    hover:border-yellow-500 dark:hover:border-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400
                    transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Ver Credencial <ExternalLink size={16} />
                    </span>
                    {/* Efecto hover de fondo sutil */}
                    <div className="absolute inset-0 bg-yellow-50 dark:bg-yellow-900/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección Footer: Aprendizaje Continuo */}
        <div className="animate-fade-up delay-300">
          <div className="relative bg-gradient-to-br from-yellow-500 to-amber-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white dark:bg-gray-900 rounded-[22px] p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-6 text-yellow-600 dark:text-yellow-400 animate-bounce-slow">
                  <GraduationCap size={32} />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Aprendizaje Continuo
                </h2>

                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
                  "Mi compromiso con la excelencia técnica me impulsa a
                  mantenerme siempre actualizado. Cada certificación es un paso
                  más hacia soluciones más robustas y eficientes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
