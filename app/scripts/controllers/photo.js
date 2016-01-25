'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:PhotoCtrl
 * @description
 * # PhotoCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('PhotoCtrl', function ($scope,$http) {

    $http.get("/backend/photos.php").success(function(data){
      $scope.photos = data;
    })

  });
