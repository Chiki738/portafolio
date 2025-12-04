import { useState, useEffect } from "react";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Atom, // Icono React (átomo)
  Wind, // Icono Tailwind (viento)
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para mostrar/ocultar el botón de subir
  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar botón después de bajar 300px
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
        "hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/carlos-alzamora-chiki/",
      colorClass:
        "hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={24} />,
      url: "https://wa.me/51956299119?text=Hola%20Carlos,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.",
      colorClass:
        "hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:carlosalzamorah@gmail.com",
      colorClass:
        "hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.6)]",
    },
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-12 pb-8 overflow-hidden border-t border-gray-800">
      {/* Línea superior con gradiente animado */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      {/* Efecto de luz ambiental superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-yellow-500/20 blur-[20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Iconos Sociales */}
          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-gray-500 ${link.colorClass}`}
                aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>

          {/* Separador sutil */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Créditos y Copyright */}
          <div className="text-center space-y-3">
            <p className="text-sm font-medium text-gray-400 flex items-center justify-center gap-2">
              Desarrollado con
              <span className="text-cyan-400 inline-flex items-center gap-1 bg-cyan-950/30 px-2 py-0.5 rounded-full border border-cyan-900/50">
                <Atom size={14} className="animate-spin-slow" /> React
              </span>
              &
              <span className="text-sky-400 inline-flex items-center gap-1 bg-sky-950/30 px-2 py-0.5 rounded-full border border-sky-900/50">
                <Wind size={14} /> Tailwind
              </span>
            </p>

            <p className="text-xs text-gray-600 font-medium">
              © {currentYear} - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>

      {/* Botón Flotante "Volver Arriba" */}
      <button
        onClick={scrollToTop}
        className={`
            fixed bottom-6 right-6 p-3 rounded-full z-50
            bg-yellow-500 hover:bg-yellow-400 text-gray-900
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
