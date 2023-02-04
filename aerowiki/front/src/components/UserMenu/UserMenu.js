import React, { useState, useEffect } from 'react'
import './UserMenu.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { UserMenuData } from './UserMenuData'
// import { UserMenuDataM } from './UserMenuDataM'

function UserMenu() {
    // let UserMenuDataFinal = UserMenuDataM
    // UserMenuDataFinal = UserMenuDataM
    const [usermenu, setUsermenu] = useState(true)
    const showUsermenu = () => setUsermenu(!usermenu)
    
    useEffect(() => {
        // alert(document.getElementById('nameHeader').textContent)
        if (document.getElementById('nameHeader').textContent === '') {
            document.getElementById('nameHeader').append(sessionStorage.getItem('nome'))
        }

    }, []);
    // alert(sessionStorage.getItem('cargobanco'))
    // if(sessionStorage.getItem('cargoReal') === 'Presidente'){
    //     UserMenuDataFinal = UserMenuData     
    // }
    
    return (
        <>
            <div id='username'>
                <span id='nameHeader'></span>
                <Link to='#' className='user-menu-icon'>
                    <FontAwesomeIcon icon={faIcons.faCircleUser} onClick={showUsermenu} />
                </Link>
            </div>

            <nav id={usermenu ? 'usermenu' : 'usermenu-active'}>
                <div id='usermenu-items' onClick={showUsermenu}>
                    {UserMenuData.map((item, index) => {
                        return (
                            <div className='area' key={index}>
                                <Link to={item.path} className='button'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </nav>

        </>
    )
}

export default UserMenu