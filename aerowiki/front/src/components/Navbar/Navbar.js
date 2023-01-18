import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { NavbarData } from './NavbarData'
import NavMenu from './NavMenu'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className='pad-box'>
            <div id='navbar'>
                <Link to='#' id='navbar-icons'> 
                    <FontAwesomeIcon icon={faIcons.faBars} onClick={showSidebar} />
                </Link>
                <span>Áreas</span>
            </div>
        </div>

        <nav id={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <div id='nav-menu-items'>
                <div id='navbar-toggle' onClick={showSidebar}>
                    <Link to='#' id='navbar-icons'>
                        <FontAwesomeIcon icon={faIcons.faChevronLeft} />
                    </Link>
                </div>

                <div id='navbar-areas'>
                    {NavbarData.map((item, index) => {
                        return <NavMenu item={item} key={index} chave={index} />;
                    })}  
                </div>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar
