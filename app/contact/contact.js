'use strict';

var contactModule = angular.module('contactModule', [
    'ngRoute',
]);

contactModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: [
                    '$scope',

                    function ($scope) {
                        siteHeaderText.value = "Get In Touch";
                    }],
            });
    }
]);
