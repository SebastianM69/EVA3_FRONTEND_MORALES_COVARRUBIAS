# Retrospectiva del proyecto - EVA 3 Desarrollo Frontend

## Proyecto

**EVA 3 Desarrollo Frontend**
**Landing page Centro de Negocios Santiago de SERCOTEC**

## Integrantes

* Sebastián Morales
* Lukas Covarrubias

## Objetivo de la retrospectiva

El objetivo de esta retrospectiva es analizar el proceso de desarrollo de la landing page, identificando los aspectos que funcionaron bien, los problemas encontrados, las soluciones aplicadas y las mejoras que podrían implementarse en futuras iteraciones.

---

## 1. Contexto general del proyecto

El proyecto consistió en desarrollar una landing page frontend utilizando React, Vite y Bootstrap para el Centro de Negocios Santiago de SERCOTEC.

La página incluye secciones principales como:

* Inicio
* Nosotros
* Servicios
* Testimonios
* Preguntas frecuentes
* Contacto

Además, se implementaron componentes reutilizables, formulario con validaciones, protección anti-bot, navegación interna, consumo de datos mediante una capa `api.js` y una API local simulada con `json-server`.

---

## 2. Qué funcionó bien

### Uso de React y Vite

React permitió organizar la interfaz en componentes reutilizables, mientras que Vite facilitó una ejecución rápida del proyecto en entorno local.

### Separación de componentes

Se logró dividir la landing page en componentes independientes:

* `Navbar.jsx`
* `Hero.jsx`
* `ServiceCard.jsx`
* `ContactForm.jsx`
* `TestimonialsCarousel.jsx`
* `FaqAccordion.jsx`
* `AboutSection.jsx`
* `Footer.jsx`

Esto permitió mantener un código más ordenado y fácil de modificar.

### Separación de datos

Los datos fueron separados en archivos dentro de `src/data`, lo que facilitó la organización del contenido de servicios, testimonios, preguntas frecuentes y sección nosotros.

### Capa de servicios api.js

Se creó `src/services/api.js` como punto central para consumir datos. Esto permitió desacoplar los componentes de la fuente de información.

### API local con json-server

Se integró `json-server` para simular una API o CMS local, permitiendo consumir datos desde endpoints como:

* `/servicios`
* `/nosotros`
* `/testimonios`
* `/preguntasFrecuentes`

### Trabajo con Git

Se trabajó con commits frecuentes, revisando `git status` y ejecutando `npm run build` antes de guardar cambios importantes.

### Revisión responsiva

Se revisó la interfaz en escritorio y celular, corrigiendo detalles visuales en testimonios y footer para mejorar la experiencia en distintos tamaños de pantalla.

---

## 3. Problemas encontrados durante el desarrollo

### Node y npm no estaban instalados inicialmente

Al comenzar el proyecto fue necesario verificar la instalación de Node.js y npm, ya que sin estas herramientas no era posible crear ni ejecutar el proyecto con Vite.

### PowerShell bloqueaba comandos npm

PowerShell presentó problemas por la política de ejecución, lo que impedía ejecutar algunos comandos relacionados con npm.

### Git estaba tomando una carpeta incorrecta como repositorio

Al inicio, Git estaba considerando `C:/Users/sandr` como repositorio, en vez de trabajar solamente dentro de la carpeta del proyecto.

### Errores de tipeo en comandos

Durante el desarrollo aparecieron errores por escribir comandos incorrectos, por ejemplo:

* `got`
* `ghit`
* `commi`
* `commmit`
* `sit`
* `statsus`
* `buid`

### Problemas de mayúsculas y minúsculas en nombres de archivos

Se detectaron problemas relacionados con nombres de archivos, especialmente en componentes como `Navbar.jsx` y archivos de datos como `preguntasFrecuentes.js`.

Estos detalles son importantes porque algunos entornos, especialmente Linux, distinguen entre mayúsculas y minúsculas.

### Código CSS mezclado con JSX

En una etapa del proyecto se mezcló contenido de CSS con código JSX, lo que generó errores de estructura en los archivos.

### Error con TestimonialsCarousel

El componente `TestimonialsCarousel` presentó problemas porque el archivo no existía, no estaba guardado correctamente o se intentaba importar antes de estar disponible.

### Error visual en testimonios

Durante la revisión responsiva, los testimonios no mostraban correctamente el texto. El problema era que el componente estaba leyendo una propiedad incorrecta.

El archivo de datos usaba:

```
texto
```

Pero el componente estaba intentando leer:

```
mensaje
```

### Footer desordenado en vista móvil

En la revisión visual se detectó que el footer mezclaba textos y no se veía correctamente organizado en celulares.

### Textos con caracteres mal codificados

En algunos archivos aparecieron caracteres extraños en palabras con tildes o letras especiales. Esto afectaba la presentación visual de algunos textos.

