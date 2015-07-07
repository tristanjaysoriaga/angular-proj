'use strict';

/**
 * @ngdoc function
 * @name angularProjApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularProjApp
 */
angular.module('angularProjApp')
  .controller('NotificationsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
