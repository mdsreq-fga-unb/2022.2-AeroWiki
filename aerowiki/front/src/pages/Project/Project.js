import "./Project.css"
import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import EditorJS from "@editorjs/editorjs"

import Paragraph from "@editorjs/paragraph"
import ParagraphAlign from "editorjs-paragraph-with-alignment"
import EHeader from "@editorjs/header"
import HeaderAlign from "editorjs-header-with-alignment"
import HeaderAnchor from "editorjs-header-with-anchor"
import Quote from "@editorjs/quote"
import Warning from "@editorjs/warning"
import Delimiter from "@editorjs/delimiter"
import Alert from "editorjs-alert"
import ToggleBlock from "editorjs-toggle-block"

import List from "@editorjs/list"




function Project() {

    const editor = new EditorJS({ 
        /** 
         * Id of Element that should contain the Editor 
         */ 
        holder: 'editorjs', 
      
        /** 
         * Available Tools list. 
         * Pass Tool's class or Settings object for each Tool you want to use 
         */ 
        tools: { 
          header: {
            class: EHeader, 
            inlineToolbar: ['link'] 
          }, 
          list: { 
            class: List, 
            inlineToolbar: true 
          },
          paragraph: {
            class: ParagraphAlign,
            inlineToolbar: true,
          },
        }, 
      })  

  return (
    <>
      <header>
        <Header></Header>
      </header>

      <div id="web-body">
        <main>
            <div className="editor-container">
                <div id="editorjs">
                    
                </div>
            </div>
        </main>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default Project
