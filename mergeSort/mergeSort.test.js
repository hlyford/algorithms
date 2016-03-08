var should = require('should');
var vm = require('vm');
var fs = require('fs');
var descriptiveNumbers = require('./descriptiveNumbers.js').descriptiveNumbers;
var expect = require('chai').expect;

describe('descriptiveNumbers', function() {
  it('should exist', function(){
    should.exist(descriptiveNumbers);
  });

  it('should return 1210 and 2020 when give 4 as input', function(){
    expect(descriptiveNumbers(4)).to.eql([1210, 2020]);
  });

  it('should return 21200 when give 5 as input', function(){
    expect(descriptiveNumbers(5)).to.eql([21200]);
  });
  
});