(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('AuthenticationService', Service);

    function Service($http, $localStorage) {
        var service = {};

        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(username, password, callback) {
            $http.post('http://localhost:8080/token/generate-token', { username: username, password: password })
                .then(function (response) {


                  
                    // login successful if there's a token in the response
                    if (response.data.result.token) {
                        // store username and token in local storage to keep user logged in between page refreshes
                        $localStorage.currentUser = { username: username, token: response.data.result.token ,role: response.data.result.role};

                        // add jwt token to auth header for all requests made by the $http service
                        $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.result.token;

                        

                        // execute callback with true to indicate successful login
                        callback(true,response.data.result.role);
                    } else {
                        // execute callback with false to indicate failed login
                        callback(false);
                    }
                });
        }

        function Logout() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();
