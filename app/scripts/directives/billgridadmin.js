'use strict';

/**
 * @ngdoc directive
 * @name soinsbienetreApp.directive:billgrid
 * @description
 * # billgrid
 */
angular.module('soinsbienetreApp')
  .directive('billgridadmin', function ($http) {
    return {
      template: '<div></div>',
      restrict: 'E',

      link: function postLink(scope, element, attrs) {

        scope.$watch(function() {return element.attr('xhr'); }, function(newValue){
          element[0].innerHTML = "";

         // newValue = "http://localhost/"+newValue;
          var dataUrl = newValue;
          var cellWidth = attrs.cellwidth;
          $http.get(dataUrl)
            .then(function(data){
              var grid = data.data;
              grid.title=element.attr("title");
              var domGrid = createGrid(grid,cellWidth);
              element.append(domGrid);

              element.append(createSaveInput(element));
              element.append(createAddRow());

            });
        });

        var addRow = function(){
          element.children().first().append(createRow("","","",attrs.cellwidth))
        }

        var createAddRow = function(){
          var input = document.createElement("input");
          input.type="button";
          input.value="Ajouter ligne";
          input.addEventListener("click",addRow);
          return input;
        }

        var createSaveInput = function(element){
          var input = document.createElement("input");
          input.type="button";
          input.value="Sauver";
          if(element.attr("id") != "billsgrid"){
            console.log('pouet',element.attr("id"))
            input.addEventListener("click",scope["onSaveClick"+""+element.attr("id")]);
          }else{
            console.log("pouet2")
            input.addEventListener("click",scope.onSaveClick);
          }

          return input;
        }

        var createTitle = function(title,cellWidth){
          var row = createRow("",title,"€",cellWidth);
          row.className = "billgridTitle";
          return row;
        };

        var createRow = function(idBdd,title,price,cellWidth){
          var id = document.createElement("div");
          id.className = "id cell";
          id.textContent = idBdd;
          id.style.display = "none";

          var text = document.createElement("input");
          text.className = "text cell";
          text.value = title;
          text.style.width = cellWidth+"px";

          var domPrice = document.createElement("input");
          domPrice.className = "price cell";
          domPrice.value = price;
          domPrice.style.width = cellWidth+"px";

          var row = document.createElement("div");
          row.className = "row";
          row.appendChild(text);
          row.appendChild(domPrice);
          row.appendChild(id);

          return row
        };

        var createGrid = function(grid,cellWidth){

          var final = document.createElement("div");
          final.appendChild(createTitle(grid.title,cellWidth));
          for(var i=0; i<grid.length;i++){
            if(grid[i].text){
              final.appendChild(createRow(grid[i].id,grid[i].text,grid[i].price,cellWidth));
            }else{
              final.appendChild(createRow(grid[i].id,grid[i].message,grid[i].price,cellWidth));
            }

          }
          return final;
        };
      }
    };
  });
