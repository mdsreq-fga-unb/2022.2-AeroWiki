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
                <div id='mtable-labels'>
                    <div id='labels'>
                        <span id='name-label'>Nome</span>
                        <span id='sector-label'>Setor</span>
                        <span id='email-label'>E-mail</span>
                        <span id='telephone-label'>Telefone</span>
                        <span id='role-label'>Cargo</span>
                    </div>
                </div>
                <div id='mtable-members'>
                    {MembersData[0].map((item, index) => {
                        return (
                            <>
                                <div id='mtable-member'>
                                    <div id='member-info' key={index}>
                                        <div id='member-name'>
                                            <FontAwesomeIcon icon={faIcons.faCircleUser} />
                                            <span>{item.name}</span>
                                        </div>
                                        <div id='member-sector'>
                                            <Link to={item.path}>{item.area}</Link>
                                            <Link to={item.subarea_path}>{item.subarea}</Link>
                                        </div>
                                        <span id='member-email'>{item.email}</span>
                                        <span id='member-telephone'>{item.telephone}</span>
                                        <span id='member-role'>{item.role}</span>
                                    </div>

                                    <div id='edit-member'>
                                        <Link to='#'><FontAwesomeIcon icon={faIcons.faPen} /></Link>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default MembersTable