'use strict';

var aboutModule = angular.module('sourcesModule', [
    'ngRoute',
]);

aboutModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/sources', {
                templateUrl: 'app/sources/source.html',
                controller: [
                    '$scope',

                    function ($scope) {
                        siteHeaderText.value = "Applications for programming mobile-friendly";
                    }],
            });
    }
]);
