'use strict';

var aboutModule = angular.module('aboutModule', [
    'ngRoute',
]);

aboutModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'app/about/about.html',
                controller: [
                    '$scope',

                    function ($scope) {
                        siteHeaderText.value = "Who Am I?";
                    }],
            });
    }
]);
