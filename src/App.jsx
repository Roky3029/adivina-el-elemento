/* eslint-disable */
import React, { useState } from 'react'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error404 from './pages/Error404'
import CommingSoon from './pages/CommingSoon'
import TablaPeriodica from './pages/TablaPeriodica'
import Elemento from './pages/Elemento'
import PaginaBuscador from './pages/PaginaBuscador'
import Ayuda from './pages/Ayuda'
import Categoria from './pages/Categoria'
import Quiz from './pages/Quiz'
import QuizTabla from './pages/QuizTabla'
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
