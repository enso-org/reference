xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

conversion = (data) ->
  out = ''
  menu = '<h4>Libraries:</h4>'
  i = 0
  modules = data.modules
  while i < modules.length 
    out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '"><h1>' + modules[i].name + '</h1></div></div>'
    menu += '<a class="btn btn-default" href="#' + modules[i].name + '">' + modules[i].name + '</a><br>'
    out += '<div class="container"><div class="pageHead" style="width:95%"><h3>Classes</h3></div></div>'
    j = 0
    while j < modules[i].classes.length
      out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].classes[j].name + '" style="width:90%"><h3>' + modules[i].classes[j].name + '</h3>'
      if modules[i].classes[j].documentation != null
        mdtohtml = markdown.toHTML(modules[i].classes[j].documentation)
        out += '<h4>' + mdtohtml + '</h4>'
      out += '</div></div>'
      menu += '<a class="btn btn-default" style="margin-left:30px" href="#' + modules[i].name + '_' + modules[i].classes[j].name + '">' + modules[i].classes[j].name + '</a><br>'
      k = 0
      out += '<div class="container"><div class="pageHead" style="width:80%"><h3>Methods</h3></div></div>'
      while k < modules[i].classes[j].methods.length
          out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].classes[j].name + '_' + modules[i].classes[j].methods[k].name + '" style="width:70%"><h4><b>' + modules[i].classes[j].methods[k].name + '</b></h4>'
          menu += '<a class="btn btn-default" style="margin-left:60px" href="#' + modules[i].name + '_' + modules[i].classes[j].name + '_' + modules[i].classes[j].methods[k].name + '">' + modules[i].classes[j].methods[k].name + '</a><br>'
          if modules[i].classes[j].methods[k].documentation != null
            mdtohtml = markdown.toHTML(modules[i].classes[j].methods[k].documentation)
            out += '<h5>' + mdtohtml + '</h5>'
          out += '</div></div>'
          k++
      out += '</div></div>'
      j++
    if modules[i].functions.length != 0
      out += '<div class="container"><div class="pageHead" style="width:95%"><h3>Functions</h3></div></div>'
      j = 0
      while j < modules[i].functions.length
        out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].functions[j].name + '" style="width:80%"><h4><b>' + modules[i].functions[j].name + '</b></h4>'
        if modules[i].functions[j].documentation != null 
          mdtohtml = markdown.toHTML(modules[i].functions[j].documentation)
          out += '<h5>' + mdtohtml + '</h5>'
        out += '</div></div>'
        menu += '<a class="btn btn-default" style="margin-left:30px" href="#' + modules[i].name + '_' + modules[i].functions[j].name + '">' +  modules[i].functions[j].name + '</a><br>'
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