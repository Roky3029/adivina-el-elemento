import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ContenedorFormulario from '../elements/Buscador/ContenedorFormulario'
import InputFormulario from '../elements/Formulario/InputFormulario'
import ButtonBuscador from '../elements/Buscador/ButtonBuscador'
import ListaNAtomico from './arraysDatos/ListaNAtomico'
import ListaInformacion from './arraysDatos/ListaInformacion'
import ContenedorCoincidenciaError from '../elements/Buscador/ContenedorCoincidenciaError'
import TituloCoincidenciaError from '../elements/Buscador/TituloCoincidenciaError'
import LinkCoincidencia from '../elements/Buscador/LinkCoincidencia'
import SwitcherBuscador from './SwitcherBuscador'
import ListaNAtomicoSimbolo from './arraysDatos/ListaNAtomicoSimbolo'

const PaginaBuscador = () => {
  const [inputValue, cambiarInputValue] = useState('')
  const [nAtomicoCoincidente, cambiarNAtomicoCoincidente] = useState('')
  const [hasBuscado, cambiarHasBuscado] = useState(false)

  const [valorSwitch, cambiarValorSwitch] = useState('nombre')

  const [error, cambiarError] = useState(false)

  const handleChange = e => cambiarInputValue(e.target.value)

  const handleErrors = () => {
    cambiarError(true)

    return setTimeout(() => {
      cambiarError(false)
    }, 5000)
  }

  const handleSubmit = e => {
    if (inputValue === '') handleErrors()

    e.preventDefault()

    // limpiamos el valor del input y le eliminamos acentos, espacios al inicio/final y mayusculas
    const valorInputLimpio = inputValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase()

    if (valorSwitch === 'nombre') {
      const nAtomico = ListaNAtomico[valorInputLimpio]

      if (nAtomico === undefined) return handleErrors()

      if (inputValue) {
        cambiarNAtomicoCoincidente(nAtomico)
        cambiarHasBuscado(true)
      }
    } else {
      const nAtomico = ListaNAtomicoSimbolo[valorInputLimpio]

      if (nAtomico === undefined) return handleErrors()

      if (inputValue) {
        cambiarNAtomicoCoincidente(nAtomico)
        cambiarHasBuscado(true)
      }
    }
  }

  // si hay cambios en el input, deshabilita la busqueda

  useEffect(() => {
    cambiarHasBuscado(false)
  }, [inputValue])

  return (
    <>
      <Helmet>
        <title>Buscar | AEE</title>
      </Helmet>

      <ContenedorFormulario>
        <InputFormulario value={inputValue} onChange={e => handleChange(e)} placeholder="Busca un elemento..." type="text" list='elementos' />

        {valorSwitch === 'nombre' && inputValue !== '' && <datalist id='elementos'>
          {ListaInformacion.map((elemento, index) => {
            return <option key={index} value={elemento.nombre}></option>
          })}
        </datalist>}
        {valorSwitch === 'símbolo' && inputValue !== '' && <datalist id='elementos'>
          {ListaInformacion.map((elemento, index) => {
            return <option key={index} value={elemento.simbolo}></option>
          })}
        </datalist>}
        <ButtonBuscador onClick={e => handleSubmit(e)}>Buscar elemento</ButtonBuscador>
      </ContenedorFormulario>

      {hasBuscado &&
        <ContenedorCoincidenciaError>
          <TituloCoincidenciaError>Se ha encontrado un elemento:</TituloCoincidenciaError>
          <LinkCoincidencia to={`/elemento/${nAtomicoCoincidente}`}>{inputValue}</LinkCoincidencia>
        </ContenedorCoincidenciaError>
      }

      {error &&
        <ContenedorCoincidenciaError>
          <lord-icon
            src="https://cdn.lordicon.com/otyynlki.json"
            trigger="loop"
            delay="1500"
            style={{ width: '100px', height: '100px' }}>
          </lord-icon>
          <TituloCoincidenciaError>No se ha encontrado un elemento coincidente o el campo de texto esta vacio</TituloCoincidenciaError>
          <TituloCoincidenciaError>Prueba de nuevo con otro elemento</TituloCoincidenciaError>
        </ContenedorCoincidenciaError>
      }

      <SwitcherBuscador valorSwitch={valorSwitch} cambiarValorSwitch={cambiarValorSwitch} />
    </>
  )
}

export default PaginaBuscador
