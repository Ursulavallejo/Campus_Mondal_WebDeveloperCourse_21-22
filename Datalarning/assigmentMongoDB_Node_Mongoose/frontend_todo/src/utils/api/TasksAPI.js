import Axios from "axios";


const TasksAPI = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default TasksAPI