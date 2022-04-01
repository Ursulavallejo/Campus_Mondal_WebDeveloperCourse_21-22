import TaskController from "../controllers/Task.controller.js";


// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    //CREATE
    app.post('/todo', TaskController.createTask)

    //READ
    app.get('/todo', TaskController.getAllTasks)
    app.get('/todo/:userId', TaskController.getTaskWithId)
    app.get('/searchtodo', TaskController.getTaskWithUsernameQuery )


    //UPDATE
    app.put('/todo/:userId', TaskController.updateTaskID)
    app.put('/todo/updateTodoDataByName/', TaskController.updateTaskByName)
    app.put('/todoDone/:id', TaskController.toggleTaskDone)

    //DELETE
    app.delete('/todo/:userId', TaskController.deleteTask)
}

export default {
    routes
}