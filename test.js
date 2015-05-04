var expect = require('chai').expect
  , to = require('./')

describe('to', function() {

  it('should convert pseudo-arrays to arrays', function(){
    expect(to.arr(arguments).unshift).to.be.ok
    expect(arguments.unshift).to.not.be.ok
  })

})