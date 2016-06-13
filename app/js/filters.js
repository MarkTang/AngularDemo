'use strict';

eventsApp.filter('durations', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "One Hour";
            case 2:
                return "Two Hour";
            case 3:
                return "Three Hour";
            case 4:
                return "Four Hour";
        }
    }
});
