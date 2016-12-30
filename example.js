

(function (global, $) {
    var Greeter = function (firstName, lastNAme, lang) {
        return new Greeter.init(firstName, lastNAme, lang);
    }
    Greeter.prototype = {};

    Greeter.init = function (firstName, lastName, lang) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.lang = lang || 'en';

    };

    Greeter.prototype.greet = function () {
        console.log("Good morning " + this.firstName + " " + this.lastName + ", How are you today?")
    }

    Greeter.init.prototype = Greeter.prototype;
    global.greeter = global.$G = Greeter;


})(window, jQuery);


