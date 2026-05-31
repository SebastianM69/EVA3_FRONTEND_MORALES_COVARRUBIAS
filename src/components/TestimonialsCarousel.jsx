const testimonios = [
  {
    id: 1,
    nombre: 'Carolina Muñoz',
    cargo: 'Emprendedora local',
    texto: 'El acompañamiento del Centro de Negocios me ayudó a ordenar mi idea de negocio y mejorar la forma en que presento mis servicios.',
  },
  {
    id: 2,
    nombre: 'Felipe Araya',
    cargo: 'Dueño de pyme',
    texto: 'Las asesorías permitieron mejorar nuestra gestión interna y tomar mejores decisiones comerciales.',
  },
  {
    id: 3,
    nombre: 'Marcela Rojas',
    cargo: 'Microempresaria',
    texto: 'Los talleres fueron claros, prácticos y aplicables a la realidad de mi emprendimiento.',
  },
]

function TestimonialsCarousel() {
  return (
    <section id="testimonios" className="py-5 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge bg-warning text-dark mb-3">Testimonios</span>
          <h2 className="fw-bold">Experiencias de usuarios</h2>
          <p className="mb-0">
            Opiniones referenciales de emprendedores y pymes que reciben apoyo del Centro de Negocios.
          </p>
        </div>

        <div
          id="carouselTestimonios"
          className="carousel slide"
          data-bs-ride="carousel"
          aria-label="Carrusel de testimonios de usuarios"
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
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <article className="testimonial-card bg-white text-dark rounded-4 shadow-sm p-4 p-md-5 text-center">
                      <p className="lead mb-4">
                        “{testimonio.texto}”
                      </p>

                      <h3 className="h5 fw-bold mb-1">
                        {testimonio.nombre}
                      </h3>

                      <p className="text-muted mb-0">
                        {testimonio.cargo}
                      </p>
                    </article>
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
            aria-label="Ver testimonio anterior"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselTestimonios"
            data-bs-slide="next"
            aria-label="Ver siguiente testimonio"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel