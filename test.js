var expect = require('chai').expect
  , to = require('./')

describe('to', function() {

  it('should convert pseudo-arrays to arrays', function(){
    expect(to.arr(arguments).unshift).to.be.ok
    expect(arguments.unshift).to.not.be.ok
  })

  it('should use default id prop if none specified', function() {
    var a = [ 
      { 
        'id': 'apples'
      , 'color': 'green' 
      }
    , { 
        'id': 'bananas'
      , 'color': 'yellow' 
      }
    ]

    expect(a.reduce(to.obj, 1)).to.eql({
      apples: { 
        'id': 'apples'
      , 'color': 'green' 
      }
    , bananas: { 
        'id': 'bananas'
      , 'color': 'yellow' 
      }
    })
  })


  it('should work with array of size 1', function() {
    var a = [ 
      { 
        'id': 'apples'
      , 'color': 'green' 
      }
    ]

    expect(a.reduce(to.obj, 1)).to.eql({
      apples: { 
        'id': 'apples'
      , 'color': 'green' 
      }
    })
  })

  it('should convert array to object', function() {
    var a = [ 
      { 
        'name': 'apples'
      , 'color': 'green' 
      }
    , { 
        'name': 'bananas'
      , 'color': 'yellow' 
      }
    ]

    expect(a.reduce(to.obj('name'), 1)).to.eql({
      apples: { 
        'name': 'apples'
      , 'color': 'green' 
      }
    , bananas: { 
        'name': 'bananas'
      , 'color': 'yellow' 
      }
    })
  })

})