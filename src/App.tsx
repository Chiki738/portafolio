import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Proveedor para gestionar el SEO (meta tags) dinámicamente

// Importación de componentes de estructura y páginas
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Certificados from "./pages/Certificados";
import Dialog from "./components/Dialog";

function App() {
  // Estado para controlar la visibilidad del cuadro de diálogo de bienvenida
  // Se inicializa en true para garantizar que aparezca al cargar la aplicación
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true);

  // Función manejadora para cambiar el estado y cerrar el diálogo
  const handleCloseDialog = () => setShowWelcomeDialog(false);

  // Efecto secundario que asegura que el diálogo se active al montar el componente
  // Esto refuerza la inicialización del estado
  useEffect(() => {
    setShowWelcomeDialog(true);
  }, []);

  return (
    // HelmetProvider envuelve la aplicación para permitir modificar el <head> desde cualquier página interna
    <HelmetProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        {/* Sistema de enrutamiento */}
        <Routes>
          {/* Ruta principal que utiliza el componente Layout como contenedor (Navbar/Footer) */}
          <Route path="/" element={<Layout />}>
            {/* Rutas anidadas que se renderizan dentro del Outlet del Layout */}
            <Route index element={<Inicio />} />
            <Route path="sobreMi" element={<SobreMi />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="certificados" element={<Certificados />} />
          </Route>
        </Routes>

        {/* El componente Dialog se renderiza fuera de las rutas para superponerse globalmente */}
        <Dialog isOpen={showWelcomeDialog} onClose={handleCloseDialog} />
      </div>
    </HelmetProvider>
  );
}

export default App;
