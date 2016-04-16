/**
 * Created by lei on 2015/11/18.
 */
var app=angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
                templateUrl: 'view/home.html',
                controller: 'homeCtrl',
            }).when('/account', {
                templateUrl: 'view/account.html',
                controller: 'accountCtr',
            }).otherwise({
                redirectTO: "/home"
            });

    }]);
app.controller("homeCtrl", function ($scope) {
    $scope.cmd="1234456";
})

app.controller("accountCtr", function ($scope) {
    $scope.name="user";
    $scope.pw="prassword";
})

app.controller("aa", function ($scope) {
   $scope.abc="this first page";
});

