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
                title: 'Subárea 1',
                path: '/SubAreas',
                class: 'nav-text'
            },
            {
                title: 'Subárea 2',
                path: '/SubAreas',
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
                title: 'Subárea 1',
                path: '/SubAreas',
                class: 'nav-text'
            },
            {
                title: 'Subárea 2',
                path: '/SubAreas',
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
                title: 'Subárea 1',
                path: '/SubAreas',
                class: 'nav-text'
            },
            {
                title: 'Subárea 2',
                path: '/SubAreas',
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
                title: 'Subárea 1',
                path: '/SubAreas',
                class: 'nav-text'
            },
            {
                title: 'Subárea 2',
                path: '/SubAreas',
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
                title: 'Subárea 1',
                path: '/SubAreas',
                class: 'nav-text'
            },
            {
                title: 'Subárea 2',
                path: '/SubAreas',
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
                title: 'Subárea 1',
                path: '/SubAreas',
                class: 'nav-text'
            },
            {
                title: 'Subárea 2',
                path: '/SubAreas',
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
                title: 'Subárea 1',
                path: '/SubAreas',
                class: 'nav-text'
            },
            {
                title: 'Subárea 2',
                path: '/SubAreas',
                class: 'nav-text'
            }
        ]
    }
]