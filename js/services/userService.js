function userService($http, $cookies, SETTING) {

    function checkIsUserAdded(id) {
        var cookieUserID = $cookies.get('ngbt_userID');
        console.log(id, cookieUserID);
        if (id === undefined) {
            if (cookieUserID !== undefined && cookieUserID != '') {
                return true;
            }
        } else {
            if (cookieUserID !== undefined && cookieUserID == id) {
                return true;
            }
        }

        return false;
    }

    function saveUserData(id, data) {
        $cookies.put('ngbt_userID', id);
    }

    function isAdminUser() {
        return false;
    }

    function login(pwd) {
        return false;
    }

    return {
        'checkIsUserAdded': checkIsUserAdded,
        'saveUserData': saveUserData,
        'login': login,
        'isAdminUser': isAdminUser
    };
}
angular
    .module('tm.ngbooktime')
    .factory('userService', userService);