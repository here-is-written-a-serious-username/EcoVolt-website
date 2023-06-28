

const swiperProjects = new Swiper('.swiper-projects', {

    loop: true,

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
            spaceBetween: 20
        },

        1230: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

});


const swiperPartners = new Swiper('.swiper-partners', {

    loop: true,

    createElements: true,

    autoplay: {
        delay: 7000,
        pauseOnMouseEnter: true,
    },


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
            spaceBetween: 20
        },

        1230: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

});