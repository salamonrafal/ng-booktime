
function DashboardCtrl($rootScope, $state //, messages
) {

    var vm = this;

   /* function goToTrash () {

        angular.forEach(vm.messages, function(message) {
            if (message.checked)  {
                message.intrash  =  true;
                console.log(message);
            }
        });

    }*/

    //vm.messages = messages;
    //vm.goToTrash = goToTrash;

}

// resolve promises before Controller is instantiated
/*DashboardCtrl.resolve = {
    // Object property names are the ones that
    // will be injected at runtime
    messages: function (EmailService) {
        return EmailService.getEmails();
    }
};*/

angular
    .module('tm.ngbooktime') // getter method
    .controller('DashboardCtrl', DashboardCtrl); // pass InboxCtrl into .controller
