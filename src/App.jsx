import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer/Footer";
import Anclaje from "./pages/Anclaje/Anclaje";
import Header from "./components/Header/Header";
import Seguridad from "./pages/Seguridad/Seguridad";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponentWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anclajesujecioncarga" element={<Anclaje />} />
          <Route path="/eppseguridadpersonal" element={<Seguridad />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function NavbarComponentWrapper() {
  const location = useLocation();

  // Aquí puedes agregar todas las rutas en las que no quieras mostrar el NavbarComponent
  const hideNavbarRoutes = ["/anclajesujecioncarga", "/eppseguridadpersonal"];

  return !hideNavbarRoutes.includes(location.pathname) ? (
    <NavbarComponent />
  ) : (
    <Header />
  );
}

export default App;
