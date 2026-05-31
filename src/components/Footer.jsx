function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h2 className="h5 fw-bold">
              EVA 3 Desarrollo Frontend
            </h2>

            <p className="mb-2">
              Landing page para el Centro de Negocios Santiago de SERCOTEC.
            </p>

            <p className="mb-0 text-white-50">
              Proyecto desarrollado como parte de la evaluacion de Desarrollo Frontend.
            </p>
          </div>

          <div className="col-md-4">
            <h3 className="h5 fw-bold">
              Contacto
            </h3>

            <p className="mb-2">
              Centro de Negocios Santiago
            </p>

            <p className="mb-2">
              <a
                href="mailto:centro.santiago@centrossercotec.cl"
                className="text-white text-decoration-none"
              >
                centro.santiago@centrossercotec.cl
              </a>
            </p>

            <p className="mb-0 text-white-50">
              Manuel Rodriguez Sur 749, Santiago, Metro Toesca.
            </p>
          </div>

          <div className="col-md-4">
            <h3 className="h5 fw-bold">
              Navegacion
            </h3>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#inicio" className="text-white text-decoration-none">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#nosotros" className="text-white text-decoration-none">
                  Nosotros
                </a>
              </li>

              <li>
                <a href="#servicios" className="text-white text-decoration-none">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#testimonios" className="text-white text-decoration-none">
                  Testimonios
                </a>
              </li>

              <li>
                <a href="#faq" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#contacto" className="text-white text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <p className="mb-0 text-white-50">
            Creado por Lukas Covarrubias y Sebastian Morales.
          </p>

          <p className="mb-0 text-white-50">
            EVA3 Desarrollo Frontend.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer