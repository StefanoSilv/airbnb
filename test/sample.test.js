const assert = require('assert');

describe('Basic Mocha String Test', function () {
  it('testing test', function () {
    assert.equal('Hello'.length, 5);
  });
  it('testing test number 2', function () {
    assert.equal('Hello'.length, 4);
  });
});
