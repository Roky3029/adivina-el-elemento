/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'

import ContenedorVidas from '../elements/Vidas/ContenedorVidas'
import TextoVidas from '../elements/Vidas/TextoVidas'
import HasPerdidoContenedor from '../elements/Vidas/HasPerdidoContenedor'
import ResetearButton from '../elements/Vidas/ResetearButton'
import Marcador from '../elements/Vidas/Marcador'
import ContenedorIconos from './../elements/Vidas/ContenedorIconos'
import HasPerdidoTexto from '../elements/Vidas/HasPerdidoTexto'

const VidasPuntuacion = ({ vidas, cambiarVidas, cambiarPuntuacion, puntuacion }) => {
  const resetearValores = () => {
    cambiarVidas(3)
    cambiarPuntuacion(0)
  }

  return (
    <>
      <Marcador>Puntuacion actual: <b>{puntuacion}</b></Marcador>
      <ContenedorVidas>
        {vidas !== 0 && <TextoVidas>Vidas: </TextoVidas>}

        <ContenedorIconos>
          {vidas > 2 && <FontAwesomeIcon icon={faFlask} className="matraz" />}
          {vidas > 1 && <FontAwesomeIcon icon={faFlask} className="matraz" />}
          {vidas > 0 && <FontAwesomeIcon icon={faFlask} className={`matraz ${vidas === 1 ? 'beat' : 'no-beat'}`} />}
        </ContenedorIconos>

        {vidas <= 0 && <HasPerdidoContenedor>
          <HasPerdidoTexto>Has perdido todos los matraces</HasPerdidoTexto>
          <ResetearButton onClick={resetearValores}>Pincha aqui para resetear</ResetearButton>
        </HasPerdidoContenedor>
        }
      </ContenedorVidas>
    </>
  )
}

export default VidasPuntuacion
