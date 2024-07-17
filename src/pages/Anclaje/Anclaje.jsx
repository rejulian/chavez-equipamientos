import React from 'react'
import Section from '../../components/Section/Section'
import Image from '../../components/Image/Image'
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
import Cadenas2 from '../../assets/anclaje/cadenas2.png'
import Izaje1 from '../../assets/anclaje/izaje1.png'
import Izaje2 from '../../assets/anclaje/izaje2.png'

import './Anclaje.css'
import { Link } from 'react-router-dom'

const Anclaje = () => {
  return (
    <>
      <main id='anclaje'>
  <h1>Anclaje, sujeción y carga</h1>
  <Link className='btn btn-warning link' target='_blank' to={`https://wa.me/5493364581329/?text=Hola, vengo de la página web sobre anclaje, sujeción y carga.`}>Contáctanos</Link>
  <Section title='Cables de acero'>
    <p>Comercializamos una completa línea de cables de acero, utilizados por distintos sectores productivos (industrial, marítimo, minero, petrolero, etc.) satisfaciendo los más exigentes estándares de calidad.</p>
    <div>
      <Image className='cables-acero' src={Cable1} alt="Cable de acero" />
      <Image className='cables-acero' src={Cable2} alt="Cable de acero" />
      <Image className='cables-acero' src={Cable3} alt="Cable de acero" />
      <Image className='cables-acero' src={Cable4} alt="Cable de acero" />
      <Image className='cables-acero' src={Cable5} alt="Cable de acero" />
    </div>
  </Section>

  <Section title='Cables especiales'>
    <p>Por su construcción y método de fabricación, aumenta su capacidad de rotura al igual que cables de uso general. Los cables de alta performance tienen alambres premoldeados y se pueden solicitar con interior plastificado.</p>
    <div>
      <Image className='cable-especial' src={CableEspecial} alt="Cable especial" />
    </div>
  </Section>

  <Section title='Terminales / Sockets para eslingas'>
    <div>
      <Image className='cable-especial' src={Terminales} alt="Terminales para eslingas" />
    </div>
  </Section>

  <Section title='Eslingas de cable de acero'>
    <p>Las eslingas son elementos utilizados para la manipulación de cargas. Se pueden fabricar con uno o varios ramales según requerimiento. A las eslingas se les pueden asociar accesorios de alta resistencia para facilitar su trabajo con cargas, por ejemplo: ganchos automáticos, corredizos, de ojo con seguro, argollas, guardacabos, etc. Pueden ser fabricadas con alma de acero o alma de fibra, con varias opciones en configuraciones de cable.</p>
    <div>
      <Image className='cable-especial' src={Eslingas1} alt="Eslingas de cable de acero" />
      <Image className='cable-especial' src={Eslingas2} alt="Eslingas de cable de acero" />
    </div>
  </Section>

  <Section title='Accesorios de uso petróleo'>
    <div className='flex'>
      <Image className='cable-especial' src={Petroleo1} alt="Cola de cadena para camiones petroleros" />
      <Image className='cable-especial' src={Petroleo2} alt="Terminales para cable" />
      <Image className='cable-especial' src={Petroleo3} alt="Eslingas TPR" />
    </div>
  </Section>

  <Section title='Grilletes'>
    <p>El uso de grilletes es amplio, pueden ser utilizados en maniobras de izaje, sujeción de carga, estructuras fijas asociadas a cables de acero, cadenas, eslingas y otros terminales. Los grilletes de tipo corazón, por su forma, se pueden utilizar con uno o varios ramales. Grilletes con tuerca y chaveta (4 piezas) se recomiendan para trabajos de tiempo prolongado, su traba asegura que el perno permanezca siempre en posición correcta. Las líneas de grilletes que ofrecemos al mercado se encuentran fabricados bajo norma y se pueden entregar sin ningún costo extra certificado de calidad.</p>
    <div>
      <Image className='cable-especial' src={Grilletes} alt="Grilletes" />
    </div>
  </Section>

  <Section title='Accesorios de alta resistencia'>
    <p>Pueden ser utilizados en maniobras de izaje y sujeción en conjunto con cadenas, eslingas de fibra y cables de acero. Según el requerimiento del usuario y advirtiendo los riesgos de uso.</p>
    <div>
      <ol>
        <li>Eslabón maestro</li>
        <li>Eslabón con sub ensambles</li>
        <li>Eslabón de conexión</li>
        <li>Eslabón de conexión para eslingas</li>
        <li>Grillete</li>
        <li>Gancho ojo de fundición</li>
        <li>Acortacadenas con traba de seguridad</li>
        <li>Acortacadenas</li>
        <li>Gancho horquilla con traba de seguridad</li>
        <li>Gancho ojo con traba de seguridad</li>
        <li>Gancho ojo con cierre automático</li>
        <li>Gancho horquilla con cierre automático</li>
      </ol>
      <Image className='cable-especial' src={Accesorios} alt="Accesorios de alta resistencia" />
    </div>
    <h3>Para la configuración del conjunto, considerar las siguientes cuestiones:</h3>
    <ul>
      <li>CMT y ángulo de trabajo</li>
      <li>Medidas internas del eslabón maestro</li>
      <li>Terminación (Grillete, Gancho, Eslabón, libre).</li>
      <li>Ramal a utilizar (Cadena, Cable de acero o eslinga).</li>
      <li>Los conjuntos se pueden armar de distintas formas y asociando varios artículos de 1 hasta 4 ramales.</li>
      <li>Algunos accesorios son aptos solo para cadena. Ej: Los terminados en tipo horquilla</li>
    </ul>
    <div>
      <Image className='cable-especial' src={Advertencias} alt="Advertencias" />
    </div>
  </Section>

  <Section title='Eslingas de fibra sintética'>
    <p>Las eslingas son confeccionadas con hilo de poliéster de alta tenacidad tratados químicamente, garantizando una elevada resistencia a la abrasión y previniendo el envejecimiento prematuro. Modelos disponibles: Planas doble ojal, Sin fin, y Tubular/Amorfa</p>
    <ul>
      <li>Coeficiente de seguridad 7:1</li>
      <li>Eslingas planas: Norma EN1492-1 (Supera requerimientos de IRAM 5378)</li>
      <li>Round Sling: Norma EN1492-2 (Supera requerimientos de IRAM 5378)</li>
      <li>Etiqueta de identificación (Fábrica, Norma, Capacidad, Trazabilidad)</li>
      <li>En tipo planas los ojales cuentan con cobertor anti desgaste</li>
    </ul>
    <div className='flex'>
      <Image src={Fibra1} alt="Factores de uso" />
      <Image src={Fibra2} alt="" />
    </div>
  </Section>

  <Section title="Cadenas de alta resistencia">
    <p>Ofrecemos dos líneas de cadena para izaje de carga, en G8° y G10° que varían en su tensión de carga a rotura, otorgando en consecuencia cargas de trabajo diferentes.</p>
    <h5>Principales ventajas del Grado 10 sobre el Grado 8:</h5>
    <ul>
      <li>Aumento de la capacidad de carga del 25%</li>
      <li>Reducción del peso de la eslinga de hasta un 40%</li>
      <li>Excelente relación precio/rendimiento</li>
      <li>Mayor resistencia al desgaste y vida útil más larga</li>
      <li>Rango de temperatura -40° a 200°</li>
    </ul>
    <div className='flex'>
      <Image src={Cadenas1} alt="Tabla de cadenas" />
      <Image src={Cadenas2} alt="Cadenas" />
    </div>
    <p><strong>Las cadenas certificadas deben tener identificación de Grado y Lote. Depende la marca agregan como datos origen y el nombre de la empresa o logotipo de identificación.</strong></p>
  </Section>

  <Section title="Accesorios específicos para Izaje">
    <div>
      <Image className="cable-especial" src={Izaje1} alt="Accesorios para izaje" />
      <Image className="cable-especial" src={Izaje2} alt="Accesorios para izaje" />
    </div>
  </Section>
</main>

    </>
  )
}

export default Anclaje