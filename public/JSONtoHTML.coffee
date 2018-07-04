xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

conversion = (data) ->
  i = 0
  out = ''
  modules = data.modules
  while i < modules.length 
    out += '<div class="container"><div class="pageHead">' + modules[i].classes + '<br></div></div>'
    # '<a href="' + data[i].url + '">' + data[i].display + '</a><br>'
    i++
  document.getElementById('data').innerHTML = out
  return

xmlhttp.onreadystatechange = ->
  if @readyState == 4 and @status == 200
    data = JSON.parse(@responseText)
    conversion data
  return

xmlhttp.open 'GET', url, true
xmlhttp.send()