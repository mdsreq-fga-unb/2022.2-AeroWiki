import { Add_membro } from '../../services/add_membro'

const sendform = async () => {
    try {
        const response = await Add_membro()
        console.log("certo")
        const membersData = JSON.stringify(response.data)
        sessionStorage.setItem('formdata', membersData)
        
    } catch (error) {
        console.log("errado")
        console.log(error)
    }
}
sendform()

const MembersData = JSON.parse("[" + sessionStorage.getItem('formdata') + "]");
console.log("MembersData", MembersData)

export {MembersData}