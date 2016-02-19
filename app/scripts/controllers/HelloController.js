'use strict';

var mainApp = angular.module('sgAngularApp');

mainApp.controller('HelloController',
  ['$log', '$scope', '$stateParams',
    function ($log, $scope, $stateParams) {
      $log.debug($stateParams);

      $scope.name = $stateParams.name;
      $scope.number = $stateParams.number;
    }
  ]
);
