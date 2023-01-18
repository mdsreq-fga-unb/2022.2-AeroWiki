import React, { useState } from 'react'
import './NavMenu.css'
import { Link } from 'react-router-dom'


function NavMenu({item, chave}) {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = (divid) => {
    setSubnav(!subnav)
    console.log(divid)
    if(!subnav){
      document.getElementById(divid).style.backgroundColor = "#082B61"
    }
    else{
      document.getElementById(divid).style.backgroundColor = "transparent"
    }
    
  }

  return (
    <>
    <div id='item'>
      <div tabindex="-1" id={chave} className="area">
        <Link to={item.path} className='button'>
          {item.icon}
          <span>{item.title}</span>
        </Link>

        <div id='subareas-toggle' onClick={() => showSubnav(chave)} >
          {item.subnav && !subnav ? item.iconClosed :  item.subnav ? item.iconOpened : null}
        </div>
      </div>

      <div id={subnav? 'subareas-active' : 'subareas'}>
        {item.subnav && item.subnav.map((item, index) => {
          return(
            <div className='subarea' key={index}>
              <Link to={item.path} className='button'>
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
