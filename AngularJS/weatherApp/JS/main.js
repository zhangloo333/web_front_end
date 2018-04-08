/**
 * Created by lee on 6/2/16.
 */
var app = angular.module("VideoAPP",[]);

app.controller('videoCtrl', function($scope, $http){

    $scope.video_data = [];
    $scope.city = "San Jose";

    $scope.cityvideo = function(city){
        $http.jsonp('https://api.dailymotion.com/videos?fields=id,thumbnail_url%2Ctitle,url&country=us&search='+city+'&page=2&limit=9&callback=JSON_CALLBACK')
            .success(function(result){
                $scope.video_data = result.list;
            })
            .error(function(result){
                alert("fail")
                $scope.video_data = "Request Failed";
            });
    }
    $scope.cityvideo("San Jose");
});

//app.directive("appfooter",function(){
//    return{
//        restrict:"E",
//        template:'<footer><div class="company-details col-md-5"><div class="icon-top red-text"><i class=icon-fontawesome-webfont-302></i></div>PO Box 16122 Collins Street West, Victoria 8007 Australia</div><div class="company-details col-md-2"><div class="icon-top green-text"><i class=icon-fontawesome-webfont-329></i></div>contact@designlab.co</div><div class="company-details col-md-2"><div class="icon-top blue-text"><i class=icon-fontawesome-webfont-101></i></div>+613 0000 0000</div><div class="col-lg-3 col-sm-3 copyright"><ul class=social><li><a href=""><i class=icon-facebook></i></a><li><a href=""><i class=icon-twitter-alt></i></a><li><a href=""><i class=icon-linkedin></i></a><li><a href=""><i class=icon-behance></i></a><li><a href=""><i class=icon-dribbble></i></a></ul>©2013 Zerif LLC</div></footer> '
//
//    };
//});