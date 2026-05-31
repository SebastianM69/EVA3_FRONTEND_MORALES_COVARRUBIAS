import { servicios } from '../data/servicios'
import { preguntasFrecuentes } from '../data/preguntasFrecuentes'
import { testimonios } from '../data/testimonios'
import { nosotros } from '../data/nosotros'

const API_URL = 'http://localhost:3001'

async function obtenerDesdeApi(endpoint, respaldoLocal) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`)

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.warn(`No se pudo consumir ${endpoint} desde la API local. Se usaran datos locales.`, error)
    return respaldoLocal
  }
}

export async function obtenerServicios() {
  return obtenerDesdeApi('servicios', servicios)
}

export async function obtenerPreguntasFrecuentes() {
  return obtenerDesdeApi('preguntasFrecuentes', preguntasFrecuentes)
}

export async function obtenerTestimonios() {
  return obtenerDesdeApi('testimonios', testimonios)
}

export async function obtenerNosotros() {
  return obtenerDesdeApi('nosotros', nosotros)
}