import { useState } from 'react'
// import Intro from './Intro'
import Formulario from '../components/Formulario'
import VidasPuntuacion from '../components/VidasPuntuacion'
import { Helmet } from 'react-helmet'

const Quiz = () => {
  const [puntuacion, cambiarPuntuacion] = useState(0)
  const [vidas, cambiarVidas] = useState(3)

  const aumentarPuntuacion = () => {
    cambiarPuntuacion(puntuacion + 1)
  }

  const eliminarVidas = () => {
    cambiarVidas(vidas - 1)
  }

  return (
    <>
      <Helmet>
        <title>Inicio | AEE</title>
      </Helmet>
      <div className="space-y-5 mt-20 md:mt-0">
        <h1 className="text-3xl font-bold text-center">Adivina el elemento de la tabla periódica</h1>
        <p className='text-center text-2xl'>¿Qué elemento es este?</p>
      </div>

      <Formulario
        aumentarPuntuacion={aumentarPuntuacion}
        eliminarVidas={eliminarVidas}
        vidas={vidas}
      />
      <VidasPuntuacion
        vidas={vidas}
        cambiarVidas={cambiarVidas}
        cambiarPuntuacion={cambiarPuntuacion}
        puntuacion={puntuacion}
      />
    </>
  )
}

export default Quiz
