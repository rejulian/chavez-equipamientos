import React from 'react'
import Cable1 from '../../assets/anclaje/cable1.png'
import Cable2 from '../../assets/anclaje/cable2.png'
import Cable3 from '../../assets/anclaje/cable3.png'
import Cable4 from '../../assets/anclaje/cable4.png'
import Cable5 from '../../assets/anclaje/cable5.png'
import CableEspecial from '../../assets/anclaje/cable-especial.png'
import Terminales from '../../assets/anclaje/terminales.png'
import Eslingas1 from '../../assets/anclaje/eslingas1.png'
import Eslingas2 from '../../assets/anclaje/eslingas2.png'
import Petroleo1 from '../../assets/anclaje/petroleo1.png'
import Petroleo2 from '../../assets/anclaje/petroleo2.png'
import Petroleo3 from '../../assets/anclaje/petroleo3.png'

import './Anclaje.css'

const Anclaje = () => {
  return (
    <main id='anclaje'>
      <section id='header'>
        <h1>Anclaje, sujeción y carga</h1>
      </section>
      <section className='container'>
        <h2 className='title'>Cables de acero</h2>
        <p>Comercializamos una completa linea de cables de acero, utilizados por distintos sectores productivos; (industrial, maritimo, minero, petrolero, etc.) satisfaciendo los mas exigentes estandares de calidad.</p>
        <div>
          <img className='cables-acero' src={Cable1} alt="Cable de acero" />
          <img className='cables-acero' src={Cable2} alt="Cable de acero" />
          <img className='cables-acero' src={Cable3} alt="Cable de acero" />
          <img className='cables-acero' src={Cable4} alt="Cable de acero" />
          <img className='cables-acero' src={Cable5} alt="Cable de acero" />
        </div>
      </section>
      <section className='container'>
        <h2 className='title'>Cables especiales</h2>
        <p>Por su construccion y metodo de fabricacion, aumenta su capacidad de rotura a igual que cables de uso general. Los cables de alta performance, tienen alambres premoldeados y se pueden solicitar con interior plastificado.</p>
        <div>
          <img className='cable-especial' src={CableEspecial} alt="Cable especial" />
        </div>
      </section>
      <section className='container'>
        <h2 className='title'>Terminales / Sockets para eslingas</h2>
        <div>
          <img className='cable-especial' src={Terminales} alt="Terminales para eslingas" />
        </div>
      </section>
      <section className='container'>
        <h2 className='title'>Eslingas de cable de acero</h2>
        <p>Las eslingas son elementos utilizados para la manipulacion de cargas. Se puede fabricar con uno o varios ramales segun requerimiento. A las eslingas se le pueden asociar accesorios de alta resistenia para facilitar su trabajo con cargas, por ejemplo: ganchos automaticos, corredizos, de ojo con seguro, argollas, guardacabos, etc. Pueden ser fabricadas con alma de acero o alma de fibra, con varias opciones en configuraciones de cable.</p>
        <div>
          <img className='cable-especial' src={Eslingas1} alt="Eslingas de cable de acero" />
          <img className='cable-especial' src={Eslingas2} alt="Eslingas de cable de acero" />
        </div>
      </section>
      <section className='container'>
        <h2 className='title'>Terminales / Sockets para eslingas</h2>
        <div>
          <img className='cable-especial' src={Terminales} alt="Terminales para eslingas" />
        </div>
      </section>
      <section className='container'>
        <h2 className='title'>Accesorios de uso petroleo</h2>
        <div>
          <img className='cable-especial' src={Petroleo1} alt="Cola de cadena para camiones petroleros" />
          <img className='cable-especial' src={Petroleo2} alt="Terminales para cable" />
          <img className='cable-especial' src={Petroleo3} alt="Eslingas TPR" />
        </div>
      </section>
    </main>
  )
}

export default Anclaje