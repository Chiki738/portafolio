import { X } from "lucide-react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Dialog({ isOpen, onClose }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen p-4">
      {/* Fondo oscuro - Fade simple */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer animate-modal-fade"
        onClick={onClose}
      />

      {/* Contenedor del Modal - SIN agrandarse, solo aparece */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-modal-fade">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors cursor-pointer"
          aria-label="Cerrar">
          <X size={24} />
        </button>

        {/* Contenido */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            ¡Bienvenido a mi Portafolio!
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Visita mi repositorio del portafolio para reportar errores o dejar
            recomendaciones.
          </p>

          {/* AQUÍ ESTÁN LAS ANIMACIONES DE LOS BOTONES */}
          {/* Se usa animate-buttons-entry para que suban suavemente */}
          <div className="space-y-3 animate-buttons-entry">
            <a
              href="https://github.com/Chiki738/portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white py-3 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg font-medium shadow-md">
              <i className="fa-brands fa-github" />
              <span>Ir al Repositorio</span>
            </a>

            <button
              onClick={onClose}
              className="w-full bg-yellow-300 hover:bg-yellow-400 text-black py-3 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg font-medium shadow-md cursor-pointer">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
