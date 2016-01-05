/**
 * Created by lei on 2015/12/3.
 */
//var app = angular.module("socialApp",[]);
var app = angular.module("socialApp",[]);
app.controller("weatherApp", function ($scope,httpWeather,tempConvert) {

        $scope.btnClick = function()
        {
           alert(1)
            var Addr = $scope.in;
            var wurl = 'http://api.openweathermap.org/data/2.5/weather?q=san%20jose,ca&appid=2de143494c0b295cca9337e1e96b00e0';
            httpWeather.fetchData(wurl).success(function(res){
               console.log(res);
            $scope.wApp=res;
                var a ="http://openweathermap.org/img/w/"+res.weather[0].icon+".png";
            $scope.imgIcon = a;
                console.log(a);

            var c,d;
                c=tempConvert.tempFC(res.main.temp);
                $scope.Fahr=Math.round(c[0]);
                console.log(Math.round(c[0])+" "+Math.round(c[1]));

            });
        }
});


app.factory("httpWeather", function($http)
{
    var myfact = {};
    myfact.fetchData = function(aurl){
        return $http.get(aurl)
    };
    return myfact;
});

app.service("tempConvert", function () {
   this.tempFC= function (Kelvin) {
       var temp = [];
       Kelvin =parseInt(Kelvin);
       temp[0] = Kelvin - 273.15;
       temp[1] = Kelvin *9/5 - 459.67;
       return temp;
   } 
});


app.service("calService", function () {
    this.calTax = function (a,b) {
        return a*b;
    }
});