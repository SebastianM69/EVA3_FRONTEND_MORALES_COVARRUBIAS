import { useEffect, useState } from 'react'
import { obtenerNosotros } from '../services/api'

function AboutSection() {
  const [nosotros, setNosotros] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    obtenerNosotros()
      .then((datos) => {
        setNosotros(datos)
      })
      .catch((error) => {
        console.error('Error al obtener la informacion de nosotros:', error)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [])

  if (cargando) {
    return (
      <section id="nosotros" className="py-5 bg-light">
        <div className="container">
          <div className="alert alert-info text-center mb-0">
            Cargando informacion institucional...
          </div>
        </div>
      </section>
    )
  }

  if (!nosotros) {
    return (
      <section id="nosotros" className="py-5 bg-light">
        <div className="container">
          <div className="alert alert-warning text-center mb-0">
            No fue posible cargar la informacion institucional.
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="nosotros" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="badge bg-primary mb-3">
              {nosotros.etiqueta}
            </span>

            <h2 className="fw-bold">
              {nosotros.titulo}
            </h2>

            <p className="text-muted">
              {nosotros.descripcion}
            </p>

            <div className="row g-2 mt-3">
              {nosotros.areas.map((area) => (
                <div className="col-sm-6" key={area}>
                  <div className="p-3 bg-white rounded-3 shadow-sm h-100">
                    {area}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 bg-white rounded-4 shadow-sm">
              <h3 className="h5 fw-bold">
                {nosotros.objetivoTitulo}
              </h3>

              <p className="text-muted mb-0">
                {nosotros.objetivoDescripcion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection