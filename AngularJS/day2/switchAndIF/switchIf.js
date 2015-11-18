/**
 * Created by lei on 2015/11/11.
 */
var myapp = angular.module("samepleApp",[]);

myapp.controller("ifSwitch", function ($scope) {
    $scope.info=true;
    $scope.showIf= function () {
        $scope.info=!$scope.info;
    };
    $scope.showSwitch=function(){
        $scope.country="us";
    };
});