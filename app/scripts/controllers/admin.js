'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('AdminCtrl', function ($scope) {

    $scope.activities = [
      {id:"0",title:"Massage esthétiques"},
      {id:"2",title:"Tatouage au hénnée"}
    ];

    $scope.selectedActivity = "backend/bill?activityId=0";

    $scope.changeSelect =function(){
      alert('pouet');
    }
    /**
     * Startup
     */




  });
