import UserController from "../controller/UserController.js";


// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
//CREATE
    app.post('/createTodo/', UserController.createTodo)

//READ
    app.get('/getAllTodos', UserController.getAllTodos)
    app.get('/getUserNames/name', UserController.getUserNames)
    app.get('/getUserByName/:name', UserController.getUserByName)

    //UPDATE
    app.put('/updateTodoDataByName/', UserController.updateUserByName)

//DELETE
    app.delete('/deleteTodoDataByName/:name', UserController.deleteUserByName)
}

export default {
    routes
}