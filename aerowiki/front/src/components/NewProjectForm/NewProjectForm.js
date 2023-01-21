import React from 'react'
import './NewProjectForm.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

function NewProjectForm() {
  const [newprojectForm, setForm] = useState(true)
  const showForm = () => setForm(!newprojectForm)

  return (
    <>
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
          <form>

          <div className='form-box'>
            <label className='form-label'>Nome do projeto</label>
            <input type="text" /* value={name} onChange={(e) => setNameForm(e.target.value)} */ placeholder='Nome' className='input'></input>
          </div>

          {/* <div className='hr no-marg'></div> */}

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
                <button type='submit' form='new-member-form'>Salvar projeto</button>
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
