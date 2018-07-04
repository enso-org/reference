xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

conversion = (data) ->
  out = '<div class="container"><div class="pageHead">'
  modules = data.modules
  while i < modules.length 
    out += modules[i].classes + '<br>'
    # '<a href="' + data[i].url + '">' + data[i].display + '</a><br>'
    i++
  out += '</div></div>'
  document.getElementById('1').innerHTML = out
  return

xmlhttp.onreadystatechange = ->
  if @readyState == 4 and @status == 200
    data = JSON.parse(@responseText)
    conversion data
  return

xmlhttp.open 'GET', url, true
xmlhttp.send()