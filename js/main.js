var togglebtn = document.getElementsByClassName("toggle-btn")[0];
var menu = document.getElementsByClassName("nav")[0];
togglebtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});
