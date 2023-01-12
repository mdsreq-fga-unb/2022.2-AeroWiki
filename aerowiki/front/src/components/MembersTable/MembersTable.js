import './MembersTable.css'
import React from 'react'
import { MembersData } from './MembersData'
import { json, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { api } from '../../api/config'
console.log('alowwwww2:', MembersData)
// const sendform = async () => {
//     // e.preventDefault();
//     try {
//         const response = await MembersDataname()
//         console.log("certo")
//         console.log(JSON.stringify(response.data))
//         sessionStorage.setItem('formdataa',JSON.stringify(response.data))
        
        
        
//     } catch (error) {
//         console.log("errado")
//         console.log(error)
//     }
// }
// sendform()

// const formdataa = sessionStorage.getItem('formdataa')

// const response = await sendform()

//const usersDataa = api.get('/membros')
//console.log(usersDataa)

// const membersDatatta = [] ;
//  const usersDataaa = api.get('/membros')
//  .then(response => response)
//  .then(jazonprovResponse => {
//     membersDatatta = jazonprovResponse});
//     console.log("alllowww:", membersDatatta)
 
//  const usersData = async () => {
//     const {data} = await api.get('/membros');
//     console.log('data dentro da função', data);
//     return data;
//  }
 
//  console.log('print da')
//  const response = await api.get('/membros')

//  const ojson = await response.data.json()
 
//  console.log("json:", ojson)
// const usersData = async () =>  {
//     try {
//       const {data:response} = await api.get('/membros') //use data destructuring to get data from the promise object
//       await return response
//     } catch (error) {
//       console.log(error);
//     }
//   }

//  await api.get('/membros')
//  .then(response => console.log(response.data))


// console.log("users:", usersData)

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
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </div>
                                        <div id='member-sector'>
                                            <Link to={item.area_path}>{item.area}</Link>
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
