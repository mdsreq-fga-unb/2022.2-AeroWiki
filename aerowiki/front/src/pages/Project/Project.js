import "./Project.css"
import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import EditorJS from "../../components/EditorJS/EditorJS"

function Project() {
  return (
    <>
      <header>
        <Header></Header>
      </header>

      <div id="web-body">
        <main>
          <EditorJS></EditorJS>
        </main>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default Project
