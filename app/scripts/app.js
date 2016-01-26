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
    'ngTouch',
    'angular-carousel'
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
      .when('/bmp', {
        templateUrl: 'views/bmp.html'
      })
      .when('/maquillage', {
        templateUrl: 'views/maquillage.html'
      })
      .when('/epilations', {
        templateUrl: 'views/epilations.html'
      })
      .when('/soinscomp', {
        templateUrl: 'views/soinscomp.html'
      })
      .when('/me', {
        templateUrl: 'views/me.html',
        controller: 'MeCtrl'
      })
      .when('/math', {
        templateUrl: 'views/math.html',
        controller: 'MathCtrl'
      })
      .when('/forfait', {
        templateUrl: 'views/forfait.html',
        controller: 'ForfaitCtrl'
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
      .when('/adminLolotte2190', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope){
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      $rootScope.currentPage = "";
      $(document.body).trigger("resize");
      $rootScope.seDisplay=false;
    });
  });


