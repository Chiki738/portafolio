import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navigation />
      {/* pt-16 compensa la altura de la barra de navegación fija */}
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
