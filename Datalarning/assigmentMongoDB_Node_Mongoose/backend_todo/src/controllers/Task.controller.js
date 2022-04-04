import TaskModel from "../models/Task.model.js"
import StatusCode from "../../config/StatusCode.js"

const createTask = async (req, res) => {
    const user = new TaskModel({
        task: req.body.task, name: req.body.name, done: req.body.done
    })
    try {
        const response = await user.save()
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const getAllTasks = async (req, res) => {
    try {
        const response = await TaskModel.find()
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}


const getTaskWithId = async (req, res) => {
    try {
        const response = await TaskModel.findById(req.params.userId)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error occurred while trying to retrieve user with ID: ' + req.params.userId,
            error: error.message
        })
    }
}

const getTaskWithUsernameQuery = async (req, res) => {
    try {
        const response = await TaskModel.find({name: req.query.name})
        response.length !== 0
            ? res.status(StatusCode.OK).send(response)
            : res.status(StatusCode.NOT_FOUND).send({message: 'Could not find user with username: ' + req.query.name})
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error occurred while trying to retrieve user with username : ' + req.params.userId,
            error: error.message
        })
    }
}

const updateTaskID = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(StatusCode.BAD_REQUEST).send({message: 'cannot update empty values'})
        }
        const response = await TaskModel.findByIdAndUpdate(req.params.userId, {
            task: req.body.task,
            name: req.body.name,
            done: req.body.done
        }, {new: true})
        response.length !== 0
            ? res.status(StatusCode.OK).send(response)
            : res.status(StatusCode.NOT_FOUND).send({message:'Could not find user with id: ' + req.params.userId})
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error occurred while trying to update values of the user with ID : ' + req.params.userId,
            error: error.message
        })
    }
}


/// check!!
// const updateTaskByName = async (req, res) => {
//     try {
//         if (!req.body) {
//             return res.status(StatusCode.BAD_REQUEST).send({message: 'cannot update empty values'})
//         }
//         const response = await TaskModel.findOneAndUpdate({name: req.query.name}, {
//             task: req.body.task,
//             name: req.body.name,
//             newName: req.body.name,
//             done: req.body.done
//         }, {new: true})
//         res.status(StatusCode.OK).send(response)
//     } catch (error) {
//         res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
//             message: 'Error occurred while trying to update values of the user with Username : ' + req.params.userId,
//             error: error.message
//         })
//     }
// }

const deleteTask = async (req, res) => {
    try {
        const response = await TaskModel.findByIdAndDelete(req.params.userId)
        await TaskModel.findByIdAndDelete(req.params.userId)
        res.status(StatusCode.OK).send({
            message: `Successfully deleted the USER with username: ${response.name}  and ID: ${req.params.userId}`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error occurred while trying to delete user with the ID:' + req.params.userId,
            error: error.message
        })
    }
}

const toggleTaskDone = (req, res) => {
    const _id = Number(req.params.userId)
    TaskModel[_id].done = !TaskModel[_id].done
    res.status(StatusCode.ACCEPTED).send(TaskModel[_id])
}

export default {
    createTask,
    getAllTasks,
    getTaskWithId,
    getTaskWithUsernameQuery,
    updateTaskID,
    // updateTaskByName,
    deleteTask,
    toggleTaskDone
}