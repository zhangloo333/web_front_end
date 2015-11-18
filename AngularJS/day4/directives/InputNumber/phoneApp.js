/**
 * Created by lei on 2015/11/17.
 */
var phone = angular.module("phoneNumber",[]);
phone.directive("phoneblank", function () {
   return{
       'restrict': 'E',
       'templateUrl':"../template/phone_temp.html",
        scope:{'hint':'=hvar'}
   };
});

phone.controller("f1", function ($scope) {
    $scope.num1='3number';
    $scope.num2='3number';
    $scope.num3='4number';
});

//phone.controller("f2",function($scope)){
//
//};