import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navigation currentPage="" onNavigate={() => {}} />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
