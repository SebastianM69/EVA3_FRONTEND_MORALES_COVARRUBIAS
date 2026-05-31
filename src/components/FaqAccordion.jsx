import { preguntasFrecuentes } from '../data/preguntasFrecuentes'

function FaqAccordion() {
  return (
    <section id="faq" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge bg-primary mb-3">FAQ</span>
          <h2 className="fw-bold">Preguntas frecuentes</h2>
          <p className="text-muted mb-0">
            Respuestas a dudas comunes sobre los servicios y el contacto con el Centro de Negocios.
          </p>
        </div>

        <div className="accordion" id="accordionFaq">
          {preguntasFrecuentes.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${item.id}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`faq${item.id}`}
                >
                  {item.pregunta}
                </button>
              </h3>

              <div
                id={`faq${item.id}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                  {item.respuesta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqAccordion