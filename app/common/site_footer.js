'use strict';

var siteFooterModule = angular.module('siteFooterModule', []);

siteFooterModule.directive('siteFooter',

    function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'app/common/site_footer_template.html',
            controller: [
                '$scope',

                function ($scope) {

                }],
        };
    }
);