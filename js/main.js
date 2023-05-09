var togglebtn = document.getElementsByClassName("toggle-btn")[0];
var aboutbtn = document.getElementsByClassName("bbtn")[0];
var projectsbtn = document.getElementsByClassName("pbtn")[0];
var menu = document.getElementsByClassName("nav")[0];
var about = document.getElementsByClassName("about-subnav")[0];
var projects = document.getElementsByClassName("projects-subnav")[0];
togglebtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});
aboutbtn.addEventListener("click", function () {
    about.classList.toggle("active");
});
projectsbtn.addEventListener("click", function () {
    projects.classList.toggle("active");
});
