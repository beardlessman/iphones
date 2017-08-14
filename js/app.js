// define product model
var AppState = Backbone.Model.extend({
    defaults: {
        state: "catalog"
    }
});

var appState = new AppState();

appState.bind("change:state", function () { // подписка на смену состояния для контроллера
    var state = this.get("state");
    console.log('change state to ' + state);
    if (state === "catalog") {
        myrouter.navigate("!/", false);
    } else {
        myrouter.navigate("!/" + state, false);
    }
});

var Phone = Backbone.Model.extend({
    defaults: {
        defaultImg: "images/default.png"
    }
});

var Catalog = Backbone.Collection.extend({
    model: Phone
});

var PageView = Backbone.View.extend({
    model: appState,
    el: $("#page"),

    events: {
        "click .menu__link": "changeState",
        "click .j-menu-btn": "openMenu",
        "click .j-menu-btn-close": "closeMenu"
    },

    initialize: function () {
        var catalog = new CatalogView();
        this.render();
        this.model.bind('change', this.render, this);
        this.initList();
    },

    initList: function () {
        $('.j-all-btn').on('click', function () {
            $('.j-current').addClass('animate');
            $('.j-all-btn').hide();
            $('.j-menu-btn').hide();
            setTimeout(function () {
                $('.j-list').addClass('animate');
            }, 200);
        });

        $('.j-open-product').on('click', function (e) {
            setTimeout(function () {
                $('.j-current').removeClass('animate');
            }, 100);
            setTimeout(function () {
                $('.j-open-product').css({opacity: '0'});
                $('.j-list').removeClass('animate');
            }, 200);
            setTimeout(function () {
                $('.j-all-btn').show();
                $('.j-menu-btn').show();
            }, 400);
            setTimeout(function () {
                $('.j-list').removeAttr('style');
                $('.j-open-product').removeAttr('style');
                $('.j-open-product img').removeAttr('style');
            }, 1000);
        });

        $('.j-all-btn-close').on('click', function () {

            $('.j-list').css({opacity: '0'});
            setTimeout(function () {
                $('.j-current').removeClass('animate');
            }, 100);
            setTimeout(function () {
                $('.j-all-btn').show();
                $('.j-menu-btn').show();
            }, 400);
            setTimeout(function () {
                $('.j-list').removeClass('animate');
                $('.j-list').removeAttr('style');
            }, 200);
        });
    },

    render: function () {
        var state = this.model.get("state");
        console.log('page render ' + state);
        $('.j-page').hide();
        $('#' + state + '').show();
        if (state === 'catalog') {
            $('.j-all-btn').show();
            $('.j-list').show();
            $('body').addClass('main');
        } else {
            $('body').removeClass('main');
            $('.j-all-btn').hide();
        }

        aHoverSvg();


        return this;
    },

    openMenu: function () {
        $('.j-all-btn').hide();
        $('.j-menu-btn').hide();
        this.showMenu();
    },

    closeMenu: function () {
        $('.j-menu-btn').show();
        if ($('body').hasClass('main')) {
            $('.j-all-btn').show();
        }
        this.hideMenu();
    },

    showMenu: function () {
        $('.j-menu').css({
            'opacity': '1',
            'z-index': '3',
            'transform': 'scale(1)'
        });
    },
    hideMenu: function () {
        $('.j-menu').css({
            'opacity': '0',
            'transform': 'scale(1.5)'
        });
        setTimeout(function () {
            $('.j-menu').css({
                'z-index': '1'
            });
        }, 400);
    },

    changeState: function (e) {
        var toPage = $(e.target).closest('.menu__link').data('to');
        appState.set({ state: toPage });

        this.closeMenu();
    }
});

