import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import {describe, it as test} from 'mocha'
import app from '../src/Server.js'
import StatusCode from "../config/StatusCode.js";


Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const userId = '6246c69946a57c8f8225bf92' // Requires new unique ID every time you want to run this testsuite
const todo = {
    task: randomString,
    username: randomString,
}

const testingNonExistingRoute = ()=>{
    describe('Testing a route that does not exist', ()=>{
        test('Expecting 404 not found', (done)=>{
            Chai.request(app)
                .get(`/${randomString}`)
                .end((request, response)=>{
                    response.should.have.a.status(StatusCode.NOT_FOUND)
                    done()
                })
        })
    })
}

const createTask = () => {
    describe('TESTING CREATE(POST) method for user entity', () => {
        test('Expecting a task to be created', (done) => {
            Chai.request(app)
                .post('/todo')
                .send(todo)
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.CREATED)
                    response.body.should.be.an('object')
                    response.body.should.have.property('task').equal(todo.task)
                    response.body.should.have.property('username').equal(todo.username)
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

const updateTask = () => {
    describe('Updating (PUT) a user in the database', () => {
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
    describe('Deleting (DELETE) a user in the database', () => {
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


describe('TESTING THE USER_API ROUTE', () =>{
    testingNonExistingRoute()
    createTask()
    getAllTasks()
    updateTask()
    deleteTask()

})
