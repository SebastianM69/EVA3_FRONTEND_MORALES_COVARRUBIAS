# EVA 3 Desarrollo Frontend

## Landing page Centro de Negocios Santiago de SERCOTEC

## Descripción del proyecto

Este proyecto corresponde a la **EVA 3 de Desarrollo Frontend**. Consiste en una landing page desarrollada para el **Centro de Negocios Santiago de SERCOTEC**, con el objetivo de mejorar la presentación de sus servicios, facilitar el contacto con usuarios interesados y organizar la información en una interfaz clara, moderna y responsiva.

La aplicación fue desarrollada con **React + Vite**, utilizando **Bootstrap** para la estructura visual y el diseño responsivo.

---

## Cliente

**Centro de Negocios Santiago de SERCOTEC**

El Centro de Negocios Santiago entrega apoyo, asesoría y acompañamiento a emprendedores, microempresas y pequeñas empresas, fortaleciendo áreas como gestión, administración, innovación, transformación digital y sostenibilidad.

---

## Objetivo del proyecto

Crear una landing page frontend que permita:

* Presentar información institucional del Centro de Negocios Santiago.
* Mostrar servicios principales mediante tarjetas reutilizables.
* Facilitar el contacto de usuarios interesados.
* Mostrar testimonios mediante un carrusel.
* Presentar preguntas frecuentes de forma dinámica.
* Consumir datos desde una API local simulada.
* Aplicar buenas prácticas de desarrollo frontend.
* Mantener una estructura ordenada mediante componentes reutilizables.

---

## Integrantes

* Sebastián Morales
* Lukas Covarrubias

---

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* Bootstrap 5
* React Router DOM
* json-server
* HTML5
* CSS3
* Git
* GitHub
* PowerShell
* Visual Studio Code

---

## Instalación del proyecto

Para instalar las dependencias del proyecto, ejecutar desde la raíz:

```powershell
npm install
```

---

## Ejecución del frontend

Para levantar el proyecto en entorno de desarrollo:

```powershell
npm run dev
```

Luego abrir en el navegador:

```text
http://localhost:5173/
```

---

## Ejecución de la API local

El proyecto utiliza `json-server` para simular una API local o capa tipo CMS.

Para levantar la API local:

```powershell
npm run api
```

La API queda disponible en:

```text
http://localhost:3001
```

---

## Ejecución completa del proyecto

Para probar correctamente la landing page consumiendo datos desde la API local, se deben usar dos terminales.

### Terminal 1

```powershell
npm run api
```

### Terminal 2

```powershell
npm run dev
```

Luego abrir:

```text
http://localhost:5173/
```

---

## Compilación del proyecto

Para verificar que el proyecto compila correctamente:

```powershell
npm run build
```

Resultado esperado:

```text
✓ built
```

---

## Estructura principal del proyecto

```text
EVA3_FRONTEND_MORALES_COVARRUBIAS/
│
├── db.json
├── package.json
├── README.md
│
├── docs/
│   ├── PRUEBAS_ENDPOINTS.md
│   ├── GUIA_BUENAS_PRACTICAS.md
│   └── RETROSPECTIVA.md
│
├── public/
│   └── icons.svg
│
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── AboutSection.jsx
    │   ├── ServiceCard.jsx
    │   ├── ContactForm.jsx
    │   ├── TestimonialsCarousel.jsx
    │   ├── FaqAccordion.jsx
    │   └── Footer.jsx
    │
    ├── data/
    │   ├── servicios.js
    │   ├── preguntasFrecuentes.js
    │   ├── testimonios.js
    │   └── nosotros.js
    │
    └── services/
        └── api.js
```

---

## Componentes desarrollados

### Navbar.jsx

Componente de navegación principal. Permite acceder a las secciones internas de la landing page.

### Hero.jsx

Sección inicial de presentación del proyecto. Muestra el mensaje principal de la landing page.

### AboutSection.jsx

Sección institucional "Nosotros". Consume datos mediante `api.js`.

### ServiceCard.jsx

Tarjeta reutilizable para mostrar servicios. Incluye imagen, título, descripción y botón **Contáctanos**.

El botón permite enviar el nombre del servicio seleccionado al formulario de contacto.

### ContactForm.jsx

Formulario de contacto con validaciones de seguridad y campo de servicio autocompletado.

### TestimonialsCarousel.jsx

Carrusel de testimonios. Consume datos desde la API local mediante `api.js`.

### FaqAccordion.jsx

Acordeón de preguntas frecuentes. Consume datos desde la API local mediante `api.js`.

### Footer.jsx

Pie de página informativo con datos del proyecto, contacto, navegación interna e integrantes.

---

## Funcionalidades principales

* Landing page desarrollada en React.
* Componentes reutilizables.
* Navegación interna.
* Sección de inicio.
* Sección nosotros.
* Sección de servicios.
* Tarjetas reutilizables de servicios.
* Botón **Contáctanos** en cada tarjeta.
* Autocompletado del servicio seleccionado en el formulario.
* Formulario de contacto con validaciones.
* Protección anti-bot mediante honeypot.
* Carrusel de testimonios.
* Preguntas frecuentes dinámicas.
* Footer informativo.
* Consumo de datos desde una API local simulada.
* Diseño responsivo con Bootstrap.
* Documentación del proyecto.
* Control de versiones con Git.

