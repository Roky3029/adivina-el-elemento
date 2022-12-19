/* eslint-disable react/prop-types */
import React from 'react'
import { BsGlobe, BsInstagram, BsGithub } from 'react-icons/bs'

const Footer = () => {
  const iconsStyles = 'bg-slate-400 rounded-3xl w-20 h-20 grid place-content-center p-4 transition-all text-slate-700 hover:scale-105 hover:bg-slate-500 hover:text-slate-400 '
  return (
    <footer className='w-full bg-slate-600 flex flex-col items-center justify-center space-y-4 mt-28 py-10'>
      <img src="/img/logo.png" alt="Logo" className='w-24 h-24 rounded-full'/>
      <div className='flex flex-col md:flex-row items-center justify-center text-5xl space-y-4 md:space-y-0 md:space-x-24'>
        <a href="https://www.instagram.com/kirkydev_30/" target="_blank" rel='noreferrer' className={iconsStyles}>
          <BsInstagram/>
        </a>
        <a href="https://github.com/Roky3029" target="_blank" rel='noreferrer' className='bg-slate-400 rounded-3xl w-20 h-20 grid place-content-center p-4 transition-all text-slate-700 hover:scale-105 hover:bg-slate-500 hover:text-slate-400 '>
          <BsGithub />
        </a>
        <a href="/comming-soon" target="_blank" rel='noreferrer' className='bg-slate-400 rounded-3xl w-20 h-20 grid place-content-center p-4 transition-all text-slate-700 hover:scale-105 hover:bg-slate-500 hover:text-slate-400 '>
          <BsGlobe />
        </a>
      </div>
      <p className='text-lg font-semibold text-gray-500 mt-10 text-center'>Roky &copy; 2022. Todos los derechos reservados</p>
      <p className='w-full text-slate-500 text-right pr-10'>Version 3.0.0 </p>
    </footer>
  )
}

export default Footer
