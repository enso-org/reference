xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

conversion = (data) ->
  out = ''
  i = 0
  modules = data.modules
  while i < modules.length 
    out += '<div class="container"><div class="pageHead"><h1>' + modules[i].name + '</h1></div></div>'
    out += '<div class="container"><div class="pageHead" style="width:95%; align:right"><h3>Classes</h3></div></div>'
    j = 0
    while j < modules[i].classes.length
      out += '<div class="container"><div class="pageHead" style="width:90%; align:right"><h5>' + modules[i].classes[j] + '</h5><br></div></div>'
      j++
    out += '<div class="container"><div class="pageHead" style="width:95%; align:right"><h3>Functions</h3></div></div>'
    j = 0
    while j < modules[i].functions.length
      out += '<div class="container"><div class="pageHead" style="width:90%; align:right"><h5>' + modules[i].functions[j] + '</h5><br></div></div>'
      j++
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