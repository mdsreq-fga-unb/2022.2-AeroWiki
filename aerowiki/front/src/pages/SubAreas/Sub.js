import './Sub.css'
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import testedetoken from '../../testes/testedetoken'
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm'
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable'

function Sub() {
  testedetoken()

  let areaName = sessionStorage.getItem('area')
  let subareaName = sessionStorage.getItem('subarea')

  return (
    <>
      <header>
        <Header />
      </header>

      <div id='web-body'>
        <div id='main-title'>
          <div id='project-areasubarea-name'>
            <span>{areaName}</span>
            <span>{subareaName}</span>
          </div>

          <span>Projetos</span>
          <NewProjectForm></NewProjectForm>
        </div>

        <div id='project-table-container'>
          <main>
            <div className='pad-box'>
              <ProjectsTable></ProjectsTable>
            </div>
          </main>
        </div>

      </div>

      <footer>
        <Footer />
      </footer>
    </>

  )
}

export default Sub