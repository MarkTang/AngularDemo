'use strict';

eventsApp.directive('mySample', function($compile) {

    return {
        restrict: "ECA",
        // link: function(scope, element, attrs, controller) {
        //     var markup = "<input type='text' ng-model='sampleData' /> <br /> {{sampleData}} <br />";
        //     angular.element(element).html($compile(markup)(scope));
        // }
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br />",
        scope: {

        }
    };

});
