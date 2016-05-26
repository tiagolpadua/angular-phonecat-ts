'use strict';
describe('service', function () {
    // load modules
    beforeEach(angular.mock.module('phonecatApp'));
    // Test service availability
    it('check the existence of Phone factory', inject(function (phoneResource) {
        expect(phoneResource).toBeDefined();
    }));
});
