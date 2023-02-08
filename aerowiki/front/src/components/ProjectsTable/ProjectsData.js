import { getProjects } from '../../services/getProjects'

export const projectsData = async() => {
    try {
        const response = await getProjects()
        sessionStorage.setItem('projectsData', JSON.stringify(response.data))
    }
    catch (err) {
        console.log(err)
    }
}