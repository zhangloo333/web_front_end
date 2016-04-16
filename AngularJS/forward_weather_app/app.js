var app= angular.module("weatherApp",[]);

app.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
    function fetchWeather(zip) {
      weatherService.getWeather(zip).then(function(data){
        $scope.place = data;
      }); 
    }
    
    fetchWeather('94538');
    
    $scope.findWeather = function(zip) {
      $scope.place = '';
      fetchWeather(zip);
    };
  }]);

app.factory('weatherService', ['$http', '$q', function ($http, $q){
    function getWeather (zip) {
      var deferred = $q.defer();
      $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=')
        .success(function(data){
          deferred.resolve(data.query.results.channel);
        })
        .error(function(err){
          console.log('Error retrieving markets');
          deferred.reject(err);
        });
      return deferred.promise;
    }
    
    return {
      getWeather: getWeather
    };
  }]);

app.controller('videoCtrl',  function($scope, $http) {
	
	$scope.video_data=[];
	$scope.city="Fremont";
	
	$scope.cityvideo= function(city){
	$http.jsonp('https://api.dailymotion.com/videos?fields=id,thumbnail_url%2Ctitle,url&country=us&search='+city+'&page=2&limit=9&callback=JSON_CALLBACK').
	success(function(r) {		
		
		$scope.video_data=r.list;
		
	}).
	error(function (r) {
		alert("fail")
	  $scope.video_data = "Request failed";
	});
	}
	$scope.cityvideo("fremont");
});

/*--------------------------------------*/

app.controller('newsCtrl',  function($scope, $http) {
	
	$scope.news_data=[];
	
	$scope.newssearch= function(item){
	$http.jsonp('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='
  			+item+'&page=1&api-key=a55fae1cbed20d79f5d14bd8f86de6d3&callback=1').
	success(function(r) {
		
		
		alert("success");
		
	}).
	error(function (r) {
		alert("fail")
	  $scope.news_data = "Request failed";
	});
	}
	
});

/*--------------------------------------*/


/*app.controller('newsCtrl', ['$scope', 'newsService', function($scope, newsService) {
    function fetchNews(item1) {
      newsService.getNews(item1).then(function(data1){
        $scope.place1 = data1;
      }); 
    }
    
    fetchNews('News Wether');
    
    $scope.findNews = function(item1) {
      $scope.place1 = '';
      fetchNews(item1);
    };
  }]);

app.factory('newsService', ['$http', '$q', function ($http, $q){
    function getNews (item1) {
      var deferred = $q.defer();
      $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='
  			+item1+'&page=1&sort=newest&api-key=a55fae1cbed20d79f5d14bd8f86de6d3&callback=JSON_CALLBACK')
        .success(function(data1){
          deferred.resolve(data1.query.results.channel);
        })
        .error(function(err){
          console.log('Error retrieving markets');
          deferred.reject(err);
        });
      return deferred.promise;
    }
    
    return {
      getNews: getNews
    };
  }]);*/

