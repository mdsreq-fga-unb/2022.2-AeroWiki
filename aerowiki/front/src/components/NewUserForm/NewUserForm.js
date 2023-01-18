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
    if (resultado == "repetiu") {
      MySwal.fire({
        title: "Um ou mais campos obrigatórios estão incompletos.",
        icon: 'warning'
      })

    } else {
      const fraseResultado = resultado['data']['message']
      const erroNumber = resultado['status']
      if (erroNumber == 201) {
        MySwal.fire({
          title: "Cadastro realizado com sucesso!",
          icon: 'success'
        })

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

      <div id={newuserForm ? 'form-bg' : 'form-bg-active'}></div>

      <div id={newuserForm ? 'form' : 'form-active'}>
        <div id='form-container'>
          <span>Cadastrar membro</span>
          <form id='new-user-form' onSubmit={sendform} >
            <div className='form-col'>

              <div id='form-box'>
                <label>Nome</label>
                <div id='inputs'>
                  <input type="text" value={name} onChange={(e) => setNameForm(e.target.value)} placeholder='Nome' className='input'></input>
                  <input type="text" value={surname} onChange={(e) => setSurnameForm(e.target.value)} placeholder='Sobrenome' className='input'></input>
                </div>
              </div>

              <div id='form-box'>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmailForm(e.target.value)} placeholder='E-mail Zenit' className='input'></input>
              </div>

              <div id='form-box'>
                <label>Matrícula UnB</label>
                <input type="number" value={unb_id} onChange={(e) => setUnb_idForm(e.target.value)} placeholder='Matrícula' className='input'></input>
              </div>

              <div id='form-roles'>
                <div id='inputs'>
                  <div id='form-box'>
                    <label>Setor</label>
                    <select value={area} onChange={(e) => setAreaForm(e.target.value)} className='input'>
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

              <div id='form-box'>
                <label>Telefone</label>
                <input type="tel" value={telephone} onChange={(e) => setTelephoneForm(e.target.value)} placeholder='Telefone' className='input'></input>
              </div>

              <div id='form-box'>
                <label>Data de nascimento</label>
                <input type="date" value={birthdate} onChange={(e) => setBirthdateForm(e.target.value)} className='input'></input>
              </div>

              <div id='form-box'>
                <label>RG</label>
                <input type="number" value={rg} onChange={(e) => setRgForm(e.target.value)} className='input'></input>
              </div>

              <div id='form-box'>
                <label>CPF</label>
                <input type="number" value={cpf} onChange={(e) => setCpfForm(e.target.value)} className='input'></input>
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