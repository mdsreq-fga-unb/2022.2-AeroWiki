import React from 'react'
import './FixedProjects.css'
import { Link } from 'react-router-dom'
import { ProjectsData } from './ProjectsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

function FixedProjects() {
  return (
    <div id='fixed-projects-container'>
      <div id='pad-box'>
        <div id='title'>
          <span>PROJETOS FIXADOS</span>
          <div id='hr'><hr></hr></div>
        </div>
        <div id='fixed-projects'>
          {ProjectsData.map((item, index) => {
            return(
              <div id='fixed-project' key={index} >
                <div id='project-image' style={{backgroundImage: `url(${item.img})`}}></div>
                <div id='project-text'>
                  <div id='top'>
                    <div id='project-areas'>
                      <Link to={item.area_path} id='project-areas-text'>{item.area}</Link>
                      <FontAwesomeIcon icon={faIcons.faChevronRight} id='project-areas-text'/>
                      <Link to={item.subarea_path} id='project-areas-text'>{item.subarea}</Link>
                    </div>
                    <Link to='#' id='project-areas-text'>
                      <FontAwesomeIcon icon={faIcons.faEllipsis} id='project-areas-text'/>
                    </Link> 
                  </div>
                  <div id='bot'>
                    <Link to={item.path} id='project-title'>{item.title}</Link>
                  </div>
                </div>
              </div>
            )            
          })}
        </div>
      </div>
    </div>
  )
}

export default FixedProjects