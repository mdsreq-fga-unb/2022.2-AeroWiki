import Paragraph from "@editorjs/paragraph"
import ParagraphAlign from "editorjs-paragraph-with-alignment"
import Header from "@editorjs/header"
import HeaderAlign from "editorjs-header-with-alignment"
import HeaderAnchor from "editorjs-header-with-anchor"
import Quote from "@editorjs/quote"
import Warning from "@editorjs/warning"
import Delimiter from "@editorjs/delimiter"
import Alert from "editorjs-alert"
import ToggleBlock from "editorjs-toggle-block"

import List from "@editorjs/list"
import NestedList from "@editorjs/nested-list"
import CheckList from "@editorjs/checklist"

import Table from "@editorjs/table"

import AlignmentTuneTool from "editorjs-text-alignment-blocktune"

export const Tools = {
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
        tunes: ['AlignmentTune'],
    },

    header: {
        class: Header,
        inlineToolbar: true,
        tunes: ['AlignmentTune'],
        config: {
            placeholder: "Digite o cabeçalho",
            levels: [1, 2, 3, 4, 5],
            defaultLevel: 1,
        },
    },

    quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
            quotePlaceholder: 'Digite uma citação',
            captionPlaceholder: 'Autor da citação',
        },
    },

    //   warning: {
    //     class: Warning,
    //     inlineToolbar: true,
    //     config: {
    //       titlePlaceholder: 'Title',
    //       messagePlaceholder: 'Message',
    //     },
    //   },

    delimiter: Delimiter,

    alert: {
        class: Alert,
        inlineToolbar: true,
        config: {
            defaultType: 'primary',
            messagePlaceholder: 'Digite um alerta',
        },
    },

    //   toggle: {
    //     class: ToggleBlock,
    //     inlineToolbar: true,
    //   },

    list: {
        class: NestedList,
        inlineToolbar: true,
        tunes: ['AlignmentTune'],
        config: {
            defaultStyle: 'unordered'
        },
    },

    checklist: CheckList,

    table: {
        class: Table,
        inlineToolbar: true,
        config: {
            rows: 3,
            cols: 5,
            withHeadings: true
        },
    },

    AlignmentTune: {
        class:AlignmentTuneTool,
        config:{
          default: "right",
          blocks: {
            paragraph: 'left',
            header: 'center',
            list: 'left'
          }
        },
      }
}