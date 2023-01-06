import './NewUserForm.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

function NewUserForm() {
    const [newuserForm, setForm] = useState(true)
    const showForm = () => setForm(!newuserForm)
  
    return (
      <>
      <div id='area'>
        <Link to='#' id='button' onClick={showForm}>
          <FontAwesomeIcon icon={faIcons.faPlus} />
          <span>Novo membro</span>
        </Link>
      </div>

      <div id={newuserForm ? 'form' : 'form-active'}>
        <div id='new-user-form'>
          <form>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
          </form>
        </div>
      </div>
      </>

  )
}

export default NewUserForm
