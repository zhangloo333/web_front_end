/**
 * Created by lei on 2015/11/11.
 */

var imgApp = angular.module("samepleApp",[]);
imgApp.controller("imgcontr", function ($scope) {
    $scope.foo="James";
    $scope.imgfoo=true;
    $scope.toggleImg= function () {
        $scope.imgfoo=!$scope.imgfoo;
    };
    $scope.items=["monitor","karbard","mouse"];

    $scope.order=[{'name':'monitor','price':'$50'},
                  {'name':'tash','price':'$60'},
        {'name':'shen','price':'$59'},
        {'name':'asdasd','price':'$90'},
        {'name':'asdd','price':'$34'},
        {'name':'teer','price':'$24'}];

    $scope.creatT= function () {

    }
})