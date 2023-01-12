import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

function MembersButton() {
    const [memberButtons, setButtons] = useState(true)
    const showButtons = () => setButtons(!memberButtons)

    const [newuserForm, setForm] = useState(true)
    const showForm = () => setForm(!newuserForm)
    
    return (
    <>
    <Link to='#' id='member-buttons' onClick={showButtons}>
        <FontAwesomeIcon icon={faIcons.faPen} />
        <div id={memberButtons ? "delete-file-edit" : "delete-file-edit-active"}>
            <Link to="#" id='file'><FontAwesomeIcon icon={faIcons.faUserMinus} /></Link >
            <Link to="#" id='edit'><FontAwesomeIcon icon={faIcons.faEraser} onClick={showForm}/></Link >
            <Link to="#" id='delete'><FontAwesomeIcon icon={faIcons.faUserXmark} /></Link >                            
        </div>
    </Link>

    <div id={newuserForm ? 'form-bg' : 'form-bg-active'}></div>
    
    <div id={newuserForm ? 'form' : 'form-active'} >
        <div id='form-container'>
            <span>Editar Membro</span>
            <form id='edit-member' >

                <div id='form-box'>
                <label>Setor</label>
                <select className='input'>
                    <option value="" disabled selected>Selecione o setor</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Relações">Relações Externas</option>
                    <option value="Pesquisa & Desenvolvimento">Pesquisa & Desenvolvimento</option>
                    <option value="Operações">Operações</option>
                </select>
                </div>
                 
                <div id='form-box'>
                    <label>Cargo</label>
                    <select className='input'>
                      <option value="" disabled selected>Selecione o cargo</option>
                      <option value="Membro">Membro</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Diretor">Diretor</option>
                      <option value="Presidente">Presidente</option>
                    </select>
                </div>

            </form>
            <div id='form-buttons'>
            <div className='back area'>
              <Link to='#' className='button' onClick={showForm}>
                <FontAwesomeIcon icon={faIcons.faChevronLeft} />
                <span>Voltar</span>
              </Link>
            </div>

            <div className='add area'>
              <div className='button'>
                <FontAwesomeIcon icon={faIcons.faEraser}/>
                <button type='submit' form='edit-member'>Atualizar</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default MembersButton
