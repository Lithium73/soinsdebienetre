'use strict';

/**
 * @ngdoc function
 * @name soinsbienetreApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the soinsbienetreApp
 */
angular.module('soinsbienetreApp')
  .controller('AdminCtrl', function ($scope,$http,$rootScope) {

    $rootScope.currentPage = "photosPageScroll";

    $scope.activities = [
      {id:"0",title:"Massage esthétiques"},
      {id:"2",title:"Tatouage au hénnée"},
      {id:"3",title:"La beauté des mains et des pieds"},
      {id:"4",title:"Le maquillage"},
      {id:"5",title:"Les épilations"},
      {id:"6",title:"Les soins complémentaires"},
      {id:"7",title:"Forfait Epilations"}
    ];

    $scope.selectedActivity = "backend/bill.php?idActivity=0";

    $scope.promo = "backend/promo.php?idActivity=0";
    $scope.event = "backend/promo.php?idActivity=1";


    $scope.onSaveClick = function(){
      console.log("onsave")
      var select = document.getElementById("selectActivities");
      var valueActivity = select.options[select.selectedIndex].value;
      var billgrid = $("#billsgrid");
      var rows = billgrid.children().first().children(".row");
      var data = [];
      for(var i = 0; i<rows.length; i++){
        var obj = {text:rows[i].firstChild.value,price:rows[i].childNodes[1].value,id:rows[i].childNodes[2].textContent,idActivity:valueActivity};
        if(obj.text.length < 1){

          $http({ url: 'backend/bill.php',
            method: 'DELETE',
            data: obj.id,
            headers: {"Content-Type": "application/json;charset=utf-8"}
          });
        }else{
          $http.post("/backend/bill.php",JSON.stringify(obj));
        }
        data.push(obj);
      }
    }

    $scope.changeSelect =function(){
      var select = document.getElementById("selectActivities");
      var value = select.options[select.selectedIndex].value;
      $scope.selectedActivity = "backend/bill.php?idActivity="+value;
    };


    $scope.onSaveClickevent = function(){
      var billgrid = $("#event");
      var rows = billgrid.children().first().children(".row");
      var data = [];
      for(var i = 0; i<rows.length; i++){
        var obj = {message:rows[i].firstChild.value,price:rows[i].childNodes[1].value,id:rows[i].childNodes[2].textContent};
        console.log(obj)
        if(obj.message.length < 1){

          $http({ url: 'backend/promo.php?idActivity=1',
            method: 'DELETE',
            data: obj.id,
            headers: {"Content-Type": "application/json;charset=utf-8"}
          });
        }else{
          $http.post("/backend/promo.php?idActivity=1",JSON.stringify(obj));
        }
        data.push(obj);
      }
    }

    $scope.onSaveClickpromo = function(){
      var billgrid = $("#promo");
      var rows = billgrid.children().first().children(".row");
      var data = [];
      for(var i = 0; i<rows.length; i++){
        console.log(obj)
        var obj = {message:rows[i].firstChild.value,price:rows[i].childNodes[1].value,id:rows[i].childNodes[2].textContent};
        if(obj.message.length < 1){

          $http({ url: 'backend/promo.php?idActivity=0',
            method: 'DELETE',
            data: obj.id,
            headers: {"Content-Type": "application/json;charset=utf-8"}
          });
        }else{
          $http.post("/backend/promo.php?idActivity=0",JSON.stringify(obj));
        }
        data.push(obj);
      }
    }

    /**
     * Startup
     */
    setTimeout(function(){
      document.getElementById("selectActivities").options[1].selected = true;
    },250);

  });
