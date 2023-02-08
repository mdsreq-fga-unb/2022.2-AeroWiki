import React from 'react';
import "./ProjectsTable.css"
import { projectsData } from './ProjectsData'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

function ProjectsTable() {
    projectsData()
    return (
        <>
            <div className='projects-table'>

                <div className='title'>
                    <span>Projetos Ativos</span>
                    <div className='hr'></div>
                </div>

                <div className='fixed-projects'>
                    {JSON.parse(sessionStorage.getItem('projectsData')).map((item, index) => {
                        if (item.area === sessionStorage.getItem('area') && item.subarea === sessionStorage.getItem('subarea')) {
                            return (
                                <div id='fixed-project' key={index}>
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
                                            <Link to='/projetoteste' id='project-title'
                                                onClick={() => {
                                                    sessionStorage.setItem('projeto_id', item._id)
                                                }}>{item.name}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>

            </div>
        </>
    )
}

export default ProjectsTable
