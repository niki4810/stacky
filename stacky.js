$.fn.stacky = function (options) {
    var container = this;
    var defaults = {
        "showToggleButton": true
    };

    $.extend(defaults, options);
    if (defaults.hasOwnProperty("width")) {
        container.width(defaults.width);
    }
    //add stacky class to parent
    container.addClass("stacky stacky-collapsed");
    //add stacky-child class to direct children
    container.children().addClass("stacky-child");

    if (defaults.showToggleButton) {
        //find the first child and append stacky toggle button
        container.find(".stacky-child").eq(0).append('<div class="stacky-toggle-btn"></div>');
    }


    var toggleStacky = function (e) {
        container.toggleClass("stacky-collapsed");
    }
    var openStacky = function (e) {
        container.removeClass("stacky-collapsed");
    }
    var closeStacky = function (e) {
        container.addClass("stacky-collapsed");
    }

    //event listeners
    container.on("click", ".stacky-toggle-btn", toggleStacky);
    container.on("openStacky", openStacky);
    container.on("collapseStacky", closeStacky);
    container.on("toggleStacky", toggleStacky);
};