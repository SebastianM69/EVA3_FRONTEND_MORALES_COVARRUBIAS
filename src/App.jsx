import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServiceCard from './components/ServiceCard'
import ContactForm from './components/ContactForm'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import FaqAccordion from './components/FaqAccordion'
import Footer from './components/Footer'
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

        <AboutSection />

        <section id="servicios" className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-3">
              Servicios principales
            </h2>

            <p className="text-center text-muted mb-5">
              Selecciona un servicio para solicitar mas informacion mediante el formulario de contacto.
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
              <h2 className="fw-bold">
                Contacto
              </h2>

              <p className="text-muted">
                Completa el formulario para solicitar informacion sobre los servicios del Centro de Negocios Santiago.
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

      <Footer />
    </>
  )
}

export default App