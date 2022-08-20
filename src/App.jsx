import React, { useState } from 'react'
import Formulario from './components/Formulario'
import Intro from './components/Intro'
import Footer from './components/Footer'
import VidasPuntuacion from './components/VidasPuntuacion'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error404 from './components/Error404'
import CommingSoon from './components/CommingSoon'
import TablaPeriodica from './components/TablaPeriodica'
import Elemento from './components/Elemento'
import PaginaBuscador from './components/PaginaBuscador'
import Ayuda from './components/Ayuda'

const App = () => {
  const [puntuacion, cambiarPuntuacion] = useState(0)
  const [vidas, cambiarVidas] = useState(3)

  const aumentarPuntuacion = () => {
    cambiarPuntuacion(puntuacion + 1)
  }

  const eliminarVidas = () => {
    cambiarVidas(vidas - 1)
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path="/" element={
          <div className="App-elemento">

            <Intro />
            <Formulario
              aumentarPuntuacion={aumentarPuntuacion}
              eliminarVidas={eliminarVidas}
              vidas={vidas}
            />
            <VidasPuntuacion
              vidas={vidas}
              cambiarVidas={cambiarVidas}
              cambiarPuntuacion={cambiarPuntuacion}
              puntuacion={puntuacion}
            />
            <Footer />
          </div>
        } />
        <Route path='/tabla' element={
          <>
            <TablaPeriodica />
            <Footer />
          </>
        } />

        <Route path='/elemento/:numeroAtomico' element={
          <>
            <Elemento />
            <Footer noTop={true}/>
          </>
        } />

        <Route path='/buscar' element={
          <>
            <PaginaBuscador />
            <Footer />
          </>
        } />

        <Route path='/ayuda' element={
          <>
            <Ayuda />
            <Footer />
          </>
        } />

        <Route path='/comming-soon' element={
          <>
            <CommingSoon />
            <Footer />
          </>
        } />

      </Routes>
    </>
  )
}

export default App
