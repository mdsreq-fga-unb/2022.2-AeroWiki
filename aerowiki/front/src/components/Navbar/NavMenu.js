import React, { useState } from 'react'
import './NavMenu.css'
import { Link } from 'react-router-dom'


function NavMenu({item, chave}) {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = (divid) => {
    setSubnav(!subnav)
    console.log(divid)
    var area = document.getElementById(divid)
    if(!subnav){
      area.style.backgroundColor = "#082B61"
      area.style.borderBottomLeftRadius = 0
      area.style.borderBottomRightRadius = 0
    }
    else{
      area.style.backgroundColor = "transparent"
      area.style.borderBottomLeftRadius = "8px"
      area.style.borderBottomRightRadius = "8px"
    }
  }

  return (
    <>
    <div id='item' onClick={() => {sessionStorage.setItem('area', item.title)}} >
      <div tabIndex="-1" id={chave} className="area" >
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
            <div className='subarea' key={index} onClick={() => {sessionStorage.setItem('subarea', item.title)}}>
              <div onClick={() => {window.location.href = item.path}} className='button'>
                {item.icon}
                <span>{item.title}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default NavMenu