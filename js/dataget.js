var app1 = angular.module("app1", []);
var titleBef;
var movies = null;
//The variable titleBef saves the state of the user's search when pressing the button so as
//if he presses again the search button and he hasnt changed the string then the request
//wont happen again

app1.controller("ctrl1", function ($scope,$http) {
    $scope.onClick = function () {
    	var site = 'http://www.omdbapi.com/?';
    	var resp = '&r=json';
		var type = '';
		var search = 's='+$scope.title;
    	
    	if($scope.movieType){
    		type = '&type='+$scope.movieType;
    	}

    	var wholeUrl = site + search + resp + type;

        if (titleBef != $scope.title) {

            $http({method : 'GET', url: wholeUrl})
            .success(function (data) {
                console.log(data);
                $scope.movies = data.Search;
              });
        }

    };

});

app1.directive('imageOnLoad', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                return 1;
            });
        }
    };
});