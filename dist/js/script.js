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

// Illustations
var splide1 = new Splide( '#illustration .splide', {
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
splide1.mount();

$('#illustration #arrows-slide .prev-slide').on('click', function (e) {
    e.preventDefault();
    splide1.go('<');
});
$('#illustration #arrows-slide .next-slide').on('click', function (e) {
    e.preventDefault();
    splide1.go('>');
});

// Short Movies
var splide2 = new Splide( '#short-movies .splide', {
    pagination: false,
    arrows: false,
    gap: '2em',
    perPage: 3,
    perMove: 1,
    breakpoints: {
        767: {
            perPage: 1,
        },
    },
} );
splide2.mount();

$('#short-movies #arrows-slide .prev-slide').on('click', function (e) {
    e.preventDefault();
    splide2.go('<');
});
$('#short-movies #arrows-slide .next-slide').on('click', function (e) {
    e.preventDefault();
    splide2.go('>');
});
