$(document).ready(function(){
    'use strict';

    //$('.project-display').load('resources/html/projects/calculator.html');
});

angular.module('index', [])
    .controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.projectMap = {};
        $scope.loaded = '';

        $scope.loadProject = function(link) {
            $scope.loaded = link;
            $('.project-display').load(link);
        };

        $http({
            url: "./resources/projects.json",
            method: 'GET'
        }).then(function(res){
            $scope.projectMap = res.data;
        });

    }]);