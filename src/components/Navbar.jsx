import React, { useState } from 'react'
import './../elements/Navbar/Navbar.css'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="navbar">
        <>
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </>
        <p>Adivina el elemento</p>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <Link to='#' className='menu-bars'>
              <AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={() => setSidebar(false)}>
                <Link to={item.path}>
                  {item.icon}
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
