import './NewUserForm.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function NewUserForm() {
    const [newuserForm, setForm] = useState(true)
    const showForm = () => setForm(!newuserForm)

    return (
      <>
      <div className='area'>
        <Link to='#' className='button' onClick={showForm}>
          <FontAwesomeIcon icon={faIcons.faPlus} />
          <span>Novo membro</span>
        </Link>
      </div>

      <div id={newuserForm ? 'form-bg' : 'form-bg-active'}></div>

      <div id={newuserForm ? 'form' : 'form-active'}>
        <div id='form-container'>
          <span>Cadastrar membro</span>
          <form id='new-user-form'>

            <div id='form-box'>
              <label>Nome</label>
              <div id='inputs'>
                <input type="text" name='name' placeholder='Nome' className='input'></input>
                <input type="text" name='surname' placeholder='Sobrenome' className='input'></input>
              </div>
            </div>
                
            <div id='form-box'>
              <label>Email</label>
              <input type="email" name='email' placeholder='E-mail Zenit' className='input'></input>
            </div>

            <div id='form-box'>
              <label>Matrícula UnB</label>
              <input type="number" name='matricula' placeholder='Matrícula' className='input'></input>
            </div>

            <div id='form-roles'>
              <div id='inputs'>
                <div id='form-box'>
                  <label>Setor</label>
                  <select name="area" className='input'>
                    <option value="" disabled selected>Selecione o setor</option>
                    <option value="comercial">Comercial</option>
                    <option value="marketing">Marketing</option>
                    <option value="relacoes">Relações Externas</option>
                    <option value="p&d">Pesquisa & Desenvolvimento</option>
                    <option value="operacoes">Operações</option>
                  </select>
                </div>

                <div id='form-box'>
                  <label>Cargo</label>
                  <select name="role" className='input'>
                    <option value="" disabled selected>Selecione o cargo</option>
                    <option value="membro">Membro</option>
                    <option value="gerente">Gerente</option>
                    <option value="diretor">Diretor</option>
                    <option value="presidente">Presidente</option>
                  </select>
                </div>
              </div>
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
              <Link to='#' className='button' onClick={showForm}>
                <FontAwesomeIcon icon={faIcons.faUserPlus} />
                <input type='submit' value='Adicionar' form='new-user-form'></input>
              </Link>
            </div>            
          </div>
        </div>
      </div>
      </>

  )
}

export default NewUserForm