import React from 'react'
import './NewProjectForm.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { newProject } from '../../services/newProject'
import LoadingIcon from "../LoadingIcon/LoadingIcon"
import SweetAlert from "../SweetAlert/SweetAlert"
import load from "../../img/loding.png"

function NewProjectForm() {

  const [newprojectForm, setForm] = useState(true)
  const showForm = () => setForm(!newprojectForm)

  const [name, setProjectNameForm] = useState('')
  
  const area = sessionStorage.getItem('area')
  const subarea = sessionStorage.getItem('subarea')

  const sendform = async (e) => {
    e.preventDefault();

    const editable = document.querySelector('input[name="iseditable"]:checked').value

    console.log(name, area, subarea, editable)
    if (name === '') {
      SweetAlert("error", "Por favor, escolha um nome para o projeto")
    }
    else {
      try {
        const response = await newProject(name, area, subarea, editable)
        console.log("certo")
        console.log(response)
        LoadingIcon("success", "Projeto criado com sucesso!")
      } catch (error) {
        console.log("errado")
        console.log(error)
        SweetAlert("error", "Ocorreu um erro no sistema D:", "Por favor, tente mais tarde.")
      }
    }
  }

  return (
    <>
      <div id='load-bg' className='form-bg'></div>
      <img id="load" className="logoLoadoff" src={load} alt="loading..." />

      <div id='newProject-button=' className='area' onClick={showForm}>
        <Link to='#' className='button'>
          <FontAwesomeIcon icon={faIcons.faPlus} />
          <span>Novo projeto</span>
        </Link>
      </div>

      <div className={newprojectForm ? 'form-bg' : 'form-bg-active'}></div>

      <div id={newprojectForm ? 'newProject-form' : 'newProject-form-active'}>
        <div className='form-container'>
          <span className='form-title'>Iniciar novo projeto</span>
          <form onSubmit={sendform}>

            <div className='form-col'>
              <div className='form-box'>
                <label className='form-label'>Nome do projeto</label>
                <input type="text" value={name} onChange={(e) => setProjectNameForm(e.target.value)} placeholder='Nome' className='input'></input>
              </div>

              {/* <div className='hr no-marg'></div> */}

              <div className='form-box'>

                <label className='form-label'>O projeto é editável para membros?</label>
                <div className='radio-form'>

                  <div className='radio-option'>
                    <input id="form-yes" type="radio" name="iseditable" value={true} className='radio-input'></input>
                    <label htmlFor='form-yes'>Sim</label>
                  </div>

                  <div className='radio-option'>
                    <input id="form-no" type="radio" name="iseditable" value={false} className='radio-input' defaultChecked></input>
                    <label htmlFor="form-no">Não</label>
                  </div>

                </div>

              </div>

              <div className='form-box'>
                <div id='inputs'>

                  <div className='form-box'>
                    <label className='form-label'>Area</label>
                    <input type="text" value={area} placeholder='Area' className='input' disabled></input>
                  </div>

                  <div className='form-box'>
                    <label className='form-label'>Subarea</label>
                    <input type="text" value={subarea} placeholder='Subarea' className='input' disabled></input>
                  </div>

                </div>
              </div>

              <div className='form-box'>
                <label className='form-label'>Imagem do projeto</label>
                <input type="file" name="img" accept="image/*" className='input'></input>
              </div>



              <div className='form-buttons'>
                <div className='back area'>
                  <Link to='#' className='button' onClick={showForm}>
                    <FontAwesomeIcon icon={faIcons.faChevronLeft} />
                    <span>Voltar</span>
                  </Link>
                </div>

                <div className='add area'>
                  <div className='button'>
                    <FontAwesomeIcon icon={faIcons.faFileCirclePlus} />
                    <button type='submit'>Salvar</button>
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

export default NewProjectForm
