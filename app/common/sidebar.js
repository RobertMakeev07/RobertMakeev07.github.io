'use strict';

var sidebarModule = angular.module('sidebarModule', []);

sidebarModule.directive('sidebar',

    function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'app/common/sidebar_template.html',
            controller: [
                '$scope',

                function ($scope) {

                }],
        };
    }
);