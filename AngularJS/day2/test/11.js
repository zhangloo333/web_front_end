var imgApp = angular.module("samepleApp",[]);
imgApp.controller("imgcontr", function ($scope) {
    $scope.foo="James";
    $scope.imgfoo=true;
    $scope.toggleImg= function () {
        $scope.imgfoo=!$scope.imgfoo;
    }
})