/**
 * - Function passed into .factory()
 * - Locally scoped functions inside the Service
 * - Can't get a $scope instance, but please never try
 * - Revealing module pattern example below
 * return { a: function  () {}}
 * return function (arg1, arg2) {};
 * Services and Factory are singletons
 * - Instantiated once and persisted through the application's lifetime
 *
 *
 * function EmailService() { this.getEmail = function () {} }
 *
 */
function modalService($uibModal, SETTING) {

    function open(size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContent.html',
            controller: 'modalFormCtrl',
            controllerAs: 'vm',
            size: size,
            resolve: {}
        });
    }


    return {
        open: open
    };
}
angular
    .module('tm.ngbooktime')
    .factory('modalService', modalService);
