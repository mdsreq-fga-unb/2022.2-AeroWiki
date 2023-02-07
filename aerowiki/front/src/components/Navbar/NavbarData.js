import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

export const NavbarData = [
    {
        title: 'Comercial',
        path: '/comercial',
        icon: <FontAwesomeIcon icon={faIcons.faPhone} />,
        iconOpened: <FontAwesomeIcon icon={faIcons.faCaretUp} />,
        iconClosed: <FontAwesomeIcon icon={faIcons.faCaretDown} />,
        class: 'nav-text',
        subnav: [
            {
                title: 'Vendas',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Campanhas',
                path: '/subareas',
                class: 'nav-text'
            }
        ]
    },
    {
        title: 'Marketing',
        path: '/marketing',
        icon: <FontAwesomeIcon icon={faIcons.faCommentsDollar} />,
        iconOpened: <FontAwesomeIcon icon={faIcons.faCaretUp} />,
        iconClosed: <FontAwesomeIcon icon={faIcons.faCaretDown} />,
        class: 'nav-text',
        subnav: [
            {
                title: 'Campanhas',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Processo Recrutador',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Vendas',
                path: '/subareas',
                class: 'nav-text'
            }
        ]
    },
    {
        title: 'Relações Externas',
        path: '/relacoes',
        icon: <FontAwesomeIcon icon={faIcons.faHandshake} />,
        iconOpened: <FontAwesomeIcon icon={faIcons.faCaretUp} />,
        iconClosed: <FontAwesomeIcon icon={faIcons.faCaretDown} />,
        class: 'nav-text',
        subnav: [
            {
                title: 'Parceiros',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Eventos',
                path: '/subareas',
                class: 'nav-text'
            }
        ]
    },
    {
        title: 'Pesquisa & Desenvolvimento',
        path: '/ped',
        icon: <FontAwesomeIcon icon={faIcons.faLightbulb} />,
        iconOpened: <FontAwesomeIcon icon={faIcons.faCaretUp} />,
        iconClosed: <FontAwesomeIcon icon={faIcons.faCaretDown} />,
        class: 'nav-text',
        subnav: [
            {
                title: 'Grupos de Trabalho',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Grupos de Trab. & Des.',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Serviços',
                path: '/subareas',
                class: 'nav-text'
            }
        ]
    },
    {
        title: 'Operações',
        path: '/operacoes',
        icon: <FontAwesomeIcon icon={faIcons.faGlobe} />,
        iconOpened: <FontAwesomeIcon icon={faIcons.faCaretUp} />,
        iconClosed: <FontAwesomeIcon icon={faIcons.faCaretDown} />,
                class: 'nav-text',
        subnav: [
            {
                title: 'Gestão',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Gestão de Pessoas',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Gestão Financeira',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Processo Recrutador',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Contratos',
                path: '/subareas',
                class: 'nav-text'
            }
        ]
    },
    {
        title: 'Segmentos',
        path: '/segmentos',
        icon: <FontAwesomeIcon icon={faIcons.faPeopleGroup} />,
        iconOpened: <FontAwesomeIcon icon={faIcons.faCaretUp} />,
        iconClosed: <FontAwesomeIcon icon={faIcons.faCaretDown} />,
                class: 'nav-text',
        subnav: [
            {
                title: 'SEGMI',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'SEGAP',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'SEOTEC',
                path: '/subareas',
                class: 'nav-text'
            }
        ]
    },
    {
        title: 'Presidência',
        path: '/presidencia',
        icon: <FontAwesomeIcon icon={faIcons.faUserTie} />,
        iconOpened: <FontAwesomeIcon icon={faIcons.faCaretUp} />,
        iconClosed: <FontAwesomeIcon icon={faIcons.faCaretDown} />,
                class: 'nav-text',
        subnav: [
            {
                title: 'Direx',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Comissão Eleitoral',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Comissão de Diversidade',
                path: '/subareas',
                class: 'nav-text'
            },
            {
                title: 'Comissão de LGPD',
                path: '/subareas',
                class: 'nav-text'
            }
        ]
    }
]