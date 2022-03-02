import http from '../TasksAPI'

const getAllTodos = () => {
    return http.get('/getAllTodos')
}

const createTodoData = (newUser) => {
    return http.post('/createTodo/', newUser)
}

const updateDataByName = (changeUser) => {
    return http.put('/updateTodoDataByName/',changeUser)
}

const deleteDataByName = (name) => {
    return http.delete(`/deleteTodoDataByName/${ name }`)
}

const getUserByName = (name) => {
    return http.get(`/getUserByName/${ name }`)
}

export default {
    getAllTodos,
    createTodoData,
    updateDataByName,
    deleteDataByName,
    getUserByName,
}