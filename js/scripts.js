$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            120: {
                items:2
            },
            240: {
                items:3
            },
            360: {
                items:4
            },
            480: {
                items:5
            },
            600: {
                items:6
            },
            720: {
                items:7
            },

            840: {
                items:8
            },
            960: {
                items:9
            },
        }
    });
});