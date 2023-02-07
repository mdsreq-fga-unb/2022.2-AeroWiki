import { getMembers } from '../../services/getMembers'

export const membersData = async () => {
    try {
        const response = await getMembers()
        sessionStorage.setItem('membersData', JSON.stringify(response.data))
    } catch (err) {
        console.log(err)
    }
}