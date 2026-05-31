function Footer() {
  return (
    <footer className="footer-site bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4 gx-lg-5">
          <div className="col-12 col-lg-4">
            <div className="footer-block">
              <h2 className="h5 fw-bold mb-3">
                EVA 3 Desarrollo Frontend
              </h2>

              <p className="mb-2">
                Landing page para el Centro de Negocios Santiago de SERCOTEC.
              </p>

              <p className="mb-0 text-white-50">
                Proyecto desarrollado como parte de la evaluacion de Desarrollo Frontend.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="footer-block">
              <h3 className="h5 fw-bold mb-3">
                Contacto
              </h3>

              <p className="mb-2">
                Centro de Negocios Santiago
              </p>

              <p className="mb-2 footer-email">
                <a
                  href="mailto:centro.santiago@centrossercotec.cl"
                  className="footer-link"
                >
                  centro.santiago@centrossercotec.cl
                </a>
              </p>

              <p className="mb-0 text-white-50">
                Manuel Rodriguez Sur 749, Santiago, Metro Toesca.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="footer-block">
              <h3 className="h5 fw-bold mb-3">
                Navegacion
              </h3>

              <nav aria-label="Navegacion del footer">
                <ul className="footer-nav list-unstyled mb-0">
                  <li>
                    <a href="#inicio" className="footer-link">
                      Inicio
                    </a>
                  </li>

                  <li>
                    <a href="#nosotros" className="footer-link">
                      Nosotros
                    </a>
                  </li>

                  <li>
                    <a href="#servicios" className="footer-link">
                      Servicios
                    </a>
                  </li>

                  <li>
                    <a href="#testimonios" className="footer-link">
                      Testimonios
                    </a>
                  </li>

                  <li>
                    <a href="#faq" className="footer-link">
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a href="#contacto" className="footer-link">
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <p className="mb-0 text-white-50">
            Creado por Sebastian Morales y Lukas Covarrubias.
          </p>

          <p className="mb-0 text-white-50">
            EVA 3 Desarrollo Frontend.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer