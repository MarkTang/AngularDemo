"use strict";

eventsApp.directive("eventThumbnail", function() {
    // Runs during compile
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/templates/directives/eventThumbnail.html"
    };
});
