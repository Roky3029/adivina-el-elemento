import React from 'react'
import Title from '../elements/Intro/Title'
import Pregunta from '../elements/Intro/Pregunta'
import { Helmet } from 'react-helmet'

const Intro = () => {
  return (
    <>
      <Helmet>
        <title>Adivina El Elemento</title>
      </Helmet>
      <div className="intro">
        <Title className="title">Adivina el elemento de la tabla periódica</Title>

        <Pregunta>¿Qué elemento es este?</Pregunta>
      </div>
    </>
  )
}

export default Intro