---

## API local y capa de servicios

El proyecto utiliza una capa centralizada en:

```text
src/services/api.js
```

Este archivo contiene las funciones encargadas de obtener los datos usados en la landing page:

```javascript
obtenerServicios()
obtenerNosotros()
obtenerTestimonios()
obtenerPreguntasFrecuentes()
```

La información se consume desde la API local levantada con `json-server`:

```text
http://localhost:3001
```

Además, `api.js` mantiene un respaldo local utilizando los archivos de `src/data`, para que la página pueda seguir funcionando si la API local no está activa.

---

## Endpoints disponibles

| Método | Endpoint               | Descripción                            |
| ------ | ---------------------- | -------------------------------------- |
| GET    | `/servicios`           | Devuelve los servicios principales.    |
| GET    | `/nosotros`            | Devuelve la información institucional. |
| GET    | `/testimonios`         | Devuelve testimonios de usuarios.      |
| GET    | `/preguntasFrecuentes` | Devuelve preguntas frecuentes.         |

---

## Pruebas de endpoints

Con la API local activa:

```powershell
npm run api
```

Se pueden probar los endpoints con PowerShell:

```powershell
Invoke-RestMethod http://localhost:3001/servicios
Invoke-RestMethod http://localhost:3001/nosotros
Invoke-RestMethod http://localhost:3001/testimonios
Invoke-RestMethod http://localhost:3001/preguntasFrecuentes
```

La documentación completa de estas pruebas se encuentra en:

```text
docs/PRUEBAS_ENDPOINTS.md
```

---

## Seguridad del formulario

El formulario implementa validaciones frontend para evitar datos incompletos o incorrectos.

Se validan campos como:

* Nombre
* Correo electrónico
* Teléfono
* Servicio seleccionado
* Mensaje

También se implementa una protección anti-bot mediante un campo oculto tipo **honeypot**. Si este campo es completado, el envío se bloquea.

---

## Accesibilidad

El proyecto incluye prácticas básicas de accesibilidad:

* Uso de etiquetas semánticas.
* Uso de `label` en campos del formulario.
* Uso de `aria-label` en botones del carrusel.
* Textos descriptivos.
* Navegación interna clara.
* Estructura ordenada por secciones.

---

## Optimización

Se aplicaron medidas básicas de optimización:

* Separación de componentes.
* Separación de datos.
* Uso de `api.js` para centralizar el consumo de información.
* Uso de `loading="lazy"` en imágenes no críticas.
* Compilación mediante `npm run build`.
* Revisión visual en escritorio y celular.
* Organización de estilos en `index.css`.

---

## Diseño responsivo

La landing page fue revisada en vista de escritorio y vista móvil.

Se realizaron ajustes para mejorar:

* Distribución de tarjetas.
* Visualización del carrusel.
* Organización del footer.
* Navegación interna.
* Lectura de textos en pantallas pequeñas.
* Presentación del formulario de contacto.

---

## Uso de inteligencia artificial

Durante el desarrollo del proyecto se utilizó inteligencia artificial como herramienta de apoyo para orientar el proceso de trabajo, resolver dudas técnicas y organizar la documentación.

El uso de IA se aplicó principalmente en:

* Revisión de errores en comandos de Git, npm y PowerShell.
* Apoyo en la organización de componentes de React.
* Sugerencias para separar datos, servicios y componentes.
* Apoyo en la documentación del proyecto.
* Revisión de buenas prácticas.
* Corrección de problemas visuales y de responsividad.
* Orientación para integrar una API local con `json-server`.

Todas las modificaciones fueron revisadas, ejecutadas y probadas manualmente por los integrantes del proyecto mediante comandos como:

```powershell
npm run build
git status
npm run api
npm run dev
```

La inteligencia artificial fue utilizada como apoyo formativo y técnico, manteniendo la responsabilidad del desarrollo, pruebas y entrega final en los integrantes del equipo.

---

## Buenas prácticas aplicadas

El proyecto incluye una guía de buenas prácticas en:

```text
docs/GUIA_BUENAS_PRACTICAS.md
```

Entre las prácticas aplicadas se encuentran:

* Uso de componentes con PascalCase.
* Separación de componentes.
* Separación de datos.
* Centralización del consumo de datos en `api.js`.
* Validación de formularios.
* Protección anti-bot.
* Accesibilidad básica.
* Diseño responsivo.
* Uso de Git con commits frecuentes.
* Ejecución de `npm run build` antes de commits importantes.
* Nombres de archivos consistentes.

---

## Retrospectiva

El proyecto incluye una retrospectiva en:

```text
docs/RETROSPECTIVA.md
```

Este documento describe:

* Qué funcionó bien.
* Qué problemas aparecieron.
* Cómo se resolvieron.
* Qué se puede mejorar.
* Plan de acción para una próxima iteración.
* Aprendizajes principales.

---

## Control de versiones

El proyecto fue trabajado con Git mediante commits frecuentes.

Comandos utilizados durante el desarrollo:

```powershell
git status
git add .
git commit -m "Mensaje del commit"
git log --oneline
```

Antes de cada commit importante se ejecutó:

```powershell
npm run build
git status
```

---

## Repositorio GitHub

Repositorio del proyecto:

```text
https://github.com/SebastianM69/EVA3_FRONTEND_MORALES_COVARRUBIAS.git
```
