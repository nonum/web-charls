'use strict';

/**
 * @ngdoc overview
 * @name webAppApp
 * @description
 * # webAppApp
 *
 * Main module of the application.
 */
angular
  .module('webAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'pascalprecht.translate',
    'angular.filter'
  ])
  .config(['$routeProvider','$translateProvider', function ($routeProvider,$translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/curriculum', {
        templateUrl: 'views/curriculum.html',
        controller: 'CurriculumCtrl',
        controllerAs: 'curriculum'
      })
      .when('/development', {
        templateUrl: 'views/development.html',
        controller: 'DevelopmentCtrl',
        controllerAs: 'development'
      })
      .when('/surf', {
        templateUrl: 'views/surf.html',
        controller: 'SurfCtrl',
        controllerAs: 'surf'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });

      $translateProvider.useStaticFilesLoader({
        prefix: constants.HOST_SERVER_LOCALE + '/messages_',                //local
        // prefix: '/sigma-ihm-0.0.10/locale/messages_',                    //serve
        suffix: '.json'
      });

      // Setting up french as default
      $translateProvider.preferredLanguage('es');
  }]);
