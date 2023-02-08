import React from 'react'
import './SubAreas.css'
import { Link } from 'react-router-dom'
import { NavbarData } from '../Navbar/NavbarData'

// const subareas = NavbarData.find( item => item.title === sessionStorage.getItem('area') )

function SubAreas() {
  return (
    <div id='fixed-projects-container'>
      <div className='fixed-projects'>

        {NavbarData.find( item => item.title === sessionStorage.getItem('area') ).subnav.map((item, index) => {
          return (
            <div id='fixed-project' key={index} onClick={() => {sessionStorage.setItem('subarea', item.title)}}>
              <div id='project-image' style={{ backgroundImage: `url()` }}></div>
              <div id='project-text'>
                <div id='bot' >
                  <Link to={item.path} id='project-title'>{item.title}</Link>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default SubAreas