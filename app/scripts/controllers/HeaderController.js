/**
 * Created by hsnam on 2016-02-18.
 */
'use strict';

var mainApp = angular.module('sgAngularApp');

mainApp.controller('HeaderController',
  ['$log', '$scope', '$translate',
    function ($log, $scope, $translate) {
      $scope.setLang = function (lang) {
        $translate.use(lang);
        $log.debug("Chang language to " + lang);
      }
    }
  ]
);
