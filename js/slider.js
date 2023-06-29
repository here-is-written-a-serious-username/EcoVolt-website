
const swiperProjects = new Swiper('.swiper-projects', {

    loop: true,
    createElements: true,
    spaceBetween: 42,

    autoplay: {
        delay: 8000,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // keyboard: {
    //     enabled: true,
    //     onlyInViewport: true,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1230: {
            slidesPerView: 3,
        }
    },

});

const swiperPartners = new Swiper('.swiper-partners', {

    loop: true,
    // rewind: true,
    createElements: true,

    autoplay: {
        delay: 6000,
        pauseOnMouseEnter: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 51,
        }
    },
});






// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector('.your-class').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
// });