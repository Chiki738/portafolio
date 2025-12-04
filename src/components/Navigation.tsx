import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  FolderGit2,
  Award,
  Github,
  FileText,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import perfilAnimado from "../assets/perfilAnimado.jpg";

// 1. Definimos los items
const NAV_ITEMS = [
  { id: "/", label: "Inicio", icon: <Home size={18} />, external: false },
  {
    id: "/sobreMi",
    label: "Sobre Mí",
    icon: <User size={18} />,
    external: false,
  },
  {
    id: "/proyectos",
    label: "Proyectos",
    icon: <FolderGit2 size={18} />,
    external: false,
  },
  {
    id: "/certificados",
    label: "Certificados",
    icon: <Award size={18} />,
    external: false,
  },
  {
    id: "https://github.com/Chiki738",
    label: "GitHub",
    icon: <Github size={18} />,
    external: true,
  },
  {
    id: "https://drive.google.com/file/d/1qLanXs509m3tyKxxHEIIDXDgvWtGZSb0/view?usp=sharing",
    label: "Mi CV",
    icon: <FileText size={18} />,
    external: true,
  },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // 2. Tipado explícito
  const handleNavigate = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.external) {
      window.open(item.id, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.id);
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavigate(NAV_ITEMS[0])}
            // Ya tenía cursor-pointer, se mantiene
            className="group flex items-center gap-3 cursor-pointer select-none">
            <div className="relative overflow-hidden rounded-full w-10 h-10 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src={perfilAnimado}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
              Portafolio
            </span>
          </div>

          {/* Menú Desktop */}
          <div className="hidden min-[996px]:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                location.pathname === item.id ||
                (item.id !== "/" && location.pathname.startsWith(item.id));

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item)}
                  // AGREGADO: cursor-pointer aquí
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group flex items-center gap-2 cursor-pointer
                    ${
                      isActive && !item.external
                        ? "text-yellow-700 dark:text-yellow-400 bg-yellow-100/50 dark:bg-yellow-900/20"
                        : "text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50/50 dark:hover:bg-gray-800/50"
                    }`}>
                  <span
                    className={`${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    } transition-transform duration-300`}>
                    {item.icon}
                  </span>
                  {item.label}

                  {/* 1. ESTADO ACTIVO (Línea fija) */}
                  {isActive && !item.external && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-yellow-500 rounded-full animate-fade-in" />
                  )}

                  {/* 2. EFECTO HOVER (Línea que crece desde el centro) */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400/50 rounded-full transition-all duration-300 group-hover:w-1/2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Botón Hamburguesa */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            // AGREGADO: cursor-pointer aquí
            className="min-[996px]:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Abrir menú">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div className="min-[996px]:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 shadow-xl animate-fade-in">
            <div className="p-4 space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item)}
                    // AGREGADO: cursor-pointer aquí
                    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-200 cursor-pointer
                      ${
                        isActive && !item.external
                          ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 font-semibold pl-6 border-l-4 border-yellow-500"
                          : "text-gray-600 dark:text-gray-400 hover:bg-yellow-50/50 dark:hover:bg-gray-800 hover:pl-6 hover:text-yellow-600 dark:hover:text-yellow-400"
                      }`}>
                    {item.icon}
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