var PhoneView = Backbone.View.extend({
    tagName: "span",
    className: "product",
    template: $("#phoneTemplate").html(),
    templateList: $("#phoneTemplateList").html(),

    events: {
        "click button.j-buy-btn": "openBuyModal",
        "click button.j-mem__var": "changeMemory",
        "click button.j-color__var": "changeColor"
    },

    render: function () {

        console.log('render phone');

        var tmpl = Handlebars.compile(this.template);
        $(this.el).html(tmpl(this.model.toJSON()));

        this.showPhoneA();
        this.changeBodyColorA();
        this.formatPrice(this.el);

        return this;
    },

    renderToList: function () {
        var tmpl = Handlebars.compile(this.templateList);
        $(this.el).html(tmpl(this.model.toJSON()));

        return this;
    },

    changeMemory: function (e) {
        e.preventDefault();
        if ($(e.target).hasClass('active')){
            console.log('шо то хуйня то это хуйня');
        } else {
            var cmp = this;

            cmp.hidePhoneA();

            var el = $(e.target),
                slide = el.closest('.j-slide')[0],
                newMem = el.data('val'),
                prevData = this.model.previousAttributes(),
                max = prevData.mems.length;

            for (var i = 0; i < max; i++) {
                if (prevData.mems[i].isDefault) {
                    prevData.mems[i].isDefault = false;
                }

                if (prevData.mems[i].val == newMem) {
                    prevData.mems[i].isDefault = true;
                }
            }

            setTimeout(function () {
                cmp.render();
            }, 300);
        }
    },

    changeColor: function (e) {
        e.preventDefault();
        if ($(e.target).hasClass('active')){
            console.log('шо то хуйня то это хуйня');
        } else {
            var cmp = this;

            cmp.hidePhoneA();

            console.log('change color');
            var el = $(e.target),
                slide = el.closest('.j-slide')[0],
                newColor = el.data('val'),
                prevData = this.model.previousAttributes(),
                max = prevData.colors.length;
            for (var i = 0; i < max; i++) {
                if (prevData.colors[i].isDefault) {
                    prevData.colors[i].isDefault = false;
                }

                if (prevData.colors[i].val == newColor) {
                    prevData.colors[i].isDefault = true;
                }
            }
            setTimeout(function () {
                cmp.render();
            }, 300);
        }
    },

    openBuyModal: function () {
        var data = this.model.toJSON();

        var templateScript = $("#modal-buy").html();
        var template = Handlebars.compile(templateScript);
        $('#buyModal').empty().html(template(data));

        $('#buyModal').arcticmodal();

        $('.j-form__input').each(function () {
            console.log('find input');
            new WSexyInput(this);
        });
    },

    changeBodyColorA: function () {
        var colors = this.model.attributes.colors,
            color,
            colorName;

        for (var i = 0; i < colors.length; i++) {
            if (colors[i].isDefault) {
                color = colors[i].val;
                colorName = colors[i].name;
            }
        }

        console.log('time to change body color to ' + colorName);
        $('body').css({'background-color': color});
    },

    hidePhoneA: function () {
        $('.j-phoneA').each(function () {
          $(this).css({'opacity': '0'});
        });
    },

    showPhoneA: function () {
        setTimeout(function () {
            $('.j-phoneA').each(function () {
                $(this).css({'opacity': '1'});
            });
        }, 300);
    },

    formatPrice: function (el) {
        console.log(el);
        $(el).find('.j-price').each(function () {
            console.log($(this).text());
            var newPrice = hFormatPrice($(this).text());
            console.log(newPrice);
            $(this).text(newPrice);
        });
    }
});

var CatalogView = Backbone.View.extend({
    el: $("#catalog"),

    initialize: function () {
        this.catalog = new Catalog(phones);
        this.render();
    },

    render: function () {
        var that = this;

        $(that.el).empty();

        _.each(this.catalog.models, function (item) {
            that.renderPhone(item);
            that.renderList(item);
        }, this);

        that.initCarousel();
    },

    renderPhone: function (item) {
        var phoneView = new PhoneView({
            model: item
        });

        $(this.el).append(phoneView.render().el);
    },

    renderList: function (item) {
        var phoneView = new PhoneView({
            model: item
        });

        $(".j-list").append(phoneView.renderToList().el);

        return this;
    },

    initCarousel: function () {
        wInitCarousel();
    }
});

var MyRouter = Backbone.Router.extend({
    routes: {
        "!/contacts": "contacts",
        "!/faq": "faq",
        "!/ref": "ref",
        "!/pay": "pay",
        "!/dilers": "dilers",
        "*path": "catalog"
    },

    catalog: function () {
        console.log('default route');
        appState.set({ state: "catalog" });
    },

    contacts: function () {
        appState.set({ state: "contacts" });
    },

    faq: function () {
        appState.set({ state: "faq" });
    },

    ref: function () {
        appState.set({ state: "ref" });
    },

    pay: function () {
        appState.set({ state: "pay" });
    },

    dilers: function () {
        appState.set({ state: "dilers" });
    }
});

var page = new PageView();

var myrouter = new MyRouter();

Backbone.history.start();