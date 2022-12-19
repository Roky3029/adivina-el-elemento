import ListaInformacion from './arraysDatos/ListaInformacion'
import useObtenerGrupo from '../hooks/useObtenerGrupo'
import React from 'react'
import { Link } from 'react-router-dom'

const TablaBase = ({ filtrarElementos, quizMode, elementosAcertados }) => {
  return (
    <div className='grid grid-cols-elementosSM md:grid-cols-elementosMD lg:grid-cols-elementosLG xl:grid-cols-elementosXL grid-rows-elementosSM md:grid-rows-elementosMD lg:grid-rows-elementosLG xl:grid-rows-elementosXL gap-1'>
      {ListaInformacion.map(elemento => {
        const [colorFondo] = useObtenerGrupo(elemento.grupo)
        return !quizMode
          ? <Link to={`/elemento/${elemento.numeroAtomico}`} key={elemento.numeroAtomico} className={`grid place-content-center text-xs font-normal md:text-lg text-white md:font-bold transition-all ${filtrarElementos === elemento.grupo || !filtrarElementos ? `${colorFondo}` : 'bg-slate-400 text-slate-300'}`}
            style={{
              gridColumn: elemento.yPos,
              gridRow: elemento.xPos
            }}
          >{elemento.simbolo}</Link>
          : <div key={elemento.numeroAtomico} className={`grid place-content-center text-xs font-normal md:text-lg md:font-bold transition-all ${elementosAcertados.includes(elemento.numeroAtomico) ? `text-slate-900 ${colorFondo}` : 'text-slate-200 bg-slate-200'}`} id="elemento" style={{
            gridColumn: elemento.yPos,
            gridRow: elemento.xPos === 10 || elemento.xPos === 9 ? elemento.xPos - 1 : elemento.xPos
          }}>{elemento.simbolo}</div>
      })

      }
    </div>
  )
}

export default TablaBase
