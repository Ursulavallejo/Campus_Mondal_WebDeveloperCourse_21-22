import TaskModel from "../models/Task.model.js"
import StatusCode from "../../utils/StatusCode.js"


const createTask = async (req, res) => {

    const {task, name} = req.body
    if (task && name ) {
        const newTask = {
            task: task,
            name: name,
            done: false
        }

        try {
            const task = new TaskModel(newTask)
            const response = await task.save()
            res.status(StatusCode.CREATED).send(response)
        } catch (error) {
            res.status(StatusCode.BAD_REQUEST).send({error: Error`Error creating new task`})
        }
    } else {
        res.status(StatusCode.NO_CONTENT).send(`No body found`)
    }
}

const getAllTasks = async (req, res) => {

    try {
        TaskModel.find({}, (error, tasks) => {
            if (error) {
                res.status(StatusCode.BAD_REQUEST).send({error: `Error retrieving tasks`})
            } else {
                res.status(StatusCode.OK).send(tasks)
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({error: `Error getting tasks`})
    }
}

const getTaskWithId = async (req, res) => {
    try {
        TaskModel.findById(req.params.userId, (error, task) => {
            if (error) {
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error getting task if`
                })
            } else {
                res.status(StatusCode.OK).send(task ? task : {
                    message: `Task with id: ${req.params.userId} not found`
                })
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error getting task catch`
        })
    }
}

const getTaskWithUsernameQuery = async (req, res) => {

    try {
        TaskModel.find({name: req.params.name}, (error, task) => {
            if (error) {
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error getting task`
                })
            } else {
                res.status(StatusCode.OK).send(task.length > 0 ? task :
                    `Task with name: ${req.params.name} not found`)
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error getting task`
        })
    }
}

const updateTaskID = async (req, res) => {

    try {
        const updatedTask = {
            task: req.body.task,
            name: req.body.name
        }
        TaskModel.findByIdAndUpdate(req.params.userId, updatedTask, {new: true}, (error, task) => {
            if (error) {

                res.status(StatusCode.BAD_REQUEST).send([{
                    error: `Could not find task with id: ${req.params.userId}`
                }])
            } else {

                res.status(StatusCode.OK).send(task ? task : {
                    message: `Task with id: ${req.params.userId} not found`
                })
            }
        })
    } catch (error) {

        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error updating task`
        })
    }
}

const deleteTask = async (req, res) => {

    try {
        TaskModel.findByIdAndRemove(req.params.userId, (error, task) => {
            if (error) {
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error deleting task`
                })
            } else {
                res.status(StatusCode.OK).send(
                    task ?
                        {
                            message: `Task with id: ${req.params.userId} was deleted from database`
                        } :
                        {
                            message: `Task with id: "${req.params.userId}" not found`
                        })
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error deleting task`
        })
    }
}


// is not working!! Not sure how implemented with MOngo. On the project with the database in backend worked the one below this function that is commented.
const toggleTaskIsDone  = (req, res) => {

    try {
        TaskModel.findByIdAndUpdate(req.params.userId, (error, task) => {
            if (error) {
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error changing done`
                })
            } else {
                TaskModel[req.params.userId].done = !TaskModel[req.params.userId].done
                res.status(StatusCode.OK).send(TaskModel[req.params.userId].done)
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error deleting task`
        })
    }
}


// with a data base this one worked but not with Mongo!!!

// const toggleTaskDone = (req, res) => {
//     const _id = Number(req.params.id)
//     Task_database.tasks[_id].isDone = !Task_database.tasks[_id].isDone
//     res.status(202).send(Task_database.tasks[_id])
// }

export default {
    createTask,
    getAllTasks,
    getTaskWithId,
    getTaskWithUsernameQuery,
    updateTaskID,
    deleteTask,
    toggleTaskIsDone
}