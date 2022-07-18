import React from 'react'
import Contenedor404 from '../elements/Error404/Contenedor404'
import Imagen404 from '../elements/Error404/Imagen404'
import Titulo404 from '../elements/Error404/Titulo404'
import Texto404 from '../elements/Error404/Texto404'
import Redireccion404 from '../elements/Error404/Redireccion404'
import Enlace404 from '../elements/Error404/Enlace404'
import { Helmet } from 'react-helmet'

const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>No encontrado | AEE</title>
      </Helmet>
      <Contenedor404>
        <Imagen404 src="" alt='Matraz roto' />
        <Titulo404>Oh, vaya</Titulo404>
        <Texto404>Parece que la página que has buscado no existe</Texto404>
        <Redireccion404>Prueba a <Enlace404 href="/">volver al inicio</Enlace404></Redireccion404>
      </Contenedor404>
    </>
  )
}

export default Error404
