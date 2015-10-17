
function modalFormCtrl($rootScope, $modalInstance) {
    var vm = this;

    vm.ok = function (person) {
        console.log(person);
        $modalInstance.close();
    };

    vm.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}


angular
    .module('tm.ngbooktime')
    .controller('modalFormCtrl', modalFormCtrl);
