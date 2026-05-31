import { useEffect, useState } from 'react'

function ContactForm({ servicioSeleccionado }) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    empresa: '',
  })

  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      servicio: servicioSeleccionado,
    }))
  }, [servicioSeleccionado])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validarFormulario = () => {
    if (formData.empresa.trim() !== '') {
      return 'No se pudo enviar el formulario.'
    }

    if (formData.nombre.trim().length < 3) {
      return 'El nombre debe tener al menos 3 caracteres.'
    }

    if (!formData.correo.includes('@') || !formData.correo.includes('.')) {
      return 'Debes ingresar un correo electrónico válido.'
    }

    if (formData.servicio.trim() === '') {
      return 'Debes seleccionar o ingresar un servicio.'
    }

    if (formData.mensaje.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres.'
    }

    return ''
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const mensajeError = validarFormulario()

    if (mensajeError) {
      setError(mensajeError)
      setExito('')
      return
    }

    setError('')
    setExito('Formulario validado correctamente. ¡Gracias por contactarnos!')

    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      servicio: servicioSeleccionado,
      mensaje: '',
      empresa: '',
    })
  }

  return (
    <form className="contact-form bg-white rounded-4 shadow-sm p-4" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="correo" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            className="form-control"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="telefono" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="form-control"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="servicio" className="form-label">
            Servicio
          </label>
          <input
            type="text"
            id="servicio"
            name="servicio"
            className="form-control"
            value={formData.servicio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 d-none">
          <label htmlFor="empresa" className="form-label">
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            className="form-control"
            value={formData.empresa}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <div className="col-12">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="form-control"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {error && (
          <div className="col-12">
            <div className="alert alert-danger mb-0">
              {error}
            </div>
          </div>
        )}

        {exito && (
          <div className="col-12">
            <div className="alert alert-success mb-0">
              {exito}
            </div>
          </div>
        )}

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Enviar solicitud
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm