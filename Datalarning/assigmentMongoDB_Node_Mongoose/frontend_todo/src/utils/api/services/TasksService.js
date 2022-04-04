import http from '../TasksAPI'

const taskTodoUrl = `/todo`
const tasksTodoUrlById = `${taskTodoUrl}/:userId`

const getAllTasks = () => {
    return http.get(taskTodoUrl)
}

const createTask = (newName) => {
    return http.post(taskTodoUrl,newName)
}

const updateTask = (_id) => {
    return http.put(tasksTodoUrlById)
}

const deleteTask = (_id) => {
    return http.delete(tasksTodoUrlById)
}

const getTaskWithId = (_id) => {
    return http.get(tasksTodoUrlById)
}

const getTaskWithUsernameQuery = (name) => {
    return http.get(`/searchtodo?username=${name}`)
}

const toggleTaskDone  = (_id) => {
    return http.put(`/todoDone/${_id}`)
}

export default {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskWithId,
    getTaskWithUsernameQuery,
    toggleTaskDone
}