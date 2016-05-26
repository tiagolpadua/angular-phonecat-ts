var phonecat;
(function (phonecat) {
    var phone;
    (function (phone_1) {
        var controllers;
        (function (controllers) {
            'use strict';
            var PhoneListController = (function () {
                function PhoneListController(phoneResource) {
                    this.phoneResource = phoneResource;
                    this.orderProp = 'age';
                    this.phones = phoneResource.query();
                }
                PhoneListController.$inject = ['phoneResource'];
                return PhoneListController;
            }());
            var PhoneDetailController = (function () {
                function PhoneDetailController($routeParams, phoneResource) {
                    var _this = this;
                    this.$routeParams = $routeParams;
                    this.phoneResource = phoneResource;
                    ////////////
                    this.activate = function () {
                        _this.phone = _this.phoneResource.get({ phoneId: _this.$routeParams.phoneId }, function (phone) {
                            _this.mainImageUrl = phone.images[0];
                        });
                    };
                    this.setImage = function (imageUrl) {
                        _this.mainImageUrl = imageUrl;
                    };
                    this.activate();
                }
                PhoneDetailController.$inject = ['$routeParams', 'phoneResource'];
                return PhoneDetailController;
            }());
            angular.module('phonecatControllers', [])
                .controller('PhoneListController', PhoneListController)
                .controller('PhoneDetailController', PhoneDetailController);
        })(controllers = phone_1.controllers || (phone_1.controllers = {}));
    })(phone = phonecat.phone || (phonecat.phone = {}));
})(phonecat || (phonecat = {}));
