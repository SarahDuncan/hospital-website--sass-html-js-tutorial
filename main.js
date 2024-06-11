
// Navbar
const navItems = document.querySelector('#nav-items');
const openNavBtn = document.querySelector('#open-nav-btn');
const closeNavBtn = document.querySelector('#close-nav-btn');

openNavBtn.addEventListener('click', () => {
    console.log('1');
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'block';
});

closeNavBtn.addEventListener('click', () => {
    console.log('2');
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
});

// close nav menu after one of the menu items is clicked on only if the screen is less than 1024px
document.querySelectorAll('#nav-items li a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
            console.log('3');
            navItems.style.display = 'none';
            openNavBtn.style.display = 'inline-block';
            closeNavBtn.style.display = 'none';
        }
    })
});


// change navbar background color on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

// Swiper for testimonials

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //responsive breakpoints
    breakpoints: {
        // when window width is >= 600px
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },
});