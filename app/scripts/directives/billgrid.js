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

        scope.$watch(function() {return element.attr('xhr'); }, function(newValue){
          newValue ="http://localhost/"+newValue;
          element[0].innerHTML = "";
          var dataUrl = newValue;
          var cellWidth = attrs.cellwidth;
          $http.get(dataUrl)
            .then(function(data){
              console.log("got response")
              var grid = data.data;
              grid.title=element.attr("title");
              var domGrid = createGrid(grid,cellWidth);
              element.append(domGrid)
            },function(){
              console.error("can't get xhr")
              var grid = [
                {"text":"fruenu freuneu fruenu","price":"10"},
                {"text":"fruenu freuneu fruenu","price":"10"}

              ];
              grid.title=element.attr("title");
              var domGrid = createGrid(grid,cellWidth);
              element.append(domGrid)
            });
        });

        var createTitle = function(title,cellWidth){
          var row = createRow(title,"€",cellWidth);
          row.className = "billgridTitle";
          return row;
        };

        var createRow = function(title,price,cellWidth){
          var text = document.createElement("div");
          text.className = "text cell";
          text.textContent = title;
          //text.style.width = ((cellWidth*2)-50)+"px";

          var domPrice = document.createElement("div");
          domPrice.className = "price cell";
          domPrice.innerHTML = "&nbsp;: "+price+"€";
          //domPrice.style.width = 50+"px";

          var row = document.createElement("div");
          row.className = "row";
          row.appendChild(text);
          row.appendChild(domPrice);

          return row
        };

        var createGrid = function(grid,cellWidth){

          var final = document.createElement("div");
          //final.appendChild(createTitle(grid.title,cellWidth));
          for(var i=0; i<grid.length;i++){
            final.appendChild(createRow(grid[i].text,grid[i].price,cellWidth));
          }
          return final;
        };
      }
    };
  });
