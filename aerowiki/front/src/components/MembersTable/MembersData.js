import { getMembers } from '../../services/getMembers'

const membersData = async () => {
    try {
        const response = await getMembers()
        console.log("certo")
        const membersData = JSON.stringify(response.data)
        sessionStorage.setItem('membersData', membersData)
        
    } catch (error) {
        console.log("errado")
        console.log(error)
    }
}
membersData()

const MembersData = eval(sessionStorage.getItem('membersData'))
console.log("MembersData", MembersData)

export {MembersData}