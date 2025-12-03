import { useState, useEffect } from "react";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Atom,
  Wind,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para mostrar/ocultar el botón de subir
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/Chiki738",
      colorClass:
        "hover:text-black dark:hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/carlos-alzamora-chiki/",
      colorClass:
        "hover:text-blue-600 dark:hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={24} />,
      url: "https://wa.me/51956299119?text=Hola%20Carlos,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.",
      colorClass:
        "hover:text-green-600 dark:hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(22,163,74,0.6)]",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:carlosalzamorah@gmail.com",
      colorClass:
        "hover:text-red-600 dark:hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]",
    },
  ];

  return (
    // CAMBIO PRINCIPAL: Clases idénticas al Navbar (bg-white/90, dark:bg-gray-900/90, backdrop-blur)
    <footer className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-md pt-12 pb-8 overflow-hidden border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
      {/* Línea superior con gradiente animado (Mantenido pero ajustado) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      {/* Efecto de luz ambiental superior (Ajustado para que no ensucie el modo claro) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-yellow-500/20 blur-[20px] opacity-50 dark:opacity-100"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Nombre con efecto */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-wide hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 cursor-default select-none">
            Carlos Alzamora - Chiki
          </h2>

          {/* Iconos Sociales */}
          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                // Agregado cursor-pointer explícito y colores adaptativos
                className={`cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-gray-600 dark:text-gray-400 ${link.colorClass}`}
                aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>

          {/* Separador sutil (Adaptado a claro/oscuro) */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          {/* Créditos y Copyright */}
          <div className="text-center space-y-3">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              Desarrollado con
              <span className="text-cyan-700 dark:text-cyan-400 inline-flex items-center gap-1 bg-cyan-100 dark:bg-cyan-950/30 px-2 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-900/50">
                <Atom size={14} className="animate-spin-slow" /> React
              </span>
              &
              <span className="text-sky-700 dark:text-sky-400 inline-flex items-center gap-1 bg-sky-100 dark:bg-sky-950/30 px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-900/50">
                <Wind size={14} /> Tailwind
              </span>
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
              © {currentYear} - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>

      {/* Botón Flotante "Volver Arriba" */}
      <button
        onClick={scrollToTop}
        className={`
            cursor-pointer fixed bottom-6 right-6 p-3 rounded-full z-50
            bg-yellow-500 hover:bg-yellow-400 text-white dark:text-gray-900
            shadow-lg shadow-yellow-500/20
            transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
            hover:shadow-yellow-500/40 hover:-translate-y-1 hover:scale-110
            active:scale-95
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0 pointer-events-none"
            }
        `}
        aria-label="Volver arriba">
        <ArrowUp size={24} strokeWidth={2.5} />
      </button>
    </footer>
  );
}
