import React from 'react'
import "./ProjectsTable.css"
import { ProjectsData } from "./ProjectsData";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

function ProjectsTable() {
    return (
        <>
            <div className='projects-table'>

                <div className='title'>
                    <span>Projetos Ativos</span>
                    <div className='hr'></div>
                </div>

                <div className='fixed-projects'>
                    {ProjectsData.map((item, index) => {
                        return (
                            <div id='fixed-project' key={index} >
                                <div id='project-image' style={{ backgroundImage: `url(${item.img})` }}></div>
                                <div id='project-text'>
                                    <div id='top'>
                                        <div id='project-areas'>
                                            <Link id='project-areas-text'>{item.area}</Link>
                                            <FontAwesomeIcon icon={faIcons.faChevronRight} id='project-areas-text' />
                                            <Link id='project-areas-text'>{item.subarea}</Link>
                                        </div>
                                        <Link to='#' id='project-areas-text'>
                                            <FontAwesomeIcon icon={faIcons.faEllipsis} id='project-areas-text' />
                                        </Link>
                                    </div>
                                    <div id='bot'>
                                        <Link id='project-title'>{item.name}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </>
    )
}

export default ProjectsTable
