import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

export const ProjectsData = [
    {
        title: 'Processo Seletivo 23.1',
        path: '/operacoes/rh/ps23.1,',
        area: 'Operações',
        area_path: '/operacoes',
        subarea: 'Recursos Humanos',
        subarea_path: '/operacoes/rh',
        icon: <FontAwesomeIcon icon={faIcons.faUserPen} />,
        img: 'https://static.wixstatic.com/media/bcee93_0f67ede12cd34f89995377eb1af6f38e~mv2_d_4928_3280_s_4_2.jpg/v1/fill/w_1349,h_604,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bcee93_0f67ede12cd34f89995377eb1af6f38e~mv2_d_4928_3280_s_4_2.jpg'
    },
    {
        title: 'Arrecadação 2023',
        path: '/marketing/dinheiro/arrecadacao-2023',
        area: 'Marketing',
        area_path: '/marketing',
        subarea: 'DINHEIRO',
        subarea_path: '/marketing/dinheiro',
        icon: <FontAwesomeIcon icon={faIcons.faUserPen} />,
        img: 'https://static.wixstatic.com/media/bcee93_a2dd4fe5b3cb47c584ba4587e2d7689a~mv2_d_4032_3024_s_4_2.jpeg/v1/fill/w_1349,h_604,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bcee93_a2dd4fe5b3cb47c584ba4587e2d7689a~mv2_d_4032_3024_s_4_2.jpeg'
    },
    {
        title: 'Nome_do_Projeto',
        path: '/area/subarea/projeto',
        area: 'Area',
        area_path: '/area',
        subarea: 'Subarea',
        subarea_path: '/area/subarea',
        icon: <FontAwesomeIcon icon={faIcons.faUserPen} />,
        img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    }
]