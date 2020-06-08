'use strict';

var aboutModule = angular.module('businesscardsModule', [
    'ngRoute',
]);

aboutModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/business cards', {
                templateUrl: 'app/business cards/cards.html',
                controller: [
                    '$scope',

                    function ($scope) {
                        siteHeaderText.value = "In here will be links of my Business Cards";
                    }],
            });
    }
]);
