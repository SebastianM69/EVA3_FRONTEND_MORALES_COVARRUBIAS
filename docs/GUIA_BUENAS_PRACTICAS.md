# Guía de buenas prácticas - EVA 3 Desarrollo Frontend

## Proyecto

**EVA 3 Desarrollo Frontend**
**Landing page Centro de Negocios Santiago de SERCOTEC**

## Introducción

Esta guía reúne buenas prácticas aplicadas durante el desarrollo del proyecto frontend. El objetivo es mantener un código ordenado, reutilizable, seguro, responsivo y fácil de mantener.

---

## 1. Uso de componentes con PascalCase

### Descripción

Los componentes de React deben usar nombres claros y comenzar con mayúscula, siguiendo la convención PascalCase.

### Acción concreta

Nombrar los componentes como `Navbar`, `Hero`, `ServiceCard`, `ContactForm`, `TestimonialsCarousel`, `FaqAccordion`, `AboutSection` y `Footer`.

### Ejemplo

```
function ServiceCard() {
  return (
    <article className="card">
      <h3>Servicio</h3>
    </article>
  )
}

export default ServiceCard
```

### Resultado esperado

El proyecto mantiene una estructura clara y los componentes son fáciles de identificar.

---

## 2. Separación de componentes

### Descripción

La interfaz se divide en componentes pequeños y reutilizables para evitar que `App.jsx` concentre toda la lógica visual.

### Acción concreta

Crear archivos independientes dentro de la carpeta `src/components`.

### Ejemplo

```
src/components/Navbar.jsx
src/components/Hero.jsx
src/components/ServiceCard.jsx
src/components/ContactForm.jsx
src/components/Footer.jsx
```

### Resultado esperado

El código queda más limpio, ordenado y fácil de modificar.

---

## 3. Separación de datos

### Descripción

Los datos de la aplicación no deben quedar escritos directamente dentro de los componentes principales.

### Acción concreta

Separar los datos en archivos dentro de la carpeta `src/data`.

### Ejemplo

```
src/data/servicios.js
src/data/testimonios.js
src/data/preguntasFrecuentes.js
src/data/nosotros.js
```

### Resultado esperado

Los datos pueden ser modificados sin alterar directamente la estructura visual de los componentes.

---

## 4. Centralización del consumo de datos en api.js

### Descripción

El consumo de información debe concentrarse en una capa de servicios para que los componentes no dependan directamente de los archivos de datos o endpoints.

### Acción concreta

Usar `src/services/api.js` como punto central para obtener servicios, testimonios, preguntas frecuentes y datos institucionales.

### Ejemplo

```
export async function obtenerServicios() {
  return obtenerDesdeApi('servicios', servicios)
}
```

### Resultado esperado

La aplicación queda preparada para consumir datos desde una API local o una fuente externa tipo CMS.

---

## 5. Consumo de API local con json-server

### Descripción

Para simular una API o CMS se utiliza `json-server`, permitiendo consumir datos desde endpoints locales.

### Acción concreta

Crear el archivo `db.json` y levantar la API con el comando correspondiente.

### Ejemplo

```
npm run api
```

Endpoint de ejemplo:

```
http://localhost:3001/servicios
```

### Resultado esperado

La landing page consume información dinámica desde una API local.

---

## 6. Validación de formularios

### Descripción

Los formularios deben validar los datos ingresados antes de procesarlos.

### Acción concreta

Validar campos como nombre, correo, teléfono, servicio seleccionado y mensaje.

### Ejemplo

```
if (!formulario.email.includes('@')) {
  nuevosErrores.email = 'Ingresa un correo valido'
}
```

### Resultado esperado

Se evita enviar información incompleta o con formato incorrecto.

---

## 7. Protección anti-bot con honeypot

### Descripción

Un honeypot es un campo oculto que los usuarios reales no completan, pero que algunos bots sí podrían llenar.

### Acción concreta

Agregar un campo oculto llamado `empresa` y bloquear el envío si viene con contenido.

### Ejemplo

```
if (formulario.empresa.trim() !== '') {
  return
}
```

### Resultado esperado

