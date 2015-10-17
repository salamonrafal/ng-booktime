/**
 *
 * @returns {{restrict: string, replace: boolean, scope: {}, templateUrl: string, controller: string, controllerAs: string}}
 */
function rsListpeople() {

    return {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            model: '='
        },
        templateUrl: 'partials/directives/rs-listpeople.html',
        controller: 'rsListpeopleCtrl',
        controllerAs: 'vm'
    };

}

/**
 *
 * @param $rootScope
 */
function rsListpeopleCtrl($rootScope, $state) {
    var vm = this;
    // exports
}

angular
    .module('tm.ngbooktime')
    .controller('rsListpeopleCtrl', rsListpeopleCtrl)
    .directive('rsListpeople', rsListpeople);
