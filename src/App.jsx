import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

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