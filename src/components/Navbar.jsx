import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './arraysDatos/SidebarData'

import useTeclaPulsada from '../hooks/useTeclaPulsada'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const escPulsado = useTeclaPulsada('Escape')

  useEffect(() => {
    if (escPulsado) {
      setSidebar(false)
    }
  }, [escPulsado])

  return (
    <>
      <nav className="bg-emerald-600 h-20 hidden justify-between z-50 shadow mb-5 lg:flex">

        <Link to="/" className='flex items-center pl-40 space-x-5'>
          <img src="/img/logo.png" alt="" className='w-12 h-12'/>
          <h3 className='text-lg text-slate-800'>Adivina El Elemento</h3>
        </Link>

        <div className='flex items-center pr-40'>
          {SidebarData.map(link => {
            return <Link to={link.path} key={link.id} className="flex space-x-3 p-7 transition-all hover:scale-105">
              <img src={link.icon} alt="" className='w-6 h-6'/>
              <p>{link.title}</p>
            </Link>
          })}
        </div>
      </nav>
      <nav className="text-[2rem] bg-none text-slate-800 fixed p-5 flex lg:hidden bg-emerald-600 w-full items-center justify-between space-x-4 z-20">
        <FaBars onClick={showSidebar} className="hover:cursor-pointer"/>
        <p className='text-lg'>Adivina El Elemento</p>
      </nav>
      {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
      <nav className={`bg-teal-200 w-[300px] h-screen flex justify-center fixed top-0 left-[-100%] transition-all rounded-tr-lg rounded-br-lg z-50 ${sidebar ? 'left-0 transition-all' : ''}`}>
        <ul className='w-[110%] pl-8 flex flex-col gap-2'>
          <li className="bg-teal-200 w-full h-20 flex justify-start items-center">
            <div className='text-2xl text-slate-900 transition-all hover:cursor-pointer'>
              <AiOutlineClose onClick={showSidebar} />
            </div>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="flex justify-start items-center py-2 pl-4 list-none h-16" onClick={() => setSidebar(false)}>
                <Link to={item.path} className="no-underline text-slate-900 text-lg w-[95%] h-full flex items-center py-8 pl-3 rounded-lg my-8 mr-8 transition-all hover:bg-amber-100 hover:scale-105">
                  <img src={item.icon} alt="iconos" width="25px" loading='lazy' />
                  <span className='ml-4'>
                    {item.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
