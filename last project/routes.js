/**
 * Created by Shun Chang on 12/4/2015.
 */
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'pages/homepage.html',
            controller:'homeCtrl'
        })
        .when('/forecast',{
            templateUrl:'pages/forecast.html',
            controller:'forecastCtrl'
        })
        .when('/forecast/:days',{
            templateUrl:'pages/forecast.html',
            controller:'forecastCtrl'
        })
});

