/**
 * Created by lei on 2015/11/18.
 */
//var app = angular.module("myApp",[]);
//app.controller("scop", function ($scope) {
//    $scope.msg="hello";
//});


var app=angular.module("myApp",[]);

app.controller("scop",function($scope){
    $scope.msg="user";
    $scope.pas="password";
    $scope.error="this is valid";
    $scope.error1="this is valid2";

});

app.directive("usescope", function () {
    return{
        restrict:'E',
        templateUrl:"../template/scopeAdd.html",
        scope:{'x':'=xvar','y':'=yvar'}
    };
});