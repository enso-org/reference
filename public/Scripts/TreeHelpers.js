// Extension - create tree menu panel
$.fn.extend({
    treed: function() {
        var openedClass = 'fa fa-caret-down';
        var closedClass = 'fa fa-caret-right';

        // create tree from selected element
        var tree = $(this);
        tree.addClass("treeMenu");
        // create branches
        tree.find('li').has("ul").each(function() {
            var branch = $(this);
            branch.prepend("<i class='indicator " + closedClass + "'></i>");
            branch.addClass('branch');
            //add click event
            branch.on('click', function(e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });

        //add events for open/close indicators
        tree.find('.branch .indicator').each(function() {
            $(this).on('click', function() {
                $(this).closest('li').click();
            });
        });
    }
});

// setting up new observer
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var treeDataObserver = new MutationObserver(function(mutations, observer) {
    // checking each mutation 
    for (var i = 0; i < mutations.length; ++i) {
        for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
            //check if browser rendered place for tree menu
            if (mutations[i].addedNodes[j].id == "treeMID") {
                //creation of new tree menu
                $('#treeMID').treed();
                //setting up scrolling events
                scrollableAfterDOMContentLoadedProperly();

                function offsetAnchor() {
                    if (location.hash.length !== 0) {
                        window.scrollTo(window.scrollX, window.scrollY - 100);
                    }
                }

                //activating proper places on click on menu
                $(document).on('click', 'a[href^="#"]', function(event) {
                    window.setTimeout(function() {
                        offsetAnchor();
                        window.scrollBy(0, 50);
                    }, 0);

                    var url = window.location.href;
                    updateMenuActivity(url);
                });
                window.setTimeout(offsetAnchor, 0);

                //going to proper anchor from url
                if (window.location.hash != "") {
                    var url = encodeURI(window.location.hash);
                    location.href = url;
                    window.scrollBy(0, 50);
                }
            }
        }
    }
});

// adding observer to mutate if only menu files were loaded properly
treeDataObserver.observe($("#menuPane").get(0), {
    childList: true
});

// function for getting parents of each element as array
var getParents = function(elem) {
    var parents = [];
    for (; elem && elem !== document; elem = elem.parentNode) {
        parents.push(elem);
    }
    return parents;
};

var updateMenuActivity = function(url) {
    //1. remove all active states on every scroll event
    $(".treeMenu li,a,ul,i").removeClass("active");

    //loop through each element in menu
    $(".treeMenu a").each(function() {
        //Check if current element is the one displayed
        if (url == (this.href)) {
            var parents = getParents(this);

            //apply specific classes to proper parent elements of checked element
            for (var i = 0; i < parents.length; i++) {
                if ($(parents[i]).attr("id") != "menuPane") {
                    if (i == 0) {
                        var activeItem = $(parents)[0];

                        //checks if there is need to scroll menu
                        if (checkIfInView($(activeItem)) == false) {
                            var wH = $(window).height();
                            var activeY = $(activeItem).offset().top - scrollY;
                            if (activeY > wH / 2) {
                                activeItem.scrollIntoView(false);
                            } else {
                                activeItem.scrollIntoView(true);
                            }
                        }
                    }

                    // adding active state for classess/functions
                    if ($(parents[i]).is("li") && i > 0) {
                        $(parents[i]).addClass('active');
                        $(parents[i]).children().addClass('active');
                    }

                    // opening branches and changing triangular indicators
                    if (i > 1 && $(parents[i]).attr("class") != "branch") {
                        $(parents[i]).css("display", "");
                        var openedClass = 'fa fa-caret-down';
                        var closedClass = 'fa fa-caret-right';

                        if ($(parents[i]).children('i:first').hasClass(closedClass)) {
                            var icon = $(parents[i]).children('i:first');
                            icon.toggleClass(openedClass + " " + closedClass);
                        }

                        $(parents[i]).children().css("display", "");
                    }

                    //changing state of proper module
                    if ($(parents[3]).children()[1] !== undefined) {
                        array = $(parents[3]).children()[1].href.split("_")

                        if (array[array.length - 1] == "Functions") {
                            $(parents[2]).children().css("display", "none");
                            var icon = $(parents[3]).children('i:first');
                            icon.removeClass(openedClass);
                            icon.addClass(closedClass);
                        }
                    }
                } else {
                    break;
                }
            }
        }
    });
};

function checkIfInView(elem, partial) {
    //get the window heights
    var container = $(".sidenav");
    var contHeight = container.height();
    var contTop = container.scrollTop();
    var contBottom = contTop + contHeight;

    //check if highlighted element is on screen by getting its position and
    //comparing against container sizes
    var elemTop = $(elem).offset().top - container.offset().top;
    var elemBottom = elemTop + $(elem).height();

    var isTotal = (elemTop >= 0 && elemBottom <= contHeight);
    var isPart = ((elemTop < 0 && elemBottom > 0) || (elemTop > 0 && elemTop <= container.height())) && partial;

    return isTotal || isPart;
}

function scrollableAfterDOMContentLoadedProperly() {
    // do not update menu on small devices - they are not processing it fast
    if ($(document).width() > 780) {
        $(document).scroll(function() {
            //check each panel if it is on screen
            $('.module_classes_class, .functions').each(function() {
                $(this).css('background-color', 'white');
                if (checkIfInView($(this), true) == true) {
                    // update active menu item
                    var url = window.location.href.split('#')[0] + "#" + $(this).attr('id');
                    updateMenuActivity(url);
                }
            });
        });
    }
}

// Show navigation menu on small screens and make it on full screen
function openNav() {
    //check if opened
    const screenWidth = $(document).width();
    console.log(screenWidth);

    if (document.getElementById("menuPane").style.width != "350px") {
        document.getElementById("menuPane").style.width = "350px";
        document.getElementById("data").style.marginLeft = "350px";
    } else {
        document.getElementById("menuPane").style.width = "0";
        document.getElementById("data").style.marginLeft = "0";
    }
}