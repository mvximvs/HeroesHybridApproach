declare var angular: angular.IAngularStatic;
(function () {
    angular
        .module('heroApp.underscore')
        .factory('underscore', underscore);

    underscore.$inject = ['$window'];

    function underscore($window) {
        return $window._;
    }
}());