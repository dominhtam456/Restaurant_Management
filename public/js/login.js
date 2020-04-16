(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('Login.IndexController', Controller);

    function Controller($location, AuthenticationService) {
        var vm = this;

        vm.login = login;

        initController();

        function initController() {
            // reset login status
            AuthenticationService.Logout();
        };

        function login() {
            vm.loading = true;
            AuthenticationService.Login(vm.username, vm.password, function (result,role) {
                if (result === true) {
                    
                    if(role == '4'){
                        $location.path("/statistical");
                    }
                    if(role == '3'){
                        $location.path("/kitchen");
                    }
                    if(role == '2'){
                        $location.path("/");
                    }
                    if(role == '1'){
                        $location.path("/");
                    }
                } else {
                    vm.error = 'Username or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }

})();
