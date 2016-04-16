/**
 * Created by lei on 2015/11/17.
 */
var app=angular.module("myApp",[]);

app.controller("first",function($scope){
    $scope.msg="hello";

});

app.controller("second",function($scope){
    $scope.msg="how are you";
});

app.directive("mesTemp", function () {
    return {
        restrict: 'E',
        templateUrl: 'template/msgBox_temp1.html'
    };
});

//app.directive("msgbox", function () {
//    return{
//        'restrict':'E',
//        'templateUrl':'template/msgBox_Temp2.html'
//    }
//});


