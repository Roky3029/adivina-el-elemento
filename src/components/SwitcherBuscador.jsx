/* eslint-disable react/prop-types */
import React from 'react'
import ButtonSwitch from '../elements/Buscador/SwitchBuscador/ButtonSwitch'
import ContenedorSwitch from '../elements/Buscador/SwitchBuscador/ContenedorSwitch'
import TextoConfiguracion from '../elements/Buscador/SwitchBuscador/TextoConfiguracion'
import SpanValorSwitch from '../elements/Buscador/SwitchBuscador/SpanValorSwitch'

const SwitcherBuscador = ({ valorSwitch, cambiarValorSwitch }) => {
  const handleClick = (e) => {
    if (e.target.name === 'nombre') {
      cambiarValorSwitch('nombre')
    } else {
      cambiarValorSwitch('símbolo')
    }
  }

  return (
    <>
      <TextoConfiguracion>
        <img src="./../../public/img/ajustes2.svg" alt="⚙" style={{ paddingRight: '30px' }} />
        Configuración
        <img src="./../../public/img/ajustes2.svg" alt="⚙" style={{ paddingLeft: '30px' }}/>
      </TextoConfiguracion>
      <ContenedorSwitch>
        <ButtonSwitch name="nombre" onClick={(e) => handleClick(e)}>Buscar por nombre</ButtonSwitch>
        <ButtonSwitch name="simbolo" onClick={(e) => handleClick(e)}>Buscar por símbolo</ButtonSwitch>

      </ContenedorSwitch>
      <TextoConfiguracion>Estado actual: Buscando con<SpanValorSwitch>{valorSwitch}</SpanValorSwitch></TextoConfiguracion>
    </>
  )
}

export default SwitcherBuscador
