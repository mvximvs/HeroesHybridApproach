declare var angular: angular.IAngularStatic;

(function () {
    'use strict';
    angular.module('heroApp').component('heroList', {
        template: require('html-loader!./hero-list.html'),
        controller: HeroListController,
        controllerAs: 'vm'
    });

    HeroListController.$inject = ['$scope', '$element', '$attrs'];

    function HeroListController($scope, $element, $attrs) {
        var vm = this;

        vm.list = [
            {
                name: 'Superman',
                location: 'The sky'
            },
            {
                name: 'Batman',
                location: 'Baticueva'
            }
        ];

        vm.updateHero = function (hero, prop, value) {
            hero[prop] = value;
        };

        vm.deleteHero = function (hero) {
            var idx = vm.list.indexOf(hero);
            if (idx >= 0) {
                vm.list.splice(idx, 1);
            }
        };
    }
})();

