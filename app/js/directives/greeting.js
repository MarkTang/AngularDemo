"use strict";

eventsApp.directive("greeting", function() {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
            controller: function($scope) {
                var greetings = ["Hello"];
                $scope.sayHello = function() {
                    alert(greetings.join());
                }
                this.addGreeting = function(greeting) {
                    greetings.push(greeting);
                }
            }
        };
    })
    .directive("germany", function() {
        return {
            restrict: "A",
            require: "^greeting",
            link: function(scope, element, attrs, controller) {
                controller.addGreeting(" germany");
            }
        };
    })
    .directive("finnish", function() {
        return {
            restrict: "A",
            require: "^greeting",
            link: function(scope, element, attrs, controller) {
                controller.addGreeting(" Hei~");
            }
        };
    });



// eventsApp.controller("GreetingController",
//     function GreetingController($scope) {
//         $scope.sayHello = function() {
//             alert("Hello");
//         }
//     });
