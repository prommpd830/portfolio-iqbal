// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
})

var splide = new Splide( '.splide', {
    type     : 'loop',
    pagination: false,
    arrows: false,
    autoplay: true,
    focus: 'center',
    perPage: 2,
    breakpoints: {
        767: {
            perPage: 1,
        },
    },
} );
splide.mount();

$('#arrows-slide .prev-slide').on('click', function (e) {
    e.preventDefault();
    splide.go('<');
});
$('#arrows-slide .next-slide').on('click', function (e) {
    e.preventDefault();
    splide.go('>');
});