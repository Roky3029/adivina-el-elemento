import React from 'react'

const Loader = () => {
  return (
    <div className="h-[20px] relative grid grid-cols-animation text-center gap-1 my-20">
      <div className='bg-slate-800 animate-cascade1'></div>
      <div className='bg-slate-800 animate-cascade2'></div>
      <div className='bg-slate-800 animate-cascade3'></div>
      <div className='bg-slate-800 animate-cascade4'></div>
      <div className='bg-slate-800 animate-cascade5'></div>
    </div>
  )
}

export default Loader
