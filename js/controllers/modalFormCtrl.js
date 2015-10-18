
function modalFormCtrl($rootScope, $modalInstance, userService, PeopleService) {
    var vm = this;



    function removePolishCharacters (name) {
        name = name.replace('ę', 'e');
        name = name.replace('ó', 'o');
        name = name.replace('ą', 'a');
        name = name.replace('ś', 's');
        name = name.replace('ł', 'l');
        name = name.replace('ż', 'z');
        name = name.replace('ź', 'z');
        name = name.replace('ć', 'c');
        name = name.replace('ń', 'n');

        name = name.replace('Ę', 'E');
        name = name.replace('Ó', 'O');
        name = name.replace('Ą', 'A');
        name = name.replace('Ś', 'S');
        name = name.replace('Ł', 'L');
        name = name.replace('Ż', 'Z');
        name = name.replace('Ź', 'Z');
        name = name.replace('Ć', 'C');
        name = name.replace('Ń', 'N');

        return name;
    }

    function onSubbmit(person) {
        var validation = (person.name !== undefined && person.name != '' && person.surname !== undefined && person.surname != '' ? true:false);
        if (validation) {

            person.name = removePolishCharacters(person.name);
            person.surname = removePolishCharacters(person.surname);

            person.id = person.name + person.surname;
            var response_data = PeopleService.addPeople(person);

            response_data.then(function(value){
                console.log(value);

                userService.saveUserData(person.id);

                if (!value.exists){
                    $rootScope.$emit('add.person', person);
                } else {
                    $rootScope.$emit('exists.person', person);
                }
            });

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

