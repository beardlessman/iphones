// define product model
var AppState = Backbone.Model.extend({
    defaults: {
        state: "catalog"
    }
});

var appState = new AppState();
appState.bind("change:state", function () { // подписка на смену состояния для контроллера
    var state = this.get("state");

    myrouter.navigate("!/" + state, false);
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
        this.render();
        this.initList();
    },

    render: function () {
        console.log('page render');

        var state = this.model.get("state");
        $('.j-page').hide();
        $('#' + state + '').show();
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
        this.render();
    }
});

var MyRouter = Backbone.Router.extend({
    routes: {
        "": "catalog",
        "!/": "catalog",
        "!/contacts": "contacts",
        "!/faq": "faq",
        "!/ref": "ref",
        "!/pay": "pay",
        "!/dilers": "dilers"
    },

    catalog: function () {
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

var myrouter = new MyRouter();

Backbone.history.start();

var page = new PageView();