namespace phonecat.phone.controllers {
    'use strict';

    class PhoneListController {
        orderProp: string;
        phones: ng.resource.IResourceArray<services.IPhone>;

        static $inject = ['phoneResource'];

        constructor(private phoneResource: services.IPhoneResource) {
            this.orderProp = 'age';
            this.phones = phoneResource.query();
        }
        ////////////
    }


    class PhoneDetailController {

        static $inject = ['$routeParams', 'phoneResource'];
        phone: services.IPhone;
        mainImageUrl: string;

        constructor(private $routeParams, private phoneResource: services.IPhoneResource) {
            this.activate();
        }

        ////////////
        private activate = () => {
            this.phone = this.phoneResource.get({ phoneId: this.$routeParams.phoneId }, (phone) => {
                this.mainImageUrl = phone.images[0];
            });
        }

        public setImage = (imageUrl) => {
            this.mainImageUrl = imageUrl;
        }
    }

    angular.module('phonecatControllers', [])
        .controller('PhoneListController', PhoneListController)
        .controller('PhoneDetailController', PhoneDetailController);
}
