var expect = require('chai').expect;
var mongoose = require('mongoose');
var server = require('../server/index.js');
var request   = require('request');
var db      = require('../database/index.js');


describe('Testing the routes', function(){

    before('connect', function(){
        return mongoose.createConnection('mongodb://localhost/catsList')
    })

    beforeEach(function(){
        return db.Cat.remove({})
    })

    beforeEach(function(){
        var newCat = new db.Cat();
        newCat.catName  = "mouse ";
        newCat.ownerEmail = "Alaa";
        newCat.imageUrl  = "beautifulcat.png";
        newCat.adoptionMessage   = "tacke care";
        return newCat.save();
    });

    it('should list all cats on /Cats GET', function(done){
        var url = 'http://localhost:1128/cats';
        request.get(url, (error, response, body) => {
            if (error) done(error)
            expect(JSON.parse(body)).to.be.an('Array');
            expect(JSON.parse(body).length).to.equal(1);
            done();
        });
    });

     it('should save cats on /Cats post', function(done){
        var url = 'http://localhost:1128/cats';
        request.post(url, (error, response, body) => {
            if (error) done(error)
            	//console.log(response)
            expect(response.statusCode).to.equal(201);
            done();
        });
    });
});