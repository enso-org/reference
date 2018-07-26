xmlhttp = new XMLHttpRequest
url = 'stdLib_base_test.json'

getMainData = (data) ->
  output = ''
  modules = data.modules

  i = 0
  while i < modules.length
    module = modules[i]
    output += '<div class="moduleDiv" id="'+ module.name + '">'
    output += '<div style="width:100%" onMouseOver="document.getElementById(\''+module.name+'_Hover\').style.display = \'inline-block\'" onMouseOut="document.getElementById(\''+module.name+'_Hover\').style.display = \'none\'"><p class="module">' + module.name + '</p>'
    if module.tag != null && module.tag != undefined 
      output += '<div class="tag tag_' + module.tag + '"><p class="fa fa-tags">&nbsp;&nbsp;' + module.tag + '</p></div>'
    output += '<div id="'+module.name+'_Hover" class="hoverableAnchors"><a href="#' + module.name + '" class="fa fa-anchor" title="Get anchor link"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="" class="fa fa-code" title="Jump to source"></a></div>'
    output += '</div>'

    if module.documentation != null && module.documentation != undefined
      mdtohtml = marked(module.documentation)
      output += '<p class="module_overview">Module overview</p>'
      output += '<div class="moduleDocumentation">' + mdtohtml + '</div>'

    output += '<div class="module_classes">'
    j = 0
    while j < module.classes.length
      Mclass = module.classes[j]
      output += '<div class="module_classes_class" id="' + module.name + '_' + Mclass.name + '"><div style="width:100%" onMouseOver="document.getElementById(\'' + module.name + '_' + Mclass.name + '_Hover\').style.display = \'inline-block\'" onMouseOut="document.getElementById(\'' + module.name + '_' + Mclass.name + '_Hover\').style.display = \'none\'"><p class="className">' + Mclass.name + '</p>'
      if Mclass.tag != null && Mclass.tag != undefined 
        output += '<div class="tag tag_' + Mclass.tag + '"><p class="fa fa-tags">&nbsp;&nbsp;' + Mclass.tag + '</p></div>'
      output += '<div id="' + module.name + '_' + Mclass.name + '_Hover" class="hoverableAnchors"><a href="#' + module.name + '_' + Mclass.name + '" class="fa fa-anchor"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="" class="fa fa-code"></a></div></div>'
     
      if Mclass.documentation != null
        mdtohtml = marked(Mclass.documentation)
        output += '<div class="classDocumentation">' + mdtohtml + '</div>'

      if Mclass.longDocumentation != null && Mclass.longDocumentation != undefined
        mdtohtml = marked(Mclass.longDocumentation)
        output += '<div class="classLongDocumentation">' + mdtohtml + '</div>'  

      output += '<div class="module_classes_class_methods">'
      k = 0
      printedInfo = false
      while k < Mclass.methods.length
        Mmethod = Mclass.methods[k]

        if Mmethod.type != null && Mmethod.type != undefined
          output += '<div class="methodTypeDiv"><p class="MethodTypeHead">' + Mmethod.type + '</p>'
          ###
          For method section info, now commented out
          if Mmethod.documentation != null
            mdtohtml = marked(Mmethod.documentation)
            output += '<div class="methodTypeDocumentation">' + mdtohtml + '</div>'
          ###
          l = 0
          while l < Mmethod.methods.length
            MmethodWithType = Mmethod.methods[l]
            MmethodWithTypeNameAndType = MmethodWithType.name.split(":")
            output += '<div id="' + module.name + '_' + Mclass.name + '_' + MmethodWithTypeNameAndType[0].replace(/\s/g,'') + '" class="methodDiv"><p class="methodName">' + MmethodWithTypeNameAndType[0].replace(/\s/g,'')
            if MmethodWithTypeNameAndType[1] != undefined
              output += '<code>&nbsp;:' + MmethodWithTypeNameAndType[1] + '</code>'
            if MmethodWithType.tag != null && MmethodWithType.tag != undefined 
              output += '<div class="tag tag_' + MmethodWithType.tag + '" style="bottom:0"><p class="fa fa-tags">&nbsp;&nbsp;' + MmethodWithType.tag + '</p></div>'
            output += '</p>'
            if MmethodWithType.documentation != null
              mdtohtml = marked(MmethodWithType.documentation)
              output += '<div class="methodDocumentation">' + mdtohtml + '</div>'
            
            output += '</div>'
            l++
          output += '</div>'

        else
          if printedInfo == false 
            output += '<p class="MethodTypeHead">Unclassified methods</p>'
            printedInfo = true
          
          MmethodWithNameAndType = Mmethod.name.split(":")
          output += '<div id="' + module.name + '_' + Mclass.name + '_' + MmethodWithNameAndType[0].replace(/\s/g,'') + '" class="methodDiv"><p class="methodName">' + MmethodWithNameAndType[0].replace(/\s/g,'')
          if MmethodWithNameAndType[1] != undefined
            output += '<code>&nbsp;:' + MmethodWithNameAndType[1] + '</code>'
          if Mmethod.tag != null && Mmethod.tag != undefined 
              output += '<div class="tag tag_' + Mmethod.tag + '" style="bottom:0"><p class="fa fa-tags">&nbsp;&nbsp;' + Mmethod.tag + '</p></div>'
          output += '</p>'
          
          if Mmethod.documentation != null
            mdtohtml = marked(Mmethod.documentation)
            output += '<div class="methodDocumentation">' + mdtohtml + '</div>'
          
          output += '</div>'
        k++
      
      output += '</div></div>'
      j++
    output += '</div>'
    
    if module.functions.length != 0
      output += '<div class="functions" id="' + module.name + '_Functions"><div style="width:100%"  onMouseOver="document.getElementById(\'' + module.name + '_Functions_Hover\').style.display = \'inline-block\'" onMouseOut="document.getElementById(\'' + module.name + '_Functions_Hover\').style.display = \'none\'"><p class="functionsHeader">Functions</p>'
      output += '<div id="' + module.name + '_Functions_Hover" class="hoverableAnchors"><a href="#' + module.name + '_Functions" class="fa fa-anchor"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="" class="fa fa-code"></a></div></div>'

      j = 0
      while j < module.functions.length
        Mfunction = module.functions[j]
        MfunctionNameAndType = Mfunction.name.split(":")
        output += '<div id="' + module.name + '_' + MfunctionNameAndType[0].replace(/\s/g,'') + '" class="functionNameDiv"><p class="functionName">' + MfunctionNameAndType[0].replace(/\s/g,'')
        if MfunctionNameAndType[1] != undefined
          output += '<code>&nbsp;:' + MfunctionNameAndType[1] + '</code>'
        if Mfunction.tag != null && Mfunction.tag != undefined 
              output += '<div class="tag tag_' + Mfunction.tag + '" style="bottom:0"><p class="fa fa-tags">&nbsp;&nbsp;' + Mfunction.tag + '</p></div>'
        output += '</p>'
        if Mfunction.documentation != null 
          mdtohtml = marked(Mfunction.documentation)
          output += '<div class="functionDocumentation">' + mdtohtml + '</div>'
        
        output += '</div>'
        j++

      output += '</div>'
    output += '</div>'
    i++
  
  document.getElementById('data').innerHTML = output
  return




