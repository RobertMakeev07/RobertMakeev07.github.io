'use strict';

var siteHeaderText = {};

var roberthrihoryanPersonalWebsite = angular.module('roberthrihoryanPersonalWebsite', [
    'ngRoute',
    'homeModule',
    'contactModule',
    'workModule',
    'aboutModule',
    'sourcesModule',
    'businesscardsModule',
    'errorModule',
    'sidebarModule',
    'siteHeaderModule',
    'siteFooterModule',
]);

roberthrihoryanPersonalWebsite.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/error',
            });
    }
]);
