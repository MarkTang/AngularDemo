'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.saveEvent = function(event, NewEventForm) {
            if (NewEventForm.$valid) {
                // window.alert("Event " + event.name + " saved!");}
                eventData.save(event)
                    .$promise
                    .then(function(response) { console.log("success", response) })
                    .catch(function(response) { console.log("failure", response) });
            }
        };

        $scope.cancelEvent = function(event) {
            window.location = "EventDetails.html";
        };

    });
