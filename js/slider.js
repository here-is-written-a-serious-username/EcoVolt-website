

const swiper = new Swiper('.swiper', {

    loop: true,
    // slidesPerView: 3,
    // spaceBetween: 40,

    createElements: true,

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
        onlyInViewport: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        // when window width is >= 320px
        0: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1230: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

});