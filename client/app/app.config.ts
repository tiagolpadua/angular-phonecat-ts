namespace phonecat.config {
    'use strict';

    angular.module('phonecatApp')
        .config(configFunc);

    configFunc.$inject = ['$routeProvider'];
    function configFunc($routeProvider: ng.route.IRouteProvider) {
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
}
