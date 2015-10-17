/**
 *
 */
angular
    .module('tm.ngbooktime')
    .constant('SETTING', {
        services: {
            list: "api/persons.cfc?method=getPersons",
            add: "api/persons.cfc?method=addPerson"
        }
    });
