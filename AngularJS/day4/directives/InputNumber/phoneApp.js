/**
 * Created by lei on 2015/11/17.
 */
var phone = angular.module("phoneNumber",[]);
phone.directive("phoneblank", function () {
   return{
       'restrict': 'E',
       'templateUrl':"../template/phone_temp.html"
   };
});

phone.controller("f1", function ($scope) {
    $scope.hint='3number';
});

phone.controller("f2",function($scope)){

};