var phonecat;
(function (phonecat) {
    'use strict';
    angular.module('phonecatApp', [
        'ngRoute',
        'phonecatAnimations',
        'phonecatControllers',
        'phonecatFilters',
        'phonecatServices'
    ]);
})(phonecat || (phonecat = {}));
