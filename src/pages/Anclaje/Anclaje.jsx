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
import Grilletes from '../../assets/anclaje/grilletes.png'
import Accesorios from '../../assets/anclaje/accesorios.png'
import Advertencias from '../../assets/anclaje/advertencias.png'
import Fibra1 from '../../assets/anclaje/fibra1.png'
import Fibra2 from '../../assets/anclaje/fibra2.png'
import Cadenas1 from '../../assets/anclaje/cadenas1.png'
import Logo from '../../assets/logo-chavez.svg'
import './Anclaje.css'

const Anclaje = () => {
  return (
    <>
      <header id='header'>
        <img src={Logo} alt="" />
      </header>
      <main id='anclaje'>
        <h1>Anclaje, sujeción y carga</h1>
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
          <h2 className='title'>Accesorios de uso petroleo</h2>
          <div>
            <img className='cable-especial' src={Petroleo1} alt="Cola de cadena para camiones petroleros" />
            <img className='cable-especial' src={Petroleo2} alt="Terminales para cable" />
            <img className='cable-especial' src={Petroleo3} alt="Eslingas TPR" />
          </div>
        </section>
        <section className='container'>
          <h2 className='title'>Grilletes</h2>
          <p>El uso de grilletes es amplio, pueden ser utilizados en maniobras de izaje, sujecion de carga, estructuras fijas asociados a cables de acero, cadenas, eslingas y otros terminales. Los grilletes de tipo corazon, por su forma, se pueden utilizar con uno o varios ramales. Grilletes con tuerca y chaveta (4 piezas) se recomiendan para trabajos de tiempo prolongado, su traba asegura que el perno permanezca siempre en posicion correcta. Las lineas de grilletes que ofrecemos al mercado se encuentran fabricados bajo norma y se puede entregar sin ningun costo extra certificado de calidad.</p>
          <div>
            <img className='cable-especial' src={Grilletes} alt="Grilletes" />
          </div>
        </section>
        <section className='container'>
          <h2 className='title'>Accesorios de alta resistencia</h2>
          <p>Pueden ser utilizados en maniobras de izaje y sujecion en conjunto con cadenas, eslingas de fibra y cables de acero. Segun el requerimiento del usuario y advirtiendo los riesgos de uso.</p>
          <div>
            <ol>
              <li>Eslabon maestro</li>
              <li>Eslabon con sub ensambles</li>
              <li>Eslabon de conexion</li>
              <li>Eslabon de conexion para eslingas</li>
              <li>Grillete</li>
              <li>Gancho ojo de fundicion</li>
              <li>Acortacadenas con traba de seguridad</li>
              <li>Acortacadenas</li>
              <li>Gancho horquilla con traba de seguridad</li>
              <li>Gancho ojo con traba de seguridad</li>
              <li>Gancho ojo con cierre automatico</li>
              <li>Gancho horquilla con cierre automatico</li>
            </ol>
            <img className='cable-especial' src={Accesorios} alt="Accesorios de alta resistencia" />
          </div>
          <h3>Para la configuracion del conjunto, considerar las siguientes cuestiones:</h3>
          <ul>
            <li>CMT y angulo de trabajo</li>
            <li>Medidas internas del eslabon maestro</li>
            <li>Terminacion (Grillete, Gancho, Eslabon, libre).</li>
            <li>Ramal a utilizar (Cadena, Cable de acero o eslinga).</li>
            <li>Los conjuntos se pueden armar de distintas formas y asociando varios articulos de 1 hasta 4 ramales.</li>
            <li>Algunos accesorios son aptos solo para cadena. Ej: Los terminados en tipo horquilla</li>
          </ul>
          <div>
            <img className='cable-especial' src={Advertencias} alt="Advertencias" />
          </div>
        </section>
        <section className='container'>
          <h2 className='title'>Eslingas de fibra sintetica</h2>
          <p>Las eslingas son confeccionadas con hilo de poliester de alta tenacidad tratados quimicamente, garantizando una elevada resistencia a la abrasion y previniendo el envejecimiento prematuro. Modelos disponibles: Planas doble ojal, Sin fin, y Tubular/Amorfa</p>
          <ul>
            <li>Coeficiente de seguridad 7:1</li>
            <li>Eslingas planas: Norma EN1492-1 (Supera requerimientos de IRAM 5378)</li>
            <li>Round Sling: Norma EN1492-2 (Supera requerimientos de IRAM 5378)</li>
            <li>Etiqueta de identificacion (Fabrica, Norma, Capacidad, Trazabilidad)</li>
            <li>En tipo planas los ojales cuentan con cobertor anti desgaste</li>
          </ul>
          <div>
            <img className='cable-especial' src={Fibra1} alt="Factores de uso" />
            <img className='cable-especial' src={Fibra2} alt="" />
          </div>
        </section>
        <section className='container'>
          <h2 className='title'>Cadenas de alta resistencia</h2>
          <p>Ofrecemos dos lineas de cadena para izaje de carga, en G8° y G10° es que varian en su tension de carga a rotura, otorgando en consecuencia cargas de trabajo diferentes.</p>
          <div>
            {/* <img className='cable-especial' src={Cadenas1} alt="Tabla de cadenas" /> */}
            {/* <img className='cable-especial' src={Cadenas2} alt="" /> */}
            {/* <img className='cable-especial' src={Cadenas3} alt="" /> */}
          </div>
        </section>
      </main>
    </>
  )
}

export default Anclaje