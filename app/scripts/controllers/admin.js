'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('AdminCtrl', function ($scope,$http) {

    $scope.activities = [
      {id:"0",title:"Massage esthétiques"},
      {id:"2",title:"Tatouage au hénnée"},
      {id:"3",title:"La beauté des mains et des pieds"},
      {id:"4",title:"Le maquillage"},
      {id:"5",title:"Les épilations"},
      {id:"6",title:"Les soins complémentaires"}
    ];

    $scope.selectedActivity = "http://localhost/soin/backend/bill.php?idActivity=0";

    $scope.onSaveClick = function(){
      var select = document.getElementById("selectActivities");
      var valueActivity = select.options[select.selectedIndex].value;
      var billgrid = $("billgridadmin");
      var rows = billgrid.children().first().children(".row");
      var data = [];
      for(var i = 0; i<rows.length; i++){
        var obj = {text:rows[i].firstChild.value,price:rows[i].childNodes[1].value,id:rows[i].childNodes[2].textContent,idActivity:valueActivity}
        $http.post("http://localhost/soin/backend/bill.php",JSON.stringify(obj));
        data.push(obj);      }
    }

    $scope.changeSelect =function(){
      var select = document.getElementById("selectActivities");
      var value = select.options[select.selectedIndex].value;
      $scope.selectedActivity = "http://localhost/soin/backend/bill.php?idActivity="+value;
    };
    /**
     * Startup
     */
    setTimeout(function(){
      document.getElementById("selectActivities").options[1].selected = true;
    },250);

  });
