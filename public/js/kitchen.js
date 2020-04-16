(function(module) {

    module.controller('KitchenCtrl',  function($scope, $http, $window, $filter, $q, Services) {
      $scope.i=-1;

      $scope.complete = function(hoadonID, numberBep){

        Services.deleteFromBep(hoadonID,numberBep).then(function(response){
          Services.getAllBepByIDBep(1).then(function(response){
            
            $scope.bep = response.data;
            $scope.list = [];
           var promises = [];
           var promises2 = [];
            angular.forEach($scope.bep, function(k) {

                var deffered  = $q.defer();
                var deffered2  = $q.defer();
              
                Services.getHoaDonByID(k.bepID.hoadon_ID).then(function(response){
                  deffered.resolve(response.data);
                }, function myError(response) {
                  console.log(response);
                });

                  Services.GetHDCTByID(k.bepID.hoadon_ID).then(function(response){
                    deffered2.resolve(response.data);
                  }, function myError(response) {
                    console.log(response);
                  });

                  promises.push(deffered.promise);

                  promises2.push(deffered2.promise);
              });

              $q.all(promises).then(function(response){
                  $scope.list=response;
                  $q.all(promises2).then(function(response){
                    $scope.foodlist=response;
                    for(var i=0; i<$scope.foodlist.length; i++){
                      $scope.foodlist[i].ban=$scope.list[i].ban_BAN_ID
                    }
                    
                  }); 
              }); 
              

            }, function myError(response) {
              console.log(response);
            });
        
          }, function myError(response) {
            console.log(response);
          });

        
      }

      Services.getAllBepByIDBep(1).then(function(response){
            $scope.bep = response.data;
            $scope.list = [];
           var promises = [];
           var promises2 = [];
            angular.forEach($scope.bep, function(k) {

                var deffered  = $q.defer();
                var deffered2  = $q.defer();
              
                
                Services.getHoaDonByID(k.bepID.hoadon_ID).then(function(response){
                  deffered.resolve(response.data);
                }, function myError(response) {
                  console.log(response);
                });

                Services.GetHDCTByID(k.bepID.hoadon_ID).then(function(response){
                  deffered2.resolve(response.data);
                }, function myError(response) {
                  console.log(response);
                });

                  promises.push(deffered.promise);

                  promises2.push(deffered2.promise);
              });

              $q.all(promises).then(function(response){
                  $scope.list=response;
                  $q.all(promises2).then(function(response){
                    $scope.foodlist=response;
                    for(var i=0; i<$scope.foodlist.length; i++){
                      $scope.foodlist[i].ban=$scope.list[i].ban_BAN_ID
                    }
                    console.log($scope.foodlist);
                    console.log($scope.list);
                  }); 
              }); 

          }, function myError(response) {
            console.log(response.statusText);
          });

       



    });
}(angular.module("myApp")));