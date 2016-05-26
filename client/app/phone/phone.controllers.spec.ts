'use strict';

declare namespace jasmine {
    interface Matchers {
        toEqualData(Object): void;
    }
}

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', () => {

    let customMatcherFactories: jasmine.CustomMatcherFactories = {
        toEqualData: (util: jasmine.MatchersUtil, customEqualityTesters: Array<jasmine.CustomEqualityTester>): jasmine.CustomMatcher => {
            return {
                compare: (actual: jasmine.Spy, expected: jasmine.Spy): jasmine.CustomMatcherResult => {
                    let pass = angular.equals(actual, expected);
                    let message = '';
                    if (!pass) {
                        message = `Expected ${JSON.stringify(actual)} to be equal ${JSON.stringify(expected)}`;
                    }
                    return {
                        pass: pass,
                        message: message
                    };
                }
            };
        }
    };

    beforeEach(() => {
        jasmine.addMatchers(customMatcherFactories);
    });

    beforeEach(angular.mock.module('phonecatApp'));
    beforeEach(angular.mock.module('phonecatServices'));

    describe('PhoneListController', () => {
        let scope, vm, $httpBackend;

        beforeEach(inject((_$httpBackend_, $rootScope, $controller) => {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('content/data/phones.json').
                respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

            scope = $rootScope.$new();
            vm = $controller('PhoneListController', { $scope: scope });
        }));


        it('should create "phones" model with 2 phones fetched from xhr', () => {
            expect(vm.phones).toEqualData([]);
            $httpBackend.flush();

            expect(vm.phones).toEqualData(
                [{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        });


        it('should set the default value of orderProp model', () => {
            expect(vm.orderProp).toBe('age');
        });
    });


    describe('PhoneDetailController', () => {
        let scope, $httpBackend, vm,
            xyzPhoneData = () => {
                return {
                    name: 'phone xyz',
                    images: ['image/url1.png', 'image/url2.png']
                };
            };


        beforeEach(inject((_$httpBackend_, $rootScope, $routeParams, $controller) => {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('content/data/xyz.json').respond(xyzPhoneData());

            $routeParams.phoneId = 'xyz';
            scope = $rootScope.$new();
            vm = $controller('PhoneDetailController', { $scope: scope });
        }));


        it('should fetch phone detail', () => {
            expect(vm.phone).toEqualData({});
            $httpBackend.flush();

            expect(vm.phone).toEqualData(xyzPhoneData());
        });
    });
});
