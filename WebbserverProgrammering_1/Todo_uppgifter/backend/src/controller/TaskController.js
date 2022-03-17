import TodoDatabase from "../data/todoDatabase.js";
import todoDatabase from "../data/todoDatabase.js";


const createTodo = (req,res) => {
    const {task, name} = req.body
    if (name && task) {
        const newObject = {
            id: TodoDatabase.length,
            name: name,
            task: task,
            done: false,
        }
        TodoDatabase.push(newObject)
        res.status(201).send(TodoDatabase)
    }
}


const getAllTodos = (req,res) => {
    res.status(200).send(TodoDatabase)
}

const userNames = () => {
    const names = []
    TodoDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getUserNames = (req,res) => {
    const responseFromDb = userNames()
    res.status(200).send(responseFromDb)
}

const searchUserByName = (name) => {
    let object = `Could not find "${name}" in database`
    TodoDatabase.forEach(todo => {
        if (name === todo.name) {
            object = todo
            return todo
        }
    })
    return object
}

const getUserByName = (req,res) => {
    const name = req.params.name
    const responseFromDb = searchUserByName(name)
    res.status(200).send(responseFromDb)
}

const modifyUserByName = (name, newName, task) => {
    let object = `Could not find "${ name }" in database`
    TodoDatabase.forEach(todo => {
        if (name === todo.name) {
            todo.name = newName
            todo.task = task
            object = todo
            return todo
        }
    })
    return object
}
const updateUserByName = (req,res) => {
    const { name, newName, task } = req.body
    const response = modifyUserByName(name, newName, task)
    res.status(202).send(response)
}

const modifyTaskDone = (id, name , task) => {
    let object = `The task of "${ name }" is not longer on the list`
    TodoDatabase.forEach(todo => {
        if (name=== todo.name) {
            todo.id = id
            todo.task = task
            todo.done = true
            object = todo
            return todo
        }
    })
    return object
}


const taskIsDone = () => {
    const tasksDone = []
    TodoDatabase.forEach(todo => {
        if (todo.done === true)
        tasksDone.push(todo)
    })
    return tasksDone
}

const getTasksAreDone = (req,res) => {
    const responseFromDb = taskIsDone()
    res.status(200).send(responseFromDb)
}


const updateDone = (req,res) => {
    const { id, name , task} = req.body
    const response = modifyTaskDone(id, name , task)
    res.status(202).send(response)
}

const taskIsPending = () => {
    const tasksPending= []
    TodoDatabase.forEach(todo => {
        if (todo.done === false)
            tasksPending.push(todo)
    })
    return tasksPending
}

const getTasksArePending = (req,res) => {
    const responseFromDb = taskIsPending()
    res.status(200).send(responseFromDb)
}

const removeUserByName = (name) => {
    let text = `User with name : "${name}"`

    for (let i = 0; i < TodoDatabase.length; i++) {
        if(name === TodoDatabase[i].name){
            text += `was deleted from database!`
            TodoDatabase.splice(i,1)
            return text
        }
    }
    text += `does not exist in database!`
    return text
}

const deleteUserByName = (req,res) => {
    const name = req.params.name
    const responseFromDB = removeUserByName(name)

    res.status(200).send(responseFromDB)

}

const toggleTaskDone = (req, res) => {
    const id = Number(req.params.id)
    todoDatabase[id].done = !todoDatabase[id].done
    res.status(202).send(todoDatabase[id])
}

export default {
    createTodo,
    getAllTodos,
    getUserNames,
    getUserByName,
    updateUserByName,
    deleteUserByName,
    updateDone,
    getTasksAreDone,
    getTasksArePending,
    toggleTaskDone
}