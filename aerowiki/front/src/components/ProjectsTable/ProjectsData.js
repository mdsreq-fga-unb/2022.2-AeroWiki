import { getProjects } from '../../services/getProjects'

export async function projectsData(){
    try {
        const response = await getProjects()
        const ProjectsData = JSON.stringify(response.data)
        sessionStorage.setItem('projectsData', ProjectsData)
    }
    catch (err) {
        console.log("errado")
        console.log(err);
    }
}
projectsData()

const ProjectsData = eval(sessionStorage.getItem('projectsData'))
export { ProjectsData }