import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../index.js'
import Url from '../models/url.js'

chai.use(chaiHttp)
chai.should()

describe("URLs", () => {
    describe("GET /", () => {
        it("Get all URLs", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
    })

    describe("POST /", () => {
        it("Post url", (done) => {
            chai.request(app)
                .post('/shorten-url')
                .send({originalUrl: 'www.google.com'})
                .end((err, res) => {
                    console.log(res)
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    res.body.should.have.property('originalUrl')
                    res.body.should.have.property('shortenedUrl')
                })
                done()
        })
    })
})