function wInitCarousel() {
    function dotsLeftPosition() {
        var w = $('.owl-dots').width(),
            ll = $('.owl-dots .owl-dot:last-child').position().left,
            cl = $('.owl-dot.active').position().left,
            cw = $('.owl-dot.active').width(),
            left = w - cl - w/2 - cw/2 + 'px';

        $('.owl-dots').css({left: left});
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
    };
    var f100 = debounce(scroll,500);

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        center:true,
        margin:10,
        URLhashListener:true,
        startPosition: 'URLHash',
        mouseDrag: true,
        smartSpeed: 400
    });
    // $('.owl-item').css({'opacity':'0'});
    // setTimeout(function () {
    //     $('.owl-item.active').css({'opacity':'1'});
    // },300);

    // dotsLeftPosition();

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
    owl.on('translated.owl.carousel', function(event) {
        var color = $('.owl-item.active').find('.j-color__var.active').data('val');
        $('body').css({'background-color':color});
        $('.owl-item.active').css({'opacity':'1'});
    });
    owl.on('translate.owl.carousel', function(event) {
        // $('.owl-item:not(.active) .a-top').removeClass('_animate');
        //
        // dotsLeftPosition();
        $('.owl-item').css({'opacity':'0'});

    });
    owl.on('mousewheel', '.owl-stage', f100);
};
function hFormatPrice(_number) {
    var decimal=0;
    var separator=' ';
    var decpoint = '.';
    var format_string = '#';

    var r=parseFloat(_number)

    var exp10=Math.pow(10,decimal);// приводим к правильному множителю
    r=Math.round(r*exp10)/exp10;// округляем до необходимого числа знаков после запятой

    rr=Number(r).toFixed(decimal).toString().split('.');

    b=rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1"+separator);

    r=(rr[1]?b+ decpoint +rr[1]:b);


    if (!isNaN(parseFloat(r))) {
        return format_string.replace('#', r);
    } else {
        return '';
    }
};

function WSexyInput(input) {
    this.input = $(input);
    this.field = this.input.closest('fieldset');
    this.init();
};
WSexyInput.prototype.init = function () {
    var cmp = this;

    cmp.input.on('focus', function () {
        cmp.field.addClass('isFocused');
    });
    cmp.input.on('blur', function () {
        console.log(cmp.input.val());
        if (cmp.input.val()) {
            return false;
        } else {
            cmp.field.removeClass('isFocused');
        }
    });
};