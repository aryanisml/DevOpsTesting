(function () {
    'use strict';

    angular.module('serviceManagaerApp', [])
    .directive('hello', myDirectiveFunc);

    function myDirectiveFunc() {

        return
        {
            restrict : 'E',
            templateUrl: 'myTaskTemp.html',
            replace: true

        }
    };






})();