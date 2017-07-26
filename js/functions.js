$(function() {
    function throttle(func, ms) {
        var isThrottled = false,
            savedArgs,
            savedThis;
        function wrapper() {
            if (isThrottled) { // (2)
                console.log('isThrottled');

                savedArgs = arguments;
                savedThis = this;
                return;
            }
            console.log('no throttled');
            func.apply(this, arguments); // (1)
            isThrottled = true;
            setTimeout(function() {
                isThrottled = false; // (3)
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
            }, ms);
        }
        return wrapper;
    }
    function debounce(func, ms) {

        var state = null;

        var COOLDOWN = 1;

        return function() {
            if (state) return;

            func.apply(this, arguments);

            state = COOLDOWN;

            setTimeout(function() { state = null }, ms);
        }

    }
    function scroll (e) {
        if (e.deltaY<0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        // e.preventDefault();
    };
    var f100 = debounce(scroll,500);

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        // loop: true,
        center:true,
        margin:10,
        URLhashListener:true,
        animateOut: 'myAnimation',
        animateIn: 'myAnimation2',
        startPosition: 'URLHash',
        mouseDrag: true
    });
    $(".owl-dots").wrap("<div class='j-dots'></div>");

    var array = [];
    owl.find('.j-slide').each(function () {
       array.push($(this).find('.j-title').text());
    });
    var max = owl.find('.owl-dot').length;
    for(var i = 0; i < max; i++ ) {
        owl.find('.owl-dot:nth-child(' + (i+1) + ') span').text(array[i]);
    }

    // Listen to owl events:
    owl.on('translate.owl.carousel', function(event) {
        $('.owl-item:not(.active) .a-top').removeClass('_animate');

        var w = $('.owl-dots').width(),
            ll = $('.owl-dots .owl-dot:last-child').position().left,
            cl = $('.owl-dot.active').position().left,
            cw = $('.owl-dot.active').width(),
            left = w - cl - w/2 - cw/2 + 'px';

        $('.owl-dots').css({left: left});
    });
    owl.on('translated.owl.carousel', function(event) {
        var color = $('.owl-item.active').find('.j-slide').attr('data-color');
        console.log(color);
        $('body').css({background: color});

        $('.a-top').addClass('_animate');
    });
    owl.on('mousewheel', '.owl-stage', f100);
});
