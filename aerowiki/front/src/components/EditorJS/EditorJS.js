import "./EditorJS.css"
import React, { useEffect } from 'react'
import EditorJS from "@editorjs/editorjs"
import { Tools } from "./EditorTools"
import DragDrop from "editorjs-drag-drop"
import Undo from 'editorjs-undo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

const Editor = () => {
    // let editor = { isReady: false };
    // useEffect(() => {

    //     if (!editor.isReady) {
    const editor = new EditorJS({
        onReady: () => {
            new DragDrop(editor)
            new Undo({ editor })
        },

        placeholder: "Digite aqui",
        holder: "editorjs",
        tools: Tools,

        readOnly: true,

        /**
         * Previously saved data that should be rendered
         */
        data: {
            blocks: [{
                type: 'paragraph',
                data: {
                    text: 'Digite aqui'
                }
            }]
        },
    });

    editor.isReady
        .then(() => {
            console.log('Editor.js is ready to work!')
            /** Do anything you need after editor initialization */
            editor.save().then((outputData) => {
                console.log('Article data: ', outputData)
            }).catch((error) => {
                console.log('Saving failed: ', error)
            });
        })
        .catch((reason) => {
            console.log(`Editor.js initialization failed because of ${reason}`)
        });
    //     }
    // // }, []);

    function editToggle(){
        const toggleButton = document.getElementById("toggleEdit")
        const toggleText = document.getElementById("toggleText")

        var resultado = editor.readOnly.toggle()
        resultado.then(function(resultado){
            if(!resultado){
                toggleButton.classList.add("active")
                toggleText.innerHTML = "Modo Edição"
            }
            else{
                toggleButton.classList.remove("active")
                toggleText.innerHTML = "Modo Leitura"
            }
        })

    }

    return (
        <>
            <div className="project-container">
                <div className="project-bg">
                    <div className="project-info">

                        <div className="sector-container">
                            <span>Area</span>
                            <FontAwesomeIcon icon={faIcons.faChevronRight} />
                            <span>Subarea</span>
                        </div>

                        <div className="title-container">
                            <div className="project-title">
                                <span>Nome do projeto</span>
                            </div>

                            <div id='toggleEdit' className='edit area' onClick={editToggle}>
                                <div className='button' >
                                    <FontAwesomeIcon id="toggleIcon" icon={faIcons.faFileSignature} />
                                    <span id="toggleText">Modo Leitura</span>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="editor-container">
                        <div className="editor-textbox">
                            <div id="editorjs"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Editor;