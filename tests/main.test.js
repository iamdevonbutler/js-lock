const lock = require('../lib');

const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

// 2 error cases. invalid range and missing param//
describe('js-lock tests', () => {
  it('it should work', () => {
    var obj = {a: 1};
    obj1 = lock(obj);
    obj1.a = 2;
    expect(obj.a).to.be.eql(1);
  });
});
