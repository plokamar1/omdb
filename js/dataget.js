var app1 = angular.module("app1",[]);

app1.controller("ctrl1", function($scope){
    
    $scope.onClick = function(){
        $.getJSON('http://www.omdbapi.com/?r=json&t='+$scope.title, function(data){
           console.log(data);

        });

    }
});