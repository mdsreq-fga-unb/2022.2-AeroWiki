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
        else if (action === "fixar") {
            if (isfixed) {
                LoadingIcon("success", "Projeto fixado na tela incial!")
            }
            else {
                LoadingIcon("success", "Projeto desafixado da tela incial!")
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

    const fixarProjeto = async (project) => {
        console.log('ue', project.isfixed)
        await onUpdate({
            id: project._id,
            name: project.name,
            isfixed: !project.isfixed,
            editable: project.editable,
            ongoing: project.ongoing,
            active: project.active
        }, 'fixar')
    }


    // setTimeout(function () {
    //     var cargo = sessionStorage.getItem('cargo')

    //     if (cargo === 'Membro') {
    //         document.getElementById("options-buttons").remove()
    //         document.getElementById("newProject-button=").remove()
    //     }
    //     else {
    //         if (item.isfixed) {
    //             document.getElementById('fix-' + index).classList.add('fixado')
    //         }
    //         else {
    //             document.getElementById('fix-' + index).classList.remove('fixado')
    //         }
    //     }
    // }, 3)


    return (
        <>
            <div className='projects-table'>
                <div className='title'>
                    <span>Projetos Ativos</span>
                    <div className='hr'></div>
                </div>

                <br />

                <div className='fixed-projects'>
                    {JSON.parse(sessionStorage.getItem('projectsData')).map((item, index) => {
                        if (item.area === sessionStorage.getItem('area') && item.subarea === sessionStorage.getItem('subarea') && item.active) {
                            setTimeout(function () {
                                var cargo = sessionStorage.getItem('cargo')

                                if (cargo === 'Membro') {
                                    document.getElementById('fix-' + index).remove()

                                    document.getElementById("options-buttons").remove()
                                    document.getElementById("newProject-button=").remove()
                                }
                                else {
                                    if (item.isfixed) {
                                        document.getElementById('fix-' + index).classList.add('fixado')
                                    }
                                    else {
                                        document.getElementById('fix-' + index).classList.remove('fixado')
                                    }
                                }
                            }, 3)

                            return (
                                <div id={'projeto-' + index} className='fixed-project' key={index}>
                                    <div id='project-image' style={{ backgroundImage: `url(${item.img})` }}></div>
                                    <div id='project-text'>
                                        <div id='top'>
                                            <div id='project-areas'>
                                                <Link className='project-areas-text'>{item.area}</Link>
                                                <FontAwesomeIcon icon={faIcons.faChevronRight} className='project-areas-text' />
                                                <Link className='project-areas-text'>{item.subarea}</Link>
                                            </div>

                                            <div id={'fix-' + index} className='fixar-div' onClick={() => fixarProjeto(item)}>
                                                <span className='project-areas-text' >Fixar Projeto</span>
                                                <FontAwesomeIcon icon={faIcons.faCircleCheck} className='project-areas-text' />
                                            </div>

                                            <div id='options-buttons' className='project-options'>
                                                <ProjectOptions onUpdate={onUpdate} onEdit={onEdit} onDelete={onDelete} project={item} />
                                            </div>

                                        </div>
                                        <div id='bot'>
                                            <Link to='#' id='project-title'
                                                onClick={() => {
                                                    sessionStorage.setItem('projeto_id', item._id)
                                                    sessionStorage.setItem('editable', item.editable)

                                                    if (item.active) {
                                                        window.location.href = '/projeto'
                                                    }
                                                }}>{item.name}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>


                <br /><br /><br />


                <div className='title'>
                    <span>Projetos Arquivados</span>
                    <div className='hr'></div>
                </div>

                <br />

                <div className='fixed-projects'>
                    {JSON.parse(sessionStorage.getItem('projectsData')).map((item, index) => {
                        if (item.area === sessionStorage.getItem('area') && item.subarea === sessionStorage.getItem('subarea') && !item.active) {

                            setTimeout(function () {
                                var cargo = sessionStorage.getItem('cargo')

                                if (cargo === 'Membro') {
                                    document.getElementById("options-buttons").remove()
                                    document.getElementById("newProject-button=").remove()
                                }
                            }, 3)

                            return (
                                <div id={'projeto-' + index} className='fixed-project projarquivado' key={index}>
                                    <div id='project-image' style={{ backgroundImage: `url(${item.img})` }}></div>
                                    <div id='project-text'>
                                        <div id='top'>
                                            <div id='project-areas'>
                                                <Link className='project-areas-text'>{item.area}</Link>
                                                <FontAwesomeIcon icon={faIcons.faChevronRight} className='project-areas-text' />
                                                <Link className='project-areas-text'>{item.subarea}</Link>
                                            </div>

                                            <div id='options-buttons' className='project-options'>
                                                <ProjectOptions onUpdate={onUpdate} onEdit={onEdit} onDelete={onDelete} project={item} />
                                            </div>

                                        </div>
                                        <div id='bot'>
                                            <Link to='#' id='project-title'
                                                onClick={() => {
                                                    sessionStorage.setItem('projeto_id', item._id)
                                                    sessionStorage.setItem('editable', item.editable)

                                                    if (item.active) {
                                                        window.location.href = '/projeto'
                                                    }
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
