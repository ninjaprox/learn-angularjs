(function() {
    angular.module('testApp')
    .directive('foo', function() {
        return {
            restrict: 'E',
            scope: {
                bar: '=',
                changeGreeting: '&'
            },
            link: function(scope, element, attributes) {
                console.log(scope);
                console.log(element);
                console.log(attributes);

                var helloButton = angular.element("<div class='hello btn btn-primary'>Hello World</div>");
                var changeGreetingButton = angular.element("<div class='greeting btn btn-primary'>Change greeting</div>");

                helloButton.on('click', function() {
                    var newValue;

                    angular.element(this).append(scope.bar);
                    scope.bar = '<b>abc</b>';
                });
                changeGreetingButton.on('click', function() {
                    console.log("changeGreeting")
                    scope.changeGreeting({ newGreeting: 'Greeting from Mars' })
                });
                element.append(helloButton);
                element.append(changeGreetingButton);
            }
        }
    })
})();