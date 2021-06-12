// color slide
$(function () {
    $('#color-slider').val("" + Math.round(Math.random() * 360));
    handleChange(String($('#color-slider').val()));
});
$('#color-slider').on("change", function () {
    handleChange(String($("#color-slider").val()));
});
var handleChange = function (e) {
    var currMainColor = "hsl(" + e + ",100%,41%)";
    var currSecondaryColor = "hsl(" + e + ",100%,28%)";
    document.body.style.setProperty('--main-color', currMainColor);
    document.body.style.setProperty('--secondary-color', currSecondaryColor);
};
// Create gradient of all colors
var getGradient = function () {
    var allColorsGradient = "linear-gradient(to right, hsl(0,100%,41%),";
    for (var i = 1; i < 360; i++) {
        allColorsGradient += "hsl(" + i + ",100%,41%),";
    }
    allColorsGradient += "hsl(360,100%,41%))";
    return allColorsGradient;
};
var gradient = getGradient();
$(function () { return document.body.style.setProperty('--gradient', gradient); });
System.register("menu", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Toggle settings tray open
     */
    function toggleOpen() {
        $(".settings-tray").toggleClass("open");
    }
    /**
     * Toggle class "active" from "e"
     * @param e HTML or JQuery element
     */
    function toggleActive(e) {
        $(".active").toggleClass('active');
        $(e).toggleClass("active");
    }
    exports_1("toggleActive", toggleActive);
    return {
        setters: [],
        execute: function () {
            // nav link click event
            $(function () {
                $("#menu a").each(function (i, e) {
                    $(e).on("click", function () {
                        toggleActive(e);
                    });
                });
            });
            // Settings btn click event
            $(function () {
                $("#settings-btn").each(function (i, e) {
                    $(e).on("click", function () {
                        toggleOpen();
                    });
                });
            });
            $(function () {
                $('main').on('scroll', function () {
                    console.log($("main").scrollTop());
                    $('.nav-link').each(function (i, e) {
                        var currLink = e.getAttribute('href');
                        if ($(currLink).offset().top <= $('main').scrollTop()) {
                            if (currLink === "#contact" && ($("main").scrollTop() < 1650)) {
                                currLink = "#portfolio";
                            }
                            toggleActive($("a[href=\"" + currLink + "\"]"));
                        }
                    });
                });
            });
            $(function () {
                $('.btn').on("click", function () {
                    $(".btn").toggleClass("active");
                    $('#menu').toggleClass("active");
                });
            });
        }
    };
});
var _a = [
    'https://behance.net/arthurmm18',
    'https://github.com/Arthur-Matias'
], design = _a[0], prog = _a[1];
function toggleModal(section) {
    if (section === 'design') {
        window.open(design);
    }
    else {
        window.open(prog);
    }
}
