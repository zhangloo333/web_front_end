/**
 * Created by Shun Chang on 11/18/2015.
 */
var app = angular.module("myApp",['ngRoute']);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/hotel",{
        templateUrl:"hotel.html",
        controller:"hotelCtrl"
    }).when("/flights",{
        templateUrl:"flights.html",
        controller:"flightsCtrl"
    }).when("/cars",{
        templateUrl:"cars.html",
        controller:"carsCtrl"
    }).when("/vacation",{
        templateUrl:"vacation.html",
        controller:"vacationCtrl"
    }).when("/cruise",{
        templateUrl:"cruise.html",
        controller:"cruiseCtrl"
    }).otherwise({
        redirectTO:"/hotel"
    })
}]);
app.controller("hotelCtrl",function($scope){
    $scope.title="Search Hotel";
    $scope.place="City, Airport, Point of Interest, Hotel Name or U.S. Zip Code";
    $scope.day="Choose Date"
});
app.controller("flightsCtrl",function($scope){
    $scope.title="Search Flight"
});
app.controller("carsCtrl",function($scope){
    $scope.title="Rent a Car"
});
app.controller("vacationCtrl",function($scope){
    $scope.title="Search Vacation Package"
});
app.controller("cruiseCtrl",function($scope){
    $scope.title="Search Cruise"
});
