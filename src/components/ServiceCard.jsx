function ServiceCard({ imagen, titulo, descripcion, onSelectServicio }) {
  return (
    <article className="card h-100 shadow-sm border-0 service-card">
      <img
        src={imagen}
        className="card-img-top service-card-img"
        alt={`Imagen referencial del servicio ${titulo}`}
        loading="lazy"
      />

      <div className="card-body d-flex flex-column">
        <h3 className="h5 fw-bold">{titulo}</h3>

        <p className="text-muted flex-grow-1">
          {descripcion}
        </p>

        <a
          href="#contacto"
          className="btn btn-primary mt-3"
          onClick={() => onSelectServicio(titulo)}
        >
          Contáctanos
        </a>
      </div>
    </article>
  )
}

export default ServiceCard