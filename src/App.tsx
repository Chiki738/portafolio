import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";
import Certificados from "./pages/Certificados";
import Dialog from "./components/Dialog";

function App() {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true); // siempre true

  const handleCloseDialog = () => setShowWelcomeDialog(false);

  // Opcional: mostrar cada vez que se recarga la página
  useEffect(() => {
    setShowWelcomeDialog(true);
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="certificados" element={<Certificados />} />
          </Route>
        </Routes>

        <Dialog isOpen={showWelcomeDialog} onClose={handleCloseDialog} />
      </div>
    </HelmetProvider>
  );
}

export default App;
