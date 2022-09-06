import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IndiceTablaPeriodica from './IndiceTablaPeriodica'
import { Helmet } from 'react-helmet'
import useObtenerGrupo from '../hooks/useObtenerGrupo'
import ListaInformacion from './arraysDatos/ListaInformacion'
import gruposDeLaTabla from './arraysDatos/GruposDeLaTabla'

const TablaPeriodica = () => {
  const [filtrarElementos, cambiarFiltrarElementos] = useState()

  return (
    <div className='mt-20 space-y-10 md:mt-0'>
      <Helmet>
        <title>Tabla periódica | AEE</title>
      </Helmet>

      <div className='text-center text-4xl space-y-2'>
        <h3>Tabla periódica</h3>
        <h5 className='text-xl'>Pulsa en cualquier elemento para saber mas información de el</h5>
      </div>

      <div className='flex items-center justify-center flex-col xl:flex-row space-x-0 md:space-x-10'>
        <div className='grid grid-cols-elementosSM md:grid-cols-elementosMD lg:grid-cols-elementosLG xl:grid-cols-elementosXL grid-rows-elementosSM md:grid-rows-elementosMD lg:grid-rows-elementosLG xl:grid-rows-elementosXL gap-1'>
          {ListaInformacion.map(elemento => {
            const [colorFondo] = useObtenerGrupo(elemento.grupo)
            return <Link to={`/elemento/${elemento.numeroAtomico}`} key={elemento.numeroAtomico} className={`grid place-content-center text-xs font-normal md:text-lg text-white md:font-bold transition-all ${filtrarElementos === elemento.grupo || !filtrarElementos ? `${colorFondo}` : 'bg-slate-400 text-slate-300'}`}
              style={{
                gridColumn: elemento.yPos,
                gridRow: elemento.xPos
              }}
            >{elemento.simbolo}</Link>
          })

          }
        </div>

        <IndiceTablaPeriodica filtrarElementos={filtrarElementos} cambiarFiltrarElementos={cambiarFiltrarElementos} />

        {/* cambiarFiltrarElementos={cambiarFiltrarElementos} filtrarElementos={filtrarElementos} */}
      </div>

      <div className='flex items-center justify-center flex-col space-y-20'>
        <h3 className='text-xl border-t border-t-gray-500/10 mx-10 text-center'>Pincha en un grupo para ir a una tabla con todos los elementos pertenecientes a dicho grupo</h3>
        <div className='grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5'>
          {gruposDeLaTabla.map(grupo => {
            return <Link to={`/categoria/${grupo.grupoLowerCase}`} key={grupo.grupoLowerCase} className={`${grupo.color} text-center px-5 py-3 rounded-lg shadow-md text-white font-semibold transition-all hover:scale-105`}>{grupo.grupo}</Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default TablaPeriodica
