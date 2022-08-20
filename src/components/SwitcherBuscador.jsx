/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import ButtonSwitch from '../elements/Buscador/SwitchBuscador/ButtonSwitch'
import ContenedorSwitch from '../elements/Buscador/SwitchBuscador/ContenedorSwitch'
import TextoConfiguracion from '../elements/Buscador/SwitchBuscador/TextoConfiguracion'
import SpanValorSwitch from '../elements/Buscador/SwitchBuscador/SpanValorSwitch'
import GearSettings from '../elements/Buscador/GearSettings'

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
        <GearSettings></GearSettings>
        <strong>Configuración</strong>
        <GearSettings></GearSettings>
      </TextoConfiguracion>
      <ContenedorSwitch>
        <ButtonSwitch name="nombre" onClick={(e) => handleClick(e)} disabled={valorSwitch === 'nombre' ? true : false} isdisabled={valorSwitch === 'nombre' ? true : false}>Buscar por nombre</ButtonSwitch>
        <ButtonSwitch name="simbolo" onClick={(e) => handleClick(e)} disabled={valorSwitch === 'símbolo' ? true : false} isdisabled={valorSwitch === 'símbolo' ? true : false}>Buscar por símbolo</ButtonSwitch>

      </ContenedorSwitch>
      <TextoConfiguracion nogap>Estado actual: Buscando con<SpanValorSwitch>{valorSwitch}</SpanValorSwitch></TextoConfiguracion>
    </>
  )
}

export default SwitcherBuscador
