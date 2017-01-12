var app1 = angular.module("app1",[]);

app1.controller("ctrl1", function($scope){
    
    $scope.onClick = function(){
        $.getJSON('http://www.omdbapi.com/?r=json&s='+$scope.title, function(data){
            console.log(Object.keys(data.Search[0]));
            $scope.datalist = data.Search[0];
        });
    }
});