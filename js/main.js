$(document).ready(function () {
    $('.owl-item.active .a-top').addClass('_animate');
    var color = $('.owl-item.active').find('.j-slide').attr('data-color');
    $('body').css({background: color});

    $('.j-product').each(function () {
        new BuyModal(this);
    });

    $('.j-all-btn').on('click', function () {
       $('.j-current').addClass('animate');
       setTimeout(function () {
           $('.j-list').addClass('animate');
       }, 200);
       $('.header__buttons').hide();
    });

    $('.j-open-product').on('click', function (e) {
        // $('.j-list').css({zIndex: '1', opacity: "0"});
        $('.j-list').removeClass('animate');
        $('.j-open-product').css({opacity: '0'});

        setTimeout(function () {
            $('.j-current').removeClass('animate');
        }, 100);
        setTimeout(function () {
            $('.j-list').removeAttr('style');
            $('.j-open-product').removeAttr('style');
            $('.j-open-product img').removeAttr('style');
        }, 1000);
        setTimeout(function () {
            $('.header__buttons').show();
        }, 400);
    });

    $('.j-all-btn-close').on('click', function () {

        $('.j-list').css({opacity: '0'});
        setTimeout(function () {
            $('.j-current').removeClass('animate');
        }, 100);
        setTimeout(function () {
            $('.j-list').removeClass('animate');
            $('.j-list').removeAttr('style');
            $('.header__buttons').show();
        }, 200);
    });

    $('.j-menu-btn').on('click', function () {
        $('.j-menu').addClass('show');
        $('.header__buttons').hide();
    });

    $('.j-menu-btn-close').on('click', function () {
        $('.j-menu').removeClass('show');
        setTimeout(function () {
            $('.header__buttons').show();
        }, 200);
    });
});

function BuyModal (product) {
    this.product = $(product);
    this.button = this.product.find('.j-buy-btn');
    this.colorBtn = '.j-color__var';
    this.memBtn = '.j-mem__var';
    this.data = {
        color: this.product.find('.j-color__var.active').attr('data-val'),
        colorname: this.product.find('.j-color__var.active').text(),
        title: this.product.find('.j-title').text(),
        price: this.product.find('.j-price').text(),
        mem: this.product.find('.j-mem__var.active').attr('data-val')
    };
    this.init();
};
BuyModal.prototype.init = function () {
    var cmp = this;

    cmp.button.on('click', function () {
        cmp.makeModal();
    });
    $(cmp.colorBtn).on('click', function () {
        cmp.changeColor(this);
    });
    $(cmp.memBtn).on('click', function () {
        cmp.changeMemory(this);
    });
};
BuyModal.prototype.makeModal = function () {
    var cmp = this,
        data = cmp.data;

    var templateScript = $("#modal-buy").html();
    var template = Handlebars.compile(templateScript);
    $('#buyModal').empty().html(template(data));

    $('#buyModal').arcticmodal();
};
BuyModal.prototype.changeColor = function (color) {
  var cmp = this,
      color = $(color),
      newColor = color.data('val'),
      newColorName = color.text(),
      img = color.data('img'),
      changeItem = color.closest('.j-slide').find('img');

  cmp.data.color = newColor;
  cmp.data.colorname = newColorName;

  color.siblings('.j-color__var').removeClass('active');
  color.addClass('active');

  color.closest('.j-slide').attr('data-color', newColor);
  changeItem.css({opacity: "0"});
  $('body').css({background: newColor});
  setTimeout(function () {
      changeItem.attr('src', img);
  }, 300);
  setTimeout(function () {
      changeItem.css({opacity: "1"});
  }, 300);
};
BuyModal.prototype.changeMemory = function (mem) {
    var cmp = this,
        mem = $(mem),
        newMem = mem.data('val');

    cmp.data.mem = newMem;

    mem.siblings('.j-mem__var').removeClass('active');
    mem.addClass('active');
};
