var app1 = angular.module("app1", []);
var titleBef;
//The variable titleBef saves the state of the user's search when pressing the button so as
//if he presses again the search button and he hasnt changed the string then the request
//wont happen again

app1.controller("ctrl1", function ($scope) {
    $scope.onClick = function () {

        if (titleBef != $scope.title) {

            $.getJSON('http://www.omdbapi.com/?&type=movie&r=json&s=' + $scope.title, function (data) {
                //console.log(data.Search);
                console.log(data.Response);
                if (data.Response = "True") {
                    titleBef = $scope.title;
                    $scope.movies = data.Search;
                } else {
                    $scope.movies = 0;
                }

            });
        }
    }

});