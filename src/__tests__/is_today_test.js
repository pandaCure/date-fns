var assert = require('power-assert')
var isToday = require('../is_today')

describe('isToday', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* starts from 0 */, 25).getTime()
    )
  })

  afterEach(function() {
    this.clock.restore()
  })

  it('returns true if given date is today', function() {
    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25))
    assert(result === true)
  })

  it('returns false if given date is not today', function() {
    var result = isToday(new Date(2014, 8 /* starts from 0 */, 26))
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25).toString())
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isToday(new Date(2014, 8 /* starts from 0 */, 25).getTime())
    assert(result === true)
  })
})

