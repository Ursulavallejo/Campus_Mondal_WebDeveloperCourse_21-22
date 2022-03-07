import Axios from 'axios'

const TasksAPI = Axios.create({
    baseURL: 'http://localhost:3002'
})

export default TasksAPI