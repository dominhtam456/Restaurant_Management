var app = angular.module("myApp", ["ngRoute",'angularUtils.directives.dirPagination',"ngStorage"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/examples/order.html",
    controller : "TablesCtrl",
    permission: ['1','2','4']
  })
  .when("/foods", {
    templateUrl : "/examples/foods.html",
    controller : "FoodsCtrl",
    controllerAs: "vm",
    permission: ['4']
  })
  .when("/resources", {
    templateUrl : "/examples/resources.html",
    controller : "ResourcesCtrl",
    permission: ['4']
  })
  .when("/login", {
    templateUrl : "/examples/login.html",
    controller : "Login.IndexController",
    controllerAs: "vm"
  })
  .when("/statistical", {
    templateUrl : "/examples/statistical.html",
    controller : "StatisticalCtrl",
    permission: ['4', '2']
  })
  .when("/kitchen", {
    templateUrl : "/examples/kitchen.html",
    controller : "KitchenCtrl",
    permission: ['3','4']
  })
});

app.run(function($rootScope, $http, $location, $localStorage) {

        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
            // console.log($localStorage.currentUser);
            $rootScope.role = $localStorage.currentUser.role;
        }

        

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
          $rootScope.role = $localStorage.currentUser.role;
            permission = $localStorage.currentUser.role;
          console.log(current);
          var found = next.permission.find(function(element) {
            return element == permission;
          });

          if (next.permission !== undefined && next.permission !== null) {
              if (!found) {
                
                  $location.path(current.$$route.originalPath);
                  alert("Permission Denied");
                  
              }
          }
          
          
      });
    });
