var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var testId;

chai.use(chaiHttp);

describe('GET /puppies', function() {
  it('should retrieve list of items on GET', function(done) {
    chai.request(app)
    .get('/puppies')
    .end(function(err, res) {
      should.equal(err, null);
      res.should.have.status(200);
      res.body[0].should.be.a('object');
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('name');
      res.body[0].should.have.property('size');
      res.body[0].should.have.property('location');
      res.body[0].should.have.property('breed');
      res.body[0].should.have.property('image');
      res.body[0]._id.should.be.a('string');
      res.body[0].name.should.be.a('string');
      res.body[0].location.should.be.a('string');
      res.body[0].breed.should.be.a('string');
      done();
    });
  });
});
describe('POST /puppies', function() {
  it('should post a puppy profile on POST', function(done) {
    this.timeout(10000)
    chai.request(app)
    .post('/puppies', {
      "name": "Russell",
      "size": "M",
      "location": "Midvale",
      "breed": "Hound",
      "image": "http://loremflickr.com/200/200/dog"
    })
    .end(function(err, res) {
      testId = res.body[0]._id;
      console.log()
      should.equal(err, null);
      res.should.have.status(200);
      res.body[0].should.be.a('object');
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('name');
      res.body[0].should.have.property('size');
      res.body[0].should.have.property('location');
      res.body[0].should.have.property('breed');
      res.body[0].should.have.property('image');
      res.body[0]._id.should.be.a('string');
      res.body[0].name.should.be.a('string');
      res.body[0].location.should.be.a('string');
      res.body[0].breed.should.be.a('string');
      done();
    });
  });
});
describe('DELETE /puppies', function() {
  it('should delete a puppy profile on DELETE', function(done) {
    chai.request(app)
    .delete('/puppies/' + testId)
    .end(function(err, res) {
      should.equal(err, null);
      res.should.have.status(200);
      done();
    });
  });
});
