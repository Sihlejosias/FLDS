const footer = document.querySelector('footer');

const year = new Date().getFullYear();
const company_name = 'I am a Future Leader';

footer.innerHTML += `
<div class="copyright"><p>&copy; ${year} ${company_name}. All rights reserved. <a href="#">Privacy</a> | <a href="#">Terms of Use</a></p></div>`;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
navItems.forEach(item => {
    let isDropdownOpen = false;

    item.addEventListener('touchstart', (event) => {
        event.stopPropagation();
        isDropdownOpen = !isDropdownOpen;
        const dropdown = item.querySelector('ul');
        if (dropdown) {
            dropdown.style.display = isDropdownOpen ? 'block' : 'none';
        }
    });

    item.addEventListener('mouseover', () => {
        if (!isDropdownOpen) {
            const dropdown = item.querySelector('ul');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        }
    });

    item.addEventListener('mouseleave', () => { 
        if (!isDropdownOpen) {
            const dropdown = item.querySelector('ul');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        }
    });

    const dropdownLinks = item.querySelectorAll('ul li a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isDropdownOpen) {
                isDropdownOpen = false;
                const dropdown = item.querySelector('ul');
                if (dropdown) {
                    dropdown.style.display = 'none';
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (carouselContainer && prevButton && nextButton) { 
        prevButton.addEventListener('click', () => {
            carouselContainer.scrollLeft -= 200;
        });

        nextButton.addEventListener('click', () => {
            carouselContainer.scrollLeft += 200; 
        });
    } else {
        console.error("Carousel elements not found!"); 
    }
});
