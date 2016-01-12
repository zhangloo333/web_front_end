/**
 * Created by Shun Chang on 12/4/2015.
 */
app.controller("homeCtrl",function($scope,$location,cityService){
    $scope.city = localStorage.getItem("city")?localStorage.getItem("city"):cityService.get();
    $scope.$watch("city",function(){
        localStorage.setItem("city",$scope.city);
        cityService.save($scope.city);
    });
    $scope.submit=function(){
        $location.path("/forecast")
    }
});
app.controller("forecastCtrl",function($scope,$resource,$routeParams,cityService,weatherService){
    $scope.city = localStorage.getItem("city")?localStorage.getItem("city"):cityService.get();
    $scope.days = $routeParams.days || '3';
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8*(degK - 273))+32);
    };
    $scope.convertToDate= function(dt){
        return new  Date (dt*1000);
    }
});