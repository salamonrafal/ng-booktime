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
function PeopleService($http, SETTING) {

    function getPeople() {

        return (
            $http
                .get(SETTING.services.list) // '../api/inbox.json'
                .then(function (response) {
                    console.log(response);
                    return response.data;
                }, function (reason) {
                    return reason;
                })
        );
    }

    function addPeople() {

    }

    return {
        getPeople: getPeople,
        addPeople: addPeople
    };
}
angular
    .module('tm.ngbooktime')
    .factory('PeopleService', PeopleService);
