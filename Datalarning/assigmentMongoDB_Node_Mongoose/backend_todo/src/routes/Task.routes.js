import TaskController from "../controllers/Task.controller.js";


// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    //CREATE
    app.post('/todo', TaskController.createTask)

    //READ
    app.get('/todo', TaskController.getAllTasks)
    app.get('/todo/:userId', TaskController.getTaskWithId)
    app.get('/tasksearch/:name', TaskController.getTaskWithUsernameQuery)


    //UPDATE
    app.put('/todo/:userId', TaskController.updateTaskID)
    app.put('/todoDone/:id', TaskController.toggleTaskIsDone)

    //DELETE
    app.delete('/todo/:userId', TaskController.deleteTask)
}

export default {
    routes
}