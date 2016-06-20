window.Hamburger = function(element, options) {

    options = options || {};

    return {

        element: element,

        options: {
            toggleClass: options.toggleClass || 'hamburger--on'
        },

        _on: false,

        _supportsClassList: null,

        _init: function() {
            this._supportsClassList = this.element.classList && this.element.classList.add;
            this.element.addEventListener('click', this.toggle.bind(this));
            return this;
        },

        toggle: function() {
            this._on = !this._on;
            if(this._on) {
                this.on();
            }
            else {
                this.off();
            }
        },

        on: function(event) {
            this._supportsClassList && this.element.classList.add(this.options.toggleClass);
        },

        off: function(event) {
            this._supportsClassList && this.element.classList.remove(this.options.toggleClass);
        }

    }._init();
};