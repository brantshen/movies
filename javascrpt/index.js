$(document).ready(function(){
    $(".banner .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        items: 1
    });

    $(".new-movies .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0:{
                items: 2.5
            },
            280:{
                items: 2
            },
            320:{
                items: 2.3
            },
            600:{
                items: 3
            },
            700:{
                items: 4
            },
            1000:{
                items: 6
            }
        }
    });
    
    var $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });
    
    // $('body').ripples({
    //     dropRadius: 15,
    //     perturbance: 0.03,
    // });
    
    // $('.container').ripples({
    //     dropRadius: 15,
    //     perturbance: 0.03,
    // });
});