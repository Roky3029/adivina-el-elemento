import { useState } from 'react'
import { Link } from 'react-router-dom'
import IndiceTablaPeriodica from '../components/IndiceTablaPeriodica'
import { Helmet } from 'react-helmet'
import gruposDeLaTabla from '../components/arraysDatos/GruposDeLaTabla'
import TablaBase from '../components/TablaBase'

const TablaPeriodica = ({ quiz }) => {
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

      {/* <div className='flex items-center justify-center flex-col lg:flex-row space-x-0 md:space-x-10'> */}
      <div className='flex flex-col 2xl:flex-row items-center justify-center space-y-5 2xl:space-x-5'>
        <TablaBase filtrarElementos={filtrarElementos} />

        <IndiceTablaPeriodica filtrarElementos={filtrarElementos} cambiarFiltrarElementos={cambiarFiltrarElementos} />
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
