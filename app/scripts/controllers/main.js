'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('MainCtrl', function ($scope,$location) {

    $scope.clickMe = function(){
      $location.path("/me")
    };

    $scope.clickMath = function(){
      $location.path("/math")
    };

    $scope.clickSe = function(){
      $location.path("/se")
    };

    $scope.clickPhoto = function(){
      $location.path("/photo")
    };

  });
