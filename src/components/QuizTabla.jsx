import React, { useEffect, useState } from 'react'
import TablaBase from './TablaBase'
import ListaNAtomico from './arraysDatos/ListaNAtomico'
import Modal from './Modal'
import { useTimer } from 'react-timer-hook'

const QuizTabla = () => {
  const [jugando, cambiarJugando] = useState(false)
  const [inputValue, cambiarInputValue] = useState('')
  const [elementosAcertados, cambiarElementosAcertados] = useState([])
  const [show, changeShow] = useState(false)
  const [showReason, changeShowReason] = useState('')

  const time = new Date()
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 720)
  const {
    seconds,
    minutes,
    restart,
    pause
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      changeShow(true)
      changeShowReason('lose')
      endGame()
    }
  })

  useEffect(() => {
    // str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const limpio = inputValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    // checar que no cuente de nuevo si el elemento ya esta acertado
    if (ListaNAtomico[limpio] && !elementosAcertados.includes(ListaNAtomico[limpio])) {
      cambiarElementosAcertados([...elementosAcertados, ListaNAtomico[limpio]])
      cambiarInputValue('')
      console.log(elementosAcertados.length)
      if (elementosAcertados.length === 1) {
        changeShow(true)
        changeShowReason('win')
        pause()
      }
    }
  }, [inputValue])

  const endGame = () => {
    changeShowReason('')
    cambiarJugando(!jugando)
    cambiarElementosAcertados([])
  }

  return (
    <>
      <Modal show={show} changeShow={changeShow} showReason={showReason} />
      <div className='lg:mt-0 mt-20 flex items-center justify-center flex-col gap-5'>
        {jugando && <div className='w-full flex md:flex-row flex-col items-center justify-center gap-10'>
          <div className='w-1/3 flex items-center justify-between md:flex-row flex-col'>
            <div className='w-1/2 flex items-center justify-center'>
              <p className='text-center text-xl font-mono px-7 py-4 rounded-xl shadow-md bg-amber-400'>{minutes}:{seconds}</p>
            </div>
            <p className='text-xl font-sans w-1/2'>{elementosAcertados.length} / 118 elementos</p>
          </div>
          <div className='w-1/3 flex items-center justify-center'>
            <input type="text" disabled={showReason === 'win'} value={inputValue} onChange={e => cambiarInputValue(e.target.value)} placeholder={!jugando ? '' : 'Escribe un elemento...'} className='p-5 rounded-lg text-xl outline-none' />
          </div>
          {showReason !== 'win' && <div className="w-1/3 flex items-center justify-center">
            <button onClick={() => endGame()} className='px-10 py-5 bg-red-200 rounded-xl shadow-sm text-lg font-semibold transition-all hover:scale-105 hover:bg-red-300'>Finalizar partida</button>
          </div>}
          {showReason === 'win' && <button onClick={() => endGame()} className='px-10 py-5 bg-green-200 rounded-xl shadow-sm text-lg font-semibold transition-all hover:scale-105 hover:bg-green-300'>Resetear tabla</button>}
        </div>}
        {!jugando && <button onClick={() => {
          cambiarJugando(!jugando)
          restart(expiryTimestamp, true)
        }} className='px-10 py-5 bg-amber-200 rounded-xl shadow-sm text-lg font-semibold transition-all hover:scale-105 hover:bg-amber-300'>Comenzar juego</button>}
        <TablaBase quizMode={true} elementosAcertados={elementosAcertados} />
      </div>
    </>
  )
}

export default QuizTabla
