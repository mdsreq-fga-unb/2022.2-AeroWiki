import React from 'react'
import './SubAreas.css'
import { Link } from 'react-router-dom'
import { SubAreasData } from './SubAreasData'

function SubAreas() {
  return (
    <div id='fixed-projects-container'>
      <div id='fixed-projects'>

        {SubAreasData.map((item, index) => {
          return (
            <div id='fixed-project' key={index} >
              <div id='project-image' style={{ backgroundImage: `url(${item.img})` }}></div>
              <div id='project-text'>
                <div id='bot' >
                  <Link to={'/SubAreas'} id='project-title'>{item.subarea}</Link>
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