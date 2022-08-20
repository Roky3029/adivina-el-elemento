import React from 'react'
import ContenedorInformacion from '../elements/Elemento/ContenedorInformacion'
import ElementoStyled from '../elements/Elemento/ElementoStyled'
import ListaInformacion from './arraysDatos/ListaInformacion'
import NombreElemento from '../elements/Elemento/NombreElemento'
import { useParams } from 'react-router-dom'
import ContenedorMap from '../elements/Elemento/ContenedorMap'
import Textos from '../elements/Elemento/Textos'
import InformacionElemento from '../elements/Elemento/InformacionElemento'
import ContenedorTituloNumero from '../elements/Elemento/ContenedorTituloNumero'
import ContenedorTextos from '../elements/Elemento/ContenedorTextos'
import ContenedorTexto from '../elements/Elemento/ContenedorTexto'
import TitulosTexto from '../elements/Elemento/TitulosTexto'
import Imagen from '../elements/Elemento/Imagen'
import Error404 from './Error404'
import { Helmet } from 'react-helmet'
import ContenedorRegresar from '../elements/Elemento/ContenedorRegresar'
import LinkRegresar from '../elements/Elemento/LinkRegresar'
import CentradorImg from '../elements/Elemento/CentradorImg'
import useObtenerGrupo from '../hooks/useObtenerGrupo'
import Creditos from '../elements/Elemento/Creditos'

const Elemento = () => {
  // obtenemos el numero atomico de la URL y le decimos que el objecto que coincida con el numeroAtomico - 1 (para poder acceder a su posicion del array) lo guardemos en una const para poder acceder a todas sus propiedades

  const { numeroAtomico } = useParams()
  const objectoCoincidente = ListaInformacion[numeroAtomico - 1] || {}

  const [colorFondo, grupoPerteneciente] = useObtenerGrupo(objectoCoincidente.grupo)

  return (
    <>
      <Helmet>
        <title>{objectoCoincidente.nombre} | AEE</title>
      </Helmet>

      <LinkRegresar to="/tabla">
        <ContenedorRegresar>
          <img src='/img/return.svg' alt='Regresar' loading='lazy' style={{ paddingLeft: '20px' }} />
          <p>Ir a la tabla</p>
        </ContenedorRegresar>

      </LinkRegresar>
      <LinkRegresar to="/buscar">
        <ContenedorRegresar>
          <img src='/img/search.svg' alt='Buscar' loading='lazy' style={{ paddingLeft: '20px' }} />
          <p>Ir al buscador</p>
        </ContenedorRegresar>
      </LinkRegresar>

      <ContenedorInformacion>
        {numeroAtomico <= 118
          ? <ContenedorMap>
            <ElementoStyled
              colorfondo={colorFondo}
            >
              {objectoCoincidente.simbolo}
            </ElementoStyled>

            <ContenedorTituloNumero>
              <NombreElemento>{objectoCoincidente.nombre}</NombreElemento>
              <InformacionElemento>Número atómico: <span>{objectoCoincidente.numeroAtomico}</span></InformacionElemento>
              <InformacionElemento>Grupo: <span>{grupoPerteneciente}</span></InformacionElemento>
            </ContenedorTituloNumero>

            <CentradorImg>
              <Imagen src={`/img/elementos/${objectoCoincidente.nombre}.jpg`} alt={`Foto del ${objectoCoincidente.nombre}`} />
            </CentradorImg>

            <ContenedorTextos>

              <ContenedorTexto>
                <TitulosTexto>Información del elemento</TitulosTexto>
                <Textos>{objectoCoincidente.informacion.length === 0 ? `¡Ups! No hemos encontrado información del elemento ${objectoCoincidente.nombre}. Pero pronto la habrá.` : objectoCoincidente.informacion}</Textos>

                {objectoCoincidente.informacion.length === 0
                  ? <lord-icon
                    src="https://cdn.lordicon.com/pvbutfdk.json"
                    trigger="loop"
                    delay="1000"
                    style={{ width: '150px', height: '150px', textAlign: 'center' }}>
                  </lord-icon>
                  : ''}
              </ContenedorTexto>

              <ContenedorTexto>
                <TitulosTexto>Datos curiosos del elemento</TitulosTexto>
                <Textos>{objectoCoincidente.curiosidad.length === 0 ? `¡Vaya! No hemos sido capaces de encontrar datos curiosos del ${objectoCoincidente.nombre}, pero no te preocupes, muy pronto habrá información al respecto.` : objectoCoincidente.curiosidad}</Textos>
                {objectoCoincidente.curiosidad.length === 0
                  ? <lord-icon
                    src="https://cdn.lordicon.com/fpuyuudi.json"
                    trigger="loop"
                    delay="1000"
                    style={{ width: '150px', height: '150px', textAlign: 'center' }}>
                  </lord-icon>
                  : ''}
              </ContenedorTexto>

            </ContenedorTextos>
          </ContenedorMap>
          : <Error404 />
        }
      </ContenedorInformacion>

      {objectoCoincidente.informacion.length !== 0 ? <Creditos>Información extraida del libro &quot;Los Elementos: La nueva guía de los componentes básicos del universo&quot; de &quot;Jack Challoner&quot;. Edición del 2018</Creditos> : ''}
    </>
  )
}

export default Elemento
