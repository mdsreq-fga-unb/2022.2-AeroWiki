import './NewUserForm.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { addMember } from '../../services/addMember'
import LoadingIcon from "../LoadingIcon/LoadingIcon"
import SweetAlert from "../SweetAlert/SweetAlert"
import load from "../../img/loding.png"

function NewUserForm() {
  const [newuserForm, setForm] = useState(true)
  const showForm = () => setForm(!newuserForm)

  const [name, setNameForm] = useState('');
  const [surname, setSurnameForm] = useState('');
  const [email, setEmailForm] = useState('');
  const [unb_id, setUnb_idForm] = useState('');
  const [area, setAreaForm] = useState('');
  const [role, setRoleForm] = useState('');
  const [telephone, setTelephoneForm] = useState('');
  const [birthdate, setBirthdateForm] = useState('');
  const [cpf, setCpfForm] = useState('');
  const [rg, setRgForm] = useState('');
  var validarEmail = require('../../testes/validacoes/email')
  var validarNome = require('../../testes/validacoes/nome')
  var validarMatricula = require('../../testes/validacoes/matricula')


  const sendform = async (e) => {
    e.preventDefault();

    if (validarNome(name) === false || validarNome(surname) === false) {
      SweetAlert("error", "Nome inválido")
    }
    else if (validarMatricula(unb_id) === false) {
      SweetAlert("error", "Matrícula inválida")
    }
    else {
      try {
        const r = await addMember(name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg)
        console.log("certo")
        console.log(r)
        resultadoCadastro(r)
      }
      catch (error) {
        console.log("errado")
        console.log(error)
        resultadoCadastro(error['response'])
      }
    }
  }

  function resultadoCadastro(resultado) {

    if (resultado === "repetiu") {
      SweetAlert("warning", "Um ou mais campos obrigatórios estão incompletos.")
    }
    else {
      const fraseResultado = resultado['data']['message']
      const erroNumber = resultado['status']
      if (erroNumber === 201) {
        LoadingIcon("success", "Cadastro realizado com sucesso!")
      }
      else if (fraseResultado === 'User already exist') {
        SweetAlert("warning", "Esse membro já está cadastrado.")
      }
      else {
        SweetAlert("error", "Ocorreu um erro no sistema D:", "Por favor, tente novamente mais tarde.")
      }
    }
  }

  return (
    <>
      <div id='load-bg' className='form-bg'></div>
      <img id="load" className="logoLoadoff" src={load} alt="loading..." />

      <div id='newMember-button=' className='area' onClick={showForm}>
        <Link to='#' className='button'>
          <FontAwesomeIcon icon={faIcons.faPlus} />
          <span>Novo membro</span>
        </Link>
      </div>

      <div className={newuserForm ? 'form-bg' : 'form-bg-active'}></div>

      <div id={newuserForm ? 'newMember-form' : 'newMember-form-active'}>
        <div className='form-container'>
          <span className='form-title'>Cadastrar membro</span>
          <form id='new-member-form' onSubmit={sendform} >
            <div className='form-col'>

              <div className='form-box'>
                <label className='form-label'>Nome</label>
                <div id='inputs'>
                  <input type="text" value={name} onChange={(e) => setNameForm(e.target.value)} placeholder='Nome' className='input'></input>
                  <input type="text" value={surname} onChange={(e) => setSurnameForm(e.target.value)} placeholder='Sobrenome' className='input'></input>
                </div>
              </div>

              <div className='form-box'>
                <label className='form-label'>Email</label>
                <input type="email" value={email} onChange={(e) => setEmailForm(e.target.value)} placeholder='E-mail Zenit' className='input'></input>
              </div>

              <div className='form-box'>
                <label className='form-label'>Matrícula UnB</label>
                <input type="number" value={unb_id} onChange={(e) => setUnb_idForm(e.target.value)} placeholder='Matrícula' className='input'></input>
              </div>

              <div id='form-roles'>
                <div id='inputs'>
                  <div className='form-box'>
                    <label className='form-label'>Setor</label>
                    <select value={area} onChange={(e) => setAreaForm(e.target.value)} className='input'>
                      <option value="" disabled selected>Selecione o setor</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Relações">Relações Externas</option>
                      <option value="Pesquisa & Desenvolvimento">Pesquisa & Desenvolvimento</option>
                      <option value="Operações">Operações</option>
                    </select>
                  </div>

                  <div className='form-box'>
                    <label className='form-label'>Cargo</label>
                    <select value={role} onChange={(e) => setRoleForm(e.target.value)} className='input'>
                      <option value="" disabled selected>Selecione o cargo</option>
                      <option value="Membro">Membro</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Diretor">Diretor</option>
                      <option value="Presidente">Presidente</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>



            <div className='form-col'>

              <div className='form-box'>
                <label className='form-label'>Telefone</label>
                <input type="tel" value={telephone} onChange={(e) => setTelephoneForm(e.target.value)} placeholder='Telefone' className='input'></input>
              </div>

              <div className='form-box'>
                <label className='form-label'>Data de nascimento</label>
                <input type="date" value={birthdate} onChange={(e) => setBirthdateForm(e.target.value)} className='input'></input>
              </div>

              <div className='form-box'>
                <label className='form-label'>RG</label>
                <input type="number" value={rg} onChange={(e) => setRgForm(e.target.value)} className='input'></input>
              </div>

              <div className='form-box'>
                <label className='form-label'>CPF</label>
                <input type="number" value={cpf} onChange={(e) => setCpfForm(e.target.value)} className='input'></input>
              </div>

            </div>
          </form>
          <div className='form-buttons'>
            <div className='back area'>
              <Link to='#' className='button' onClick={showForm}>
                <FontAwesomeIcon icon={faIcons.faChevronLeft} />
                <span>Voltar</span>
              </Link>
            </div>

            <div className='add area'>
              <div className='button'>
                <FontAwesomeIcon icon={faIcons.faUserPlus} />
                <button type='submit' form='new-member-form'>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default NewUserForm