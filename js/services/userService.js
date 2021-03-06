function userService($http, $cookies, SETTING) {

    function checkIsUserAdded(id) {
        var cookieUserID = $cookies.get('ngbt_userID');
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

    function saveUserData(id) {
        $cookies.put('ngbt_userID', id);
    }

    function deleteUserData() {
        $cookies.put('ngbt_userID', '');
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
        'isAdminUser': isAdminUser,
        'deleteUserData': deleteUserData
    };
}
angular
    .module('tm.ngbooktime')
    .factory('userService', userService);