
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavbarComponent from './components/NavbarComponent'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavbarComponent/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
