xmlhttp = new XMLHttpRequest
url = 'test.json'

myFunction = (arr) ->
  out = ''
  i = undefined
  i = 0
  while i < arr.length
    out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>'
    i++
  document.getElementById('1').innerHTML = out
  return

xmlhttp.onreadystatechange = ->
  if @readyState == 4 and @status == 200
    myArr = JSON.parse(@responseText)
    myFunction myArr
  return

xmlhttp.open 'GET', url, true
xmlhttp.send()
# obj = JSON.parse(returnJson)
# document.getElementById('1').innerHTML = obj