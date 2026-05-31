function Hero() {
  return (
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
  )
}

export default Hero