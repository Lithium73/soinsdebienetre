'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:SeCtrl
 * @description
 * # SeCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('SeCtrl', function ($scope,$location) {
    $scope.changeLocation = function(loc){
      $location.path("/"+loc)
    }
  });
