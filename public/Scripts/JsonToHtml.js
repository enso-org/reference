// Constants
const xmlHttp = new XMLHttpRequest;
const jsonFile = 'JSONData/stdLib_base_test.json';

const getMainData = function(data) {
    let output = '';
    const { modules } = data;

    let i = 0;
    while (i < modules.length) {
        var mdtohtml, tagType;
        const module = modules[i];

        output += `<div class="moduleDiv" id="${module.name}">\
        <div style="width:100%" \
        onMouseOver="document.getElementById('${module.name}_Hover').style.display = 'inline-block'" \
        onMouseOut="document.getElementById('${module.name}_Hover').style.display = 'none'">\
        <p class="module">${module.name}</p>`;

        if ((module.tag !== null) && (module.tag !== undefined)) {
            tagType = module.tag.split(":");

            output += `<div class="tag tag_${tagType[0].replace(/\s/g,'')}">\
            <p class="<!--fa fa-tags-->">\
            ${tagType[0].replace(/\s/g,'')} in ${tagType[1].replace(/\s/g,'')}</p></div>`;
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
        let j = 0;
        while (j < module.classes.length) {
            const Mclass = module.classes[j];

            output += `<div class="module_classes_class" id="${module.name}_${Mclass.name}">\
            <div style="width:100%" \
            onMouseOver="document.getElementById('${module.name}_${Mclass.name}_Hover').style.display = 'inline-block'" \
            onMouseOut="document.getElementById('${module.name}_${Mclass.name}_Hover').style.display = 'none'">\
            <p class="className">${Mclass.name}</p>`;

            if ((Mclass.tag !== null) && (Mclass.tag !== undefined)) {
                tagType = Mclass.tag.split(":");
                output += `<div class="tag tag_${tagType[0].replace(/\s/g,'')}">\
                <p class="<!--fa fa-tags-->">\
                ${tagType[0].replace(/\s/g,'')} in ${tagType[1].replace(/\s/g,'')}</p></div>`;
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
            let k = 0;
            let printedInfo = false;
            while (k < Mclass.methods.length) {
                const Mmethod = Mclass.methods[k];

                if ((Mmethod.type !== null) && (Mmethod.type !== undefined)) {
                    output += `<div class="methodTypeDiv">\
                    <p class="MethodTypeHead">${Mmethod.type}</p>`;

                    if (Mmethod.documentation != null) {
                        mdtohtml = marked(Mmethod.documentation);
                        output += `<div class="methodTypeDocumentation">${mdtohtml}</div>`;
                    }

                    let l = 0;
                    while (l < Mmethod.methods.length) {
                        const MmethodWithType = Mmethod.methods[l];
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
                            output += `<div class="tag tag_${tagType[0].replace(/\s/g,'')}" style="bottom:0">\
                            <p class="<!--fa fa-tags-->">${tagType[0].replace(/\s/g,'')} in ${tagType[1].replace(/\s/g,'')}</p></div>`;
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
                        l++;
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
                        output += `<div class="tag tag_${tagType[0].replace(/\s/g,'')}" style="bottom:0">\
                        <p class="<!--fa fa-tags-->">${tagType[0].replace(/\s/g,'')} in ${tagType[1].replace(/\s/g,'')}</p></div>`;
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
                k++;
                if (k === Mclass.methods.length) {
                    output += '</div>';
                }
            }

            output += '</div></div>';
            j++;
        }
        output += '</div>';

        if (module.functions.length !== 0) {
            output += `<div class="functions" id="${module.name}_Functions"><div style="width:100%"  \
            onMouseOver="document.getElementById('${module.name}_Functions_Hover').style.display = 'inline-block'" \
            onMouseOut="document.getElementById('${module.name}_Functions_Hover').style.display = 'none'"><p class="functionsHeader">Functions</p>`;
            output += `<div id="${module.name}_Functions_Hover" class="hoverableAnchors">\
            <a href="#${module.name}_Functions" class="fa fa-anchor"></a>&nbsp;&nbsp;&nbsp;&nbsp;\
            <a href="" class="fa fa-file-code"></a></div></div>`;

            j = 0;
            while (j < module.functions.length) {
                const Mfunction = module.functions[j];
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
                    output += `<div class="tag tag_${tagType[0].replace(/\s/g,'')}" style="bottom:0">\
                    <p class="<!--fa fa-tags-->">${tagType[0].replace(/\s/g,'')} in ${tagType[1].replace(/\s/g,'')}</p></div>`;
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
                j++;
            }

            output += '</div>';
        }
        output += '</div>';
        i++;
    }

    document.getElementById('data').innerHTML = output;
};




const getMenuData = function(data) {
    let menu = '<ul id="treeMID">';
    const { modules } = data;

    let i = 0;
    while (i < modules.length) {
        const module = modules[i];

        menu += '<li>';
        menu += `<a class="menuitem" href="#${module.name}">${module.name}</a>`;
        menu += '<ul>';

        let j = 0;
        while (j < module.classes.length) {
            const Mclass = module.classes[j];
            menu += '<li>';
            menu += `<a class="menuitem" href="#${module.name}_${Mclass.name}">${Mclass.name} </a>`;
            menu += '<ul>';
            let k = 0;
            while (k < Mclass.methods.length) {
                const Mmethod = Mclass.methods[k];

                if ((Mmethod.type !== null) && (Mmethod.type !== undefined)) {
                    let l = 0;
                    while (l < Mmethod.methods.length) {
                        const MmethodWithType = Mmethod.methods[l];
                        const MmethodWithTypeNameAndType = MmethodWithType.name.split(":");
                        menu += `<li><a class="menuitem" href="#${module.name}_${Mclass.name}_${MmethodWithTypeNameAndType[0]}">\
                        ${MmethodWithTypeNameAndType[0]}</a></li>`;
                        l++;
                    }

                } else {
                    const MmethodNameAndType = Mmethod.name.split(":");
                    menu += `<li><a class="menuitem" href="#${module.name}_${Mclass.name}_${MmethodNameAndType[0]}">${MmethodNameAndType[0]}</a></li>`;
                }
                k++;
            }

            menu += '</ul></li>';
            j++;
        }

        if (module.functions.length !== 0) {
            menu += `<li><a class="menuitem" href="#${module.name}_Functions">Functions</a>`;
            menu += '<ul>';

            j = 0;
            while (j < module.functions.length) {
                const Mfunction = module.functions[j];
                const MfunctionNameAndType = Mfunction.name.split(":");
                menu += `<li><a class="menuitem" href="#${module.name}_${MfunctionNameAndType[0]}">${MfunctionNameAndType[0]}</a></li>`;
                j++;
            }

            menu += '</ul></li>';
        }
        menu += '</ul></li>';
        i++;
    }
    menu += '</ul>';
    document.getElementById('menuPane').innerHTML += menu;
};

// Processed on page load
xmlHttp.onreadystatechange = function() {
    if ((this.readyState === 4) && (this.status === 200)) {
        const data = JSON.parse(this.responseText);
        getMainData(data);
        getMenuData(data);
    }
};

xmlHttp.open('GET', jsonFile, true);
xmlHttp.send();