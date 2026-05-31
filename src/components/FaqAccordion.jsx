const preguntas = [
  {
    id: 1,
    pregunta: '¿Quiénes pueden recibir apoyo del Centro de Negocios Santiago?',
    respuesta: 'Pueden acceder emprendedores, microempresas y pequeñas empresas que necesiten orientación para mejorar su gestión, fortalecer sus capacidades o desarrollar su negocio.',
  },
  {
    id: 2,
    pregunta: '¿Qué tipo de servicios entrega el Centro de Negocios?',
    respuesta: 'Entrega asesorías, capacitaciones, acompañamiento empresarial, orientación en innovación, transformación digital, administración, finanzas y marketing.',
  },
  {
    id: 3,
    pregunta: '¿Cómo puedo solicitar información sobre un servicio?',
    respuesta: 'Puedes seleccionar una tarjeta de servicio y presionar el botón Contáctanos. El formulario completará automáticamente el servicio seleccionado.',
  },
  {
    id: 4,
    pregunta: '¿La atención es presencial o digital?',
    respuesta: 'La landing page permite entregar información inicial y facilitar el contacto. La modalidad final de atención dependerá de la coordinación del Centro de Negocios Santiago.',
  },
]

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
          {preguntas.map((item, index) => (
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