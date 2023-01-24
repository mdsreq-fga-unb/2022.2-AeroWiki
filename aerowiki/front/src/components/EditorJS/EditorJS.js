import "./EditorJS.css"
import React, { useEffect } from 'react'
import EditorJS from "@editorjs/editorjs"
import { Tools } from "./EditorTools"
import DragDrop from "editorjs-drag-drop"
import Undo from 'editorjs-undo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

const Editor = () => {
    let editor = { isReady: false };
    useEffect(() => {
        if (!editor.isReady) {
            editor = new EditorJS({
                onReady: () => {
                    new DragDrop(editor)
                    new Undo({ editor })
                },

                placeholder: "Escreva aqui",
                holder: "editorjs",
                tools: Tools,

                /**
                 * Previously saved data that should be rendered
                 */
                data: {},
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
        }
    }, []);



    return (
        <>
            <div className="project-container">
                <div className="project-bg">
                    <div className="project-info">
                        <div className="project-area-subarea">
                            <span>Area</span>
                            <FontAwesomeIcon icon={faIcons.faChevronRight}/>
                            <span>Subarea</span>
                        </div>
                        <div className="project-name">
                            <span>Nome do projeto</span>
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