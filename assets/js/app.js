var toggleName = false;
var fadeName = "";
var fading = false;
var opacity = 0;
var inOpacity = 0;
var fadeSwitch = false;
var intervalID = 0;

function clickName() {
    if (!fading) {

        fadeSwitch = false;
        fading = true;
        toggleName = !toggleName
        var name = document.querySelector("#name");
        name.classList.add("fading")
        fadeout()
        toggleName ? fadeName = "xDragonTaX" : fadeName = "Friedrich"
    } else {
        console.log("fading")
    }
};

function fadeout() {
    intervalID = setInterval(hide, 100);
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
            name.classList.remove("fading")
            fading = false;
            clearInterval(intervalID);
        }

    }
}


var nav = false;

function toggleMenu(x) {
    x.classList.toggle("change");
    !nav ? openNav() : closeNav();
}

function openNav() {
    nav = true;
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    nav = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


function toggleHome() {

    var home = document.querySelector("#home")
    home.style.visibility = "visible"

    var projects = document.querySelector("#projects")
    projects.style.visibility = "hidden"
}

function toggleProjects() {
    var home = document.querySelector("#home")
    home.style.visibility = "hidden"

    var projects = document.querySelector("#projects")
    projects.style.visibility = "visible"
}


function updateTime() {
    var time = document.querySelector("#time");
    var date = document.querySelector("#date");

    var datum = new Date();

    var seconds = datum.getSeconds()
    seconds < 10 ? seconds = "0" + seconds : "";
    var minutes = datum.getMinutes()
    minutes < 10 ? minutes = "0" + minutes : "";
    var hours = datum.getHours()
    hours < 10 ? hours = "0" + hours : "";

    var day = datum.getDate();
    var month = datum.getMonth() + 1;
    day < 10 ? day = "0" + day : "";
    month < 10 ? month = "0" + month : "";

    time.innerHTML = hours + ":" + minutes + ":" + seconds
    date.innerHTML = day + "." + month + "." + datum.getFullYear();

}



updateTime()
setInterval(updateTime, 1000);