---

## 4. Cómo se resolvieron los problemas

### Instalación y verificación de Node/npm

Se verificó el entorno de trabajo y se usaron comandos de npm para instalar dependencias y ejecutar el proyecto.

### Corrección del repositorio Git

Se inicializó Git dentro de la carpeta correcta del proyecto:

```
EVA3_FRONTEND_MORALES_COVARRUBIAS
```

De esta forma, el control de versiones quedó asociado solo al proyecto.

### Corrección de comandos mal escritos

Cada error de comando fue corregido ejecutando la instrucción correcta, por ejemplo:

```
git status
npm run build
```

### Corrección de nombres de archivos

Se normalizaron nombres importantes del proyecto, respetando mayúsculas y minúsculas para evitar problemas en despliegues sobre entornos Linux.

### Separación correcta de archivos

Se corrigieron archivos principales como:

* `App.jsx`
* `main.jsx`
* `index.css`

Esto permitió separar correctamente estructura, lógica y estilos.

### Creación correcta de componentes faltantes

Se crearon los componentes necesarios y se corrigieron los imports para que React pudiera encontrar cada archivo.

### Corrección de testimonios

Se ajustó `TestimonialsCarousel.jsx` para leer la propiedad correcta:

```
testimonio.texto
```

Con esto los textos de los testimonios volvieron a mostrarse correctamente.

### Mejora responsiva del footer

Se modificó `Footer.jsx` y `index.css` para organizar mejor el footer en vista de escritorio y celular, evitando que el correo y los textos se mezclaran.

### Uso de API local

Se integró `json-server` y se creó el archivo `db.json` para simular una API local. Luego se modificó `api.js` para consumir los datos desde `http://localhost:3001`.

Además, se dejó un respaldo local en `api.js` para que la página siga funcionando si la API local no está activa.

---

## 5. Qué se puede mejorar

### Mejorar el diseño visual

Aunque la landing page cumple su objetivo, en una futura versión se podría mejorar aún más la identidad visual con colores, íconos o imágenes más alineadas al estilo institucional.

### Agregar más contenido real

La información actual es funcional para la evaluación, pero podría ampliarse con datos reales del Centro de Negocios Santiago.

### Mejorar accesibilidad

Se podrían agregar más atributos `aria`, revisar contraste de colores y validar la navegación completa con teclado.

### Agregar pruebas automatizadas

En una versión posterior se podrían incorporar pruebas con herramientas como Vitest o React Testing Library.

### Mejorar manejo de errores de API

Actualmente `api.js` tiene respaldo local si la API no responde. En el futuro se podrían mostrar mensajes visuales más específicos para el usuario.

### Preparar despliegue

Se podría preparar el proyecto para desplegarlo en servicios como Netlify, Vercel o GitHub Pages.

### Mejorar textos y codificación

Se podría revisar todo el contenido del proyecto para corregir tildes, signos de apertura y caracteres especiales, asegurando que todos los archivos estén guardados con codificación UTF-8.

---

## 6. Plan de acción para una próxima iteración

1. Revisar nuevamente la interfaz en escritorio, tablet y celular.
2. Mejorar textos institucionales y contenido visual.
3. Revisar accesibilidad con herramientas del navegador.
4. Agregar más servicios o testimonios si fuese necesario.
5. Documentar capturas de pantalla para evidencia de entrega.
6. Subir el proyecto a GitHub.
7. Preparar el archivo ZIP final sin incluir `node_modules`.
8. Verificar que el README explique correctamente instalación, ejecución, API local y build.
9. Revisar que todos los textos del proyecto usen un lenguaje claro y consistente en español.
10. Mantener el criterio de diseño responsivo en todas las secciones.

---

## 7. Aprendizajes principales

Durante el proyecto se reforzaron los siguientes aprendizajes:

* Creación de proyectos con React y Vite.
* Uso de Bootstrap para diseño responsivo.
* Separación de componentes reutilizables.
* Manejo de estado con `useState`.
* Carga de datos con `useEffect`.
* Centralización de consumo de datos en `api.js`.
* Simulación de API local con `json-server`.
* Validación de formularios.
* Protección anti-bot con honeypot.
* Uso de Git mediante commits ordenados.
* Importancia de ejecutar `npm run build` antes de guardar cambios importantes.
* Revisión visual en distintas resoluciones.
* Corrección de errores paso a paso sin avanzar de golpe.

---

## 8. Conclusión

El desarrollo de la landing page permitió cumplir con los requisitos principales de la evaluación frontend, aplicando React, Vite, Bootstrap, componentes reutilizables, consumo de datos, validaciones, documentación y control de versiones.

A pesar de los errores encontrados durante el proceso, cada problema fue corregido paso a paso, manteniendo el proyecto funcionando y dejando evidencia clara de las decisiones tomadas.