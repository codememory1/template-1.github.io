new Swiper('.swiper-container-programs', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 4,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});
new Swiper('.swiper-container-examples', {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})