import React from 'react'
import ContenedorInformacion from '../elements/Elemento/ContenedorInformacion'
import ElementoStyled from '../elements/Elemento/ElementoStyled'
import Elementos from './arraysDatos/ListaInformacion'
import NombreElemento from '../elements/Elemento/NombreElemento'
import { useParams } from 'react-router-dom'
import ContenedorMap from '../elements/Elemento/ContenedorMap'
import Textos from '../elements/Elemento/Textos'
import NumeroAtomico from '../elements/Elemento/NumeroAtomico'
import ContenedorTituloNumero from '../elements/Elemento/ContenedorTituloNumero'
import ContenedorTextos from '../elements/Elemento/ContenedorTextos'
import ContenedorTexto from '../elements/Elemento/ContenedorTexto'
import TitulosTexto from '../elements/Elemento/TitulosTexto'
import Imagen from '../elements/Elemento/Imagen'
import Error404 from './Error404'
import { Helmet } from 'react-helmet'
import SvgRegresar from './SvgComponents/SvgRegresar'
import ContenedorRegresar from '../elements/Elemento/ContenedorRegresar'
import LinkRegresar from '../elements/Elemento/LinkRegresar'
import CentradorImg from '../elements/Elemento/CentradorImg'
import SvgBuscador from './SvgComponents/SvgBuscador'

const Elemento = () => {
  // obtenemos el numero atomico de la URL y le decimos que el objecto que coincida con el numeroAtomico - 1 (para poder acceder a su posicion del array) lo guardemos en una const para poder acceder a todas sus propiedades

  const { numeroAtomico } = useParams()
  const objectoCoincidente = Elementos[numeroAtomico - 1] || {}

  let colorFondo
  switch (objectoCoincidente.grupo) {
    case 'no-metales':
      colorFondo = '#30d23f'
      break
    case 'alcalinos':
      colorFondo = '#614838'
      break
    case 'alcalinoterreos':
      colorFondo = '#e7b22d'
      break
    case 'metales-transicion':
      colorFondo = '#b5ab94'
      break
    case 'lantanidos':
      colorFondo = '#ee75ff'
      break
    case 'actinidos':
      colorFondo = '#ff00f7'
      break
    case 'metales-p':
      colorFondo = '#a2c49d'
      break
    case 'metaloides':
      colorFondo = '#2f8a21'
      break
    case 'halogenos':
      colorFondo = '#9be2e3'
      break
    case 'gases-nobles':
      colorFondo = '#0f63ec'
      break
    default:
      break
  }

  // para que pueda aparecer con acentos pero la imagen la busque sin ellas
  const nombreCoincidenteSinAcentos = objectoCoincidente.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase()

  return (
    <>
      <Helmet>
        <title>{objectoCoincidente.nombre} | AEE</title>
      </Helmet>

      <LinkRegresar to="/tabla">
        <ContenedorRegresar>
          <SvgRegresar />
          <p>Ir a la tabla</p>
        </ContenedorRegresar>

      </LinkRegresar>
      <LinkRegresar to="/buscar">
        <ContenedorRegresar>
          <SvgBuscador />
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
              <NombreElemento>
                {objectoCoincidente.nombre}
              </NombreElemento>
              <NumeroAtomico>Número atómico: <span>{objectoCoincidente.numeroAtomico}</span></NumeroAtomico>
            </ContenedorTituloNumero>

            <CentradorImg>
              <Imagen src={`/img/elementos/${nombreCoincidenteSinAcentos}.jpg`} alt={`Foto del ${objectoCoincidente.nombre}`} />
            </CentradorImg>

            <ContenedorTextos>

              <ContenedorTexto>
                <TitulosTexto>Información del elemento</TitulosTexto>
                <Textos>{objectoCoincidente.informacion.length === 0 ? `¡Ups! No hemos encontrado información del ${objectoCoincidente.nombre}. Pero pronto la habrá.` : objectoCoincidente.informacion}</Textos>

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
    </>
  )
}

export default Elemento
