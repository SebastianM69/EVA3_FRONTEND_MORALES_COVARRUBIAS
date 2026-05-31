function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">
          Centro de Negocios Santiago
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#servicios">Servicios</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#testimonios">Testimonios</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#faq">Preguntas frecuentes</a>
            </li>

            <li className="nav-item">
              <a className="btn btn-warning ms-lg-3" href="#contacto">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar