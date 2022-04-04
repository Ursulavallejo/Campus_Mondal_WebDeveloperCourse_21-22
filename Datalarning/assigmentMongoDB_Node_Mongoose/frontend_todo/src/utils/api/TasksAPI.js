import Axios from "axios";


const hostUrl = 'http://localhost'
const port = 3001

const url = `${hostUrl}:${port}`

const TasksAPI = Axios.create({
    baseURL: url
})

export default TasksAPI