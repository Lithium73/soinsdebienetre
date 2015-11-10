'use strict';

/**
 * @ngdoc directive
 * @name soinsbienetreApp.directive:resize
 * @description
 * # resize
 */
angular.module('soinsbienetreApp')
  .directive('resize', function ($window) {
    var initialHeight = 1080;
    var initialWidth = 1920;

    var marginTop = 5;

    return {
      link: function postLink(scope, element, attrs) {
        angular.element($window).on('resize', function (e) {
          var height = $(window).innerHeight();
          var width = $(window).innerWidth();

          var finalLeftValue = width / initialWidth;
          var percentLeftReduction = -((initialWidth * (1 - finalLeftValue)) / 2);
          $(element).css("left", (percentLeftReduction) + "px");

          // Check if the ratio is the same/bigger or smaller
          // That change scale value and top position
          if (width / height > initialWidth / initialHeight) {

            var finalValue = height / initialHeight;
            $(element).css("transform", "scale(" + finalValue + ")");

            //top calc
            var percentReduction = -((initialHeight * (1 - finalValue)) / 2);
            $(element).css("top", (percentReduction) + "px");
          } else {

            var finalValue = width / initialWidth;
            $(element).css("transform", "scale(" + finalValue + ")");

            //top calc
            var percentReduction = -((initialHeight * (1 - finalValue)) / 2) +
              ((height - ($(element).innerHeight() * finalValue)) / 2);
            $(element).css("top", (percentReduction ) + "px");
          }


        });
      }
    };
  });
