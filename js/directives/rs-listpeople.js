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

    function removePerson(id) {
        var model = vm.model;

        for (var i = 0; i < model.length; i++) {
            if (model[i].id == id) {
                model[i].removed = true;
            }
        }
    }
    // exports
    vm.onRemovePerson = removePerson;
}

angular
    .module('tm.ngbooktime')
    .controller('rsListpeopleCtrl', rsListpeopleCtrl)
    .directive('rsListpeople', rsListpeople);
