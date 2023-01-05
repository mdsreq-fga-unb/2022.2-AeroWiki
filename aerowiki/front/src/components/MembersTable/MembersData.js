import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-regular-svg-icons'

export const MembersData = [
    {
        member_name: 'Cansado',
        path: '/membros/id_cansado',
        area: 'Operações',
        area_path: '/operacoes',
        subarea: 'Recursos Humanos',
        subarea_path: '/operacoes/rh',
        icon: <FontAwesomeIcon icon={faIcons.faUserCircle} />,
        email: 'cansado@zenit.com',
        role: 'Membro',
        telephone: '9999-9999'
    },
    {
        member_name: 'Cansado da Silva Pererira Rocha',
        path: '/membros/id_cansado2',
        area: 'Marketing',
        area_path: '/marketing',
        subarea: 'sla',
        subarea_path: '/marketing/sla',
        icon: <FontAwesomeIcon icon={faIcons.faUserCircle} />,
        email: 'cansadodasilvapereirarocha2023@zenit.com',
        role: 'Gerente',
        telephone: '9999-9314'
    },
    {
        member_name: 'Nome Sobrenome',
        path: '/membros/id_Nome_Sobrenome',
        area: 'Presidência',
        area_path: '/presidencia',
        subarea:'',
        subarea_path:'',
        icon: <FontAwesomeIcon icon={faIcons.faUserCircle} />,
        email: 'arthur@zenit.com',
        role: 'Presidente',
        telephone: 'xxxxx-xxxx'
    }
]