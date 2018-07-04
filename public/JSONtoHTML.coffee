xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

conversion = (data) ->
  out = '<div class="container"><div class="pageHead"><h3>Classes</h3></div></div>'
  i = 0
  modules = data.modules
  while i < modules.length 
    out += '<div class="container"><div class="pageHead"><h5>' + modules[i].classes + '</h5><br></div></div>'
    # '<a href="' + data[i].url + '">' + data[i].display + '</a><br>'
    i++
  out += '<div class="container"><div class="pageHead"><h3>Functions</h3></div></div>'
  i = 0
  while i < modules.length 
    out += '<div class="container"><div class="pageHead"><h5>' + modules[i].functions + '</h5><br></div></div>'
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