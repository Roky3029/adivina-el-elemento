/* eslint-disable react/prop-types */
import React from 'react'
import { FiSettings } from 'react-icons/fi'

const SwitcherBuscador = ({ valorSwitch, cambiarValorSwitch }) => {
  const handleClick = (e) => {
    if (e.target.name === 'nombre') {
      cambiarValorSwitch('nombre')
    } else {
      cambiarValorSwitch('símbolo')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center mt-40 space-y-20'>
      <div className='flex items-center justify-center space-x-10 text-2xl border-b border-b-slate-400 pb-2'>
        <FiSettings className='font-bold' />
        <p className='font-bold'>Configuración</p>
        <FiSettings className='font-bold' />
      </div>
      <div className='flex flex-col md:space-y-0 space-y-5 md:flex-row md:space-x-20'>
        <button className={`bg-amber-200 py-4 px-8 rounded-lg shadow-sm text-lg hover:cursor-pointer transition-all hover:scale-110 ${valorSwitch === 'nombre' ? 'pointer-events-none scale-90 bg-amber-100 text-slate-400' : ''}`} name="nombre" onClick={(e) => handleClick(e)}>Buscar por nombre</button>
        <button className={`bg-amber-200 py-4 px-8 rounded-lg shadow-sm text-lg hover:cursor-pointer transition-all hover:scale-110 ${valorSwitch === 'símbolo' ? 'pointer-events-none scale-90 bg-amber-100 text-slate-400' : ''}`} name="simbolo" onClick={(e) => handleClick(e)}>Buscar por símbolo</button>

      </div>
      <p className='text-2xl text-center text-slate-500'>
        <span className='font-semibold'>Estado actual</span>
        : Buscando con
        <span className='border border-zinc-400/75 text-black rounded mx-2 py-1 px-2 md:py-2 md:px-4 font-bold'>{valorSwitch}</span>
      </p>
    </div>
  )
}

export default SwitcherBuscador
