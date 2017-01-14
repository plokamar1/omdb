var app1 = angular.module("app1", []);
var titleBef;
var movies = null;
//The variable titleBef saves the state of the user's search when pressing the button so as
//if he presses again the search button and he hasnt changed the string then the request
//wont happen again

app1.controller("ctrl1", function ($scope,$http) {
    $scope.onClick = function () {

        if (titleBef != $scope.title) {

            $http({method : 'GET', url:'http://www.omdbapi.com/?&type=movie&r=json&s=' + $scope.title})
              .success(function (data) {
                console.log(data.length());
                $scope.movies = data.Search;
              });
        }
    };


});
