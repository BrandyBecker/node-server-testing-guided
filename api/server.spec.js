const request = require('supertest');

const server = require('./server.js');

describe('server', function() {
    describe('GET /', function() {
        it('should return 200 OK', function() {
            //run the server
            // make a GET request to /
            return request(server)
            .get('/')
            .then(res => {
           // see that the http code of the response is 200
                expect(res.status).toBe(200);
            });
        });
    });
});