import { servicios } from '../data/servicios'
import { preguntasFrecuentes } from '../data/preguntasFrecuentes'
import { testimonios } from '../data/testimonios'
import { nosotros } from '../data/nosotros'

export async function obtenerServicios() {
  return Promise.resolve(servicios)
}

export async function obtenerPreguntasFrecuentes() {
  return Promise.resolve(preguntasFrecuentes)
}

export async function obtenerTestimonios() {
  return Promise.resolve(testimonios)
}

export async function obtenerNosotros() {
  return Promise.resolve(nosotros)
}