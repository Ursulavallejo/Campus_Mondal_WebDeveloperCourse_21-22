import TaskModel from "../models/Task.model.js"
import StatusCode from "../../utils/StatusCode.js"
// import dotenv from 'dotenv'
//
// const database = process.env.MONGODB_URL

const createTask = async (req, res) => {

    const {task, name, done} = req.body
    if (task && name && done) {
        const newTask = {
            task: task,
            name: name,
            done: false
        }


        try {
            const taskUser = new TaskModel(newTask)
            const response = await taskUser.save()
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
        TaskModel.findById(req.params.id, (error, task) => {
            if (error) {
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error getting task if`
                })
            } else {
                res.status(StatusCode.OK).send(task ? task : {
                    message: `Task with id: ${req.params.id} not found`
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
        TaskModel.findByIdAndUpdate(req.params.id, updatedTask, {new: true}, (error, task) => {
            if (error) {

                res.status(StatusCode.BAD_REQUEST).send([{
                    error: `Could not find task with id: ${req.params.id}`
                }])
            } else {

                res.status(StatusCode.OK).send(task ? task : {
                    message: `Task with id: ${req.params.id} not found`
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
        TaskModel.findByIdAndRemove(req.params.id, (error, task) => {
            if (error) {
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error deleting task`
                })
            } else {
                res.status(StatusCode.OK).send(
                    task ?
                        {
                            message: `Task with id: ${req.params.id} was deleted from database`
                        } :
                        {
                            message: `Task with id: "${req.params.id}" not found`
                        })
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error deleting task`
        })
    }
}

// const toggleTaskDone = (req, res) => {
//
//     try {
//         TaskModel.findByIdAndUpdate(req.params.id, (error, task) => {
//             if (error) {
//                 res.status(StatusCode.BAD_REQUEST).send({
//                     error: `Error changing done`
//                 })
//             } else {
//                 TaskModel[req.params.id].done = !TaskModel[req.params.id].done
//                 res.status(StatusCode.OK).send(TaskModel[req.params.id].done)
//             }
//         })
//     } catch (error) {
//         res.status(StatusCode.BAD_REQUEST).send({
//             error: `Error deleting task`
//         })
//     }
// }

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
    // toggleTaskDone
}