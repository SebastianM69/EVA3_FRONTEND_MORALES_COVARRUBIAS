import { useEffect, useState } from 'react'
import { obtenerTestimonios } from '../services/api'

function TestimonialsCarousel() {
  const [testimonios, setTestimonios] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    obtenerTestimonios()
      .then((datos) => {
        setTestimonios(datos)
      })
      .catch((error) => {
        console.error('Error al obtener los testimonios:', error)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [])

  return (
    <section id="testimonios" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            Testimonios
          </h2>

          <p className="text-muted">
            Experiencias de emprendedores y usuarios apoyados por el Centro de Negocios Santiago.
          </p>
        </div>

        {cargando ? (
          <p className="text-center">
            Cargando testimonios...
          </p>
        ) : (
          <div
            id="carouselTestimonios"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {testimonios.map((testimonio, index) => (
                <button
                  key={testimonio.id}
                  type="button"
                  data-bs-target="#carouselTestimonios"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : undefined}
                  aria-label={`Testimonio ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="carousel-inner">
              {testimonios.map((testimonio, index) => (
                <div
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  key={testimonio.id}
                >
                  <div className="card border-0 shadow-sm text-center mx-auto testimonial-card">
                    <div className="card-body p-4 p-md-5">
                      <p className="card-text fst-italic testimonial-text">
                        “{testimonio.texto}”
                      </p>

                      <h3 className="h5 mt-4 mb-1">
                        {testimonio.nombre}
                      </h3>

                      <p className="text-muted mb-0">
                        {testimonio.cargo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselTestimonios"
              data-bs-slide="prev"
              aria-label="Testimonio anterior"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselTestimonios"
              data-bs-slide="next"
              aria-label="Testimonio siguiente"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsCarousel