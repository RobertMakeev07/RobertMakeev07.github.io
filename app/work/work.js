'use strict';

var workModule = angular.module('workModule', [
    'ngRoute',
]);

workModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/work', {
                templateUrl: 'app/work/work.html',
                controller: [
                    '$scope',

                    function ($scope) {
                        siteHeaderText.value = "My Projects will never be Public!";
                    }],
            });
    }
]);

