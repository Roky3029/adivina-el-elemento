import React from 'react'
import ListaInformacion from './arraysDatos/ListaInformacion'
import gruposDeLaTabla from './arraysDatos/GruposDeLaTabla'
import { useParams, Link } from 'react-router-dom'
import Error404 from './Error404'

const Categoria = () => {
  const { categoria } = useParams()

  const elementosCategoria = ListaInformacion.filter(elemento => elemento.grupo === categoria)
  const [grupo] = gruposDeLaTabla.filter(grupo => grupo.grupoLowerCase === categoria)

  return (
    <div className='flex flex-col items-center justify-center space-y-20 pt-20 md:pt-0'>
      <h3 className='text-2xl text-center flex justify-center items-center flex-col'>Elementos pertenecientes al grupo <span className={`${grupo.color} px-2 py-1 mt-5 rounded block w-fit h-fit`}>{grupo.grupo}</span></h3>
      {elementosCategoria.length !== 0
        ? <div className='w-full grid grid-cols-1 md:grid-cols-4 place-content-center gap-10 px-10'>
            {elementosCategoria.map(elemento => {
              return <Link to={`/elemento/${elemento.numeroAtomico}`} key={elemento.numeroAtomico} className='bg-amber-100 flex items-center justify-between rounded shadow-md transition-all hover:scale-105'>
                <div className={`${grupo.color} w-14 h-14 flex items-center justify-center font-bold text-xl rounded-l`}>{elemento.simbolo}</div>
                <div className='w-2/4'>
                  <h4 className='text-xl'>{elemento.nombre}</h4>
                  <p className='text-sm md:text-base'>Número atomico: {elemento.numeroAtomico}</p>
                </div>
                <div className='w-1/4 pr-2'>
                  <p className='flex justify-between text-xs md:text-base'>Columna: <span className='font-semibold'>{elemento.yPos}</span></p>
                  <p className='flex justify-between text-xs md:text-base'>Fila: <span className='font-semibold'>{elemento.xPos > 8 ? elemento.xPos - 1 : elemento.xPos}</span></p>
                </div>
              </Link>
            })}
          </div>
        : <Error404 />
      }
    </div>
  )
}

export default Categoria
