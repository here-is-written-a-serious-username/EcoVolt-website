
const swiperProjects = new Swiper('.swiper-projects', {

    loop: true,

    autoplay: {
        delay: 8000,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    navigation: {
        nextEl: '.projects__swiper-btn-next',
        prevEl: '.projects__swiper-btn-prev',
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

    // loop: true,
    rewind: true,

    autoplay: {
        delay: 6000,
        pauseOnMouseEnter: true,
    },

    navigation: {
        nextEl: '.partners__swiper-btn-next',
        prevEl: '.partners__swiper-btn-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1230: {
            slidesPerView: 4,
        }
    },
});


