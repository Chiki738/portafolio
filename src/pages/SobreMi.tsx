import { useState } from "react";
import {
  Users,
  Repeat, // Para Scrum/Iterativo
  Lightbulb,
  Clock,
  MessageSquare,
  LineChart, // Para Presentación de avances
  GraduationCap,
  Award,
  Wrench, // Para Soporte Técnico
  Languages,
  UserCog,
  CheckCircle2,
} from "lucide-react";

export default function SobreMi() {
  // --- 1. DATOS ---

  // Habilidades Blandas
  const softSkills = [
    { name: "Trabajo en equipo", icon: <Users size={20} /> },
    { name: "Scrum / Ágiles", icon: <Repeat size={20} /> },
    { name: "Resolución de problemas", icon: <Lightbulb size={20} /> },
    { name: "Gestión del tiempo", icon: <Clock size={20} /> },
    { name: "Comunicación efectiva", icon: <MessageSquare size={20} /> },
    { name: "Presentación de avances", icon: <LineChart size={20} /> },
  ];

  // Certificaciones y Educación
  const education = [
    {
      title: "Ingeniería de Sistemas e Informática",
      place: "Universidad Tecnológica del Perú (UTP)",
      date: "2021 - Actualidad (10.º ciclo)",
      icon: <GraduationCap size={24} />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
    },
    {
      title: "Formación Front-End & Git",
      place: "Alura Latam",
      date: "2024",
      icon: <Award size={24} />,
      color:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
      border: "border-orange-200 dark:border-orange-800",
    },
    {
      title: "Excel Intermedio & Soporte Técnico",
      place: "Universidad Tecnológica del Perú (UTP)",
      date: "2023",
      icon: <Wrench size={24} />,
      color:
        "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      border: "border-green-200 dark:border-green-800",
    },
  ];

  // --- 2. LÓGICA DE SKILLS ---
  type Nivel = "Todos" | "Avanzado" | "Intermedio" | "Básico";

  const skillConfiguration: Record<string, Exclude<Nivel, "Todos">> = {
    // Avanzado
    html: "Avanzado",
    css: "Avanzado",
    // Intermedio
    js: "Intermedio",
    ts: "Intermedio",
    react: "Intermedio",
    php: "Intermedio",
    laravel: "Intermedio",
    tailwind: "Intermedio",
    git: "Intermedio",
    github: "Intermedio",
    postman: "Intermedio",
    vercel: "Intermedio",
    notion: "Intermedio",
    mysql: "Intermedio",
    postgres: "Intermedio",
    mongodb: "Intermedio",
    supabase: "Intermedio",
    // Básico
    java: "Básico",
    spring: "Básico",
    docker: "Básico",
  };

  const allTechnologies = Object.keys(skillConfiguration).sort();

  const niveles: Record<Nivel, string[]> = {
    Todos: allTechnologies,
    Avanzado: allTechnologies.filter(
      (t) => skillConfiguration[t] === "Avanzado"
    ),
    Intermedio: allTechnologies.filter(
      (t) => skillConfiguration[t] === "Intermedio"
    ),
    Básico: allTechnologies.filter((t) => skillConfiguration[t] === "Básico"),
  };

  const [nivelSeleccionado, setNivelSeleccionado] = useState<Nivel>("Todos");

  const generateIconUrl = (tech: string) => {
    return `https://skillicons.dev/icons?i=${tech}&theme=light`;
  };

  return (
    // Usamos 'fondo-animado' si quieres el gradiente, o un bg sólido limpio.
    // Aquí uso un gris muy suave para diferenciarlo un poco del Inicio, pero manteniendo la armonía.
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-20 transition-colors duration-500 overflow-hidden relative">
      {/* Elementos decorativos de fondo (blobs) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200/20 dark:bg-yellow-900/10 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        {/* 1. ENCABEZADO */}
        <div className="text-center space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Sobre <span className="text-yellow-500 relative">Mí</span>
          </h1>

          <div className="max-w-3xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700 relative">
            {/* Comillas decorativas */}
            <div className="absolute -top-4 -left-4 text-6xl text-yellow-500 opacity-30 font-serif">
              "
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center font-medium">
              Profesional proactivo y adaptable del área de Ingeniería de
              Sistemas e Informática, con experiencia en proyectos de desarrollo
              web y soporte técnico. Me enfoco en la mejora continua, la
              organización y la resolución eficiente de problemas, aportando
              soluciones seguras en entornos colaborativos.
            </p>
          </div>
        </div>

        {/* 2. FORMACIÓN ACADÉMICA */}
        <div className="animate-fade-up delay-100">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-10 text-center flex items-center justify-center gap-3">
            <span className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg text-yellow-600 dark:text-yellow-400">
              <GraduationCap size={24} />
            </span>
            Formación Académica
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                // AGREGADO: cursor-pointer aquí
                className={`
                  cursor-pointer
                  bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl 
                  shadow-lg hover:shadow-2xl hover:-translate-y-1 
                  transition-all duration-300 border ${item.border}
                `}>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {item.place}
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. ARSENAL TECNOLÓGICO */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-12 animate-fade-up delay-200 overflow-hidden relative group">
          {/* Fondo sutil interno */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Arsenal Tecnológico
            </h2>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {(["Todos", "Avanzado", "Intermedio", "Básico"] as Nivel[]).map(
                (nivel) => (
                  <button
                    key={nivel}
                    onClick={() => setNivelSeleccionado(nivel)}
                    // AGREGADO: cursor-pointer aquí (los botones ya suelen tenerlo por defecto, pero se fuerza por si acaso con Tailwind)
                    className={`
                      cursor-pointer px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform
                      ${
                        nivelSeleccionado === nivel
                          ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/30 scale-105"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }
                    `}>
                    {nivel}
                  </button>
                )
              )}
            </div>

            {/* Grid de Iconos */}
            <div className="min-h-[160px]">
              {niveles[nivelSeleccionado].length > 0 ? (
                <div className="flex flex-wrap justify-center gap-6 animate-fade-in">
                  {niveles[nivelSeleccionado].map((tech, index) => (
                    <div
                      key={tech}
                      // AGREGADO: cursor-pointer aquí
                      className="cursor-pointer group/icon relative flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 p-2"
                      style={{ animationDelay: `${index * 50}ms` }}>
                      <div className="relative">
                        {/* Efecto Glow detrás del icono */}
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity"></div>
                        <img
                          src={generateIconUrl(tech)}
                          alt={tech}
                          className="w-14 h-14 md:w-16 md:h-16 drop-shadow-sm group-hover/icon:drop-shadow-xl transition-all relative z-10"
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-600 dark:text-gray-400 opacity-0 group-hover/icon:opacity-100 transition-opacity absolute -bottom-4 capitalize bg-white dark:bg-gray-800 px-2 py-0.5 rounded-md shadow-sm">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 italic">
                  No hay tecnologías listadas en este nivel.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 4. HABILIDADES BLANDAS & IDIOMAS */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-up delay-300">
          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <UserCog className="text-blue-500" />
              Habilidades Blandas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  // MODIFICADO: cambiado de cursor-default a cursor-pointer
                  className="cursor-pointer flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
                  <div className="text-blue-500 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-t-4 border-green-500 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <Languages className="text-green-500" />
              Idiomas
            </h3>
            <div className="space-y-4">
              {/* Español */}
              <div className="cursor-pointer flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-bold text-gray-800 dark:text-white">
                    Español
                  </span>
                </div>
                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full font-bold border border-green-200 dark:border-green-800">
                  Nativo
                </span>
              </div>

              {/* Inglés */}
              <div className="cursor-pointer flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-yellow-50 dark:hover:bg-yellow-900/10 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span className="font-bold text-gray-800 dark:text-white">
                    Inglés
                  </span>
                </div>
                <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full font-bold border border-yellow-200 dark:border-yellow-800">
                  Básico
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
