import TaskController from "../controllers/Task.controller.js";

const routes = (app) => {
    app.post('/todo', TaskController.createTask)
    app.get('/todo', TaskController.getAllTasks)
    app.get('/todo/:userId', TaskController.getTaskWithId)
    app.get('/searchtodo', TaskController.getTaskWithUsernameQuery )
    app.put('/todo/:userId', TaskController.updateTask)
    app.delete('/todo/:userId', TaskController.deleteTask)
}

export default {
    routes
}