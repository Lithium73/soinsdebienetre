'use strict';

/**
 * @ngdoc directive
 * @name soinsbienetreApp.directive:billgrid
 * @description
 * # billgrid
 */
angular.module('soinsbienetreApp')
  .directive('billgrid', function ($http) {
    return {
      template: '<div></div>',
      restrict: 'E',

      link: function postLink(scope, element, attrs) {

        var createTitle = function(title,cellWidth){
          var row = createRow(title,"€",cellWidth);
          row.className = "billgridTitle";
          return row;
        };

        var createRow = function(title,price,cellWidth){
          var text = document.createElement("div");
          text.className = "text cell";
          text.textContent = title;
          text.style.width = cellWidth+"px";

          var domPrice = document.createElement("div");
          domPrice.className = "price cell";
          domPrice.textContent = price;
          domPrice.style.width = cellWidth+"px";

          var row = document.createElement("div");
          row.className = "row";
          row.appendChild(text);
          row.appendChild(domPrice);

          return row
        };

        var createGrid = function(grid,cellWidth){

          var final = document.createElement("div");
          final.appendChild(createTitle(grid.title,cellWidth));
          for(var i=0; i<grid.grid.length;i++){
            final.appendChild(createRow(grid.grid[i].text,grid.grid[i].price,cellWidth));
          }
          return final;
        };

        var dataUrl = attrs.xhr;
        var cellWidth = attrs.cellwidth;
        $http.get(dataUrl)
          .then(function(data){
            var grid = data.data;
            var domGrid = createGrid(grid,cellWidth);
            element.append(domGrid)
          });
      }
    };
  });
