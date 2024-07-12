import React from 'react'
import CardComponent from '../../components/Card/CardComponent'
import anteojos from '../../data/anteojos.json'
import auditivo from '../../data/auditivo.json'
import vial from '../../data/vial.json'
import indumentaria from '../../data/indumentaria.json'
import altura from '../../data/altura.json'
import './Seguridad.css'

const Seguridad = () => {
  return (
    <main id='seguridad'>
      <h1>EPP Seguridad Personal</h1>
      <hr />
      <section className='product-container' id='vial'>
        <h1>Indumentaria</h1>
        <div className='seguridad-container'>
          {
            indumentaria.map(el => (
              <CardComponent key={el.title} title={el.title} src={el.imageURL} />
            ))
          }
        </div>
      </section>
      <section className='product-container' id='vial'>
        <h1>Vial</h1>
        <div className='seguridad-container'>
          {
            vial.map(el => (
              <CardComponent key={el.title} title={el.title} src={el.imageURL} />
            ))
          }
        </div>
      </section>
      <section className='product-container' id='auditivo'>
        <h1>Auditivo</h1>
        <div className='seguridad-container'>
          {
            auditivo.map(el => (
              <CardComponent key={el.title} title={el.title} src={el.imageURL} />
            ))
          }
        </div>
      </section>
      <section className='product-container' id='anteojos'>
        <h1>Anteojos</h1>
        <div className='seguridad-container'>
          {
            anteojos.map(el => (
              <CardComponent key={el.title} title={el.title} src={el.imageURL} />
            ))
          }
        </div>
      </section>
      <section className='product-container' id='altura'>
        <h1>Altura</h1>
        <div className='seguridad-container'>
          {
            altura.map(el => (
              <CardComponent key={el.title} title={el.title} src={el.imageURL} />
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Seguridad