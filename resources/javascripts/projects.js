angular.module('projects', [])
    .controller('ProjectsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.projects = [];

        $http(
            {
                method: 'JSON',
                url: '/personal/resources/projects.json'
            }
        ).success(function (data, status) {
                console.log(data);
                console.log('ststus: ', status);
            }).error(function(data, status) {
                console.log(data || "Request failed");
            });
    }]);