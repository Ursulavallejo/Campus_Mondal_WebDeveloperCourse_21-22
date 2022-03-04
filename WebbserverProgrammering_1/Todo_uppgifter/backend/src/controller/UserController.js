import TodoDatabase from "../data/todoDatabase.js";


const createTodo = (req,res) => {
    const {task, name} = req.body
    if (name && task) {
        const newObject = {
            id: TodoDatabase.length,
            name: name,
            task: task,
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
    TodoDatabase.forEach(user => {
        if (name === user.name) {
            object = user
            return user
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
    TodoDatabase.forEach(user => {
        if (name === user.name) {
            user.name = newName
            user.task = task
            object = user
            return user
        }
    })
    return object
}

const updateUserByName = (req,res) => {
    const { name, newName, task } = req.body
    const response = modifyUserByName(name, newName, task)
    res.status(202).send(response)
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

export default {
    createTodo,
    getAllTodos,
    getUserNames,
    getUserByName,
    updateUserByName,
    deleteUserByName
}