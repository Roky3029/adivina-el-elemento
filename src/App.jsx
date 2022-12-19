/* eslint-disable */
import React, { useState } from 'react'
// import Formulario from './components/Formulario'
// import Intro from './components/Intro'
// import VidasPuntuacion from './components/VidasPuntuacion'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error404 from './components/Error404'
import CommingSoon from './components/CommingSoon'
import TablaPeriodica from './components/TablaPeriodica'
import Elemento from './components/Elemento'
import PaginaBuscador from './components/PaginaBuscador'
import Ayuda from './components/Ayuda'
import Categoria from './components/Categoria'
import Quiz from './components/Quiz'
import QuizTabla from './components/QuizTabla'
import UseScrollToTop from './hooks/useScrollToTop'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-slate-300 flex flex-col items-center justify-between'>
      <main className='w-full min-h-screen'>
        <Navbar />

        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path="/" element={<Quiz />} />
          <Route path='/tabla' element={<TablaPeriodica />} />
          <Route path='/elemento/:numeroAtomico' element={<Elemento />} />

          <Route path='/buscar' element={<PaginaBuscador />} />

          <Route path='/ayuda' element={<Ayuda />} />
          <Route path='/categoria/:categoria' element={
            <>
              <UseScrollToTop />
              <Categoria />
            </>
          } />

          <Route path='/comming-soon' element={<CommingSoon />} />
          <Route path='/quiz-tabla' element={<QuizTabla />} />

        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
