import { useState, useEffect } from "react";
import { Menu, X, Home, User, FolderGit2, Award, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import perfilAnimado from "../assets/perfilAnimado.jpg";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100)
        setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { id: "/", label: "Inicio", icon: <Home size={20} />, external: false },
    {
      id: "/sobreMi",
      label: "Sobre Mí",
      icon: <User size={20} />,
      external: false,
    },
    {
      id: "/proyectos",
      label: "Proyectos",
      icon: <FolderGit2 size={20} />,
      external: false,
    },
    {
      id: "/certificados",
      label: "Certificados",
      icon: <Award size={20} />,
      external: false,
    },
    {
      id: "https://github.com/Chiki738",
      label: "GitHub",
      icon: <Github size={20} />,
      external: true,
    },
  ];

  const handleNavigate = (item: (typeof navItems)[number]) => {
    if (item.external) {
      window.open(item.id, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.id);
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(255,255,255,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-b border-white/20 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* ✅ Logo + título */}
          <div
            onClick={() => handleNavigate(navItems[0])}
            className="flex items-center gap-3 text-2xl font-bold text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition cursor-pointer">
            <img
              src={perfilAnimado}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <span className="text-2xl">Portafolio</span>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  currentPage === item.id && !item.external
                    ? "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400"
                }`}>
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 cursor-pointer">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item)}
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-base font-medium transition cursor-pointer ${
                  currentPage === item.id && !item.external
                    ? "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400"
                }`}>
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
