import React from 'react'
import Logo from '../../assets/logo-chavez.svg'
import { Link } from 'react-router-dom'
import WhatsApp from '../../assets/WhatsApp.png'

const Header = () => {
  return (
    <header id='header'>
        <img src={Logo} alt="" />
        <div>
          <img className='wsp-logo' src={WhatsApp} alt="" />
          <Link to='https://wa.me/5493364581329/?text=Hola! Vengo de la pagina web.'>03364581329</Link>
          <Link to='https://wa.me/5493364511862/?text=Hola! Vengo de la pagina web.'>03364581329</Link>
        </div>
    </header>
  )
}

export default Header