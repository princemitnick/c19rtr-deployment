'use strict';

angular
    .module('configParams', [])
    .controller('SpecimenCenters', function ($scope, $http) {

        $scope.loading = true;

        $http.get("http://192.168.1.29:9001/api/rtr/specimencenters")
            .then(function (response) {
                $scope.specimencenters = response.data.content;
                $scope.loading = false;
            })
            .catch(function (error) {
                $scope.loading = true;
            });

    })
