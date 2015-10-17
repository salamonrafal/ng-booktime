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
function rsNavigationCtrl($rootScope, $state, modalService, userService) {
    var vm = this;

    function openFormModal (size) {
        modalService.open(size);
    }

    // exports
    vm.page = $rootScope.page;
    vm.openFormModal = openFormModal;
    vm.isUserAdded = userService.checkIsUserAdded();
}

angular
    .module('tm.ngbooktime')
    .controller('rsNavigationCtrl', rsNavigationCtrl)
    .directive('rsNavigation', rsNavigation);
