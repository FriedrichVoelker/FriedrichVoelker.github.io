var toggleName = false;
var fadeName = "";
var fading = false;
var opacity = 0;
var inOpacity = 0;
var fadeSwitch = false;

function clickName() {
    if (!fading) {

        fadeSwitch = false;
        fading = true;
        toggleName = !toggleName
        fadeout()
        toggleName ? fadeName = "Test" : fadeName = "Friedrich"
    }
};



function fadeout() {
    setInterval(hide, 200);
}

function hide() {
    var name = document.querySelector("#name");
    opacity = Number(window.getComputedStyle(name).getPropertyValue("opacity"))

    if (!fadeSwitch) {
        if (opacity > 0) {
            opacity = opacity - 0.1;
            name.style.opacity = opacity
        } else {
            name.innerHTML = fadeName
            fadeSwitch = true;
        }
    } else {

        inOpacity = Number(window.getComputedStyle(name).getPropertyValue("opacity"))
        if (inOpacity < 1) {
            inOpacity = inOpacity + 0.1;
            name.style.opacity = inOpacity
        } else {
            fading = false;
            clearInterval(hide);
            clearInterval(fadeout)
        }

    }
}