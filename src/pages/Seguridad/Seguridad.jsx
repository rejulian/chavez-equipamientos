import React from 'react'
import CardComponent from '../../components/Card/CardComponent'
import Bandolera from '../../assets/seguridad/bandolera-gross.png'
import Buzo from '../../assets/seguridad/buzo-ignifugo.png'
import CamisaGrafaAzul from '../../assets/seguridad/camisa-grafa-70-azulmarino.jpeg'
import CamisaGrafaBeige from '../../assets/seguridad/camisa-grafa-70-beige.jpeg'
import CamisaGrafa from '../../assets/seguridad/camisa-grafa-70.jpeg'
import CamisaGrafa2 from '../../assets/seguridad/camisa-grafa.png'
import CamisaIgnifuga from '../../assets/seguridad/camisa-ignifuga.png'
import CamisaJeans from '../../assets/seguridad/camisa-jeans.png'
import CamisaOxford from '../../assets/seguridad/camisa-oxford.jpeg'
import CamperaIgnifuga from '../../assets/seguridad/campera-ignifuga.png'
import CamperaSoldador from '../../assets/seguridad/campera-soldador.png'
import CamperaTrucker from '../../assets/seguridad/campera-trucker.png'
import CapaLluvia from '../../assets/seguridad/capa-lluvia.png'
import ChalecoGabardina from '../../assets/seguridad/chaleco-gabardina.png'
import ChalecoMinero from '../../assets/seguridad/chaleco-minero.png'
import ChalecoPolar from '../../assets/seguridad/chaleco-polar.png'
import ChalecoVialNaranja from '../../assets/seguridad/chaleco-vial-naranja.png'
import ChalecoVial from '../../assets/seguridad/chaleco-vial.png'
import CofiaIgnifugo from '../../assets/seguridad/cofia-ignifugo.png'
import DelantalDescarne120 from '../../assets/seguridad/delantal-descarne-120.png'
import DelantalDescarne90 from '../../assets/seguridad/delantal-descarne.png'
import MamelucoDescartable from '../../assets/seguridad/mameluco-descartable.jpeg'
import MamelucoIgnifugo from '../../assets/seguridad/mameluco-ignifugo.png'
import MantaIgnifuga from '../../assets/seguridad/manta-ignifuga.png'
import PantalonCargo from '../../assets/seguridad/pantalon-cargo.jpeg'
import PantalonCargoAzulMarino from '../../assets/seguridad/pantalon-cargo-azulmarino.png'
import PantalonGrafa from '../../assets/seguridad/pantalon-grafa-70.jpeg'
import PantalonIgnifugo from '../../assets/seguridad/pantalon-ignifugo.png'
import PantalonJeans from '../../assets/seguridad/pantalon-jeans.png'
import PantalonTrabajo from '../../assets/seguridad/pantalon-trabajo.png'
import PolainasCueroDescarne from '../../assets/seguridad/polainas-cuero-descarne.png'
import TrajeLluvia from '../../assets/seguridad/traje-lluvia.png'
import './Seguridad.css'

const Seguridad = () => {
  return (
    <main id='seguridad'>
        <h1>EPP Seguridad Personal</h1>
        <section id='seguridad-container'>
            <CardComponent title='Bandolera de gross' src={Bandolera}/>
            <CardComponent title='Buzo ignifugo' src={Buzo}/>
            <CardComponent title='Camisa Grafa 70 Azul Marino' src={CamisaGrafaAzul}/>
            <CardComponent title='Camisa Grafa 70 Beige' src={CamisaGrafaBeige}/>
            <CardComponent title='Camisa Grafa 70' src={CamisaGrafa}/>
            <CardComponent title='Camisa Grafa' src={CamisaGrafa2}/>
            <CardComponent title='Camisa Ignifuga' src={CamisaIgnifuga}/>
            <CardComponent title='Camisa Jeans' src={CamisaJeans}/>
            <CardComponent title='Camisa Oxford' src={CamisaOxford}/>
            <CardComponent title='Campera ignifuga' src={CamperaIgnifuga}/>
            <CardComponent title='Campera soldador' src={CamperaSoldador}/>
            <CardComponent title='Campera trucker' src={CamperaTrucker}/>
            <CardComponent title='Capa lluvia' src={CapaLluvia}/>
            <CardComponent title='Traje Lluvia' src={TrajeLluvia}/>
            <CardComponent title='Chaleco gabardina' src={ChalecoGabardina}/>
            <CardComponent title='Chaleco minero' src={ChalecoMinero}/>
            <CardComponent title='Chaleco polar' src={ChalecoPolar}/>
            <CardComponent title='Chaleco vial naranja' src={ChalecoVialNaranja}/>
            <CardComponent title='Chaleco vial' src={ChalecoVial}/>
            <CardComponent title='Cofia ignifuga' src={CofiaIgnifugo}/>
            <CardComponent title='Delantal Descarne 60x120' src={DelantalDescarne120}/>
            <CardComponent title='DelantalDescarne 60x90' src={DelantalDescarne90}/>
            <CardComponent title='Mameluco Descartable' src={MamelucoDescartable}/>
            <CardComponent title='Mameluco Ignifugo' src={MamelucoIgnifugo}/>
            <CardComponent title='Manta Ignifuga' src={MantaIgnifuga}/>
            <CardComponent title='Pantalon Cargo' src={PantalonCargo}/>
            <CardComponent title='Pantalon Cargo Azul Marino' src={PantalonCargoAzulMarino}/>
            <CardComponent title='Pantalon Grafa' src={PantalonGrafa}/>
            <CardComponent title='Pantalon Ignifugo' src={PantalonIgnifugo}/>
            <CardComponent title='Pantalon Jeans' src={PantalonJeans}/>
            <CardComponent title='Pantalon de Trabajo' src={PantalonTrabajo}/>
            <CardComponent title='Polainas Cuero Descarne' src={PolainasCueroDescarne}/>
        </section>
    </main>
  )
}

export default Seguridad