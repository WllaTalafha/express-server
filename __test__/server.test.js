'use strict';

const {app} = require('../server');

const supertest = require('supertest');

const request = supertest(app); 

describe ('testing API server',()=>{
    it('testing main route',async()=>{
        const response = await request.get('/');
        expect(response.text).toEqual('Hello World');
        
    })
    it('testing /person route', async()=>{
        const response = await request.post('/person');
        expect(typeof response.body).toEqual('object');
    })
})