/* eslint-disable react/prop-types */
import React from 'react'
import { Helmet } from 'react-helmet'
import ContenedorSoon from '../elements/CommingSoon/ContenedorSoon'
import TituloSoon from '../elements/CommingSoon/TituloSoon'

const CommingSoon = ({ caracteristica }) => {
  return (
    <>
      <Helmet>
        <title>Trabajando en ello... | AEE</title>
      </Helmet>

      <ContenedorSoon>
        <TituloSoon>Trabajando en ello...</TituloSoon>
        <TituloSoon>Muy pronto la {caracteristica} en dispositivos móviles</TituloSoon>
      </ContenedorSoon>
    </>
  )
}

export default CommingSoon
