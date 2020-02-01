/*
 * Unit Tests
 *
 */

// Dependencies
var tests = require('./../app/lib');
var assert = require('assert');

// Holder for Tests
var unit = {};

// Assert that the getANumber function is returning a number
unit['multiplyBy3 should return a number with number input'] = function(done){
  var val = tests.multiplyBy3(4);
  let resType = typeof(val)
  assert.equal(resType, 'number');
  done();
};

unit['multiplyBy3 should return 12 with 4 input'] = function(done){
  var val = tests.multiplyBy3(4);
  assert.equal(val, 12);
  done();
};

unit['passNumAndCB should return cb'] = function(done){
  var val = tests.multiplyBy3(4);
  assert.equal(val, 12);
  done();
};

unit['passNumAndCB should return error object with string param'] = function(done){
  var val = tests.multiplyBy3('string');
  assert.equal(typeof val, 'object');
  assert.equal(val.Error, 'invalid param type');
  done();
};


// Export the tests to the runner
module.exports = unit;