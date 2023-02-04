import { getMembers } from '../../services/getMembers'

const membersData = async () => {
    try {
        const response = await getMembers()
        const membersData = JSON.stringify(response.data)
        sessionStorage.setItem('membersData', membersData)
        
    } catch (err) {
        console.log(err)
    }
}
membersData()

const MembersData = eval(sessionStorage.getItem('membersData'))
console.log("MembersData", MembersData)

export default MembersData