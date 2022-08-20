/* eslint-disable import/no-absolute-path */
import HouseSvg from '/img/house.svg'
import SearchSvg from '/img/search.svg'
import TableSvg from '/img/table.svg'
import HelpSvg from '/img/help.svg'

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    cName: 'nav-text',
    icon: HouseSvg
  },
  {
    title: 'Tabla periodica',
    path: '/tabla',
    cName: 'nav-text',
    icon: TableSvg
  },
  {
    title: 'Buscador',
    path: '/buscar',
    cName: 'nav-text',
    icon: SearchSvg
  },
  {
    title: 'Ayuda',
    path: '/ayuda',
    cName: 'nav-text',
    icon: HelpSvg
  }
]
