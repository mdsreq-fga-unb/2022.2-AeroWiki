import './MembersTable.css'
import React from 'react'
import { MembersData } from './MembersData'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

function MembersTable() {
  return (
    <>
    <div id='members-table'>
        <div id='columns-tags'>
            <span>Nome</span>
            <span>Setor</span>
            <span>E-mail</span>
            <span>Telefone</span>
            <span>Cargo</span>
        </div>
        <div id='members-list'>
            {MembersData.map((item, index) => {
                return(
                    <div id='member-info' key={index}> 
                        <Link to={item.path} id='member-name'>
                            {item.icon}
                            <span>{item.member_name}</span>
                        </Link>
                        <div id='member-sector'>
                            <Link to={item.area_path}>{item.area}</Link>
                            <Link to={item.subarea_path}>{item.subarea}</Link>
                        </div>
                        <span>{item.email}</span>
                        <span>{item.telephone}</span>
                        <span>{item.role}</span>
                    </div>
                )
            })}
        </div> 
    </div>

    </>
  )
}

export default MembersTable
