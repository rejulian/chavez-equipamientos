
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavbarComponent from './components/NavbarComponent'
import Footer from './components/Footer/Footer'
import Anclaje from './pages/Anclaje/Anclaje'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/anclajesujecioncarga' element={<Anclaje />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
