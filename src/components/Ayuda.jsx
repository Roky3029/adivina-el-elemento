import React from 'react'
import ContenedorAyuda from '../elements/Ayuda/ContenedorAyuda'
import ContenedorPreguntas from '../elements/Ayuda/ContenedorPreguntas'
import Pregunta from '../elements/Ayuda/Pregunta'
import TituloAyuda from '../elements/Ayuda/TituloAyuda'
import Creditos from '../elements/Elemento/Creditos'
import PreguntasAyuda from './arraysDatos/PreguntasAyuda'

const Ayuda = () => {
  return (
    <>
      <ContenedorAyuda mbottom>
        <TituloAyuda>Ayuda</TituloAyuda>

        <ContenedorPreguntas>
          {PreguntasAyuda.map((pregunta, index) => {
            return <Pregunta key={index}>
              <TituloAyuda nobigfz>{pregunta.pregunta}</TituloAyuda>
              <p>{pregunta.respuesta}</p>
            </Pregunta>
          })}
        </ContenedorPreguntas>
      </ContenedorAyuda>
      <Creditos>Para mas información, visita <a href='https://github.com/Roky3029/adivina-el-elemento/blob/main/README.md'>el repositorio de github</a></Creditos>
    </>
  )
}

export default Ayuda
