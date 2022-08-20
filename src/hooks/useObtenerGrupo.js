const useObtenerGrupo = (grupo) => {
  let colorFondo
  let grupoPerteneciente

  switch (grupo) {
    case 'no-metales':
      colorFondo = '#30d23f'
      grupoPerteneciente = 'No metales'
      break
    case 'alcalinos':
      colorFondo = '#614838'
      grupoPerteneciente = 'Metales alcalinos'
      break
    case 'alcalinoterreos':
      colorFondo = '#e7b22d'
      grupoPerteneciente = 'Metales alcalinotérreos'
      break
    case 'metales-transicion':
      colorFondo = '#b5ab94'
      grupoPerteneciente = 'Metales de transición'
      break
    case 'lantanidos':
      colorFondo = '#ee75ff'
      grupoPerteneciente = 'Lantánidos'
      break
    case 'actinidos':
      colorFondo = '#ff00f7'
      grupoPerteneciente = 'Actínidos'
      break
    case 'metales-p':
      colorFondo = '#a2c49d'
      grupoPerteneciente = 'Metales del bloque "p"'
      break
    case 'metaloides':
      colorFondo = '#2f8a21'
      grupoPerteneciente = 'Metaloides'
      break
    case 'halogenos':
      colorFondo = '#9be2e3'
      grupoPerteneciente = 'Halógenos'
      break
    case 'gases-nobles':
      colorFondo = '#0f63ec'
      grupoPerteneciente = 'Gases nobles'
      break
    default:
      break
  }

  return [colorFondo, grupoPerteneciente]
}

export default useObtenerGrupo
