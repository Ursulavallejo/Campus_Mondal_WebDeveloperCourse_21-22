import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it} from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const testNonExistingRoute = () => {
    describe('Testing a route that does not exist', ()=> {
        it('should expect 404 not found', ( done) => {
            Chai.request(app)
                .get('/randomUrl')
                .end((request,response) => {
                        response.should.have.a.status(404)
                        done()
                    }
                )
        })
    })
}

//Using Expect match with insomnia

const testNonExistingRouteExpect = () => {
    describe('Testing a route that does not exist with expect', ()=> {
        it('should expect 404 not found', ( done) => {
            Chai.request(app)
                .get('/randomUrl')
                .end((request,response) => {
                        // response.should.have.a.status(404)
                        expect(response.status).to.equal(404)
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
                    response.should.have.a.status(200)
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
                    expect(response.status).to.equal(200)
                    // expect(response.text).to.equal('API is Alive!!')
                    expect(response.text).to.equal('API is Alive!!')
                    done()
                })
        })
    })
}




describe('TESTING API ALIVE ROUTES', () => {
    testNonExistingRoute()
    testingExistingRoute()
    testNonExistingRouteExpect()
    testingExistingRouteExpect()
})