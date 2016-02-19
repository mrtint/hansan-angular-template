'use strict';

/**
 * @ngdoc function
 * @name sgAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sgAngularApp
 */
var mainApp = angular.module('sgAngularApp');

mainApp.controller('MainController',
  ['$log', '$scope', '$http', '$stateParams', '$window', 'configuration',
    function ($log, $scope, $http, $stateParams, $window, configuration) {
      $log.debug("MainController Loaded!");
      $log.debug(configuration.test); // configuration data

      $scope.values = [];

      $scope.openYoutube = function (url) {
        $window.open("https://www.youtube.com/watch?v=" + url);
      }

      $http({
        method: 'GET',
        url: '/scripts/test/sample.json'
      }).then(function successCallback(response) {
        $log.debug(response);
        if (response.status == 200) {
          $scope.values = response.data.result;
        }
      });
    }
  ]
);
