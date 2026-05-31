import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import ContactForm from './components/ContactForm'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import FaqAccordion from './components/FaqAccordion'
import { obtenerServicios } from './services/api'

function App() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState('')
  const [servicios, setServicios] = useState([])
  const [cargandoServicios, setCargandoServicios] = useState(true)

  useEffect(() => {
    async function cargarServicios() {
      const datosServicios = await obtenerServicios()
      setServicios(datosServicios)
      setCargandoServicios(false)
    }

    cargarServicios()
  }, [])
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="nosotros" className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <span className="badge bg-primary mb-3">Nosotros</span>
                <h2 className="fw-bold">Centro de Negocios Santiago</h2>
                <p className="text-muted">
                  El Centro de Negocios Santiago de SERCOTEC entrega apoyo,
                  asesoría y acompañamiento a emprendedores, microempresas y
                  pequeñas empresas, fortaleciendo su gestión, innovación y
                  sostenibilidad.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="p-4 bg-white rounded-4 shadow-sm">
                  <h3 className="h5 fw-bold">Objetivo de la landing page</h3>
                  <p className="text-muted mb-0">
                    Difundir los servicios disponibles, facilitar el contacto
                    con usuarios interesados y mejorar la experiencia de
                    navegación mediante componentes reutilizables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-3">Servicios principales</h2>
            <p className="text-center text-muted mb-5">
              Selecciona un servicio para solicitar más información mediante el formulario de contacto.
            </p>

{cargandoServicios ? (
  <div className="alert alert-info text-center">
    Cargando servicios disponibles...
  </div>
) : (
  <div className="row g-4">
    {servicios.map((servicio) => (
      <div className="col-md-6 col-lg-4" key={servicio.id}>
        <ServiceCard
          imagen={servicio.imagen}
          titulo={servicio.titulo}
          descripcion={servicio.descripcion}
          onSelectServicio={setServicioSeleccionado}
        />
      </div>
    ))}
  </div>
)}
          </div>
        </section>

        <TestimonialsCarousel />

        <FaqAccordion />

        <section id="contacto" className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Contacto</h2>
              <p className="text-muted">
                Completa el formulario para solicitar información sobre los servicios del Centro de Negocios Santiago.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ContactForm servicioSeleccionado={servicioSeleccionado} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App