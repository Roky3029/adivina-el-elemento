const useObtenerGrupo = (grupo) => {
  let colorFondo
  let grupoPerteneciente

  switch (grupo) {
    case 'no-metales':
      colorFondo = 'bg-elementos-nm'
      grupoPerteneciente = 'No metales'
      break
    case 'alcalinos':
      colorFondo = 'bg-elementos-ma'
      grupoPerteneciente = 'Metales alcalinos'
      break
    case 'alcalinoterreos':
      colorFondo = 'bg-elementos-mat'
      grupoPerteneciente = 'Metales alcalinotérreos'
      break
    case 'metales-transicion':
      colorFondo = 'bg-elementos-mt'
      grupoPerteneciente = 'Metales de transición'
      break
    case 'lantanidos':
      colorFondo = 'bg-elementos-la'
      grupoPerteneciente = 'Lantánidos'
      break
    case 'actinidos':
      colorFondo = 'bg-elementos-ac'
      grupoPerteneciente = 'Actínidos'
      break
    case 'metales-p':
      colorFondo = 'bg-elementos-mp'
      grupoPerteneciente = 'Metales del bloque "p"'
      break
    case 'metaloides':
      colorFondo = 'bg-elementos-ml'
      grupoPerteneciente = 'Metaloides'
      break
    case 'halogenos':
      colorFondo = 'bg-elementos-ha'
      grupoPerteneciente = 'Halógenos'
      break
    case 'gases-nobles':
      colorFondo = 'bg-elementos-gn'
      grupoPerteneciente = 'Gases nobles'
      break
    default:
      break
  }

  return [colorFondo, grupoPerteneciente]
}

export default useObtenerGrupo
