xmlhttp = new XMLHttpRequest
url = 'stdLib_base.json'

#convert JSON to HTML - get data for main panel
getMainData = (data) ->
  output = ''
  modules = data.modules

  i = 0
  while i < modules.length
    module = modules[i]
    output += '<div class="moduleDiv" id="'+ module.name + '"><p class="module">' + module.name + '</p>'

    if module.documentation != null && module.documentation != undefined
      mdtohtml = marked(module.documentation)
      output += '<p class="module_overview">Module overview</p>'
      output += '<div class="moduleDocumentation">' + mdtohtml + '</div>'

    output += '<div class="module_classes">'
    j = 0
    while j < module.classes.length
      Mclass = module.classes[j]
      output += '<hr>'
      output += '<div class="module_classes_class" id="' + module.name + '_' + Mclass.name + '"><p class="className">' + Mclass.name + '</p>'
     
      if Mclass.documentation != null
        mdtohtml = marked(Mclass.documentation)
        output += '<div class="classDocumentation">' + mdtohtml + '</div>'

      output += '<div class="module_classes_class_methods">'
      k = 0
      while k < Mclass.methods.length
        Mmethod = Mclass.methods[k]
        #output += '<hr>'

        if Mmethod.type != null && Mmethod.type != undefined
          #We have methods which have been segregated to types
          output += '<div class="methodTypeDiv"><p class="MethodTypeHead">' + Mmethod.type + '</p>'
          if Mmethod.documentation != null
            mdtohtml = marked(Mmethod.documentation)
            output += '<div class="methodTypeDocumentation">' + mdtohtml + '</div>'

          l = 0
          while l < Mmethod.methods.length
            MmethodWithType = Mmethod.methods[l]
            output += '<div id="' + module.name + '_' + Mclass.name + '_' + MmethodWithType.name + '" class="methodDiv"><p class="methodName">' + MmethodWithType.name + '</p>'
            if MmethodWithType.documentation != null
              mdtohtml = marked(MmethodWithType.documentation)
              output += '<div class="methodDocumentation">' + mdtohtml + '</div>'
            output += '</div>'
            l++
          output += '</div>'

        else
          output += '<div id="' + module.name + '_' + Mclass.name + '_' + Mmethod.name + '" class="methodDiv"><p class="methodName">' + Mmethod.name + '</p>'
          
          if Mmethod.documentation != null
            mdtohtml = marked(Mmethod.documentation)
            output += '<div class="methodDocumentation">' + mdtohtml + '</div>'
          output += '</div>'
        k++
      
      output += '</div></div>'
      j++
    output += '</div>'
    
    if module.functions.length != 0
      output += '<hr>'
      output += '<div class="functions" id="' + module.name + '_Functions"><p class="functionsHeader">Functions</p>'

      j = 0
      while j < module.functions.length
        Mfunction = module.functions[j]
        #output += '<hr>'
        output += '<div id="' + module.name + '_' + Mfunction.name + '" class="functionNameDiv"><p class="functionName">' + Mfunction.name + '</p>'

        if Mfunction.documentation != null 
          mdtohtml = marked(Mfunction.documentation)
          output += '<div class="functionDocumentation">' + mdtohtml + '</div>'
        output += '</div>'
        j++

      output += '</div>'

    output += '</div>'
    output += '<hr>'
    i++
  
  document.getElementById('data').innerHTML = output
  return

#convert JSON to HTML - get menu data
getMenuData = (data) ->
  menu = '<ul class="treeMenu" id="treeMID">'
  modules = data.modules
  openedClass = 'fa fa-angle-double-down'
  closedClass = 'fa fa-angle-double-right'

  i = 0
  while i < modules.length
    module = modules[i]

    menu += '<li>'
    menu += '<a href="#' + module.name + '">' + module.name + '</a>'
    menu += '<i class="indicator' + closedClass + '></i><ul class="branch">'

    j = 0
    while j < module.classes.length
      Mclass = module.classes[j]
      menu += '<li>'
      menu += '<a href="#' + module.name + '_' + Mclass.name + '">' + Mclass.name + ' </a>'
      menu += '<i class="indicator' + closedClass + '></i><ul class="branch">'
      k = 0
      while k < Mclass.methods.length
        Mmethod = Mclass.methods[k]
        #output += '<hr>'

        if Mmethod.type != null && Mmethod.type != undefined
          #We have methods which have been segregated to types
          l = 0
          while l < Mmethod.methods.length
            MmethodWithType = Mmethod.methods[l]
            menu += '<li><a href="#' + module.name + '_' + Mclass.name + '_' + MmethodWithType.name + '">' + MmethodWithType.name + '</a></li>'
            l++

        else
          menu += '<li><a href="#' + module.name + '_' + Mclass.name + '_' + Mmethod.name + '">' + Mmethod.name + '</a></li>'
        k++
      
      menu += '</ul></li>'
      j++
    
    if module.functions.length != 0
      menu += '<li><a href="#' +module.name + '_Functions">Functions</a>'
      menu += '<i class="indicator' + closedClass + '></i><ul class="branch">'

      j = 0
      while j < module.functions.length
        Mfunction = module.functions[j]
        menu += '<li><a href="#' + module.name + '_' + Mfunction.name + '">' +  Mfunction.name + '</a></li>'
        j++

      menu += '</ul></li>'
    menu += '</ul></li>'  
    i++
  menu += '</ul>'
  document.getElementById('menuPane').innerHTML += menu
  return

xmlhttp.onreadystatechange = ->
  if @readyState == 4 and @status == 200
    data = JSON.parse(@responseText)
    getMainData data
    getMenuData data
  return

xmlhttp.open 'GET', url, true
xmlhttp.send()