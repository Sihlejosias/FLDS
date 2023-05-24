var toggleButton = document.getElementsByClassName('toggle-btn')[0];
var navlinks = document.getElementsByClassName('navbar-links')[0];
var dropDown = document.getElementsByClassName('open')[0];
var dropDown_menu = document.getElementsByClassName('dropdowns')[0];
toggleButton.addEventListener('click', function () {
    navlinks.classList.toggle('active');
});
dropDown.addEventListener('click', function () {
    dropDown_menu.classList.toggle('active');
});
