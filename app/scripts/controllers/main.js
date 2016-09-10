'use strict';

/**
 * @ngdoc function
 * @name vera4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vera4App
 */
angular.module('vera4App')
  .controller('MainCtrl', function ($scope, VeraService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mode = VeraService.query('Mode');
  });
