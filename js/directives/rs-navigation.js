/**
 *
 * @returns {{restrict: string, replace: boolean, scope: {}, templateUrl: string, controller: string, controllerAs: string}}
 */
function rsNavigation() {

    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'partials/directives/rs-navigation.html',
        controller: 'rsNavigationCtrl',
        controllerAs: 'vm'
    };

}

/**
 *
 * @param $rootScope
 */
function rsNavigationCtrl($rootScope) {

    var vm = this;


    // exports
    vm.page = $rootScope.page;

}

angular
    .module('tm.ngbooktime')
    .controller('rsNavigationCtrl', rsNavigationCtrl)
    .directive('rsNavigation', rsNavigation);
