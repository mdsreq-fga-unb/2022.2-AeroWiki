// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as faIcons from '@fortawesome/free-regular-svg-icons'
// import { api } from '../../api/config';

// async function getUserAccount() {
//         try{
//             const userData =  await api.get('/membros');     
//             console.log("UserData", userData);
//             return userData
//         } catch(error) {
//             console.log(error);
//         };
// }

// const memberData = await getUserAccount();

// console.log("memberData", memberData)

// function UsersData() {
//     const membroData = getUserAccount()
//     console.log(membroData)
//     return membroData.data
// }

// export { UsersData }

import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-regular-svg-icons'
import { MembersDataname } from '../../services/cadastrocopy'

const sendform = async () => {
    // e.preventDefault();
    try {
        const response = await MembersDataname()
        console.log("certo")
        console.log(JSON.stringify(response.data))
        const alow = JSON.stringify(response.data)
        const teste = JSON.parse("[" + alow + "]");
        console.log("credo", teste)
        sessionStorage.setItem('formdataa', alow)
        
        
        
    } catch (error) {
        console.log("errado")
        console.log(error)
    }
}
sendform()

const MembersData = JSON.parse("[" + sessionStorage.getItem('formdataa') + "]");
console.log("MembersData", MembersData)
export {MembersData}