(function(module){
    module.controller("index",function($scope){
        $scope.SomeYearFunction = new Date().getFullYear();
        
    })
})(angular.module("myApp"));