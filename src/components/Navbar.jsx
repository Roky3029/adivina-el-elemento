import React, { useEffect, useState } from 'react'
import './../elements/Navbar/Navbar.css'
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
      <div className="navbar">
        <>
          <div className="menu-bars">
            <FaBars onClick={showSidebar} />
          </div>
        </>
        <p>Adivina el elemento</p>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <div className='menu-bars'>
              <AiOutlineClose onClick={showSidebar} />
            </div>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={() => setSidebar(false)}>
                <Link to={item.path}>
                  <img src={item.icon} alt="iconos" width="25px" loading='lazy' />
                  <span>
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
