/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import elementos from './arraysDatos/ElementosFormulario'
import SIMBOLO_POSIBILIDADES from './arraysDatos/SimbolosElementos'
import Loader from './Loader'

const Formulario = ({ aumentarPuntuacion, eliminarVidas, vidas }) => {
  const [cargando, cambiarCargando] = useState(true)
  const [valorInput, cambiarValorInput] = useState('')
  const [hasAcertado, cambiarHasAcertado] = useState(undefined)

  const [inputVacio, cambiarInputVacio] = useState(false)

  const [elemento, cambiarElemento] = useState('')
  const [simboloElemento, cambiarSimboloElemento] = useState('')

  const [comprobando, cambiarComprobando] = useState(false)

  const handleInput = e => {
    cambiarValorInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    cambiarComprobando(true)
    roll()
  }

  const roll = () => {
    comprobarValor()

    setTimeout(() => {
      const randomElemento = elementos[Math.floor(Math.random() * elementos.length)]
      const simbolo = SIMBOLO_POSIBILIDADES[randomElemento] || undefined

      cambiarElemento(randomElemento)
      cambiarSimboloElemento(simbolo)

      cambiarValorInput('')
      cambiarHasAcertado(undefined)

      cambiarComprobando(false)
      cambiarInputVacio(false)
      cambiarCargando(false)
    }, 3000)
  }

  const comprobarValor = () => {
    if (valorInput) {
      if (valorInput.toLowerCase().trim() === elemento.toLowerCase()) {
        cambiarHasAcertado(true)
        aumentarPuntuacion() //* aumentamos la puntuacion en 1 unidad
      } else {
        cambiarHasAcertado(false)
        eliminarVidas()
      }
    } else {
      cambiarInputVacio(true)
    }
  }

  useEffect(() => {
    roll()
    cambiarInputVacio(false)
  }, [])

  return (
    <div className='space-y-16 pt-5 flex flex-col items-center justify-between'>
      <div className='h-24 grid place-content-center'>
        {cargando ? <Loader /> : <p className='text-4xl font-semibold text-center '>{simboloElemento}</p>}
      </div>

      {vidas !== 0 &&
        <form className='text-center md:space-x-20 space-y-5 md:space-y-0 flex flex-col space-x-0 md:flex-row items-center justify-center pb-10'>
          <input type="text" value={valorInput} onChange={e => handleInput(e)} placeholder='Escribe el elemento...' className='p-5 rounded-lg text-xl outline-none' />
          <button className='px-10 py-5 bg-emerald-200 rounded-xl shadow-sm text-lg font-semibold transition-all hover:scale-105 hover:bg-emerald-300' onClick={e => handleSubmit(e)} disabled={comprobando}>Comprobar</button>
        </form>
      }
      {hasAcertado && <p className='text-center text-4xl text-green-600'>¡Has acertado 🎉!</p>}
      {hasAcertado === false && <p className='text-center text-4xl text-red-500'>No has acertado, el elemento correcto era <span className='font-extrabold'>{elemento}</span></p>}
      {inputVacio && <p className='text-center text-4xl text-red-500'>Campo de texto vacio. No suma puntos al marcador</p>}
    </div>
  )
}

export default Formulario
