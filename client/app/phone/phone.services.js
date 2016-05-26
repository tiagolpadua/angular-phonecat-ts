var phonecat;
(function (phonecat) {
    var phone;
    (function (phone) {
        var services;
        (function (services) {
            'use strict';
            angular.module('phonecatServices', ['ngResource'])
                .factory('phoneResource', phoneResource);
            phoneResource.$inject = ['$resource'];
            function phoneResource($resource) {
                return $resource('content/data/:phoneId.json', {}, {
                    query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
                });
            }
        })(services = phone.services || (phone.services = {}));
    })(phone = phonecat.phone || (phonecat.phone = {}));
})(phonecat || (phonecat = {}));
