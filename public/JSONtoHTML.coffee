fs = require 'fs'
JSONFile = 'stdLib_base.json'

returnJson = ->
  fs.readFileSync JSONFile, 'utf8'

obj = JSON.parse(returnJson)
document.getElementById('1').innerHTML = obj