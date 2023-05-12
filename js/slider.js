

const swiper = new Swiper('.swiper', {

    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,

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



    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

});