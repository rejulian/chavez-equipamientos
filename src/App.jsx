
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavbarComponent from './components/NavbarComponent'
import Footer from './components/Footer/Footer'
import Anclaje from './pages/Anclaje/Anclaje'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponentWrapper/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/anclajesujecioncarga' element={<Anclaje />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

function NavbarComponentWrapper() {
  const location = useLocation();

  // Aquí puedes agregar todas las rutas en las que no quieras mostrar el NavbarComponent
  const hideNavbarRoutes = ['/anclajesujecioncarga'];

  return !hideNavbarRoutes.includes(location.pathname) ? <NavbarComponent /> : null;
}

export default App
