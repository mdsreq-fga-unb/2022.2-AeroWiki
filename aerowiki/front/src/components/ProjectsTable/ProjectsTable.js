import React, { useState } from 'react'
import "./ProjectsTable.css"
import { projectsData } from './ProjectsData'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import ProjectOptions from './ProjectOptions'

import LoadingIcon from '../LoadingIcon/LoadingIcon'
import { updateProject } from '../../services/updateProject'
import { deleteProject } from '../../services/deleteProject'
import { EditProjectForm } from './EditProjectForm'

projectsData()

function ProjectsTable() {
    const [modalState, setModalState] = useState({
        open: false,
        project: undefined,
    });

    const onEdit = (project) => {
        console.log("editProject", project);
        setModalState({ open: true, project: project });
    };

    const onCloseModal = () => setModalState({ open: false, project: undefined });

    const onUpdate = async ({ id, name, isfixed, editable, ongoing, active }, action) => {
        try {
            console.log('editable', editable)
            let response = await updateProject({ id, name, isfixed, editable, ongoing, active });
            console.log(response)
            setModalState({ open: false, project: undefined });

        } catch (err) {
            console.log(err);
            LoadingIcon("error", "Ocorreu um erro no sistema D:", "Por favor, tente mais tarde.")
        }

        if (action === "editar") {
            LoadingIcon("success", "Projeto atualizado com sucesso!")
        }
        else if (action === "arquivar") {
            if (!active) {
                LoadingIcon("success", "Projeto arquivado com sucesso!")
            }
            else {
                LoadingIcon("success", "Projeto desarquivado com sucesso!")
            }
        }

    };

    const onDelete = async ({ id }) => {
        try {
          await deleteProject({ id });
    
          LoadingIcon("success", "Projeto excluído com sucesso")
    
        } catch (err) {
          console.log(err);
          LoadingIcon("error", "Ocorreu um erro no sistema D:", "Por favor, tente mais tarde.")
        }
      };

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
                                                <Link className='project-areas-text'>{item.area}</Link>
                                                <FontAwesomeIcon icon={faIcons.faChevronRight} className='project-areas-text' />
                                                <Link className='project-areas-text'>{item.subarea}</Link>
                                            </div>

                                            <div className='project-options'>
                                                <ProjectOptions onUpdate={onUpdate} onEdit={onEdit} onDelete={onDelete} project={item} />
                                            </div>

                                        </div>
                                        <div id='bot'>
                                            <Link to='/projeto' id='project-title'
                                                onClick={() => {
                                                    sessionStorage.setItem('projeto_id', item._id)
                                                    sessionStorage.setItem('editable', item.editable)
                                                }}>{item.name}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>

            </div>
            <EditProjectForm open={modalState.open} project={modalState.project} onCancel={onCloseModal} onUpdate={onUpdate} />
        </>
    )
}

export default ProjectsTable
