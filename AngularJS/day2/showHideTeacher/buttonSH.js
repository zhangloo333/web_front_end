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



    $scope.creatT= function () {
        $scope.order=[{'name':'monitor','price':'$50'},
            {'name':'tash','price':'$60'},
            {'name':'shen','price':'$59'},
            {'name':'asdasd','price':'$90'},
            {'name':'asdd','price':'$34'},
            {'name':'teer','price':'$24'}];

    }

    $scope.deleteF= function () {
        $scope.order.pop();
    }

    $scope.deleteL=function(){
        $scope.order.shift();
    }

    $scope.deleteR= function (i) {
        $scope.order.splice(i,1);

    }// for delete whatever row you want
    $scope.tableVisable=false;
    $scope.showT= function (i) {
        $scope.tableVisable=!$scope.tableVisable;
        $scope.tname= $scope.order[i].name;
        $scope.tprice= $scope.order[i].price;
        $scope.tnum=i;


        //$scope.saveI=save();
    }


    $scope.saveI= function() {
        $scope.tableVisable=!$scope.tableVisable;

        $scope.order[$scope.tnum].name =  $scope.tname;
        $scope.order[$scope.tnum].price = $scope.tprice;

        $scope.tableVisable=false;
    }


});