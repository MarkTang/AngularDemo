"use strict";

eventsApp.controller("CalcController",
    function($scope, CalcService, defaultInput) {
        $scope.number = defaultInput;
        $scope.result = CalcService.square($scope.number);

        $scope.square = function() {
            $scope.result = CalcService.square($scope.number);
        }
    });
