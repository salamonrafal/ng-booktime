
function DashboardCtrl($rootScope, $state, people) {

    var vm = this;

   /* function goToTrash () {

        angular.forEach(vm.messages, function(message) {
            if (message.checked)  {
                message.intrash  =  true;
                console.log(message);
            }
        });

    }*/

    vm.people = people;

}

// resolve promises before Controller is instantiated
DashboardCtrl.resolve = {
    people: function(PeopleService){
        return PeopleService.getPeople();
    }
};

angular
    .module('tm.ngbooktime') // getter method
    .controller('DashboardCtrl', DashboardCtrl); // pass InboxCtrl into .controller
