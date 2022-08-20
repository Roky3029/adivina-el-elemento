import React from 'react'
import ContenedorElementos from '../elements/TablaPeriodica/ContenedorElementos'
import Centrador from '../elements/TablaPeriodica/Centrador'
import ElementoStyled from '../elements/TablaPeriodica/ElementoStyled'
import Titulo from '../elements/TablaPeriodica/Titulo'
import Subtitulo from '../elements/TablaPeriodica/Subtitulo'
import IndiceTablaPeriodica from './IndiceTablaPeriodica'
import { Helmet } from 'react-helmet'
import useObtenerGrupo from '../hooks/useObtenerGrupo'
import ListaInformacion from './arraysDatos/ListaInformacion'

const TablaPeriodica = () => {
  return (
    <>
      <Helmet>
        <title>Tabla periódica | AEE</title>
      </Helmet>

      <Titulo>Tabla periódica</Titulo>
      <Subtitulo>Pulsa en cualquier elemento para saber mas información de el</Subtitulo>

      <Centrador>
        <ContenedorElementos>
          {ListaInformacion.map(elemento => {
            const [colorFondo] = useObtenerGrupo(elemento.grupo)
            return <ElementoStyled to={`/elemento/${elemento.numeroAtomico}`} key={elemento.numeroAtomico} colorfondo={colorFondo}
              style={{
                gridColumn: elemento.yPos,
                gridRow: elemento.xPos
              }}
            >{elemento.simbolo}</ElementoStyled>
          })

          }
        </ContenedorElementos>

        <IndiceTablaPeriodica />

      </Centrador>
    </>
  )
}

export default TablaPeriodica
