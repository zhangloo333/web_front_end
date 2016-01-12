/**
 * Created by Shun Chang on 12/4/2015.
 */
app.factory('cityService',function(){
    var city="New York, NY";
    return {
        get: function() {
            return city;
        },
        save: function(c){
            city = c ;
        }
    }
});
app.service("weatherService",function($resource){
    this.GetWeather = function(city,days){
        var weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",{
            callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
        return weatherAPI.get({
            q: city,
            cnt: days ,
            appid:"2de143494c0b295cca9337e1e96b00e0"
        });
    }
});