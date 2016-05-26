namespace phonecat.phone.services {
    'use strict';

    export interface IPhone extends ng.resource.IResource<IPhone> {
        id: number;
        firstName: string;
        lastName: string;
    }

    export interface IPhoneResource extends ng.resource.IResourceClass<IPhone> {
    }

    angular.module('phonecatServices', ['ngResource'])
        .factory('phoneResource', phoneResource);

    phoneResource.$inject = ['$resource'];
    function phoneResource($resource: ng.resource.IResourceService): IPhoneResource {
        return <IPhoneResource>$resource('content/data/:phoneId.json', {}, {
            query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
        });
    }
}
