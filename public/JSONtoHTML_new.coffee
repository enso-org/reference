xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

conversion = (data) ->
  out = ''
  menu = ''
  i = 0
  modules = data.modules
 
  while i < modules.length 
    out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '"><h1>' + modules[i].name + '</h1></div></div>'
    menu += '<br><a align="right" id="'+ modules[i].name + 'Toggle" href="javascript:showhide(\''+ modules[i].name + 'Menu\',\''+ modules[i].name + 'Toggle\')">▶</a><a href="#' + modules[i].name + '" onclick="javascript:showhide(\''+ modules[i].name + 'Menu\',\''+ modules[i].name + 'Toggle\')">' + modules[i].name + '</a><br><div id="'+ modules[i].name + 'Menu" style="display:none;">'
    j = 0
    
    while j < modules[i].classes.length
      out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].classes[j].name + '" style="width:90%"><h3>' + modules[i].classes[j].name + '</h3>'
      
      if modules[i].classes[j].documentation != null
        mdtohtml = marked(modules[i].classes[j].documentation)
        out += mdtohtml
      
      out += '</div></div>'
      menu += '<a style="margin-left:30px" align="right" id="'+ modules[i].name + '_' + modules[i].classes[j].name + 'Toggle" href="javascript:showhide(\''+ modules[i].name + '_' + modules[i].classes[j].name + 'Menu\',\''+ modules[i].name + '_' + modules[i].classes[j].name + 'Toggle\')">▶</a><a  href="#' + modules[i].name + '_' + modules[i].classes[j].name + '" onclick="javascript:showhide(\''+ modules[i].name + '_' + modules[i].classes[j].name + 'Menu\',\''+ modules[i].name + '_' + modules[i].classes[j].name + 'Toggle\')">' + modules[i].classes[j].name + ' </a><br>
<div id="'+ modules[i].name + '_' + modules[i].classes[j].name + 'Menu" style="display:none;">'
      k = 0
      out += '<div class="container"><div class="pageHead" style="width:80%"><h3>Methods</h3></div></div>'

      while k < modules[i].classes[j].methods.length
          out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].classes[j].name + '_' + modules[i].classes[j].methods[k].name + '" style="width:70%"><h4><b>' + modules[i].classes[j].methods[k].name + '</b></h4>'
          menu += '<a style="margin-left:60px" href="#' + modules[i].name + '_' + modules[i].classes[j].name + '_' + modules[i].classes[j].methods[k].name + '">' + modules[i].classes[j].methods[k].name + '</a><br>'
          if modules[i].classes[j].methods[k].documentation != null
            mdtohtml = marked(modules[i].classes[j].methods[k].documentation)
            out += mdtohtml
          out += '</div></div>'
          k++
      
      out += '</div></div>'
      menu += '</div>'
      j++

    if modules[i].functions.length != 0
      out += '<div class="container"><div class="pageHead" style="width:95%"><h3>Functions</h3></div></div>'
      menu += '<a style="margin-left:30px" href="#' + modules[i].name + '_Functions">Functions</a><div id="'+ modules[i].name + '_FunctionsMenu">'
      j = 0

      while j < modules[i].functions.length
        out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].functions[j].name + '" style="width:80%"><h4><b>' + modules[i].functions[j].name + '</b></h4>'
        
        if modules[i].functions[j].documentation != null 
          mdtohtml = marked(modules[i].functions[j].documentation)
          out += mdtohtml
        
        out += '</div></div>'
        menu += '<a style="margin-left:60px" href="#' + modules[i].name + '_' + modules[i].functions[j].name + '">' +  modules[i].functions[j].name + '</a><br>'
        j++
      
      menu += '</div>'
    
    menu += '</div>'
    i++

  document.getElementById('data').innerHTML = out
  document.getElementById('menuPane').innerHTML += menu
  return

xmlhttp.onreadystatechange = ->
  if @readyState == 4 and @status == 200
    data = JSON.parse(@responseText)
    conversion data
  return

xmlhttp.open 'GET', url, true
xmlhttp.send()