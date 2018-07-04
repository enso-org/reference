fs = require 'fs'
JSONFile = 'stdLib_base.json'

returnJson = ->
  fs.readFileSync JSONFile, 'utf8'

obj = JSON.parse(returnJson)
document.getElementById('1').innerHTML = obj

require [ 'specs/all' ], ->
  'use strict'
  # Run before each test case.
  beforeEach ->
    Ember.testing = true
    return
  # Run after each test case.
  afterEach ->
    Ember.testing = false
    return
  return