getMenuData = (data) ->
  menu = '<ul id="treeMID">'
  modules = data.modules

  i = 0
  while i < modules.length
    module = modules[i]

    menu += '<li>'
    menu += '<a class="menuitem" href="#' + module.name + '">' + module.name + '</a>'
    menu += '<ul>'

    j = 0
    while j < module.classes.length
      Mclass = module.classes[j]
      menu += '<li>'
      menu += '<a class="menuitem" href="#' + module.name + '_' + Mclass.name + '">' + Mclass.name + ' </a>'
      menu += '<ul>'
      k = 0
      while k < Mclass.methods.length
        Mmethod = Mclass.methods[k]

        if Mmethod.type != null && Mmethod.type != undefined
          l = 0
          while l < Mmethod.methods.length
            MmethodWithType = Mmethod.methods[l]
            MmethodWithTypeNameAndType = MmethodWithType.name.split(":")
            menu += '<li><a class="menuitem" href="#' + module.name + '_' + Mclass.name + '_' + MmethodWithTypeNameAndType[0] + '">' + MmethodWithTypeNameAndType[0] + '</a></li>'
            l++

        else
          MmethodNameAndType = Mmethod.name.split(":")
          menu += '<li><a class="menuitem" href="#' + module.name + '_' + Mclass.name + '_' + MmethodNameAndType[0] + '">' + MmethodNameAndType[0] + '</a></li>'
        k++
      
      menu += '</ul></li>'
      j++
    
    if module.functions.length != 0
      menu += '<li><a class="menuitem" href="#' +module.name + '_Functions">Functions</a>'
      menu += '<ul>'

      j = 0
      while j < module.functions.length
        Mfunction = module.functions[j]
        MfunctionNameAndType = Mfunction.name.split(":")
        menu += '<li><a class="menuitem" href="#' + module.name + '_' + MfunctionNameAndType[0] + '">' +  MfunctionNameAndType[0] + '</a></li>'
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