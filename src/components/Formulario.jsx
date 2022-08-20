/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import ButtonFormulario from '../elements/Formulario/ButtonFormulario'
import Form from '../elements/Formulario/Form'
import InputFormulario from '../elements/Formulario/InputFormulario'
import PopUpCorrect from '../elements/Formulario/PopUpCorrect'
import PopUpWrong from '../elements/Formulario/PopUpWrong'
import Simbolo from '../elements/Formulario/Simbolo'
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
    <>
      <Form altura={'150px'}>
        {cargando ? <Loader /> : <Simbolo className='simbolo'>{simboloElemento}</Simbolo>}
      </Form>
      <div>
        <Form>
          {vidas !== 0 && <>
            <InputFormulario type="text" value={valorInput} onChange={e => handleInput(e)} placeholder='Escribe el elemento...' />
            <ButtonFormulario onClick={e => handleSubmit(e)} type='submit' disabled={comprobando}>Comprobar</ButtonFormulario>
          </>
          }
        </Form>
      </div>

      {hasAcertado && <PopUpCorrect className='popup-result correct'>Has acertado</PopUpCorrect>}
      {hasAcertado === false && <PopUpWrong className='popup-result wrong'>No has acertado, el elemento correcto era <b>{elemento}</b></PopUpWrong>}
      {inputVacio && <PopUpWrong className='popup-result wrong'>Campo de texto vacio. No suma puntos al marcador</PopUpWrong>}
    </>
  )
}

export default Formulario
