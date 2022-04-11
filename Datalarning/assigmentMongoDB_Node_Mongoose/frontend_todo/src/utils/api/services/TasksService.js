import http from '../TasksAPI'

const taskTodoUrl = `/todo`


const getAllTasks = () => {
    return http.get(taskTodoUrl)
}

const createTask = (newName) => {
    return http.post(taskTodoUrl,newName)
}

const updateTask = (_id, changedTask) => {
    return http.put(`/todo/${_id}`, changedTask)
}

const deleteTask = (_id) => {
    return http.delete(`/todo/${_id}`)
}

const getTaskWithId = (_id) => {
    return http.get(`/todo/${_id}`)
}

const getTaskWithUsernameQuery = (name) => {
    return http.get(`/tasksearch/${name}`)
}

const toggleTaskIsDone  = (_id) => {
    return http.put(`/todoDone/${_id}`)
}

export default {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskWithId,
    getTaskWithUsernameQuery,
    toggleTaskIsDone
}