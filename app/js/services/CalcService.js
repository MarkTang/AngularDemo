"use strict";

eventsApp.service("CalcService",
    function(MathService) {
        this.square = function(a) {
            return MathService.multiply(a, a);
        }
    }
);
