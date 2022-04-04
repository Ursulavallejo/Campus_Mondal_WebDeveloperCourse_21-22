import http from '../TasksAPI'

const getAllTasks = () => {
    return http.get('/todo')
}

const createTask = (newUser) => {
    return http.post('/todo',newUser)
}

const updateTask = (changedUser) => {
    return http.put('/todo/:userId',changedUser)
}

const deleteTask = (userId) => {
    return http.delete(`/todo/:userId`)
}

export default {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
}