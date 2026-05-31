# Pruebas de endpoints - API local

## Proyecto

**EVA 3 Desarrollo Frontend**
**Landing page Centro de Negocios Santiago de SERCOTEC**

## Objetivo del documento

Este documento registra las pruebas realizadas a la API local simulada con `json-server`, utilizada como capa tipo CMS para entregar contenido dinámico a la landing page.

La API permite consumir información para las siguientes secciones:

* Nosotros
* Servicios
* Testimonios
* Preguntas frecuentes

## Herramienta utilizada

Para simular la API local se utilizó:

```bash
json-server
```

El servidor se ejecuta en el puerto:

```text
http://localhost:3001
```

## Comando para levantar la API

Desde la raíz del proyecto se debe ejecutar:

```powershell
npm run api
```

Resultado esperado:

```text
JSON Server started
http://localhost:3001
```

---

## Endpoint 1: Servicios

| Campo              | Detalle                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------ |
| Método             | GET                                                                                        |
| URL                | http://localhost:3001/servicios                                                            |
| Descripción        | Devuelve el listado de servicios principales ofrecidos por el Centro de Negocios Santiago. |
| Resultado esperado | Un arreglo con 3 servicios, cada uno con id, título, descripción e imagen.                 |

### Prueba en PowerShell

```powershell
Invoke-RestMethod http://localhost:3001/servicios
```

### Resultado esperado

```text
Debe mostrar 3 servicios:
1. Asesoria empresarial
2. Capacitaciones y talleres
3. Innovacion y transformacion digital
```

---

## Endpoint 2: Nosotros

| Campo              | Detalle                                                                   |
| ------------------ | ------------------------------------------------------------------------- |
| Método             | GET                                                                       |
| URL                | http://localhost:3001/nosotros                                            |
| Descripción        | Devuelve la información institucional del Centro de Negocios Santiago.    |
| Resultado esperado | Un objeto con etiqueta, título, descripción, objetivo y áreas de trabajo. |

### Prueba en PowerShell

```powershell
Invoke-RestMethod http://localhost:3001/nosotros
```

### Resultado esperado

```text
Debe mostrar:
- etiqueta
- titulo
- descripcion
- objetivoTitulo
- objetivoDescripcion
- areas
```

---

## Endpoint 3: Testimonios

| Campo              | Detalle                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------- |
| Método             | GET                                                                                           |
| URL                | http://localhost:3001/testimonios                                                             |
| Descripción        | Devuelve testimonios de usuarios o emprendedores apoyados por el Centro de Negocios Santiago. |
| Resultado esperado | Un arreglo con 3 testimonios, cada uno con id, nombre, cargo y texto.                         |

### Prueba en PowerShell

```powershell
Invoke-RestMethod http://localhost:3001/testimonios
```

### Resultado esperado

```text
Debe mostrar 3 testimonios:
1. Carolina Munoz
2. Felipe Araya
3. Marcela Rojas
```

---

## Endpoint 4: Preguntas frecuentes

| Campo              | Detalle                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------- |
| Método             | GET                                                                                          |
| URL                | http://localhost:3001/preguntasFrecuentes                                                    |
| Descripción        | Devuelve el listado de preguntas frecuentes utilizadas en la sección FAQ de la landing page. |
| Resultado esperado | Un arreglo con 4 preguntas frecuentes, cada una con id, pregunta y respuesta.                |

### Prueba en PowerShell

```powershell
Invoke-RestMethod http://localhost:3001/preguntasFrecuentes
```

### Resultado esperado

```text
Debe mostrar 4 preguntas frecuentes relacionadas con:
1. Usuarios que pueden recibir apoyo
2. Servicios entregados
3. Solicitud de información
4. Modalidad de atención
```

---

## Prueba general del frontend consumiendo la API

Para verificar que la landing page consume correctamente la API local, se deben abrir dos terminales.

### Terminal 1

```powershell
npm run api
```

### Terminal 2

```powershell
npm run dev
```

Luego abrir en el navegador:

```text
http://localhost:5173/
```

## Resultado esperado en la landing page

La página debe cargar correctamente las siguientes secciones:

* Nosotros
* Servicios principales
* Testimonios
* Preguntas frecuentes
* Contacto

Además, los botones de servicios deben llevar al formulario de contacto y rellenar automáticamente el campo de servicio seleccionado.

## Evidencia de pruebas realizadas

Durante la prueba se ejecutaron correctamente los siguientes comandos:

```powershell
Invoke-RestMethod http://localhost:3001/servicios
Invoke-RestMethod http://localhost:3001/nosotros
Invoke-RestMethod http://localhost:3001/testimonios
Invoke-RestMethod http://localhost:3001/preguntasFrecuentes
```

Los endpoints respondieron correctamente, entregando datos desde el archivo `db.json`.

## Conclusión

La API local simulada con `json-server` funciona correctamente y permite separar los datos del frontend, cumpliendo con el requisito de consumir información desde una fuente externa o tipo CMS.
