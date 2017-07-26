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
        "click .menu__item": "changeState",
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
            setTimeout(function () {
                $('.j-list').addClass('animate');
            }, 200);
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
        });

        $('.j-all-btn-close').on('click', function () {

            $('.j-list').css({opacity: '0'});
            setTimeout(function () {
                $('.j-current').removeClass('animate');
            }, 100);
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
        }
        $('.j-menu').show();
        return this;
    },

    openMenu: function () {
        $('.j-all-btn').hide();
        $('.j-menu-btn').hide();
        $('.j-menu').addClass('show');
    },

    closeMenu: function () {
        $('.j-menu-btn').show();
        $('.j-menu').removeClass('show');
    },

    changeState: function (e) {
        var toPage = $(e.target).closest('.menu__item').data('to');

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
        var tmpl = Handlebars.compile(this.template);
        $(this.el).html(tmpl(this.model.toJSON()));

        return this;
    },

    renderToList: function () {
        var tmpl = Handlebars.compile(this.templateList);
        $(this.el).html(tmpl(this.model.toJSON()));

        return this;
    },

    changeMemory: function (e) {
        e.preventDefault();

        var newMem = $(e.target).data('val'),
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

        this.render();
    },

    changeColor: function (e) {
        e.preventDefault();

        var newColor = $(e.target).data('val'),
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

        this.render();
    },

    openBuyModal: function () {
        var data = this.model.toJSON();

        var templateScript = $("#modal-buy").html();
        var template = Handlebars.compile(templateScript);
        $('#buyModal').empty().html(template(data));

        $('#buyModal').arcticmodal();
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
        var owl = $('.j-carousel');
        owl.owlCarousel({
            items:1,
            center:true,
            margin:10,
            URLhashListener:true,
            startPosition: 'URLHash',
            mouseDrag: true
        });

        // dot = название товара
        $(".owl-dots").wrap("<div class='j-dots'></div>");
        var array = [];
        owl.find('.j-slide').each(function () {
            array.push($(this).find('.j-title').text());
        });
        var max = owl.find('.owl-dot').length;
        for(var i = 0; i < max; i++ ) {
            owl.find('.owl-dot:nth-child(' + (i+1) + ') span').text(array[i]);
        }
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