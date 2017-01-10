var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;

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
