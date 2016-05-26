'use strict';
/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function () {
    var customMatcherFactories = {
        toEqualData: function (util, customEqualityTesters) {
            return {
                compare: function (actual, expected) {
                    var pass = angular.equals(actual, expected);
                    var message = '';
                    if (!pass) {
                        message = "Expected " + JSON.stringify(actual) + " to be equal " + JSON.stringify(expected);
                    }
                    return {
                        pass: pass,
                        message: message
                    };
                }
            };
        }
    };
    beforeEach(function () {
        jasmine.addMatchers(customMatcherFactories);
    });
    beforeEach(angular.mock.module('phonecatApp'));
    beforeEach(angular.mock.module('phonecatServices'));
    describe('PhoneListController', function () {
        var scope, vm, $httpBackend;
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('content/data/phones.json').
                respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
            scope = $rootScope.$new();
            vm = $controller('PhoneListController', { $scope: scope });
        }));
        it('should create "phones" model with 2 phones fetched from xhr', function () {
            expect(vm.phones).toEqualData([]);
            $httpBackend.flush();
            expect(vm.phones).toEqualData([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        });
        it('should set the default value of orderProp model', function () {
            expect(vm.orderProp).toBe('age');
        });
    });
    describe('PhoneDetailController', function () {
        var scope, $httpBackend, vm, xyzPhoneData = function () {
            return {
                name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
            };
        };
        beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('content/data/xyz.json').respond(xyzPhoneData());
            $routeParams.phoneId = 'xyz';
            scope = $rootScope.$new();
            vm = $controller('PhoneDetailController', { $scope: scope });
        }));
        it('should fetch phone detail', function () {
            expect(vm.phone).toEqualData({});
            $httpBackend.flush();
            expect(vm.phone).toEqualData(xyzPhoneData());
        });
    });
});
