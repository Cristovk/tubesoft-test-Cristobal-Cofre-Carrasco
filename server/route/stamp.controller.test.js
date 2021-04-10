
const request = require("supertest")
const stamp = require('./Route')


describe('get all data from time marks', () => {
    test('get path response',  done => {
        request(stamp)
        .get("/all")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done()

        })
    })
} )