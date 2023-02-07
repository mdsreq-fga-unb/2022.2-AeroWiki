import "./EditorJS.css"
import React, { useEffect } from 'react'
import EditorJS from "@editorjs/editorjs"
import { Tools } from "./EditorTools"
import DragDrop from "editorjs-drag-drop"
import Undo from 'editorjs-undo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'



var testejson = {blocks: [{
                type: 'paragraph',
                data: {
                    text: 'MIGUE'
                }
            }]}



const Editor = () => {
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
        data: testejson
,
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

    async function editToggle(){
        const toggleButton = document.getElementById("toggleEdit")
        const toggleText = document.getElementById("toggleText")

        await editor.readOnly.toggle()
        .then(function(resultado){
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
                            <span>{sessionStorage.getItem('area')}</span>
                            <FontAwesomeIcon icon={faIcons.faChevronRight} />
                            <span>{sessionStorage.getItem('subarea')}</span>
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