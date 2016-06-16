'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']) //'ngSanitize', 'ngCookies'
    .config(function($routeProvider, $locationProvider, $provide) {

        $routeProvider
            .when("/newEvent", {
                templateUrl: "templates/NewEvent.html",
                controller: "EditEventController"
            })
            .when("/events", {
                templateUrl: "templates/EventList.html",
                controller: "EventListController"
            })
            .when("/event/:eventId", {
                templateUrl: "/templates/EventDetails.html",
                controller: "EventController",
                resolve: {
                    event: function($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            })
            .when("/sampleDirective", {
                templateUrl: "templates/SampleDirective.html",
                controller: "SampleDirectiveController"
            })
            .otherwise({ redirectTo: "/events" });

        $locationProvider.html5Mode(true);

        $provide.provider("MathService", function() {
            this.$get = function() {
                var factory = {};

                factory.multiply = function(a, b) {
                    return a * b;
                }
                return factory;
            };
        });
    })
    .value("defaultInput", 5)
    
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory("myCache", { capacity: 3 });
    });
