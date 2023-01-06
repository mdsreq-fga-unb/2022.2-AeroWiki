import React, { useState } from 'react'
import './NavMenu.css'
import { Link } from 'react-router-dom'


function NavMenu({item}) {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
    <div id='item'>
      <div id='area' >
        <Link to={item.path} id='button'>
          {item.icon}
          <span>{item.title}</span>
        </Link>

        <div id='subareas-toggle' onClick={showSubnav} >
          {item.subnav && !subnav ? item.iconClosed :  item.subnav ? item.iconOpened : null}
        </div>
      </div>

      <div id={subnav? 'subareas-active' : 'subareas'}>
        {item.subnav && item.subnav.map((item, index) => {
          return(
            <div id='subarea' key={index}>
              <Link to={item.path} id='button'>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default NavMenu
