'use strict';

describe('service', () => {

    // load modules
    beforeEach(angular.mock.module('phonecatApp'));

    // Test service availability
    it('check the existence of Phone factory', inject((phoneResource) => {
        expect(phoneResource).toBeDefined();
    }));
});
