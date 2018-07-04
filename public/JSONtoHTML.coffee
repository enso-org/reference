xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

conversion = (data) ->
  out = ''
  i = 0
  modules = data.modules
  while i < modules.length 
    out += '<div class="container"><div class="pageHead"><h1>' + modules[i].name + '</h1></div></div>'
    out += '<div class="container"><div class="pageHead" style="width:95%"><h3>Classes</h3></div></div>'
    j = 0
    while j < modules[i].classes.length
      out += '<div class="container"><div class="pageHead" style="width:90%"><h4>' + modules[i].classes[j].name + '</h4><h4>' + modules[i].classes[j].documentation + '</h4>'
      k = 0
      if modules[i].classes[j].methods.length != 0
        while k < modules[i].classes[j].methods.length
          out += '<h5>' + modules[i].classes[j].methods[k].name + '</h5>'
          out += '<h6>' + modules[i].classes[j].methods[k].documentation + '</h6>'
      out += '</div></div>'
      j++
    if modules[i].functions.length != 0
      out += '<div class="container"><div class="pageHead" style="width:95%"><h3>Functions</h3></div></div>'
      j = 0
      while j < modules[i].functions.length
        out += '<div class="container"><div class="pageHead" style="width:90%"><h4>' + modules[i].functions[j].name + '</h5><h4>' + modules[i].functions[j].documentation + '</h5></div></div>'
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