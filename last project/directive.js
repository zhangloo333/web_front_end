/**
 * Created by Shun Chang on 12/4/2015.
 */
app.directive("weatherReport",function(){
    return {
        restrict:"E",
        templateUrl:'directives/weatherReport.html',
        replace:true,
        scope:{
            weatherDay:"=",
            convertToStandard:"&",
            convertToDate:"&",
            dateFormat:"@"
        }
    }
});