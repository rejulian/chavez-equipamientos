import React from "react";
import Carousel from "../components/Carousel/CarouselComponent";
import CardService from "../components/CardService/CardService";
import BannerHome from "../assets/banner-home.jpg";
import Logo from "../assets/logo-chavez.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div style={{ height: "60vh" }}>
        <Carousel />
      </div>
      <section id="card-service">
        <CardService
          title="Protección"
          description="Proveemos de elementos de protección personal de calidad ya que ellos son la última barrera entre el trabajador y los riesgos."
        />
        <CardService
          title="Ropa"
          description="Excelente calce y ajuste para adaptarse a los movimientos del trabajador. Confeccionada con materiales duraderos."
        />
        <CardService
          title="Calzado"
          description="Diversidad en calzado. Cómodos, flexibles, resistentes al agua, con suela antideslizante, puntera metálica, etc."
        />
        <CardService
          title="Higiene"
          description="Proporcionamos variedad de productos, equipos y suministros de higiene para negocios, empresas e industrias"
        />
        <CardService
          title="Insumos"
          description="Insumos y útiles esenciales para un buen funcionamiento de las áreas administrativas, logística, etc."
        />
      </section>
      <p className="banner-home">
        Todo lo que su empresa necesita - Contáctenos -
      </p>
      <div className="banner-home-img">
        <img src={BannerHome} alt="Banner Chavez" />
      </div>
      <section id="crecimiento">
        <img src={Logo} alt="Logo de Chavez Equipamientos" className="logo" />
        <h3>Apostamos al crecimiento</h3>
        <p>
          Mantenemos nuestro compromiso en brindar a nuestros clientes la mejor
          atención, asesoramiento y capacitación sobre los elementos, insumos y
          productos que mejor se adapten al tipo de empresa, su actividad y sus
          necesidades que permitirán mantener el bienestar de todo su equipo de
          trabajo.
        </p>
        {/* <Link className='btn btn-warning' to='/productos'>Conocer mas!</Link> */}
      </section>
      <section id="contacto">
        <div>
          <h3>Contactanos</h3>
          <p>Estamos para asesorarlo.</p>
          <Link
            className="btn btn-success"
            target="_blank"
            to={`https://wa.me/5493364511862/?text=Hola vengo del sitio web!`}
          >
            Whatsapp
          </Link>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53324.63798773286!2d-60.26199568149867!3d-33.35043899770436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b76793f9b400f7%3A0x622348daf45e89b1!2sSan%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1720459720702!5m2!1ses-419!2sar"
          width="450"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default Home;
