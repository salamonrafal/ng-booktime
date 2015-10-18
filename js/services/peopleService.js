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
                    return response.data;
                }, function (reason) {
                    return reason;
                })
        );
    }

    function addPeople(data) {
        return (
            $http.get(SETTING.services.add, {
                'params': data,
                'headers': {}
            })
            .then(function (response) {
                return response.data;
            }, function (reason) {
                return reason;
            })
        );
    }

    function deletePerson(id) {
        $http.get(SETTING.services.delete, {
            'params': {'id': id},
            'headers': {}
        })
        .then(function (response) {
            return response.data;
        }, function (reason) {
            return reason;
        });
    }

    return {
        getPeople: getPeople,
        addPeople: addPeople,
        deletePerson: deletePerson
    };
}
angular
    .module('tm.ngbooktime')
    .factory('PeopleService', PeopleService);
