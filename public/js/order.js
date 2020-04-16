(function(module) {

  module.controller('TablesCtrl', function($scope, $http, $window, $filter) {
    $scope.excesscash="";
    $scope.hdno="";
    $scope.day="";
    $scope.total=0;
    //$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    //Get tables
    $scope.date= new Date();
    $scope.array = [];
    $http({
      method: "GET",
      url: "http://localhost:8080/api/GetAllBan"
    }).then(function mySuccess(response) {
      $scope.tables = response.data;
        $http({
          method: "GET",
          url: "http://localhost:8080/api/GetHoaDonToStatus/false"
        }).then(function mySuccess(response) {
          $scope.data= response.data;
          angular.forEach($scope.tables, function(e) {
            var d=0;
            angular.forEach($scope.data, function(k) {
              if(e.ban_ID == k.ban_BAN_ID){
                d=1;
                e.tableColor= {
                  "background-color" : "#2DCE89"
                }
              }
            });
            if(d==0){
              e.tableColor= {
                "background-color" : "white"
              }
            }
          });
        });
    }, function myError(response) {
      $scope.tables = response.statusText;
    });

    $scope.confirm_order= function(){
      
      $http({
        method: "POST",
        url: "http://localhost:8080/api/insertToBep/"+"1&"+ $scope.details[0].hoadonchitietID.hoadon_HOADON_ID
      }).then(function mySuccess(response) {
        console.log(response);
      }, function myError(response) {
        console.log(response);
      });
    }

    //Get foods
    $http({
      method: "GET",
      url: "http://localhost:8080/api/GetAllMonAn"
    }).then(function mySuccess(response) {
      $scope.foods = response.data;
    }, function myError(response) {
      $scope.foods = response.statusText;
    });

    $scope.tableIndex = "";
    $scope.getTable = function(table) {
      $scope.total=0;
      var id = "";

      $scope.tableIndex = table.ban_ID;
      $http({
        method: "GET",
        url: "http://localhost:8080/api/GetHoaDonToStatus/false"
      }).then(function mySuccess(response) {
        $scope.hdidctt = response.data;

        angular.forEach($scope.hdidctt, function(k) {
          if (k.ban_BAN_ID == $scope.tableIndex) {
            id = k.hoadon_ID;
            $scope.hdno=k.hoadon_NO;
            $scope.day=k.hoadon_DATE;
          }
        });
        if(id != null && id != ""){
        $http({
          method: "GET",
          url: "http://localhost:8080/api/GetHDCTByID/" + id
        }).then(function mySuccess(response) {

          $scope.details = response.data;
          angular.forEach($scope.details, function(k) {
            $scope.total = $scope.total + (k.hoadonchitiet_PRICE * k.hoadonchitiet_SOLUONG);
            $http({
              method: "GET",
              url: "http://localhost:8080/api/MonAn/" + k.hoadonchitietID.monan_MONAN_ID
            }).then(function mySuccess(response) {
              k.monan_NAME = response.data.monan_NAME;
            }, function myError(response) {
              $scope.foods = response.statusText;
            });
          });
        }, function myError(response) {
          $scope.details = response.statusText;
        });
      }
      else{
        $scope.details="";
      }
      });
    };

    $http({
      method: "GET",
      url: "http://localhost:8080/api/GetAllBan"
    }).then(function mySuccess(response) {
      $scope.tablesArray = response.data;

      $scope.addFood = function(food) {
        var d = 0;
        var id = "";
        $http({
          method: "GET",
          url: "http://localhost:8080/api/GetHoaDonToStatus/false"
        }).then(function mySuccess(response) {
          $scope.ban = response.data;
          angular.forEach($scope.ban, function(k) {
            if (k.ban_BAN_ID == $scope.tableIndex) {
              d = 1;
              id=k.hoadon_ID;
              $scope.hdno=k.hoadon_NO;
              $scope.day=k.hoadon_DATE;
            }
          });
          if (d == 0) {
            var data = {
              "hoadon_STATUS": false,
              "hoadon_DATE": $scope.date,
              "ban_BAN_ID": $scope.tableIndex,
              "hoadon_TAX": null,
              "nhanvien_NHANVIEN_ID": 1,
              "khachhang_KHACHHANG_ID": 1
            };
            console.log(JSON.stringify(data));
            $http({
                method: 'POST',
                url: 'http://localhost:8080/api/InsertHoaDon',
                data: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json; charset=UTF-8"
                },
              })
              .then(function mySuccess(response) {
                    $scope.idhd=response.data.hoadon_ID;
                    $scope.foodDetail = {
                      "hoadonchitietID": {
                        "hoadon_HOADON_ID": response.data.hoadon_ID,
                        "monan_MONAN_ID": food.monan_ID
                      },
                      "hoadonchitiet_PRICE": food.monan_PRICE,
                      "hoadonchitiet_SOLUONG": 1
                    };

                    console.log(JSON.stringify($scope.foodDetail));
                    $http({
                        method: 'POST',
                        url: 'http://localhost:8080/api/InsertHoaDonChiTiet',
                        data: JSON.stringify($scope.foodDetail),
                        headers: {
                          "Content-Type": "application/json; charset=UTF-8"
                        },
                      })
                      .then(function successCallback(response) {
                        $http({
                          method: "GET",
                          url: "http://localhost:8080/api/GetHDCTByID/" +$scope.idhd
                        }).then(function mySuccess(response) {
                          $scope.details = response.data;
                          $scope.total=0;
                          angular.forEach($scope.details, function(k) {
                            $scope.total = $scope.total + (k.hoadonchitiet_PRICE * k.hoadonchitiet_SOLUONG);
                            $http({
                              method: "GET",
                              url: "http://localhost:8080/api/MonAn/" + k.hoadonchitietID.monan_MONAN_ID
                            }).then(function mySuccess(response) {
                              k.monan_NAME = response.data.monan_NAME;
                            }, function myError(response) {
                              $scope.foods = response.statusText;
                            });
                          });

                        }, function myError(response) {
                          $scope.details = response.statusText;
                        });
                      });
                      $http({
                        method: "GET",
                        url: "http://localhost:8080/api/GetAllBan"
                      }).then(function mySuccess(response) {
                        $scope.tables = response.data;
                          $http({
                            method: "GET",
                            url: "http://localhost:8080/api/GetHoaDonToStatus/false"
                          }).then(function mySuccess(response) {
                            $scope.data= response.data;
                            angular.forEach($scope.tables, function(e) {
                              var d=0;
                              angular.forEach($scope.data, function(k) {
                                if(e.ban_ID == k.ban_BAN_ID){
                                  d=1;
                                  $scope.hdno=k.hoadon_NO;
                                  $scope.day=k.hoadon_DATE;
                                  e.tableColor= {
                                    "background-color" : "#2DCE89"
                                  }
                                }
                              });
                              if(d==0){
                                e.tableColor= {
                                  "background-color" : "white"
                                }
                              }
                            });
                          });
                      }, function myError(response) {
                        $scope.tables = response.statusText;
                      });
              }, function myError(response) {
                $scope.tablesArray = response.statusText;
              });
          }
          else{
            $http({
              method: "GET",
              url: "http://localhost:8080/api/GetHDCTByID/" + id
            }).then(function mySuccess(response) {
              $scope.data=response.data;
              var k=0;
              var sl=0;
              angular.forEach($scope.data, function(e) {
                if(food.monan_ID==e.hoadonchitietID.monan_MONAN_ID){
                    k=1;
                    sl=e.hoadonchitiet_SOLUONG;
                }
              })
              if(k==0){
                    $scope.foodDetail = {
                      "hoadonchitietID": {
                        "hoadon_HOADON_ID": id,
                        "monan_MONAN_ID": food.monan_ID
                      },
                      "hoadonchitiet_PRICE": food.monan_PRICE,
                      "hoadonchitiet_SOLUONG": 1
                    };

                    console.log(JSON.stringify($scope.foodDetail));
                    $http({
                        method: 'POST',
                        url: 'http://localhost:8080/api/InsertHoaDonChiTiet',
                        data: JSON.stringify($scope.foodDetail),
                        headers: {
                          "Content-Type": "application/json; charset=UTF-8"
                        },
                      })
                      .then(function successCallback(response) {
                        $http({
                          method: "GET",
                          url: "http://localhost:8080/api/GetHDCTByID/" + id
                        }).then(function mySuccess(response) {
                          $scope.details = response.data;
                          $scope.total=0;
                          angular.forEach($scope.details, function(k) {
                            $scope.total = $scope.total + (k.hoadonchitiet_PRICE * k.hoadonchitiet_SOLUONG);
                            $http({
                              method: "GET",
                              url: "http://localhost:8080/api/MonAn/" + k.hoadonchitietID.monan_MONAN_ID
                            }).then(function mySuccess(response) {
                              k.monan_NAME = response.data.monan_NAME;
                            }, function myError(response) {
                              $scope.foods = response.statusText;
                            });
                          });
                        }, function myError(response) {
                          $scope.details = response.statusText;
                        });
                      });
                    }
                    else{
                      $scope.foodDetail = {
                        "hoadonchitietID": {
                          "hoadon_HOADON_ID": id,
                          "monan_MONAN_ID": food.monan_ID
                        },
                        "hoadonchitiet_PRICE": food.monan_PRICE,
                        "hoadonchitiet_SOLUONG": sl +1
                      };

                      console.log(JSON.stringify($scope.foodDetail));
                      $http({
                          method: 'POST',
                          url: 'http://localhost:8080/api/InsertHoaDonChiTiet',
                          data: JSON.stringify($scope.foodDetail),
                          headers: {
                            "Content-Type": "application/json; charset=UTF-8"
                          },
                        })
                        .then(function successCallback(response) {
                          $http({
                            method: "GET",
                            url: "http://localhost:8080/api/GetHDCTByID/" + id
                          }).then(function mySuccess(response) {
                            $scope.details = response.data;
                            $scope.total=0;
                            angular.forEach($scope.details, function(k) {
                              $scope.total = $scope.total + (k.hoadonchitiet_PRICE * k.hoadonchitiet_SOLUONG);
                              $http({
                                method: "GET",
                                url: "http://localhost:8080/api/MonAn/" + k.hoadonchitietID.monan_MONAN_ID
                              }).then(function mySuccess(response) {
                                k.monan_NAME = response.data.monan_NAME;
                              }, function myError(response) {
                                $scope.foods = response.statusText;
                              });
                            });
                          }, function myError(response) {
                            $scope.details = response.statusText;
                          });
                        });
                    }






                    });

          }
        });
      };
    $scope.changeAmount= function(detail){
      $scope.foodDetail = {
        "hoadonchitietID": {
          "hoadon_HOADON_ID": detail.hoadonchitietID.hoadon_HOADON_ID,
          "monan_MONAN_ID": detail.hoadonchitietID.monan_MONAN_ID
        },
        "hoadonchitiet_PRICE": detail.hoadonchitiet_PRICE,
        "hoadonchitiet_SOLUONG": detail.hoadonchitiet_SOLUONG
      };

      console.log(JSON.stringify($scope.foodDetail));
      $http({
          method: 'POST',
          url: 'http://localhost:8080/api/InsertHoaDonChiTiet',
          data: JSON.stringify($scope.foodDetail),
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          },
        })
        .then(function successCallback(response) {
          $http({
            method: "GET",
            url: "http://localhost:8080/api/GetHDCTByID/" + response.data.hoadonchitietID.hoadon_HOADON_ID
          }).then(function mySuccess(response) {
            $scope.total=0;
            $scope.details = response.data;
            angular.forEach($scope.details, function(k) {
              $scope.total = $scope.total + (k.hoadonchitiet_PRICE * k.hoadonchitiet_SOLUONG);

              $http({
                method: "GET",
                url: "http://localhost:8080/api/MonAn/" + k.hoadonchitietID.monan_MONAN_ID
              }).then(function mySuccess(response) {
                k.monan_NAME = response.data.monan_NAME;
              }, function myError(response) {
                $scope.foods = response.statusText;
              });
            });
          }, function myError(response) {
            $scope.details = response.statusText;
          });
        });
    }


    $scope.payBill=function(){
      var id="";
      $http({
        method: "GET",
        url: "http://localhost:8080/api/GetHoaDonToStatus/false"
      }).then(function mySuccess(response) {
        $scope.hdidctt = response.data;
        angular.forEach($scope.hdidctt, function(k) {
          if (k.ban_BAN_ID == $scope.tableIndex) {
            id = k.hoadon_ID;
            $scope.hdno=k.hoadon_NO;
            $scope.day=k.hoadon_DATE;
          }
        });
        if(id != null && id != ""){
          $http({
            method: "GET",
            url: "http://localhost:8080/api/HoaDon/" + id
          }).then(function mySuccess(data) {
            var data = {
              "hoadon_ID": id,
              "hoadon_STATUS": true
            };
            console.log(JSON.stringify(data));
            $http({
                method: 'POST',
                url: 'http://localhost:8080/api/UpdateHoaDon',
                data: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json; charset=UTF-8"
                },
              })
              .then(function mySuccess(response) {
                alert("Thanh toán thành công");
                $window.location.reload();
              });
          });

        }
      });
    }

    $scope.delete= function(food){
      $http({
        method: "GET",
        url: "http://localhost:8080/api/DeleteHoaDonChiTiet/" + food.hoadonchitietID.hoadon_HOADON_ID + "&" + food.hoadonchitietID.monan_MONAN_ID
      }).then(function mySuccess(response) {
        $http({
          method: "GET",
          url: "http://localhost:8080/api/GetHDCTByID/" + food.hoadonchitietID.hoadon_HOADON_ID
        }).then(function mySuccess(response) {
          $scope.total=0;
          $scope.details = response.data;
          angular.forEach($scope.details, function(k) {
            $scope.total = $scope.total + (k.hoadonchitiet_PRICE * k.hoadonchitiet_SOLUONG);
            $http({
              method: "GET",
              url: "http://localhost:8080/api/MonAn/" + k.hoadonchitietID.monan_MONAN_ID
            }).then(function mySuccess(response) {
              k.monan_NAME = response.data.monan_NAME;
            }, function myError(response) {
              $scope.foods = response.statusText;
            });
          });
         
        }, function myError(response) {
          $scope.details = response.statusText;
        });
      });
      $http({
        method: "GET",
        url: "http://localhost:8080/api/GetAllHoaDon/"
      }).then(function mySuccess(response) {
        var d=0;
        $scope.data=response.data;
        angular.forEach($scope.data, function(k) {
          $http({
            method: "GET",
            url: "http://localhost:8080/api/GetHDCTByID/" + k.hoadon_ID
          }).then(function mySuccess(response) {
            console.log(response.data);
            if(response.data=="" || response.data==null || response.data==[]){
              $http({
                method: "POST",
                url: "http://localhost:8080/api/DeleteHoaDon/" + k.hoadon_ID
              }).then(function mySuccess(response) {
                
                $http({
                  method: "GET",
                  url: "http://localhost:8080/api/GetAllBan"
                }).then(function mySuccess(response) {
                  $scope.tables = response.data;
                    $http({
                      method: "GET",
                      url: "http://localhost:8080/api/GetHoaDonToStatus/false"
                    }).then(function mySuccess(response) {
                      $scope.data= response.data;
                      angular.forEach($scope.tables, function(e) {
                        var d=0;
                        angular.forEach($scope.data, function(k) {
                          if(e.ban_ID == k.ban_BAN_ID){
                            d=1;
                            $scope.hdno=k.hoadon_NO;
                            $scope.day=k.hoadon_DATE;
                            e.tableColor= {
                              "background-color" : "#2DCE89"
                            }
                          }
                        });
                        if(d==0){
                          e.tableColor= {
                            "background-color" : "white"
                          }
                        }
                      });
                    });
                }, function myError(response) {
                  $scope.tables = response.statusText;
                });
              });
            }
          });
        });
      });

    }





    });
  });
}(angular.module("myApp")));
