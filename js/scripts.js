$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:0
            },
            120: {
                items:1
            },
            240: {
                items:1
            },
            360: {
                items:2
            },
            480: {
                items:3
            },
            600: {
                items:4
            },
            720: {
                items:5
            },

            840: {
                items:6
            },
            960: {
                items:7
            },
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
      } );

});
