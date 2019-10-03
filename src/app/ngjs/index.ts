
// initialize root module and make it exportable to be able to bootstrap it
// inside angular
export const heroAppModule = angular.module('heroApp', [
    'ui.router',
    'heroApp.underscore'
]).config(['$stateProvider', function ($stateProvider) {
    var heroState = {
        name: 'hero',
        url: '/hero',
        template: '<hero-list></hero-list>'
    };
    $stateProvider.state(heroState);
}]);

/** start: REQUIRE ZONE for angularjs
 * Add angularjs files since they aren't yet fully ES6 modules
 * we use requirejs as module loader
 */
require('./editable-field/editable-field');
require('./hero-detail/hero-detail');
require('./hero-list/hero-list');
require('./underscore/underscore.module');
require('./underscore/underscore.service');
/**
 * end: REQUIRE ZONE for angularjs
 */

