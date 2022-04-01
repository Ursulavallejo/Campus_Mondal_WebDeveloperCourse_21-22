import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import {describe, it as test} from 'mocha'
import app from '../src/Server.js'
import StatusCode from "../config/StatusCode.js";


Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const userId = '6246c629d3c4ba6412ef0e31' // Requires new unique ID every time you want to run this testsuite
const todo = {
    task: randomString,
    username: randomString,
}

const newUser = {
    username: 'Magnus',
    task: 'go shopping'
}

const createTask = () => {
    describe('TESTING CREATE(POST) method for user entity', () => {
        test('Expecting a task to be created', (done) => {
            Chai.request(app)
                .post('/todo')
                .send(newUser)
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.CREATED)
                    response.body.should.be.an('object')
                    response.body.should.have.property('task').equal(newUser.task)
                    response.body.should.have.property('username').equal(newUser.username)
                    done()
                })
        })
    })
}

const getAllTasks = () => {
    describe('Fetching all tasks-todo(GET)', () => {
        test('Expecting to return all the tasks-todo', (done) => {
            Chai.request(app)
                .get('/todo')
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.an('array')
                    response.body.length.should.be.equal(response.body.length)
                    done()
                })
        })
    })
}

const updateTaskId = () => {
    describe('Updating (PUT) a task in the database', () => {
        test('Expecting a user to be updated', (done) => {
            Chai.request(app)
                .put(`/todo/${userId}`)
                .send(todo)
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.OK)
                    response.body.should.be.an('object')
                    response.body.should.have.property('_id').equal(userId)
                    response.body.should.have.property('task').equal(todo.task)
                    response.body.should.have.property('username').equal(todo.username)
                    done()
                })

        })
    })
}

const deleteTask = () => {
    describe('Deleting (DELETE) a task in the database', () => {
        test('Expecting a user to be deleted', (done) => {
            Chai.request(app)
                .delete(`/todo/${userId}`)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    done()
                })
        })
    })
}


describe('TESTING THE TASK_API ROUTE', () =>{
    createTask()
    getAllTasks()
    updateTaskId()
    deleteTask()
})
