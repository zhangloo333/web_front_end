/**
 * Created by lei on 2015/11/18.
 */
var appt = angular.module('myApp', ['ngRoute']);
appt.controller("navP", function ($scope) {
    $scope.Navbar=["Hotels","Flights","Cars","Vacation Packages","Cruises", "More"
    ];
//    $scope.inputList=['one','two','three'];
//    $scope.item1="1bc";
});

appt.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/Hotels',{
        templateUrl:'views/Hotel.html',
        controller:'Hotels'
    }).when('/Flights',{
        templateUrl:'view/Flights.html',
        controller:'Flights'
    });
}]);

//appt.controller("Hotels",function($scope){});
//app.config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/home', {
//        templateUrl: 'view/home.html',
//        controller: 'homeCtrl',
//    }).when('/account', {
//        templateUrl: 'view/account.html',
//        controller: 'accountCtr',
//    }).otherwise({
//        redirectTO: "/home"
//    });
//
//}]);

//appt.directive("serchfiled", function () {
//    return{
//        'restrict': 'E',
//        'templateUrl':"template/inputSearch.html",
//        scope:{'tempTitle':'=tmptitle',
//                'ph':'phc'}
//    };
//});

appt.controller("Hotels",function($scope){
        $scope.htitle="Search and Save on Hotels";
        $scope.tempTitle="Where are you going?";
        $scope.rooms=[1,2,3,4,5,6,7];

});

appt.controller("Flights",function($scope){});
