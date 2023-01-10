import './NewUserForm.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { setUser } from '../../services/cadastro'

function NewUserForm() {
  const [newuserForm, setForm] = useState(true)
  const showForm = () => setForm(!newuserForm)

  const [name, setNameForm] = useState();
  const [surname, setSurnameForm] = useState();
  const [email, setEmailForm] = useState();
  const [unb_id, setUnb_idForm] = useState();
  const [area, setAreaForm] = useState();
  const [role, setRoleForm] = useState();
  const [telephone, setTelephoneForm] = useState();
  const [birthdate, setBirthdateForm] = useState();
  const [cpf, setCpfForm] = useState();
  const [rg, setRgForm] = useState();

  const sendform = (e) => {
    // if(testes() == "fail"){
    //   responseFetch('erro')
    //   return
    // }
    e.preventDefault();
    setUser(name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg)
    // resultado = setUser(name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg)
  };

  function testes(){

  }






  // function responseFetch(response) {
  //   if (response == ) {
  //     MySwal.fire({
  //       title: <strong>Cadastro realizado com sucesso</strong>,
  //       icon: 'success'
  //     })
  //   } else {
  //     MySwal.fire({
  //       title: <strong>O cadastro falhou</strong>,
  //       icon: 'error'
  //     })
  //   }

  // }


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
          <form id='new-user-form' method='post' onSubmit={sendform} >
            <div className='form-col'>

              <div id='form-box'>
                <label>Nome</label>
                <div id='inputs'>
                  <input type="text" name='name' value={name} onChange={(e) => setNameForm(e.target.value)} placeholder='Nome' className='input'></input>
                  <input type="text" name='surname' value={surname} onChange={(e) => setSurnameForm(e.target.value)} placeholder='Sobrenome' className='input'></input>
                </div>
              </div>

              <div id='form-box'>
                <label>Email</label>
                <input type="email" name='email' value={email} onChange={(e) => setEmailForm(e.target.value)} placeholder='E-mail Zenit' className='input'></input>
              </div>              

              <div id='form-box'>
                <label>Matrícula UnB</label>
                <input type="number" name='unb_id' value={unb_id} onChange={(e) => setUnb_idForm(e.target.value)} placeholder='Matrícula' className='input'></input>
              </div>

              <div id='form-roles'>
                <div id='inputs'>
                  <div id='form-box'>
                    <label>Setor</label>
                    <select name="area" value={area} onChange={(e) => setAreaForm(e.target.value)} className='input'>
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
                    <select name="role" value={role} onChange={(e) => setRoleForm(e.target.value)} className='input'>
                      <option value="" disabled selected>Selecione o cargo</option>
                      <option value="membro">Membro</option>
                      <option value="gerente">Gerente</option>
                      <option value="diretor">Diretor</option>
                      <option value="presidente">Presidente</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
            


            <div className='form-col'>

              <div id='form-box'>
                <label>Telefone</label>
                <input type="tel" name='tel' value={telephone} onChange={(e) => setTelephoneForm(e.target.value)} placeholder='Telefone' className='input'></input>
              </div>

              <div id='form-box'>
                <label>Data de nascimento</label>
                <input type="date" name='birthdate' value={birthdate} onChange={(e) => setBirthdateForm(e.target.value)} className='input'></input>
              </div>

              <div id='form-box'>
                <label>RG</label>
                <input type="number" name='rg' value={rg} onChange={(e) => setRgForm(e.target.value)} className='input'></input>
              </div>

              <div id='form-box'>
                <label>CPF</label>
                <input type="number" name='cpf' value={cpf} onChange={(e) => setCpfForm(e.target.value)} className='input'></input>
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
              <div className='button' onClick={showForm}>
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