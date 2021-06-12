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
