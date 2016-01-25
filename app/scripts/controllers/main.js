'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('MainCtrl', function ($scope,$http) {

    $scope.event = "";
    $scope.promo = "";


    $http.get("http://localhost/backend/promo.php?idActivity=0")
      .success(function(data){
        $scope.promo=data[0].message;
      })

    $http.get("http://localhost/backend/promo.php?idActivity=1")
      .success(function(data){
        $scope.event=data[0].message;
      });

  });
