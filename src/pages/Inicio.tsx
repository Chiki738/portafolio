import { Github, Linkedin, FileText, Mail, MessageCircle } from "lucide-react";
import Perfil from "../assets/perfil.jpg";

// Definición de tipos para los botones
interface SocialButton {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  textColor?: string;
  target?: string;
  download?: boolean;
}

export default function Inicio() {
  // Datos basados en tu CV actualizado
  const socialButtons: SocialButton[] = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Chiki738",
      color: "bg-gray-800 hover:bg-black border border-gray-700",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/carlos-alzamora-chiki/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={20} />,
      url: "https://wa.me/51956299119?text=Hola%20Carlos,%20vi%20tu%20portafolio%20y%20quisiera%20contactarte.",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Mi CV",
      icon: <FileText size={20} />,
      url: "https://drive.google.com/file/d/1PjvKJRrzq0GJrM2c7pLGxUgkA1X_RCFv/view?usp=sharing",
      color: "bg-yellow-400 hover:bg-yellow-500",
      textColor: "text-gray-900 font-bold",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:carlosalzamorah@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
  ];

  return (
    // 1. Usamos la clase 'fondo-animado' de tu global.css
    <div className="fondo-animado flex items-center justify-center overflow-hidden pt-24 pb-12 px-4 relative">
      {/* Elementos decorativos de fondo (opcionales, sutiles) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* ==================== SECCIÓN IMAGEN ==================== */}
          <div className="relative group animate-fade-left flex-shrink-0">
            {/* Brillo trasero */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

            {/* Foto de Perfil */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-800/50 shadow-2xl">
              <img
                src={Perfil}
                alt="Carlos Alzamora"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* ETIQUETAS ELIMINADAS AQUÍ */}
          </div>

          {/* ==================== SECCIÓN TEXTO ==================== */}
          <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl">
            {/* Estado "Disponible" */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/80 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-semibold animate-fade-up backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Disponible para trabajar
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight animate-fade-up delay-100 tracking-tight">
                Hola, soy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 animate-pulse-slow">
                  Carlos Alzamora
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium animate-fade-up delay-200">
                Ingeniero de Sistemas e Informática
              </h2>
            </div>

            {/* Texto del perfil extraído del CV */}
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed animate-fade-up delay-300">
              Profesional proactivo y adaptable con experiencia en{" "}
              <strong className="text-gray-800 dark:text-gray-200">
                desarrollo web Full Stack
              </strong>{" "}
              y soporte técnico. Me enfoco en la mejora continua y la resolución
              eficiente de problemas, aportando soluciones seguras y de calidad
              en entornos colaborativos.
            </p>

            {/* Grid de Botones */}
            <div className="pt-4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {socialButtons.map((button, index) => (
                  <a
                    key={button.name}
                    href={button.url}
                    target={button.target || "_blank"}
                    rel="noopener noreferrer"
                    // Estilo en línea para delay escalonado
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                    className={`
                      animate-fade-up
                      group relative overflow-hidden
                      ${button.color} 
                      ${button.textColor || "text-white"}
                      px-4 py-3 rounded-xl shadow-md 
                      flex items-center justify-center gap-2 font-bold text-sm
                      transform transition-all duration-300 
                      hover:-translate-y-1 hover:shadow-xl
                      active:scale-95
                    `}>
                    {/* Efecto Shine global */}
                    <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />

                    {/* Icono con rotación al hover */}
                    <span className="transition-transform group-hover:rotate-12 group-hover:scale-110">
                      {button.icon}
                    </span>
                    <span>{button.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
