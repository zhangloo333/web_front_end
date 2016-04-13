/**
 * Created by Shun Chang on 11/18/2015.
 */
var app = angular.module("myApp",['ngRoute']);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/home",{
        templateUrl:"home.html",
        controller:"homeCtrl"
    }).when("/accounts",{
            templateUrl:"accounts.html",
            controller:"accountsCtrl"
        }).when("/contact-us",{
        templateUrl:"contact.html",
        controller:"contactCtrl"
    }).otherwise({
            redirectTO:"/home"
        })
}]);
app.controller("homeCtrl",function($scope){
    $scope.title="HomePage";
});
app.controller("accountsCtrl",function($scope){
    $scope.uname="UserName";
    $scope.upwd="PassWord";
});
app.controller("contactCtrl",function($scope){
    $scope.phone="Call (800)-xxx-xxxx";
    $scope.address="abc@mail.com";
});