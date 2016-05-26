var phonecat;
(function (phonecat) {
    var config;
    (function (config) {
        'use strict';
        angular.module('phonecatApp')
            .config(configFunc);
        configFunc.$inject = ['$routeProvider'];
        function configFunc($routeProvider) {
            $routeProvider.
                when('/phones', {
                templateUrl: 'app/phone/phone-list.html',
                controller: 'PhoneListController',
                controllerAs: 'vm'
            }).
                when('/phones/:phoneId', {
                templateUrl: 'app/phone/phone-detail.html',
                controller: 'PhoneDetailController',
                controllerAs: 'vm'
            }).
                otherwise({
                redirectTo: '/phones'
            });
        }
    })(config = phonecat.config || (phonecat.config = {}));
})(phonecat || (phonecat = {}));
