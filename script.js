const navbar = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const hamburgerSpan = hamburger.querySelectorAll('span');
const navLinks = document.querySelector('.nav-links');
const menuTabs = document.querySelector('.menu-tabs');
const menu = document.querySelector(".menu");

// hamburger.addEventListener('click', function toggleNav = () => {
//     hamburger.classList.toggle('nav-toggle');
//     navLinks.classList.toggle('open');
//     hamburger.classList.toggle('active');
// });

function toggleNav() {
    hamburger.classList.toggle('nav-toggle');
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);

// Close nav-links when clicking nav item

document.addEventListener('click', function(e) {
    if(e.target.closest(".nav-links a")) {
        toggleNav();
    }
})

// Sticky Header,Remove Nav background when scroll
window.addEventListener("scroll", function() { //BETA Feature Row 65
    // console.log(this.pageYOffset);
    if(this.pageYOffset > 50) { 
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})

//Menu Tabs
menuTabs.addEventListener('click', function(e) {
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
        const target = e.target.getAttribute('data-target');
        menuTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        menu.querySelector(".menu-tab-content.active").classList.remove('active');
        menu.querySelector(target).classList.add('active');
    }
})
