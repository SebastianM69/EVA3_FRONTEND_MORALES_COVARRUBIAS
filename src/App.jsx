import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio" className="hero-sercotec d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <span className="badge bg-warning text-dark mb-3">
                  Centro de Negocios Santiago
                </span>

                <h1 className="display-4 fw-bold text-white">
                  Apoyo y acompañamiento para emprendedores y pymes
                </h1>

                <p className="lead text-white mt-3">
                  Plataforma informativa para difundir servicios de asesoría,
                  capacitación, innovación y fortalecimiento empresarial.
                </p>

                <div className="d-flex gap-3 mt-4 flex-wrap">
                  <a href="#servicios" className="btn btn-warning btn-lg">
                    Ver servicios
                  </a>

                  <a href="#contacto" className="btn btn-outline-light btn-lg">
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-5">
          <div className="container">
            <h2 className="fw-bold text-center mb-3">Servicios principales</h2>
            <p className="text-center text-muted mb-5">
              Esta sección será reemplazada por componentes reutilizables en el siguiente paso.
            </p>

            <div className="alert alert-info text-center">
              Proyecto React funcionando correctamente con Bootstrap.
            </div>
          </div>
        </section>

        <section id="contacto" className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold">Contacto</h2>
            <p className="text-muted">
              En los próximos pasos agregaremos el formulario funcional.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App