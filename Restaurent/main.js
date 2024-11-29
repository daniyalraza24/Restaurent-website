// var typed = new  Typed(".home-title", {
//     strings: ["Tasty Food"],
//     typeSpeed: 90,
//     backSpeed: 90,
//     backDelay: 1000,
//     loop: true,
//   });


// ================SHOW MENU==================
function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('show-menu')
        });
    };
}
showMenu('nav-toggle', 'nav-menu')

// REMOVE MOBILE MENU 
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu')
    })
})

// SCROLL SECTION ACTIVE LINK 
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
    const scrollY = window.pageYOffset
   
    sections.forEach(section => {
        const { offsetTop, offsetHeight, id } = section;
        const sectionTop = offsetTop - 50

        const navLink = document.querySelector(`.nav-menu a[href*='${id}']`);
        if (scrollY > sectionTop && scrollY <= sectionTop + offsetHeight) {
            navLink?.classList.add('active-link');
        } else {
            navLink?.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', setActiveLink)

// CHANGE BACKGROUD HEADER 
function toggleScrollHeader() {
    const header = document.getElementById('header');
    const shouldAddClass = window.scrollY >= 200;

    if (shouldAddClass) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove(scroll - header)
    }
}
window.addEventListener('scroll', toggleScrollHeader);

// Dark light Theme 
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previous Selected topic 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

}

// ACTIVE / DE-ACTIVE The Same Manully With Button 
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user choose 
    localStorage.setItem('select-theme', getCurrentTheme())
    localStorage.setItem('select-icon', getCurrentIcon())

})
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '2000',
    reset: true
})
sr.reveal('.home-data, .home-imge, .about-data, .about-imge, .service-content, .menu-content, .app-data, .app-img, .contact-data, .contact-button, .footer-content', {
    interval: 500
})

