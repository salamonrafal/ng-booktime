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

    var isUserAdded = userService.checkIsUserAdded();

    $rootScope.$on('add.person', function (){
        vm.isUserAdded = userService.checkIsUserAdded();
    });

    $rootScope.$on('delete.person', function (){
        vm.isUserAdded = userService.checkIsUserAdded();
    });

    $rootScope.$on('exists.person', function (){
        vm.isUserAdded = userService.checkIsUserAdded();
    });

    // exports
    vm.page = $rootScope.page;
    vm.openFormModal = openFormModal;
    vm.isUserAdded = isUserAdded;
}

angular
    .module('tm.ngbooktime')
    .controller('rsNavigationCtrl', rsNavigationCtrl)
    .directive('rsNavigation', rsNavigation);
