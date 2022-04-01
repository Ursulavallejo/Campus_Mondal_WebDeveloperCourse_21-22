import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import {describe, it as test, it} from 'mocha'
import app from '../src/server.js'
import StatusCode from "../config/StatusCode.js";

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)

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

//Using Expect match with insomnia

const testNonExistingRouteExpect = () => {
    describe('Testing a route that does not exist with expect', ()=> {
        it('should expect 404 not found', ( done) => {
            Chai.request(app)
                .get(`/${randomString}`)
                .end((request,response) => {
                        // response.should.have.a.status(404)
                        expect(response.status).to.equal(StatusCode.NOT_FOUND)
                        done()
                    }
                )
        })
    })
}

const testingExistingRoute = () => {
    describe('Test a route that does exists', () => {
        it('should expect 200 OK', (done) => {
            Chai.request(app)
                .get('/')
                .end((request, response) => {
                    response.should.have.a.status(StatusCode.OK)
                    Chai.expect(response.text).to.equal('API is Alive!!')
                    done()
                })
        })
    })
}


const testingExistingRouteExpect = () => {
    describe('Test a route that does exists with expect', () => {
        it('should expect 200 OK', (done) => {
            Chai.request(app)
                .get('/')
                .end((request, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.text).to.equal('API is Alive!!')
                    done()
                })
        })
    })
}




describe('TESTING API ALIVE ROUTES', () => {
    testingNonExistingRoute()
    testingExistingRoute()
    testNonExistingRouteExpect()
    testingExistingRouteExpect()
})