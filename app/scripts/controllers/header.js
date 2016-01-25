'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('HeaderCtrl', function ($scope,$rootScope,$location,$http) {

    $rootScope.seDisplay = false;
    $rootScope.contactDisplay = false;

    $rootScope.clickMain = function(){
      $location.path("/")
    };

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

    $rootScope.clickContact = function(){
      $rootScope.contactDisplay = true;
    };

    $scope.changeLocation = function(loc){
      $location.path("/"+loc)
    };

    $scope.sendMail = function(){
      var message = $("#contactTextArea")[0].value;
      $http.post("/backend/sendmail.php",{"message":message});
    }

  });
