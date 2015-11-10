'use strict';

/**
 * @ngdoc overview
 * @name soinsbienetreApp
 * @description
 * # soinsbienetreApp
 *
 * Main module of the application.
 */
angular
  .module('soinsbienetreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/me', {
        templateUrl: 'views/me.html',
        controller: 'MeCtrl'
      })
      .when('/math', {
        templateUrl: 'views/math.html',
        controller: 'MathCtrl'
      })
      .when('/se', {
        templateUrl: 'views/se.html',
        controller: 'SeCtrl'
      })
      .when('/photo', {
        templateUrl: 'views/photo.html',
        controller: 'PhotoCtrl'
      })
      .when('/header', {
        templateUrl: 'views/header.html',
        controller: 'HeaderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope){
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      $(document.body).trigger("resize");
      $rootScope.seDisplay=false;
    });
  });


