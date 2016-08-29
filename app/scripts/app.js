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
        templateUrl: 'views/info-entity.html',
        controller: 'InfoEntityCtrl',
        controllerAs: 'curriculum',
        resolve: {
          entity: function ($route) { $route.current.params.entity = constants.ENTITY_CURRICULUM; }
        }
      })
      .when('/development', {
        templateUrl: 'views/info-entity.html',
        controller: 'InfoEntityCtrl',
        controllerAs: 'development',
        resolve: {
          entity: function ($route) { $route.current.params.entity = constants.ENTITY_DEVELOPMENT; }
        }
      })
      .when('/surf', {
        templateUrl: 'views/info-entity.html',
        controller: 'InfoEntityCtrl',
        controllerAs: 'surf',
        resolve: {
          entity: function ($route) { $route.current.params.entity = constants.ENTITY_SURF; }
        }
      })
      .when('/contact', {
        templateUrl: 'views/info-entity.html',
        controller: 'InfoEntityCtrl',
        controllerAs: 'contact',
        resolve: {
          entity: function ($route) { $route.current.params.entity = constants.ENTITY_CONTACT; }
        }
      })
      .when('/info-entity', {
        templateUrl: 'views/info-entity.html',
        controller: 'InfoEntityCtrl',
        controllerAs: 'infoEntity'
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
