import React from 'react'
import CardComponent from '../../components/Card/CardComponent'
import anteojos from '../../data/anteojos.json'
import auditivo from '../../data/auditivo.json'
import vial from '../../data/vial.json'
import indumentaria from '../../data/indumentaria.json'
import altura from '../../data/altura.json'
import './Seguridad.css'
import NavbarProducts from '../../components/NavbarProducts/NavbarProducts'

const Seguridad = () => {
  return (
    <>
      <NavbarProducts/>
      <main id='seguridad'>
        <h1 className='hero-title'>EPP Seguridad Personal</h1>
        <hr />
        <section className='product-container' id='indumentaria'>
          <h2>Indumentaria</h2>
          <div className='seguridad-container'>
            {
              indumentaria.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='vial'>
          <h2>Vial</h2>
          <div className='seguridad-container'>
            {
              vial.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='auditivo'>
          <h2>Auditivo</h2>
          <div className='seguridad-container'>
            {
              auditivo.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='anteojos'>
          <h2>Anteojos</h2>
          <div className='seguridad-container'>
            {
              anteojos.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='altura'>
          <h2>Altura</h2>
          <div className='seguridad-container'>
            {
              altura.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Seguridad