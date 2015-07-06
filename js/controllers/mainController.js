(function() {
    angular.module('testApp')
    .controller('MainController', MainController);

    function MainController() {
        this.greeting = "Hello World";
        this.bar = " bar";
    }
})();