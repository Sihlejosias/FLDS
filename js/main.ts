const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})