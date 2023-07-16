/* eslint-disable react/prop-types */
import React from 'react'
import { FaFlask } from 'react-icons/fa'

const VidasPuntuacion = ({ vidas, cambiarVidas, cambiarPuntuacion, puntuacion }) => {
  const resetearValores = () => {
    cambiarVidas(3)
    cambiarPuntuacion(0)
  }

  return (
    <div className='pt-10 grid place-content-center'>
      <p className='text-3xl text-center'>Puntuación {vidas !== 0 ? 'actual' : 'final'}: <span className='font-bold'>{puntuacion}</span></p>
      <div className='py-10 grid place-content-center'>
          {vidas !== 0 && <p className='text-center text-4xl'>Vidas: </p>}

          <div className='flex text-4xl py-6 space-x-10 items-center justify-center'>
            {vidas > 2 && <FaFlask />}
            {vidas > 1 && <FaFlask />}
            {vidas > 0 && <FaFlask className={`${vidas === 1 ? 'animate-flask-beat' : ''}`} />}
          </div>

        {vidas === 0 && <div className='flex flex-col text-4xl py-6 space-y-10 items-center justify-center'>
          <p className='text-red-600'>Has perdido todos los matraces</p>
          <button className="px-10 py-5 bg-amber-300 rounded-xl shadow-sm text-lg font-semibold transition-all hover:scale-105 hover:bg-amber-400" onClick={resetearValores}>Pincha aqui para resetear</button>
        </div>
        }
      </div>
    </div>
  )
}

export default VidasPuntuacion
