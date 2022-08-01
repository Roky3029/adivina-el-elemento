import React from 'react'
import BackgroundIndice from '../elements/TablaPeriodica/BackgroundIndice'
import ListaIndice from '../elements/TablaPeriodica/ListaIndice'
import ListaGrupo from '../elements/TablaPeriodica/ListaGrupo'
import gruposDeLaTabla from './arraysDatos/GruposDeLaTabla'

const IndiceTablaPeriodica = () => {
  return (
    <ListaIndice>
      {gruposDeLaTabla.map((grupo, index) => {
        return <ListaGrupo key={index}>
          <BackgroundIndice background={grupo.color}></BackgroundIndice>
          {grupo.grupo}
        </ListaGrupo>
      })}
    </ListaIndice>
  )
}

export default IndiceTablaPeriodica
