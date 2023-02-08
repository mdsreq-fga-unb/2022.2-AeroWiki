import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

export function EditProjectForm({ open, onUpdate, onCancel, project }) {
    let projName = ''
    let projArea = ''
    let projSubarea = ''

    if(project !== undefined){
        projName = project.name
        projArea = project.area
        projSubarea = project.subarea
    }
    const [newProjectName, setNewProjectName] = useState(projName);

    // const [editprojectForm, setForm] = useState(true)
    // const showForm = () => setForm(!editprojectForm)

    // const [name, setProjectNameForm] = useState(name)

    // const sendform = async (e) => {
    //   e.preventDefault();

    //   const editable = document.querySelector('input[name="iseditable"]:checked').value

    //   console.log(name, area, subarea, editable)
    //   if (name === '') {
    //     SweetAlert("error", "Por favor, escolha um nome para o projeto")
    //   }
    //   else {
    //     try {
    //       const response = await newProject(name, area, subarea, editable)
    //       console.log("certo")
    //       console.log(response)
    //       LoadingIcon("success", "Projeto criado com sucesso!")
    //       projectsData()
    //     } catch (error) {
    //       console.log("errado")
    //       console.log(error)
    //       SweetAlert("error", "Ocorreu um erro no sistema D:", "Por favor, tente mais tarde.")
    //     }
    //   }
    // }

    return (
        <>
            {/* <img id="load" className="logoLoadoff" src={load} alt="loading..." /> */}

            <div className={open ? 'form-bg-active' : 'form-bg'}></div>

            <div id={open ? 'editProject-form-active' : 'editProject-form'}>
                <div className='form-container'>
                    <span className='form-title'>Editar {projName}</span>
                    <form>

                        <div className='form-col'>
                            <div className='form-box'>
                                <label className='form-label'>Nome do projeto</label>
                                <input type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} placeholder='Nome' className='input'></input>
                            </div>

                            {/* <div className='hr no-marg'></div> */}

                            <div className='form-box'>

                                <label className='form-label'>O projeto é editável para membros?</label>
                                <div className='radio-form'>

                                    <div className='radio-option'>
                                        <input id="form-yes" type="radio" name="newiseditable" value={true} className='radio-input'></input>
                                        <label htmlFor='form-yes'>Sim</label>
                                    </div>

                                    <div className='radio-option'>
                                        <input id="form-no" type="radio" name="newiseditable" value={false} className='radio-input' defaultChecked></input>
                                        <label htmlFor="form-no">Não</label>
                                    </div>

                                </div>

                            </div>

                            <div className='form-box'>
                                <div id='inputs'>

                                    <div className='form-box'>
                                        <label className='form-label'>Area</label>
                                        <input type="text" value={projArea} placeholder='Area' className='input' disabled></input>
                                    </div>

                                    <div className='form-box'>
                                        <label className='form-label'>Subarea</label>
                                        <input type="text" value={projSubarea} placeholder='Subarea' className='input' disabled></input>
                                    </div>

                                </div>
                            </div>

                            <div className='form-box'>
                                <label className='form-label'>Imagem do projeto</label>
                                <input type="file" name="img" accept="image/*" className='input'></input>
                            </div>



                            <div className='form-buttons'>
                                <div className='back area'>
                                    <Link to='#' className='button' onClick={onCancel}>
                                        <FontAwesomeIcon icon={faIcons.faChevronLeft} />
                                        <span>Voltar</span>
                                    </Link>
                                </div>

                                <div className='add area'>
                                    <div className='button'>
                                        <FontAwesomeIcon icon={faIcons.faFileCirclePlus} />
                                        <button
                                            type="button"
                                            onClick={() => onUpdate({
                                                id: project._id,
                                                name: newProjectName,
                                                isfixed: project.isfixed,
                                                editable: document.querySelector('input[name="newiseditable"]:checked').value,
                                                ongoing: project.ongoing,
                                                active: project.active
                                            }, 'editar')
                                            }
                                        >
                                            Atualizar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

