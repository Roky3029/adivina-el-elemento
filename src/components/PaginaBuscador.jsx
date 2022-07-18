import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ContenedorFormulario from '../elements/Buscador/ContenedorFormulario'
import InputFormulario from '../elements/Formulario/InputFormulario'
import ButtonBuscador from '../elements/Buscador/ButtonBuscador'
import ListaNAtomico from './arraysTablaPeriodica/ListaNAtomico'
import { Link } from 'react-router-dom'

const PaginaBuscador = () => {
  const [inputValue, cambiarInputValue] = useState('')
  const [nAtomicoCoincidente, cambiarNAtomicoCoincidente] = useState('')
  const [hasBuscado, cambiarHasBuscado] = useState(false)

  const handleChange = e => cambiarInputValue(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    // limpiamos el valor del input y le eliminamos acentos, espacios al inicio/final y mayusculas
    const valorInputLimpio = inputValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase()

    cambiarNAtomicoCoincidente(ListaNAtomico[valorInputLimpio])
    cambiarHasBuscado(true)
  }

  return (
    <>
      <Helmet>
        <title>Buscar | AEE</title>
      </Helmet>

      <ContenedorFormulario onSubmit={e => handleSubmit(e)}>
        <InputFormulario value={inputValue} onChange={e => handleChange(e)} placeholder="Busca un elemento..." type="text" />
        <ButtonBuscador type='submit'>Buscar elemento</ButtonBuscador>
      </ContenedorFormulario>

      {hasBuscado &&
      <div>
        <h3>Se ha encontrado un elemento:</h3>
        <Link to={`/elemento/${nAtomicoCoincidente}`} onClick={() => cambiarHasBuscado(false)} target="_blank">{inputValue}</Link>
      </div>
      }
    </>
  )
}

export default PaginaBuscador
