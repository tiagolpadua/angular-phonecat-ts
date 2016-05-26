/*globals jQuery:false */
namespace phonecat.animations {
    angular.module('phonecatAnimations', ['ngAnimate'])
        .animation('.phone', animation);

    function animation(): ng.animate.IAnimateCallbackObject {
        let animateUp = function (element: ng.IAugmentedJQuery, className: string, done: Function): (cancel: boolean) => void {
            if (className !== 'active') {
                return;
            }
            element.css({
                position: 'absolute',
                top: 500,
                left: 0,
                display: 'block'
            });

            jQuery(element).animate({
                top: 0
            }, done);

            return function (cancel) {
                if (cancel) {
                    element.stop();
                }
            };
        };

        let animateDown = function (element: ng.IAugmentedJQuery, className: string, done: Function): (cancel: boolean) => void {
            if (className !== 'active') {
                return;
            }
            element.css({
                position: 'absolute',
                left: 0,
                top: 0
            });

            jQuery(element).animate({
                top: -500
            }, done);

            return function (cancel) {
                if (cancel) {
                    element.stop();
                }
            };
        };

        return {
            addClass: animateUp,
            removeClass: animateDown
        };
    }
}
