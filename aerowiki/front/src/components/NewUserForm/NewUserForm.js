import './NewUserForm.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { addMember } from '../../services/addMember'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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

    if (validarMatricula(unb_id) == false) {
      MySwal.fire({
        title: "Matrícula inválida",
        icon: 'error'
      })
    } else {
      if (validarNome(name) == false || validarNome(surname) == false) {
        MySwal.fire({
          title: "Nome inválido",
          icon: 'error'
        })
      } else {
        try {
          const r = await addMember(name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg)
          console.log("certo")
          console.log(r)
          resultadoCadastro(r)
        } catch (error) {
          console.log("errado")
          console.log(error)
          resultadoCadastro(error['response'])
        }
      }
    }
  }

  function resultadoCadastro(resultado) {

    function refreshPage() {
      window.location.reload(true);
    }

    function resultadoC() {
      document.getElementById("load").classList.remove('logoLoad')
      document.getElementById("load").classList.add('logoLoadoff')
      MySwal.fire({
        title: "Cadastro realizado com sucesso!",
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
          refreshPage()
        }
      })
    }

    if (resultado == "repetiu") {
      MySwal.fire({
        title: "Um ou mais campos obrigatórios estão incompletos.",
        icon: 'warning'
      })

    } else {
      const fraseResultado = resultado['data']['message']
      const erroNumber = resultado['status']
      if (erroNumber == 201) {
        document.getElementById("load").classList.remove('logoLoadoff')
        document.getElementById("load").classList.add('logoLoad')
        setTimeout(function () { resultadoC(); }, 5000)
        
      } else if (fraseResultado == 'User already exist') {
        MySwal.fire({
          title: "Este membro já está cadastrado.",
          icon: 'warning'
        })
      } else {
        MySwal.fire({
          title: "Erro no sistema. :(",
          text: "Por favor, tente novamente mais tarde.",
          icon: 'error'
        })
      }
    }
  }

  return (
    <>
      <div className='area'>
        <Link to='#' className='button' onClick={showForm}>
          <FontAwesomeIcon icon={faIcons.faPlus} />
          <span>Novo membro</span>
        </Link>
      </div>

      <div className={newuserForm ? 'form-bg' : 'form-bg-active'}></div>

      <div id={newuserForm ? 'addM-form' : 'addM-form-active'}>
        <div className='form-container'>
          <span className='form-title'>Cadastrar membro</span>
          <form id='new-user-form' onSubmit={sendform} >
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
                <button type='submit' form='new-user-form'>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default NewUserForm