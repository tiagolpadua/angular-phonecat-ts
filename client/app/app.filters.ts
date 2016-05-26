namespace phonecat.filters {
    'use strict';

    /* Filters */

    angular.module('phonecatFilters', [])
        .filter('checkmark', checkmark);

    checkmark.$inject = [];
    function checkmark(): Function {
        return function (input: string) {
            return input ? '\u2713' : '\u2718';
        };
    }
}
