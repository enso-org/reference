$.fn.extend({
    treed: function(o) {

        var openedClass = 'fa fa-caret-down';
        var closedClass = 'fa fa-caret-right';

        if (typeof o != 'undefined') {
            if (typeof o.openedClass != 'undefined') {
                openedClass = o.openedClass;
            }
            if (typeof o.closedClass != 'undefined') {
                closedClass = o.closedClass;
            }
        };

        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("treeMenu");
        tree.find('li').has("ul").each(function() {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function(e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
        tree.find('.branch .indicator').each(function() {
            $(this).on('click', function() {
                $(this).closest('li').click();
            });
        });

        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function() {
            $(this).on('click', function(e) {
                $(this).closest('li').click();
            });
        });
    }
});

//Initialization of treeviews
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// define a new observer
var obs = new MutationObserver(function(mutations, observer) {
    // look through all mutations that just occured
    for (var i = 0; i < mutations.length; ++i) {
        // look through all added nodes of this mutation
        for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
            // was a child added with ID of 'bar'?
            if (mutations[i].addedNodes[j].id == "treeMID") {
                $('#treeMID').treed();

                $('a[href*="#"]')
                    // Remove links that don't actually link to anything
                    .not('[href="#"]')
                    .not('[href="#0"]')
                    .click(function(event) {
                        // On-page links
                        if (
                            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                            location.hostname == this.hostname
                        ) {
                            // Figure out element to scroll to
                            var target = $(this.hash);
                            target = target.length ? target : $('[name=\"' + this.hash.slice(1) + '\"]');
                            // Does a scroll target exist?
                            if (target.length) {
                                // Only prevent default if animation is actually gonna happen
                                event.preventDefault();
                                $('html, body').animate({
                                    scrollTop: target.offset().top
                                }, 1000, function() {
                                    // Callback after animation
                                    // Must change focus!
                                    var $target = $(target);
                                    $target.focus();
                                    if ($target.is(":focus")) { // Checking if the target was focused
                                        return false;
                                    } else {
                                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                        $target.focus(); // Set focus again
                                    };
                                });
                            }
                        }
                    });
            }
        }
    }
});

// have the observer observe for changes in children
obs.observe($("#menuPane").get(0), {
    childList: true
});