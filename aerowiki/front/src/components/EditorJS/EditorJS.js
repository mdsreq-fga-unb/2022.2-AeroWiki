import "./EditorJS.css"
import { updateProjectData } from "../../services/updateProjectData"
import React from 'react'
import EditorJS from "@editorjs/editorjs"
import { projectsData } from '../ProjectsTable/ProjectsData'

import { Tools } from "./EditorTools"
import DragDrop from "editorjs-drag-drop"
import Undo from 'editorjs-undo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'


const Editor = () => {
    projectsData()

    let cargo = sessionStorage.getItem("cargo")
    let editable = sessionStorage.getItem("editable")
    let projectId = sessionStorage.getItem('projeto_id')

    let thisProject =
        JSON.parse(sessionStorage.getItem('projectsData'))
            .find(item => item._id === projectId)

    let projectName = thisProject.name
    let projectText = thisProject.project

    let data = {
        blocks: [{
            type: 'paragraph',
            data: {
                text: 'Digite aqui'
            }
        }]
    }

    if (projectText.blocks.length !== 0) {
        data = projectText
    }

    const editor = new EditorJS({
        onReady: () => {
            new DragDrop(editor)
            new Undo({ editor })
        },

        placeholder: "",
        holder: "editorjs",
        tools: Tools,

        data: data,

        onChange: () => {
            saved();
        }
    });

    function saved() {
        editor.save().then((outputData) => {
            updateProjectData(projectId, outputData.blocks)
            // console.log('Article data: ', outputData)
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }
    editor.isReady
        .then(() => {
            console.log('Editor.js is ready to work!')
            editToggleStart()
        })
        .catch((reason) => {
            console.log(`Editor.js initialization failed because of ${reason}`)
        });

    async function editToggleStart() {
        if (cargo === 'Membro' && editable === 'false') {
            document.getElementById('clearText').remove()
        }
        const toggleButton = document.getElementById("toggleEdit")
        await editor.readOnly.toggle()
    }

    async function editToggle() {
        if (cargo === 'Membro' && editable === 'false') {
        } else {
            // if(projetostatus === "ativo"){
            const toggleButton = document.getElementById("toggleEdit")
            const toggleText = document.getElementById("toggleText")

            await editor.readOnly.toggle()
                .then(function (resultado) {
                    if (!resultado) {
                        toggleButton.classList.add("active")
                        toggleText.innerHTML = "Modo Edição"
                    }
                    else {
                        toggleButton.classList.remove("active")
                        toggleText.innerHTML = "Modo Leitura"
                    }
                })
            // }
        }
    }

    async function clearText() {
        await editor.clear()    
        window.location.reload()
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
                                <span>{projectName}</span>
                            </div>

                            <div id="editor-options">

                                <div id='toggleEdit' className='edit area' onClick={editToggle}>
                                    <div className='button' >
                                        <FontAwesomeIcon id="toggleIcon" icon={faIcons.faFileSignature} />
                                        <span id="toggleText">Modo Leitura</span>
                                    </div>
                                </div>

                                <div id='clearText' className='edit area' onClick={clearText}>
                                    <div className='button' >
                                        <FontAwesomeIcon icon={faIcons.faBroom} />
                                        <span>Limpar</span>
                                    </div>
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