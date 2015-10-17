
function modalFormCtrl($rootScope, $modalInstance) {
    var vm = this;


    function onSubbmit(person) {
        var validation = (person.name !== undefined && person.name != '' && person.surname !== undefined && person.surname != '' ? true:false);
        if (validation) {
            $rootScope.$emit('add.person', person);
            $modalInstance.close();
        }
    }

    function onCancel () {
        $modalInstance.dismiss('cancel');
    }

    vm.ok = onSubbmit;
    vm.cancel = onCancel;
}


angular
    .module('tm.ngbooktime')
    .controller('modalFormCtrl', modalFormCtrl);

