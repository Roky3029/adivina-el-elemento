/* eslint-disable react/prop-types */
import gruposDeLaTabla from './arraysDatos/GruposDeLaTabla'
import { BsArrowCounterclockwise } from 'react-icons/bs'

const IndiceTablaPeriodica = ({ filtrarElementos, cambiarFiltrarElementos }) => {
  const handleClick = (grupoLowerCase) => {
    cambiarFiltrarElementos(grupoLowerCase)
  }

  return (
    <div className='flex flex-col items-center pt-10 md:pt-0'>
      <p className='pb-5 text-2xl'>Grupos y filtros</p>
      <ul className='md:space-y-3 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-1 gap-5 place-content-center'>
        <li onClick={() => cambiarFiltrarElementos()} className='bg-slate-200 rounded flex text-sm items-center justify-start gap-2 md:gap-4 md:text-lg py-2 px-4 transition-all h-12 mt-3 hover:scale-105 hover:cursor-pointer'>
          <BsArrowCounterclockwise />
          {/* hover:scale-105 hover:cursor-pointer */}
          <span>Resetear tabla periódica</span>
        </li>
        {gruposDeLaTabla.map((grupo, index) => {
          return <li onClick={() => handleClick(grupo.grupoLowerCase)} className={`rounded flex text-sm items-center justify-start gap-2 md:gap-4 md:text-lg py-2 px-4  transition-all h-12 hover:scale-105 hover:cursor-pointer ${filtrarElementos === grupo.grupoLowerCase ? 'scale-105 bg-gray-200' : 'bg-slate-200'}`} key={index}>
            <div className={`${grupo.color} w-8 h-8 rounded-lg`}></div>
            <span>{grupo.grupo}</span>
          </li>
        })}
      </ul>
    </div>
  )
}

export default IndiceTablaPeriodica
