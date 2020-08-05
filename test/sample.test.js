const assert = require('assert');

describe('Basic Mocha String Test', function () {
  it('testing test', function () {
    assert.equal('Hello'.length, 4);
  });
});