El formulario tiene una capa básica de protección contra envíos automatizados.

---

## 8. Accesibilidad básica

### Descripción

La landing page debe ser fácil de navegar y entender para distintos usuarios.

### Acción concreta

Usar etiquetas semánticas, textos descriptivos, `aria-label` en botones y `label` en formularios.

### Ejemplo

```
<button aria-label="Testimonio siguiente">
  <span className="carousel-control-next-icon"></span>
</button>
```

### Resultado esperado

La página mejora su accesibilidad y navegación asistida.

---

## 9. Diseño responsive con Bootstrap

### Descripción

La página debe adaptarse correctamente a escritorio, tablet y celular.

### Acción concreta

Usar clases responsivas de Bootstrap como `container`, `row`, `col-md-6`, `col-lg-4` y utilidades de espaciado.

### Ejemplo

```
<div className="col-md-6 col-lg-4">
  <ServiceCard />
</div>
```

### Resultado esperado

Las secciones se ordenan correctamente en distintas resoluciones.

---

## 10. Optimización de imágenes

### Descripción

Las imágenes deben cargarse de manera eficiente para no afectar el rendimiento visual del sitio.

### Acción concreta

Usar imágenes livianas y agregar `loading="lazy"` en imágenes que no son críticas.

### Ejemplo

```
<img src={imagen} alt={titulo} loading="lazy" />
```

### Resultado esperado

La página carga de forma más eficiente y mejora la experiencia del usuario.

---

## 11. Nombres de archivos consistentes

### Descripción

Los nombres de archivos deben ser consistentes para evitar errores, especialmente en despliegues sobre sistemas sensibles a mayúsculas y minúsculas.

### Acción concreta

Mantener nombres como `Navbar.jsx`, `Footer.jsx`, `AboutSection.jsx` y `preguntasFrecuentes.js`.

### Ejemplo

```
Correcto: src/components/Navbar.jsx
Incorrecto: src/components/navbar.jsx
```

### Resultado esperado

Se evitan errores al ejecutar o desplegar el proyecto en otros entornos.

---

## 12. Commits claros y frecuentes

### Descripción

Los cambios deben guardarse en Git por etapas claras, evitando commits demasiado grandes o confusos.

### Acción concreta

Hacer commit después de completar y probar cada paso importante.

### Ejemplo

```
git add src/components/Footer.jsx
git commit -m "Creacion de footer"
```

### Resultado esperado

El historial del proyecto queda ordenado y permite revisar la evolución del desarrollo.

---

## 13. Ejecutar build antes de cada commit importante

### Descripción

Antes de guardar cambios importantes en Git, se debe comprobar que el proyecto compile correctamente.

### Acción concreta

Ejecutar `npm run build` antes de cada commit.

### Ejemplo

```
npm run build
git status
```

### Resultado esperado

Se reducen errores acumulados y se confirma que el proyecto sigue funcionando.

---

## 14. Uso de git status para controlar cambios

### Descripción

Antes de agregar o commitear archivos, es importante revisar qué archivos fueron modificados.

### Acción concreta

Ejecutar `git status` después de cada cambio importante.

### Ejemplo

```
git status
```

### Resultado esperado

Se evita commitear archivos incorrectos o dejar cambios pendientes sin registrar.

---

## 15. Documentación del proyecto

### Descripción

Un proyecto evaluativo debe incluir documentación clara para explicar instalación, ejecución, pruebas y estructura.

### Acción concreta

Crear documentos en la carpeta `docs` y actualizar el `README.md`.

### Ejemplo

```
docs/PRUEBAS_ENDPOINTS.md
docs/GUIA_BUENAS_PRACTICAS.md
docs/RETROSPECTIVA.md
```

### Resultado esperado

El proyecto queda mejor preparado para revisión, presentación y entrega final.

---

## Conclusión

Durante el desarrollo de la landing page se aplicaron buenas prácticas de organización, reutilización de componentes, separación de datos, consumo de API local, validación de formularios, control de versiones, accesibilidad y diseño responsivo.

Estas prácticas permiten que el proyecto sea más ordenado, mantenible y adecuado para una evaluación de desarrollo frontend.
