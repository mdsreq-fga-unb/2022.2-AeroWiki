import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

export const UserMenuData = [
    {
        title: 'Meus Dados',
        path: '/user',
        icon: <FontAwesomeIcon icon={faIcons.faUserPen} />,
        class: 'nav-text'
    },
    {
        title: 'Sair',
        path: '/logout',
        icon: <FontAwesomeIcon icon={faIcons.faRightFromBracket} />,
        class: 'nav-text'
    }
]