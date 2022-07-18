/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
import React, { useEffect, useState } from 'react'

import ButtonFormulario from '../elements/Formulario/ButtonFormulario'
import Form from '../elements/Formulario/Form'
import InputFormulario from '../elements/Formulario/InputFormulario'
import PopUpCorrect from '../elements/Formulario/PopUpCorrect'
import PopUpWrong from '../elements/Formulario/PopUpWrong'
import Simbolo from '../elements/Formulario/Simbolo'

const Formulario = ({ aumentarPuntuacion, eliminarVidas, vidas }) => {
  const [valorInput, cambiarValorInput] = useState('')
  const [hasAcertado, cambiarHasAcertado] = useState(undefined)

  const [inputVacio, cambiarInputVacio] = useState(false)

  const [elemento, cambiarElemento] = useState('')
  const [simboloElemento, cambiarSimboloElemento] = useState('')

  const [comprobando, cambiarComprobando] = useState(false)

  const elementos = [
    'Hidrógeno',
    'Litio',
    'Sodio',
    'Potasio',
    'Rubidio',
    'Cesio',
    'Francio',
    'Berilio',
    'Magnesio',
    'Calcio',
    'Estroncio',
    'Bario',
    'Radio',
    'Escandio',
    'Itrio',
    'Lantanio',
    'Actinio',
    'Titanio',
    'Zirconio',
    'Hafnio',
    'Rutherfordio',
    'Vanadio',
    'Niobio',
    'Tantálo',
    'Dubnio',
    'Cromo',
    'Molibdeno',
    'Wolframio',
    'Seaborgio',
    'Manganeso',
    'Tecnecio',
    'Renio',
    'Bohrio',
    'Hierro',
    'Rutenio',
    'Osmio',
    'Hassio',
    'Cobalto',
    'Rodio',
    'Iridio',
    'Meitnerio',
    'Niquel',
    'Paladio',
    'Platino',
    'Darmstadio',
    'Cobre',
    'Plata',
    'Oro',
    'Roetgenio',
    'Zinc',
    'Cadmio',
    'Mercurio',
    'Copernicio',
    'Boro',
    'Aluminio',
    'Galio',
    'Indio',
    'Talio',
    'Nihomio',
    'Carbono',
    'Silicio',
    'Germanio',
    'Estaño',
    'Plomo',
    'Flerovio',
    'Nitrógeno',
    'Fósforo',
    'Arsénico',
    'Antimonio',
    'Bismuto',
    'Moscovio',
    'Oxígeno',
    'Azufre',
    'Selenio',
    'Teluro',
    'Polonio',
    'Livermonio',
    'Flúor',
    'Cloro',
    'Bromo',
    'Yodo',
    'Astato',
    'Teneso',
    'Helio',
    'Neón',
    'Argón',
    'Kriptón',
    'Xenón',
    'Radón',
    'Oganesón',
    'Cerio',
    'Praseodimio',
    'Neodimio',
    'Prometio',
    'Samario',
    'Europio',
    'Gadolinio',
    'Terbio',
    'Disprosio',
    'Holmio',
    'Erbio',
    'Tulio',
    'Iterbio',
    'Lutecio',
    'Torio',
    'Proactinio',
    'Uranio',
    'Neptunio',
    'Plutonio',
    'Americio',
    'Curio',
    'Berkelio',
    'Californio',
    'Einstenio',
    'Fermio',
    'Mendelevio',
    'Nobelio',
    'Laurencio'
  ]

  const SIMBOLO_POSIBILIDADES = {
    'Hidrógeno': 'H',
    'Litio': 'Li',
    'Sodio': 'Na',
    'Potasio': 'K',
    'Rubidio': 'Rb',
    'Cesio': 'Cs',
    'Francio': 'Fr',
    'Berilio': 'Be',
    'Magnesio': 'Mg',
    'Calcio': 'Ca',
    'Estroncio': 'Sr',
    'Bario': 'Ba',
    'Radio': 'Ra',
    'Escandio': 'Sc',
    'Itrio': 'Y',
    'Lantanio': 'La',
    'Actinio': 'Ac',
    'Titanio': 'Ti',
    'Zirconio': 'Zr',
    'Hafnio': 'Hf',
    'Rutherfordio': 'Rf',
    'Vanadio': 'V',
    'Niobio': 'Nb',
    'Tantálo': 'Ta',
    'Dubnio': 'Db',
    'Cromo': 'Cr',
    'Molibdeno': 'Mo',
    'Wolframio': 'W',
    'Seaborgio': 'Sg',
    'Manganeso': 'Mn',
    'Tecnecio': 'Tc',
    'Renio': 'Re',
    'Bohrio': 'Bh',
    'Hierro': 'Fe',
    'Rutenio': 'Ru',
    'Osmio': 'Os',
    'Hassio': 'Hs',
    'Cobalto': 'Co',
    'Rodio': 'Rh',
    'Iridio': 'Ir',
    'Meitnerio': 'Mt',
    'Niquel': 'Ni',
    'Paladio': 'Pd',
    'Platino': 'Pt',
    'Darmstadio': 'Ds',
    'Cobre': 'Cu',
    'Plata': 'Ag',
    'Oro': 'Au',
    'Roetgenio': 'Rg',
    'Zinc': 'Zn',
    'Cadmio': 'Cd',
    'Mercurio': 'Hg',
    'Copernicio': 'Cn',
    'Boro': 'B',
    'Aluminio': 'Al',
    'Galio': 'Ga',
    'Indio': 'In',
    'Talio': 'Ta',
    'Nihomio': 'Nh',
    'Carbono': 'C',
    'Silicio': 'Si',
    'Germanio': 'Ge',
    'Estaño': 'Sn',
    'Plomo': 'Pb',
    'Flerovio': 'Fl',
    'Nitrógeno': 'N',
    'Fósforo': 'P',
    'Arsénico': 'As',
    'Antimonio': 'Sb',
    'Bismuto': 'Bi',
    'Moscovio': 'Mc',
    'Oxígeno': 'O',
    'Azufre': 'S',
    'Selenio': 'Se',
    'Teluro': 'Te',
    'Polonio': 'Po',
    'Livermonio': 'Lv',
    'Flúor': 'F',
    'Cloro': 'Cl',
    'Bromo': 'Br',
    'Yodo': 'I',
    'Astato': 'At',
    'Teneso': 'Ts',
    'Helio': 'He',
    'Neón': 'Ne',
    'Argón': 'Ar',
    'Kriptón': 'Kr',
    'Xenón': 'Xe',
    'Radón': 'Rn',
    'Oganesón': 'Og',
    'Cerio': 'Ce',
    'Praseodimio': 'Pr',
    'Neodimio': 'Nd',
    'Prometio': 'Pm',
    'Samario': 'Sm',
    'Europio': 'Eu',
    'Gadolinio': 'Gd',
    'Terbio': 'Tb ',
    'Disprosio': 'Dy',
    'Holmio': 'Ho',
    'Erbio': 'Er',
    'Tulio': 'Tm',
    'Iterbio': 'Yb',
    'Lutecio': 'Lu',
    'Torio': 'Th',
    'Proactinio': 'Pa',
    'Uranio': 'U',
    'Neptunio': 'Np',
    'Plutonio': 'Pu',
    'Americio': 'Am',
    'Curio': 'Cm',
    'Berkelio': 'Bk',
    'Californio': 'Cf',
    'Einstenio': 'Es',
    'Fermio': 'Fm',
    'Mendelevio': 'Md',
    'Nobelio': 'No',
    'Laurencio': 'Lr'
  }

  const handleInput = e => {
    cambiarValorInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    cambiarComprobando(true)
    roll()
  }

  const roll = () => {
    comprobarValor()

    setTimeout(() => {
      const randomElemento = elementos[Math.floor(Math.random() * elementos.length)]
      const simbolo = SIMBOLO_POSIBILIDADES[randomElemento] || undefined

      cambiarElemento(randomElemento)
      cambiarSimboloElemento(simbolo)

      cambiarValorInput('')
      cambiarHasAcertado(undefined)

      cambiarComprobando(false)
      cambiarInputVacio(false)
    }, 3000)
  }

  const comprobarValor = () => {
    if (valorInput) {
      if (valorInput.toLowerCase().trim() === elemento.toLowerCase()) {
        cambiarHasAcertado(true)
        aumentarPuntuacion() //* aumentamos la puntuacion en 1 unidad
      } else {
        cambiarHasAcertado(false)
        eliminarVidas()
      }
    } else {
      cambiarInputVacio(true)
    }
  }

  useEffect(() => {
    roll()
    cambiarInputVacio(false)
  }, [])

  return (
    <>
      <Simbolo className='simbolo'>{simboloElemento}</Simbolo>
      <div>
        <Form>
          {vidas !== 0 && <>
            <InputFormulario type="text" value={valorInput} onChange={e => handleInput(e)} placeholder='Escribe el elemento...' />
            <ButtonFormulario onClick={e => handleSubmit(e)} type='submit' disabled={comprobando}>Comprobar</ButtonFormulario>
          </>
          }
        </Form>
      </div>

      {hasAcertado && <PopUpCorrect className='popup-result correct'>Has acertado</PopUpCorrect>}
      {hasAcertado === false && <PopUpWrong className='popup-result wrong'>No has acertado, el elemento correcto era <b>{elemento}</b></PopUpWrong>}
      {inputVacio && <PopUpWrong className='popup-result wrong'>Campo de texto vacio. No suma puntos al marcador</PopUpWrong>}
    </>
  )
}

export default Formulario
