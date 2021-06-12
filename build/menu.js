"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleActive = void 0;
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
exports.toggleActive = toggleActive;
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
