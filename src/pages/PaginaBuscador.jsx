import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ListaNAtomico from '../components/arraysDatos/ListaNAtomico'
import ListaInformacion from '../components/arraysDatos/ListaInformacion'
import SwitcherBuscador from '../components/SwitcherBuscador'
import ListaNAtomicoSimbolo from '../components/arraysDatos/ListaNAtomicoSimbolo'
import { Link } from 'react-router-dom'

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
    <div className='pt-20'>
      <Helmet>
        <title>Buscar | AEE</title>
      </Helmet>

      <form className='flex flex-col md:flex-row items-center justify-center pt-10 space-y-5 md:space-y-0 md:space-x-10'>
        <input value={inputValue} onChange={e => handleChange(e)} placeholder="Busca un elemento..." type="text" list='elementos' className='p-5 rounded-lg text-xl outline-none' />

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
        <button onClick={e => handleSubmit(e)} className="px-10 py-5 bg-emerald-200 rounded-xl shadow-sm text-lg font-semibold transition-all hover:scale-105 hover:bg-emerald-300">Buscar elemento</button>
      </form>

      {hasBuscado &&
        <div className='flex flex-col text-center items-center justify-between text-2xl py-10 space-y-10'>
          <h3>Se ha encontrado un elemento:</h3>
          <Link className='font-bold text-3xl bg-amber-300 rounded-lg py-3 px-6 transition-all hover:scale-105 hover:bg-amber-200' to={`/elemento/${nAtomicoCoincidente}`}>{inputValue}</Link>
        </div>
      }

      {error &&
        <div className='flex flex-col text-center items-center justify-between text-2xl py-10 space-y-10'>
          <lord-icon
            src="https://cdn.lordicon.com/otyynlki.json"
            trigger="loop"
            delay="1500"
            style={{ width: '100px', height: '100px' }}>
          </lord-icon>
          <h3>No se ha encontrado un elemento coincidente o el campo de texto esta vacio</h3>
          <h3>Prueba de nuevo con otro elemento</h3>
        </div>
      }

      <SwitcherBuscador valorSwitch={valorSwitch} cambiarValorSwitch={cambiarValorSwitch} />
    </div>
  )
}

export default PaginaBuscador
