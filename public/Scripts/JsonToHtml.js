const xmlHttp = new XMLHttpRequest;
const jsonFile = 'JSONData/stdLib_base_test.json';

const getMainData = function(data) {
    let output = '';
    const { modules } = data;

    let currentModuleNumber = 0;
    while (currentModuleNumber < modules.length) {
        var mdtohtml, tagType;
        const module = modules[currentModuleNumber];

        output += `<div class="moduleDiv" id="${module.name}">\
        <div style="width:100%" \
        onMouseOver="document.getElementById('${module.name}_Hover').style.display = 'inline-block'" \
        onMouseOut="document.getElementById('${module.name}_Hover').style.display = 'none'">\
        <p class="module">${module.name}</p>`;

        if ((module.tag !== null) && (module.tag !== undefined)) {
            tagType = module.tag.split(":");
            var _typeOfTag = tagType[0]
            var _versionOfChange = tagType[1]
            output += `<div class="tag tag_${_typeOfTag.replace(/\s/g,'')}">\
            <p>${_typeOfTag.replace(/\s/g,'')} in ${_versionOfChange.replace(/\s/g,'')}</p></div>`;
        }
        output += `<div id="${module.name}_Hover" class="hoverableAnchors">\
        <a href="#${module.name}" class="fa fa-anchor" title="Get anchor link">\
        </a>&nbsp;&nbsp;&nbsp;&nbsp;`;

        if ((module.link !== null) && (module.link !== undefined)) {
            output += '<a href="" class="fa fa-file-code" title="Jump to source"></a>';
        }
        output += '</div></div>';

        if ((module.documentation !== null) && (module.documentation !== undefined)) {
            mdtohtml = marked(module.documentation);
            output += '<p class="module_overview">Module overview</p>';
            output += `<div class="moduleDocumentation">${mdtohtml}</div>`;
        }

        output += '<div class="module_classes">';
        let currentModuleClassNumber = 0;
        while (currentModuleClassNumber < module.classes.length) {
            const Mclass = module.classes[currentModuleClassNumber];

            output += `<div class="module_classes_class" id="${module.name}_${Mclass.name}">\
            <div style="width:100%" \
            onMouseOver="document.getElementById('${module.name}_${Mclass.name}_Hover').style.display = 'inline-block'" \
            onMouseOut="document.getElementById('${module.name}_${Mclass.name}_Hover').style.display = 'none'">\
            <p class="className">${Mclass.name}</p>`;

            if ((Mclass.tag !== null) && (Mclass.tag !== undefined)) {
                tagType = Mclass.tag.split(":");
                var _typeOfTag = tagType[0]
                var _versionOfChange = tagType[1]
                output += `<div class="tag tag_${_typeOfTag.replace(/\s/g,'')}">\
                <p>${_typeOfTag.replace(/\s/g,'')} in ${_versionOfChange.replace(/\s/g,'')}</p></div>`;
            }
            output += `<div id="${module.name}_${Mclass.name}_Hover" \
            class="hoverableAnchors"><a href="#${module.name}_${Mclass.name}" \
            class="fa fa-anchor"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;

            if ((Mclass.link !== null) && (Mclass.link !== undefined)) {
                output += `<a href="${Mclass.link(+'" class="fa fa-file-code"></a>')}`;
            }
            output += '</div></div>';

            if (Mclass.documentation !== null) {
                mdtohtml = marked(Mclass.documentation);
                output += `<div class="classDocumentation">${mdtohtml}</div>`;
            }

            if ((Mclass.longDocumentation !== null) && (Mclass.longDocumentation !== undefined)) {
                mdtohtml = marked(Mclass.longDocumentation);
                output += `<div class="classLongDocumentation">${mdtohtml}</div>`;
            }

            output += '<div class="module_classes_class_methods">';

            let currentModuleClassMethodNumber = 0;
            let printedInfo = false;
            while (currentModuleClassMethodNumber < Mclass.methods.length) {
                const Mmethod = Mclass.methods[currentModuleClassMethodNumber];

                // Check if methods are segregated by types
                if ((Mmethod.type !== null) && (Mmethod.type !== undefined)) {
                    output += `<div class="methodTypeDiv">\
                    <p class="MethodTypeHead">${Mmethod.type}</p>`;

                    if (Mmethod.documentation != null) {
                        mdtohtml = marked(Mmethod.documentation);
                        output += `<div class="methodTypeDocumentation">${mdtohtml}</div>`;
                    }

                    let currentModuleClassMethodFromTypeNumber = 0;
                    while (currentModuleClassMethodFromTypeNumber < Mmethod.methods.length) {
                        const MmethodWithType = Mmethod.methods[currentModuleClassMethodFromTypeNumber];
                        const MmethodWithTypeNameAndType = MmethodWithType.name.split(":");

                        output += `<div id="${module.name}_${Mclass.name}_${MmethodWithTypeNameAndType[0].replace(/\s/g,'')}"\
                         class="methodDiv" \
                         onMouseOver="document.getElementById('${module.name}_${Mclass.name}_${MmethodWithTypeNameAndType[0].replace(/\s/g,'')}_Hover').style.display = 'inline-block'" \
                         onMouseOut="document.getElementById('${module.name}_${Mclass.name}_${MmethodWithTypeNameAndType[0].replace(/\s/g,'')}_Hover').style.display = 'none'">`;
                        output += '<div style="width:100%">';
                        output += `<p class="methodName">${MmethodWithTypeNameAndType[0].replace(/\s/g,'')}`;

                        if (MmethodWithTypeNameAndType[1] !== undefined) {
                            output += `<code>&nbsp;:${MmethodWithTypeNameAndType[1]}</code>`;
                        }
                        output += '</p>';
                        if ((MmethodWithType.tag !== null) && (MmethodWithType.tag !== undefined)) {
                            tagType = MmethodWithType.tag.split(":");
                            var _typeOfTag = tagType[0]
                            var _versionOfChange = tagType[1]
                            output += `<div class="tag tag_${_typeOfTag.replace(/\s/g,'')}" style="bottom:0">\
                            <p>${_typeOfTag.replace(/\s/g,'')} in ${_versionOfChange.replace(/\s/g,'')}</p></div>`;
                        }
                        output += `<div id="${module.name}_${Mclass.name}_${MmethodWithTypeNameAndType[0].replace(/\s/g,'')}_Hover" \
                        class="hoverableAnchors"><a href="#${module.name}_${Mclass.name}_${MmethodWithTypeNameAndType[0].replace(/\s/g,'')}" \
                        class="fa fa-anchor"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;

                        if ((MmethodWithType.link !== null) && (MmethodWithType.link !== undefined)) {
                            output += `<a href="${MmethodWithType.link(+'" class="fa fa-file-code"></a>')}`;
                        }
                        output += '</div></div>';

                        if (MmethodWithType.documentation !== null) {
                            mdtohtml = marked(MmethodWithType.documentation);
                            output += `<div class="methodDocumentation">${mdtohtml}</div>`;
                        }

                        output += '</div>';
                        currentModuleClassMethodFromTypeNumber++;
                    }
                    output += '</div>';

                } else {
                    if (printedInfo === false) {
                        output += '<div class="methodTypeDiv">';
                        output += '<p class="MethodTypeHead">Unclassified methods</p>';
                        printedInfo = true;
                    }

                    const MmethodWithNameAndType = Mmethod.name.split(":");

                    output += `<div id="${module.name}_${Mclass.name}_${MmethodWithNameAndType[0].replace(/\s/g,'')}" class="methodDiv"  \
                    onMouseOver="document.getElementById('${module.name}_${Mclass.name}_${MmethodWithNameAndType[0].replace(/\s/g,'')}_Hover').style.display = 'inline-block'" \
                    onMouseOut="document.getElementById('${module.name}_${Mclass.name}_${MmethodWithNameAndType[0].replace(/\s/g,'')}_Hover').style.display = 'none'">`;
                    output += '<div style="width:100%">';
                    output += `<p class="methodName">${MmethodWithNameAndType[0].replace(/\s/g,'')}`;

                    if (MmethodWithNameAndType[1] !== undefined) {
                        output += `<code>&nbsp;:${MmethodWithNameAndType[1]}</code>`;
                    }
                    output += '</p>';
                    if ((Mmethod.tag !== null) && (Mmethod.tag !== undefined)) {
                        tagType = Mmethod.tag.split(":");
                        var _typeOfTag = tagType[0]
                        var _versionOfChange = tagType[1]
                        output += `<div class="tag tag_${_typeOfTag.replace(/\s/g,'')}" style="bottom:0">\
                        <p>${_typeOfTag.replace(/\s/g,'')} in ${_versionOfChange.replace(/\s/g,'')}</p></div>`;
                    }
                    output += `<div id="${module.name}_${Mclass.name}_${MmethodWithNameAndType[0].replace(/\s/g,'')}_Hover" class="hoverableAnchors">\
                    <a href="#${module.name}_${Mclass.name}_${MmethodWithNameAndType[0].replace(/\s/g,'')}" class="fa fa-anchor"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;

                    if ((Mmethod.link !== null) && (Mmethod.link !== undefined)) {
                        output += `<a href="${Mmethod.link}" class="fa fa-file-code"></a>`;
                    }
                    output += '</div></div>';

                    if (Mmethod.documentation !== null) {
                        mdtohtml = marked(Mmethod.documentation);
                        output += `<div class="methodDocumentation">${mdtohtml}</div>`;
                    }

                    output += '</div>';
                }
                currentModuleClassMethodNumber++;

                if (currentModuleClassMethodNumber === Mclass.methods.length) {
                    output += '</div>';
                }
            }

            output += '</div></div>';
            currentModuleClassNumber++;
        }
        output += '</div>';

        if (module.functions.length !== 0) {
            output += `<div class="functions" id="${module.name}_Functions"><div style="width:100%"  \
            onMouseOver="document.getElementById('${module.name}_Functions_Hover').style.display = 'inline-block'" \
            onMouseOut="document.getElementById('${module.name}_Functions_Hover').style.display = 'none'"><p class="functionsHeader">Functions</p>`;
            output += `<div id="${module.name}_Functions_Hover" class="hoverableAnchors">\
            <a href="#${module.name}_Functions" class="fa fa-anchor"></a>&nbsp;&nbsp;&nbsp;&nbsp;\
            <a href="" class="fa fa-file-code"></a></div></div>`;

            let currentModuleFunctionNumber = 0;
            while (currentModuleFunctionNumber < module.functions.length) {
                const Mfunction = module.functions[currentModuleFunctionNumber];
                const MfunctionNameAndType = Mfunction.name.split(":");

                output += `<div id="${module.name}_${MfunctionNameAndType[0].replace(/\s/g,'')}" class="functionNameDiv"  \
                onMouseOver="document.getElementById('${module.name}_${MfunctionNameAndType[0].replace(/\s/g,'')}_Hover').style.display = 'inline-block'" \
                onMouseOut="document.getElementById('${module.name}_${MfunctionNameAndType[0].replace(/\s/g,'')}_Hover').style.display = 'none'">`;
                output += '<div style="width:100%">';
                output += `<p class="functionName">${MfunctionNameAndType[0].replace(/\s/g,'')}`;

                if (MfunctionNameAndType[1] !== undefined) {
                    output += `<code>&nbsp;:${MfunctionNameAndType[1]}</code>`;
                }
                output += '</p>';

                if ((Mfunction.tag !== null) && (Mfunction.tag !== undefined)) {
                    tagType = Mfunction.tag.split(":");
                    var _typeOfTag = tagType[0]
                    var _versionOfChange = tagType[1]
                    output += `<div class="tag tag_${_typeOfTag.replace(/\s/g,'')}" style="bottom:0">\
                    <p>${_typeOfTag.replace(/\s/g,'')} in ${_versionOfChange.replace(/\s/g,'')}</p></div>`;
                }
                output += `<div id="${module.name}_${MfunctionNameAndType[0].replace(/\s/g,'')}_Hover" class="hoverableAnchors">\
                <a href="#${module.name}_${MfunctionNameAndType[0].replace(/\s/g,'')}" \
                class="fa fa-anchor"></a>&nbsp;&nbsp;&nbsp;&nbsp;`;

                if ((Mfunction.link !== null) && (Mfunction.link !== undefined)) {
                    output += `<a href="${Mfunction.link}" class="fa fa-file-code"></a>`;
                }
                output += '</div></div>';

                if (Mfunction.documentation !== null) {
                    mdtohtml = marked(Mfunction.documentation);
                    output += `<div class="functionDocumentation">${mdtohtml}</div>`;
                }

                output += '</div>';
                currentModuleFunctionNumber++;
            }

            output += '</div>';
        }
        output += '</div>';
        currentModuleNumber++;
    }

    document.getElementById('data').innerHTML = output;
};




const getMenuData = function(data) {
    let menu = '<ul id="treeMID">';
    const { modules } = data;

    let currentModuleNumber = 0;
    while (currentModuleNumber < modules.length) {
        const module = modules[currentModuleNumber];

        menu += '<li>';
        menu += `<a class="menuitem" href="#${module.name}">${module.name}</a>`;
        menu += '<ul>';

        let currentModuleClassNumber = 0;
        while (currentModuleClassNumber < module.classes.length) {
            const Mclass = module.classes[currentModuleClassNumber];
            menu += '<li>';
            menu += `<a class="menuitem" href="#${module.name}_${Mclass.name}">${Mclass.name} </a>`;
            menu += '<ul>';
            let currentModuleClassMethodNumber = 0;
            while (currentModuleClassMethodNumber < Mclass.methods.length) {
                const Mmethod = Mclass.methods[currentModuleClassMethodNumber];

                if ((Mmethod.type !== null) && (Mmethod.type !== undefined)) {
                    let currentModuleClassMethodFromTypeNumber = 0;
                    while (currentModuleClassMethodFromTypeNumber < Mmethod.methods.length) {
                        const MmethodWithType = Mmethod.methods[currentModuleClassMethodFromTypeNumber];
                        const MmethodWithTypeNameAndType = MmethodWithType.name.split(":");
                        menu += `<li><a class="menuitem" href="#${module.name}_${Mclass.name}_${MmethodWithTypeNameAndType[0]}">\
                        ${MmethodWithTypeNameAndType[0]}</a></li>`;
                        currentModuleClassMethodFromTypeNumber++;
                    }

                } else {
                    const MmethodNameAndType = Mmethod.name.split(":");
                    menu += `<li><a class="menuitem" href="#${module.name}_${Mclass.name}_${MmethodNameAndType[0]}">${MmethodNameAndType[0]}</a></li>`;
                }
                currentModuleClassMethodNumber++;
            }

            menu += '</ul></li>';
            currentModuleClassNumber++;
        }

        if (module.functions.length !== 0) {
            menu += `<li><a class="menuitem" href="#${module.name}_Functions">Functions</a>`;
            menu += '<ul>';

            currentModuleFunctionNumber = 0;
            while (currentModuleFunctionNumber < module.functions.length) {
                const Mfunction = module.functions[currentModuleFunctionNumber];
                const MfunctionNameAndType = Mfunction.name.split(":");
                menu += `<li><a class="menuitem" href="#${module.name}_${MfunctionNameAndType[0]}">${MfunctionNameAndType[0]}</a></li>`;
                currentModuleFunctionNumber++;
            }

            menu += '</ul></li>';
        }
        menu += '</ul></li>';
        currentModuleNumber++;
    }
    menu += '</ul>';
    document.getElementById('menuPane').innerHTML += menu;
};

// Processed on page load
$(window).on('load', function() {
    xmlHttp.onreadystatechange = function() {
        if ((this.readyState === 4) && (this.status === 200)) {
            const data = JSON.parse(this.responseText);
            getMainData(data);
            getMenuData(data);
        }
    };

    xmlHttp.open('GET', jsonFile, true);
    xmlHttp.send();
});