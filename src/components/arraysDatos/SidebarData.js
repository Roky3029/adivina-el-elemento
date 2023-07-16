/* eslint-disable import/no-absolute-path */
import HouseSvg from '/img/house.svg'
import SearchSvg from '/img/search.svg'
import TableSvg from '/img/table.svg'
import HelpSvg from '/img/help.svg'
import QuizSvg from '/img/quiz.svg'

export const SidebarData = [
  {
    id: 1,
    title: 'Inicio',
    path: '/',
    icon: HouseSvg,
    dropdown: false
  },
  {
    id: 2,
    title: 'Tabla periodica',
    path: '/tabla',
    icon: TableSvg,
    dropdown: false
  },
  {
    id: 3,
    title: 'Buscador',
    path: '/buscar',
    icon: SearchSvg,
    dropdown: false
  },
  {
    id: 4,
    title: 'Ayuda',
    path: '/ayuda',
    icon: HelpSvg,
    dropdown: false
  },
  {
    id: 5,
    title: 'Quiz',
    path: '/quiz-tabla',
    icon: QuizSvg,
    dropdown: false
  }
]
