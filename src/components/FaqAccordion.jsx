import { useEffect, useState } from 'react'
import { obtenerPreguntasFrecuentes } from '../services/api'

function FaqAccordion() {
  const [preguntasFrecuentes, setPreguntasFrecuentes] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    obtenerPreguntasFrecuentes()
      .then((datos) => {
        setPreguntasFrecuentes(datos)
      })
      .catch((error) => {
        console.error('Error al obtener las preguntas frecuentes:', error)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [])

  return (
    <section id="faq" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            Preguntas frecuentes
          </h2>

          <p className="text-muted">
            Respuestas a consultas habituales sobre los servicios del Centro de Negocios Santiago.
          </p>
        </div>

        {cargando ? (
          <p className="text-center">
            Cargando preguntas frecuentes...
          </p>
        ) : (
          <div className="accordion" id="accordionPreguntasFrecuentes">
            {preguntasFrecuentes.map((pregunta, index) => (
              <div className="accordion-item" key={pregunta.id}>
                <h3 className="accordion-header" id={`heading-${pregunta.id}`}>
                  <button
                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${pregunta.id}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse-${pregunta.id}`}
                  >
                    {pregunta.pregunta}
                  </button>
                </h3>

                <div
                  id={`collapse-${pregunta.id}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  aria-labelledby={`heading-${pregunta.id}`}
                  data-bs-parent="#accordionPreguntasFrecuentes"
                >
                  <div className="accordion-body">
                    {pregunta.respuesta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FaqAccordion