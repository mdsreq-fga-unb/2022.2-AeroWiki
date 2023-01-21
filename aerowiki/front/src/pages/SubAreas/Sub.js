import './Sub.css'
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import testedetoken from '../../testes/testedetoken'
import NewUserForm from '../../components/NewProjectForm/NewProjectForm'
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm'

function Sub() {
  testedetoken()
  return (
    <>
    <header>
        <Header/>
    </header>
    
    <div id='web-body'>
      <div id='main-title'>
        <span>Projetos</span>
        <NewProjectForm></NewProjectForm>
      </div>

    </div>

    <footer>
        <Footer/>
    </footer>
    </>
  
  )
}

export default Sub