import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ProjectOptions({ onUpdate, onDelete, onEdit, project }) {
    const [projectOptions, setButtons] = useState(false);
    const showButtons = () => setButtons(!projectOptions);

    return (
        <>
            <Link to='#' className='project-options' onClick={showButtons}>
                <FontAwesomeIcon icon={faIcons.faEllipsis} />
            </Link>

            <div className={projectOptions ? "projOpt-active" : "projOpt"}>

                <div className='area'>
                    <Link className='button' to='#' onClick={() => onUpdate({
                        id: project._id,
                        name: project.name,
                        isfixed: project.isfixed,
                        editable: project.editable,
                        ongoing: project.ongoing,
                        active: !project.active
                    }, 'arquivar')} >
                        <FontAwesomeIcon icon={faIcons.faFileCircleMinus} />
                        <span id='arquivado-texto'>{project.active ? 'Arquivar' : 'Desarquivar'}</span>
                    </Link>
                </div>

                <div className='area' onClick={() => onEdit(project)}>
                    <Link className='button' to='#'>
                        <FontAwesomeIcon icon={faIcons.faFilePen} />
                        <span>Editar</span>
                    </Link>
                </div>


                <div className='area'>
                    <Link className='button' to='#' onClick={() => onDelete({ id: project._id })}>
                        <FontAwesomeIcon icon={faIcons.faFileCircleXmark} />
                        <span>Excluir</span>
                    </Link>
                </div>

            </div>

        </>
    )
}

export default ProjectOptions
