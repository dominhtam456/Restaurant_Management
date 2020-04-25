(function (module) {

  module.controller('StatisticalCtrl', function($scope, $http, $window ,$filter) {
    $scope.date= new Date;
    $scope.date=$filter('date')($scope.date, 'yyyy-MM-dd');
    if($scope.radio==null){

      $http({
        method : "GET",
        url : "http://localhost:8080/api/ThongKeHoaDon/?fromDate=" + $scope.date + "&toDate=" + $scope.date
      }).then(function mySuccess(response) {
        $scope.listBillByDate=response.data;
      });

      $scope.getBill= function(bill){
        $scope.billDetails="";
        $http({
          method: "GET",
          url: "http://localhost:8080/api/GetHDCTByID/" + bill.hoadon_ID
        }).then(function mySuccess(response) {
          $scope.billDetails=response.data;
        });
      }

      $http({
        method : "GET",
        url : "http://localhost:8080/api/ThongKeMonAn/?fromDate=" + $scope.date + "&toDate=" + $scope.date
      }).then(function mySuccess(response) {
        $scope.listTopFoods=response.data;
        console.log($scope.listTopFoods);
      });
      $http({
        method : "GET",
        url : "http://localhost:8080/api/ThongKeTongTien/?fromDate=" + $scope.date + "&toDate=" + $scope.date
      }).then(function mySuccess(response) {
        $scope.total=response.data;
        console.log($scope.total);
      })
    }


    $scope.View= function(){
      $scope.eDate=$scope.inputEndDate;
      $scope.sDate=$scope.inputStartDate;

      $scope.sDate=$filter('date')($scope.sDate, 'yyyy-MM-dd');
      $scope.eDate=$filter('date')($scope.eDate, 'yyyy-MM-dd');

      var sDate = new Date($scope.sDate);
      var eDate = new Date($scope.eDate);
      if(eDate >= sDate)
      {
        $http({
          method : "GET",
          url : "http://localhost:8080/api/ThongKeMonAn/?fromDate=" + $scope.sDate + "&toDate=" + $scope.eDate
        }).then(function mySuccess(response) {
          $scope.listTopFoods=response.data;
          console.log($scope.listTopFoods);
        });

        $http({
          method : "GET",
          url : "http://localhost:8080/api/ThongKeHoaDon/?fromDate=" + $scope.sDate + "&toDate=" + $scope.eDate
        }).then(function mySuccess(response) {
          $scope.listBillByDate=response.data;
        });

        $scope.getBill= function(bill){
          $scope.billDetails="";
          $http({
            method: "GET",
            url: "http://localhost:8080/api/GetHDCTByID/" + bill.hoadon_ID
          }).then(function mySuccess(response) {
            $scope.billDetails=response.data;
          });
        }

        $http({
          method : "GET",
          url : "http://localhost:8080/api/ThongKeTongTien/?fromDate=" + $scope.sDate + "&toDate=" + $scope.eDate
        }).then(function mySuccess(response) {
          $scope.total=response.data;
        })
      }
      else {
        alert("Không được nhập ngày bắt đầu lớn hơn hoặc bằng ngày kết thúc !!!");
      }

    }

  });

}(angular.module("myApp")));
