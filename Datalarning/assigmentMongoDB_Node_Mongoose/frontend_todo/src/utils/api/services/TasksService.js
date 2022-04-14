import http from '../TasksAPI'

const taskTodoUrl = `/todo`


const getAllTasks = () => {
    return http.get(taskTodoUrl)
}

const createTask = (newName) => {
    return http.post(taskTodoUrl,newName)
}

const updateTask = (id, changedTask) => {
    return http.put(`/todo/${id}`, changedTask)
}

const deleteTask = (id) => {
    return http.delete(`/todo/${id}`)
}

const getTaskWithId = (id) => {
    return http.get(`/todo/${id}`)
}

const getTaskWithUsernameQuery = (name) => {
    return http.get(`/tasksearch/${name}`)
}

const toggleTaskIsDone  = (id, payload) => {
    return http.put(`/todoDone/${id}`, payload)
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