/**
 * Created by lei on 2015/11/19.
 */
$("#account").hide();
$("header :nth-child(2)").click(function () {
    $("#account").toggle();
});

var app = angular.module("myApp",['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home/:check',{
            templateUrl:'view/checkForm.html',
            controller:'checkCtr'
        }).otherwise({redirectTo:"/home"});
}]);

app.controller("checkCtr", function ($scope,$routeParams) {;
    $scope.checkType=$routeParams.check;
})