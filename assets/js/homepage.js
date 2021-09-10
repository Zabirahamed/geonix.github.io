//   HTML Template Name : GeoNix - Digital Business Agency Bootstrap and Html Template
//   Author : Template Coder
//   Support : templatecoder755@gmail.com
//   Author Phone / What's App : +88-01629078287
//   Description : Digital Business Agency Bootstrap and Html Template
//   Version : 1.0 


// Owl Carousel Start
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    vav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 3
        },
        600: {
            items: 3
        },
        960: {
            items: 5
        },
        1200: {
            items: 6
        }
    },
    autoplayHoverPause: true
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})
owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
// OWL Carousel End

// Swiper Js Script
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
// Swiper Js End 