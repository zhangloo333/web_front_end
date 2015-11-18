/**
 * Created by lei on 2015/11/17.
 */
var app=angular.module("login",[]);

app.controller("ctr1",function($scope){
    $scope.line1="userName";
    $scope.line2="passWord";
    $scope.btnName="Logein";
    $scope.btn= function () {
        alert($scope.getValue);
    }
});

app.controller("ctr2",function($scope){
    $scope.line1="Email";
    $scope.line2="passKey";
    $scope.btnName="submite";
    $scope.btn= function () {
        alert($scope.getValue);
    }
});

app.directive("logintemple", function () {
    return{
        'restrict': 'E',
        'templateUrl': '../template/loginForm.html'
    };
});
