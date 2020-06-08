'use strict';

var siteHeaderModule = angular.module('siteHeaderModule', []);

siteHeaderModule.directive('siteHeader',

    function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'app/common/site_header_template.html',
            controller: [
                '$scope',

                function ($scope) {
                    $scope.siteHeaderText = {};
                    siteHeaderText = $scope.siteHeaderText;
                    siteHeaderText.value = "Robert Hrihoryan";
                }],
        };
    }
);