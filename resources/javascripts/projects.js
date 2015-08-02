$(document).ready(function(){
    'use strict';

    //$('.project-display').load('resources/html/projects/calculator.html');
});

angular.module('index', [])
    .controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.loadProject = function(link) {
            $('.project-display').load(link);
        };

        $scope.projectMap = {};
        $http({
            url: "./resources/projects.json",
            method: 'GET'
        }).then(function(res){
            $scope.projectMap = res.data;
        });

    }]);