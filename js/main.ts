const togglebtn = document.getElementsByClassName("toggle-btn")[0];
const menu = document.getElementsByClassName("nav")[0];

togglebtn.addEventListener("click", () => {
    menu.classList.toggle("active");
})