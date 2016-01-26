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

    $rootScope.currentPage = "";

    $rootScope.seDisplay = false;
    $rootScope.contactDisplay = false;

    $rootScope.clickMain = function(){
      $rootScope.currentPage = "";
      $location.path("/")
    };

    $rootScope.clickMe = function(){
      $rootScope.currentPage = "";
      $location.path("/me")
    };

    $rootScope.clickMath = function(){
      $rootScope.currentPage = "";
      $location.path("/math")
    };

    $rootScope.clickSe = function(){
      $rootScope.currentPage = "";
      $location.path("/se")
    };

    $rootScope.clickPhoto = function(){
      $location.path("/photo")
    };

    $rootScope.clickContact = function(){
      $rootScope.currentPage = "";
      $rootScope.contactDisplay = true;
    };

    $scope.changeLocation = function(loc){
      $rootScope.currentPage = "";
      $location.path("/"+loc)
    };

    $scope.sendMail = function(){
      var message = $("#contactTextArea")[0].value;
      $http.post("/backend/sendmail.php",{"message":message})
        .success(function(){
          $("#contactTextArea")[0].value = "";
        });
    }

  });
