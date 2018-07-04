xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

conversion = (data) ->
  out = ''
  menu = ''
  i = 0
  modules = data.modules
  while i < modules.length 
    out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '"><h1>' + modules[i].name + '</h1></div></div>'
    menu += '<h3><a class="btn btn-default" href="#' + modules[i].name + '">' + modules[i].name + '</a></h3>'
    out += '<div class="container"><div class="pageHead" style="width:95%"><h3>Classes</h3></div></div>'
    j = 0
    while j < modules[i].classes.length
      out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].classes[j].name + '" style="width:90%"><h4>' + modules[i].classes[j].name + '</h4><h4>' + modules[i].classes[j].documentation + '</h4></div></div>'
      menu += '<h4><a class="btn btn-default" href="#' + modules[i].name + '_' + modules[i].classes[j].name + '">' + modules[i].classes[j].name + '</a></h4>'
      k = 0
      out += '<div class="container"><div class="pageHead" style="width:85%"><h3>Methods</h3></div></div>'
      while k < modules[i].classes[j].methods.length
          out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].classes[j].name + '_' + modules[i].classes[j].methods[k].name + '" style="width:80%"><h4>' + modules[i].classes[j].methods[k].name + '</h4>'
          menu += '<h5><a class="btn btn-default" href="#' + modules[i].name + '_' + modules[i].classes[j].name + '_' + modules[i].classes[j].methods[k].name + '">' + modules[i].classes[j].methods[k].name + '</a></h5>'
          if modules[i].classes[j].methods[k].documentation != 'null'
            out += '<h5>' + modules[i].classes[j].methods[k].documentation + '</h5>'
          out += '</div></div>'
          k++
      out += '</div></div>'
      j++
    if modules[i].functions.length != 0
      out += '<div class="container"><div class="pageHead" style="width:95%"><h3>Functions</h3></div></div>'
      j = 0
      while j < modules[i].functions.length
        out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].functions[j].name + '" style="width:90%"><h4>' + modules[i].functions[j].name + '</h5><h4>' + modules[i].functions[j].documentation + '</h5></div></div>'
        menu += '<h5><a class="btn btn-default" href="#' + modules[i].name + '_' + modules[i].functions[j].name + '">' + modules[i].classes[j].methods[k].name + '</a></h5>'
        j++
    i++
  document.getElementById('data').innerHTML = out
  document.getElementById('menuPane').innerHTML = menu
  return

xmlhttp.onreadystatechange = ->
  if @readyState == 4 and @status == 200
    data = JSON.parse(@responseText)
    conversion data
  return

xmlhttp.open 'GET', url, true
xmlhttp.send()