'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('HeaderCtrl', function ($scope,$rootScope,$location) {

    $rootScope.clickMe = function(){
      $location.path("/me")
    };

    $rootScope.clickMath = function(){
      $location.path("/math")
    };

    $rootScope.clickSe = function(){
      $location.path("/se")
    };

    $rootScope.clickPhoto = function(){
      $location.path("/photo")
    };

  });
