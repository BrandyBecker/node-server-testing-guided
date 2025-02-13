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

        it('should return json formatted response', function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });

        it('should return an api property w the value up inside the body', function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({api:'up'});
                expect(res.body.api).toBe("up")
            });
        });

    });
});

//the endpoint returns the correct http status code based on input
//the endpoint returns the right data format (json in our case)
//the endpoint returns the right data in the body based on input