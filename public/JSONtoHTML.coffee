xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

#convert JSON to HTML
convert = (data) ->
  output = ''
  menu = ''
  modules = data.modules

  i = 0
  while i < modules.length
    module = modules[i]

    output += '<div class="moduleDiv"><p class="module">' + module.name + '</p>'
    menu += '<br><a id="'+ module.name + 'Toggle" href="javascript:showhide(\''+ module.name + 'Menu\',\''+ module.name + 'Toggle\')" class="toggle">▶</a>'
    menu += '<a class="scrollTo" href="#' + module.name + '">' + module.name + '</a><br>'
    menu += '<div id="'+ module.name + 'Menu" style="display:none;">'

    if module.documentation != null && module.documentation != undefined
      mdtohtml = marked(module.documentation)
      output += '<p class="module_overview">Module overview</p>'
      output += '<div class="moduleDocumentation">' + mdtohtml + '</div>'

    output += '<div class="module_classes">'
    j = 0
    while j < module.classes.length
      Mclass = module.classes[j]
      output += '<hr>'
      output += '<div class="module_classes_class"><p class="className">' + Mclass.name + '</p>'
      menu += '<a style="margin-left:30px" align="right" id="'+ module.name + '_' + Mclass.name + 'Toggle" href="javascript:showhide(\''+ module.name + '_' + Mclass.name + 'Menu\',\''+ module.name + '_' + Mclass.name + 'Toggle\')">▶</a>'
      menu += '<a class="scrollTo" href="#' + module.name + '_' + Mclass.name + '">' + Mclass.name + ' </a><br><div id="'+ module.name + '_' + Mclass.name + 'Menu" style="display:none;">'
      
      if Mclass.documentation != null
        mdtohtml = marked(Mclass.documentation)
        output += '<div class="classDocumentation">' + mdtohtml + '</div>'

      output += '<div class="module_classes_class_methods">'
      k = 0
      while k < Mclass.methods.length
        Mmethod = Mclass.methods[k]
        output += '<hr>'
        output += '<div id="' + module.name + '_' + Mclass.name + '_' + Mmethod.name + '" class="methodDiv"><p class="methodName">' + Mmethod.name + '</p>'
        menu += '<a class="scrollTo" style="margin-left:60px" href="#' + module.name + '_' + Mclass.name + '_' + Mmethod.name + '">' + Mmethod.name + '</a><br>'
        if Mmethod.documentation != null
          mdtohtml = marked(Mmethod.documentation)
          output += '<div class="methodDocumentation">' + mdtohtml + '</div>'
        output += '</div>'
        k++
      
      output += '</div></div>'
      menu += '</div>'
      j++
    output += '</div>'
    
    if module.functions.length != 0
      output += '<div class="functions" id="' + module.name + '_Functions"><p class="functionsHeader">Functions</p>'
      menu += '<a class="scrollTo" style="margin-left:30px" href="#' +module.name + '_Functions">Functions</a>'
      menu += '<div id="'+ module.name + '_FunctionsMenu">'

      j = 0
      while j < module.functions.length
        Mfunction = module.functions[j]
        output += '<hr>'
        output += '<div id="' + module.name + '_' + Mfunction.name + '" class="functionNameDiv"><p class="functionName">' + Mfunction.name + '</p>'
        menu += '<a class="scrollTo" style="margin-left:60px" href="#' + module.name + '_' + Mfunction.name + '">' +  Mfunction.name + '</a><br>'

        if Mfunction.documentation != null 
          mdtohtml = marked(Mfunction.documentation)
          output += '<div class="functionDocumentation">' + mdtohtml + '</div>'
        output += '</div>'
        j++

      output += '</div>'
      menu += '</div>'

    output += '</div>'
    menu += '</div>'
    output += '<hr>'
    i++
  
  document.getElementById('data').innerHTML = output
  document.getElementById('menuPane').innerHTML += menu
  return

### old converting method
conversion = (data) ->
  out = ''
  menu = ''
  i = 0
  modules = data.modules
 
  while i < modules.length 
    out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '"><h1>' + modules[i].name + '</h1></div></div>'
    menu += '<br><a align="right" id="'+ modules[i].name + 'Toggle" href="javascript:showhide(\''+ modules[i].name + 'Menu\',\''+ modules[i].name + 'Toggle\')">▶</a><a class="scrollTo" href="#' + modules[i].name + '">' + modules[i].name + '</a><br><div id="'+ modules[i].name + 'Menu" style="display:none;">'
    j = 0
    
    while j < modules[i].classes.length
      out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_' + modules[i].classes[j].name + '" style="width:90%"><h2>' + modules[i].classes[j].name + '</h2>'
      
      if modules[i].classes[j].documentation != null
        mdtohtml = marked(modules[i].classes[j].documentation)
        out += '<p style="font-size: 20px">' + mdtohtml + '</p>'
      
      menu += '<a style="margin-left:30px" align="right" id="'+ modules[i].name + '_' + modules[i].classes[j].name + 'Toggle" href="javascript:showhide(\''+ modules[i].name + '_' + modules[i].classes[j].name + 'Menu\',\''+ modules[i].name + '_' + modules[i].classes[j].name + 'Toggle\')">▶</a><a class="scrollTo" href="#' + modules[i].name + '_' + modules[i].classes[j].name + '">' + modules[i].classes[j].name + ' </a><br>
<div id="'+ modules[i].name + '_' + modules[i].classes[j].name + 'Menu" style="display:none;">'
      k = 0
      
      while k < modules[i].classes[j].methods.length
          out += '<hr>'
          out += '<div id="' + modules[i].name + '_' + modules[i].classes[j].name + '_' + modules[i].classes[j].methods[k].name + '"><h4><b>' + modules[i].classes[j].methods[k].name + '</b></h4>'
          menu += '<a class="scrollTo" style="margin-left:60px" href="#' + modules[i].name + '_' + modules[i].classes[j].name + '_' + modules[i].classes[j].methods[k].name + '">' + modules[i].classes[j].methods[k].name + '</a><br>'
          if modules[i].classes[j].methods[k].documentation != null
            mdtohtml = marked(modules[i].classes[j].methods[k].documentation)
            out += mdtohtml
          out += '</div>'
          k++
      
      out += '</div></div>'
      menu += '</div>'
      j++

    if modules[i].functions.length != 0
      out += '<div class="container"><div class="pageHead" id="' + modules[i].name + '_Functions" style="width:90%"><h2>Functions</h2>'
      menu += '<a class="scrollTo" style="margin-left:30px" href="#' + modules[i].name + '_Functions">Functions</a><div id="'+ modules[i].name + '_FunctionsMenu">'
      j = 0
      while j < modules[i].functions.length
        out += '<hr>'
        out += '<div id="' + modules[i].name + '_' + modules[i].functions[j].name + '"><h4><b>' + modules[i].functions[j].name + '</b></h4>'
        
        if modules[i].functions[j].documentation != null 
          mdtohtml = marked(modules[i].functions[j].documentation)
          out += mdtohtml
        out += '</div>'
        menu += '<a class="scrollTo" style="margin-left:60px" href="#' + modules[i].name + '_' + modules[i].functions[j].name + '">' +  modules[i].functions[j].name + '</a><br>'
        j++
      out += '</div></div>'
      menu += '</div>'

    menu += '</div>'
    i++

  document.getElementById('data').innerHTML = out
  document.getElementById('menuPane').innerHTML += menu
  return
###

xmlhttp.onreadystatechange = ->
  if @readyState == 4 and @status == 200
    data = JSON.parse(@responseText)
    convert data
  return

xmlhttp.open 'GET', url, true
xmlhttp.send()