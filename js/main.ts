const togglebtn = document.getElementsByClassName("toggle-btn")[0];
const aboutbtn = document.getElementsByClassName("bbtn")[0];
const projectsbtn = document.getElementsByClassName("pbtn")[0];
const menu = document.getElementsByClassName("nav")[0];
const about = document.getElementsByClassName("about-subnav")[0];
const projects = document.getElementsByClassName("projects-subnav")[0];

togglebtn.addEventListener("click", () => {
    menu.classList.toggle("active");
})

aboutbtn.addEventListener("click", () => {
    about.classList.toggle("active");
})

projectsbtn.addEventListener("click", () => {
    projects.classList.toggle("active");
})