import { servicios } from '../data/servicios'
import { preguntasFrecuentes } from '../data/preguntasFrecuentes'
import { testimonios } from '../data/testimonios'

export async function obtenerServicios() {
  return Promise.resolve(servicios)
}

export async function obtenerPreguntasFrecuentes() {
  return Promise.resolve(preguntasFrecuentes)
}

export async function obtenerTestimonios() {
  return Promise.resolve(testimonios)
}