(function(module) {

    module.factory("Services", function($http) {
        return {
            deleteFromBep: function( hoadonID , numberBep ) {
                return $http({
                    method: "POST",
                    url: "http://localhost:8080/api/deleteFromBep/" + numberBep +"&"+hoadonID
                  }).then(function mySuccess(response) {
                        return response
                  });
            },

            getAllBepByIDBep: function( numberBep ) {
                return $http({
                    method: "GET",
                    url: "http://localhost:8080/api/getAllBepByIDBep/" + numberBep 
                  }).then(function mySuccess(response) {
                        return response
                  });
            },
            
            getHoaDonByID: function( hoadonID ) {
                return $http({
                    method: "GET",
                    url: "http://localhost:8080/api/HoaDon/" + hoadonID 
                  }).then(function mySuccess(response) {
                        return response
                  });
            },

            GetHDCTByID: function( hoadonID ) {
                return $http({
                    method: "GET",
                    url: "http://localhost:8080/api/GetHDCTByID/" + hoadonID 
                  }).then(function mySuccess(response) {
                        return response
                  });
            }
        }
    });

}(angular.module("myApp")));