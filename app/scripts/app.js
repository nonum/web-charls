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
    'angular.filter',
    'youtube-embed',
    'cb.x2js',
    'mgcrea.ngStrap.helpers.dimensions'
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
      .when('/entity/:id', {
        templateUrl: 'views/info-entity.html',
        controller: 'InfoEntityCtrl',
        controllerAs: ':id',
        resolve: {
          entity: function ($route,$routeParams) { 
            $route.current.params.entity = $routeParams.entity; 
          }
        }
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

      

  }])
  .run(['$rootScope', 'locale', function($rootScope, locale) {


      locale.get('newEntities').then(function (msg) {
        $rootScope.entities = msg.data;
      });
      var tag = document.createElement('script');
      tag.src = "http://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }]);
