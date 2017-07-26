function initOwl() {
    var owl = $('.j-carousel')[0];

    console.log(owl);

    // owl.owlCarousel({
    //     items:1,
    //     // loop: true,
    //     center:true,
    //     margin:10,
    //     // URLhashListener:true,
    //     // animateOut: 'myAnimation',
    //     // animateIn: 'myAnimation2',
    //     // startPosition: 'URLHash',
    //     mouseDrag: true
    // });
    owl.owlCarousel();
    // $(".owl-dots").wrap("<div class='j-dots'></div>");
};

setTimeout(initOwl, 1000);