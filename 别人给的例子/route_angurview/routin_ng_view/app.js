/**
 * Created by lei on 2015/11/18.
 */
var app=angular.module('myApp', ['ngRoute']);
//app.controller("view1", function ($scope) {
//    $scope.abc="111";
//});

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'view/home.html',
                controller: 'homeCtrl',
            })
            .when('/account', {
                templateUrl: 'view/account.html',
                controller: 'accountCtr',
            })
            .otherwise({
                redirectTo: "/home"
            });

    }]);