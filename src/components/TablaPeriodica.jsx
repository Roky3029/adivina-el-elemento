import React from 'react'
import ContenedorElementos from '../elements/TablaPeriodica/ContenedorElementos'
import Centrador from '../elements/TablaPeriodica/Centrador'
import ElementoStyled from '../elements/TablaPeriodica/ElementoStyled'
import Elementos from './arraysDatos/ListaDeElementos'
import Span from '../elements/TablaPeriodica/Span'
import Titulo from '../elements/TablaPeriodica/Titulo'
import Subtitulo from '../elements/TablaPeriodica/Subtitulo'
import IndiceTablaPeriodica from './IndiceTablaPeriodica'
import { Helmet } from 'react-helmet'
import CommingSoonToPhone from './CommingSoonToPhone'
import ToPhone from '../elements/CommingSoon/ToPhone'
import ContenedorTodaTabla from './../elements/TablaPeriodica/ContenedorTodaTabla'

const TablaPeriodica = () => {
  return (
    <>

      <ToPhone>
        <CommingSoonToPhone caracteristica="Tabla Periódica" />
      </ToPhone>

      <Helmet>
        <title>Tabla periódica | AEE</title>
      </Helmet>

      <ContenedorTodaTabla>
        <Titulo>Tabla periódica</Titulo>
        <Subtitulo>Pulsa en cualquier elemento para saber mas información de el</Subtitulo>

        <Centrador>
          <ContenedorElementos>
            {Elementos.map((elemento, index) => {
              let colorFondo
              switch (elemento.grupo) {
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

              return <ElementoStyled to={elemento.nombre !== '' ? `/elemento/${elemento.numeroAtomico}` : '/tabla'} key={index} colorfondo={colorFondo} margintop={colorFondo === '#ee75ff' && elemento.nombre !== 'Lantano' ? '30px' : '0'} cursor={elemento.nombre !== '' ? 'pointer' : 'default'}>
                <Span>{elemento.simbolo}</Span>
              </ElementoStyled>
            })}
          </ContenedorElementos>

          <IndiceTablaPeriodica />

        </Centrador>
      </ContenedorTodaTabla>
    </>
  )
}

export default TablaPeriodica
