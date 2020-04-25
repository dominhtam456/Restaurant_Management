(function (module) {

  module.controller('ResourcesCtrl', function($scope, $http, $window ,$filter) {

      // Get resources
      $http({
        method : "GET",
        url : "http://localhost:8080/api/GetAllNguyenLieu"
      }).then(function mySuccess(response) {
          $scope.searched = response.data;

        },function myError(response) {
          $scope.searched = response.statusText;
      });

      // Get resources type
      $http({
        method : "GET",
        url : "http://localhost:8080/api/GetAllLoaiNguyenLieu"
      }).then(function mySuccess(response) {
          $scope.resourcesType = response.data;
        });
        $scope.test= function(){
          alert($scope.theFile.name);
        }

      // Get Resource Index
      $scope.getResourcesIndex=function(resources){
        $http({
          method : "GET",
          url : "http://localhost:8080/api/NguyenLieu/" + resources.nguyenlieu_ID
        }).then(function mySuccess(response) {
            $scope.resourcesDetails = response.data;
            $scope.resourcesDetails.loainguyenlieu_LOAINGUYENLIEU_ID=$scope.resourcesDetails.loainguyenlieu_LOAINGUYENLIEU_ID.toString();
            $scope.resourcesDetails.nguyenlieu_DATE=$filter('date')($scope.resourcesDetails.nguyenlieu_DATE, 'yyyy-MM-dd');
            $scope.resourcesDetails.nguyenlieu_DATE= new Date($scope.resourcesDetails.nguyenlieu_DATE);

          });
      };

      // Add resource
      $scope.addResources= function(){
            var data= $.param({
                        NGUYENLIEU_NO: $scope.resourcesNo,
                        NGUYENLIEU_NAME: $scope.inputName,
                        NGUYENLIEU_PRICE: $scope.inputPrice,
                        lOAINGUYENLIEU_LOAINGUYENLIEU_ID: $scope.TypeId,
                        NGUYENLIEU_DATE: $scope.inputDate,
                        NGUYENLIEU_IMG: $scope.theFile.name
                    });
                    var d=0
                    angular.forEach($scope.resources, function(rs) {
                      if(rs.nguyenlieu_NO == $scope.resourcesNo){
                        d=1;

                      }
                    });

            if(d==0){
            $http.post("http://localhost:8080/api/InsertNguyenLieu/",data)
              .then(function mySuccess(data) {
                $window.location.reload()
              });
            }
            else{
              alert("Mã nguyên liệu đã tồn tại");
            }
      }

      // Add resource IMG
      $scope.setFile = function(element) {
            $scope.$apply(function($scope) {
                $scope.theFile = element.files[0];

            });
        };

      // Update Resource
      $scope.updateResources= function(){
        var nguyenlieuIMG="";
          if(angular.isDefined($scope.theFile)){
            nguyenlieuIMG=$scope.theFile.name;
          }
          else{
            nguyenlieuIMG=$scope.resourcesDetails.nguyenlieu_IMG;
          }

            var data= $.param({
                        NGUYENLIEU_NO: $scope.resourcesDetails.nguyenlieu_NO,
                        nGUYENLIEU_NAME: $scope.resourcesDetails.nguyenlieu_NAME,
                        NGUYENLIEU_PRICE: $scope.resourcesDetails.nguyenlieu_PRICE,
                        NGUYENLIEU_ID: $scope.resourcesDetails.nguyenlieu_ID,
                        lOAINGUYENLIEU_LOAINGUYENLIEU_ID: $scope.resourcesDetails.loainguyenlieu_LOAINGUYENLIEU_ID,
                        NGUYENLIEU_DATE: $scope.resourcesDetails.nguyenlieu_DATE,
                        NGUYENLIEU_IMG: nguyenlieuIMG
                    });
                    console.log(data);
            $http.post("http://localhost:8080/api/InsertNguyenLieu/",data)
              .then(function mySuccess(data) {
                $window.location.reload()
              });
          }

      // Delete resources
      $scope.deleteResources= function(resources){
        var data= $.param({
                    NGUYENLIEU_ID: resources.nguyenlieu_ID
                });
        $http.post("http://localhost:8080/api/NguyenLieu/" + resources.nguyenlieu_ID,data)
          .then(function mySuccess(response){
            alert("Bạn đã xóa nguyên liệu thành công");
            $window.location.reload()
          });
      }

      // Search Resources When Use Button
      $scope.findResources= function(key){
        if(key!="" && key!= null){
        $http({
          method : "GET",
          url : "http://localhost:8080/api/SearchResources/" + key
        }).then(function mySuccess(response) {
            $scope.searched = response.data;
          },function myError(response) {
            $scope.searched = response.statusText;
        });
      }

      else{
        $http({
          method : "GET",
          url : "http://localhost:8080/api/GetAllNguyenLieu"
        }).then(function mySuccess(response) {
            $scope.searched = response.data;
          },function myError(response) {
            $scope.searched = response.statusText;
        });
      }
    }

    });

    module.directive("ngFileSelect",function(){

      return {
        link: function($scope,el){

          el.bind("change", function(e){

            $scope.file = (e.srcElement || e.target).files[0];
            $scope.getFile();
          })

        }

      }
    });

    module.controller('UploadController', function($scope , fileReader) {
      console.log(fileReader)
     $scope.getFile = function () {
         $scope.progress = 0;
         fileReader.readAsDataUrl($scope.file, $scope)
                       .then(function(result) {
                           $scope.imageSrc = result;
                       });
     };

        $scope.$on("fileProgress", function(e, progress) {
          $scope.progress = progress.loaded / progress.total;
        });
      });


}(angular.module("myApp")));
