window.onload = () => {
    try {
        // $(selector).countMe(delay,speed)
        $(".counter_box1").countMe(100, 200);
        $(".counter_box2").countMe(100, 200);
        $(".counter_box3").countMe(100, 200);
        $(".counter_box4").countMe(100, 200);
    } catch (error) {
        console.log(error);
    }

    try {
        new Filterizr('.gallery_container',{});
    } catch (error) {
        console.log(error);
    }
}


$(document).ready(function () {
    $('.client_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});