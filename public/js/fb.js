'use strict';

angular.module('myApp.fb', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/fbButton', {
        templateUrl: 'views/fbLogin.html',
        controller: 'FbController'
    });
}])

.controller('FbController', ['$scope', '$window', '$route', '$location', function ($scope, $window, $route, $location) {
    $scope.usrId = true;
    //reroute user to find page
    $scope.reRoute = function()
    {
        //$window.location = "/#!/find";
        $window.location.href = '/#/find';
    }

    //reload current page
     $scope.reloadRoute = function() {
            $route.reload();
    }
     
     //hide log in button if user logs in
     //hide log out button if user logs out
    $scope.checkState = function () {
        //console.log("state : " + localStorage.getItem("usrId"));
        if((localStorage.getItem("usrId")!=null)&&(localStorage.getItem("usrId")!=undefined)&&(localStorage.getItem("usrId")!="loggedOut"))
        {
            //user logged in
            //console.log("Setting to false : "+$scope.usrId);
            $scope.usrId = false;
            //console.log("Set to false : "+$scope.usrId);
            $scope.$apply();
        }
        else{
            //user not logged in
            //console.log("Setting to true "+$scope.usrId);
            $scope.usrId = true;
            //console.log("Set to true "+$scope.usrId);
            $scope.$apply();
        }
    }
}]);