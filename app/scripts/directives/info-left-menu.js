'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoLeftMenu
 * @description
 * # infoLeftMenu
 */
 angular.module('webAppApp')
 .directive('infoLeftMenu', function () {
  return {
    templateUrl: 'views/info-left-menu.html',
    restrict: 'E',
    scope: {
    },
    controller : function ($scope, $filter, $rootScope, $location,$anchorScroll,$timeout,anchorSmoothScroll) {

      $scope.checked = true;
      
      $scope.sections = [];
      if(!!$rootScope.activeTabId) {
        var sectionsName = $filter('filter')($rootScope.entities.tab, {id: $rootScope.activeTabId})[0].sections;
        angular.forEach(sectionsName, function(item){
          var section = $filter('filter')($rootScope.entities.section, {id: item})[0];
          $scope.sections.push(section);
        });
      } else {
        $scope.checked = false;
      }
      $scope.$on('change-menu', function (event, data) {
        $scope.activeTabId = data;
        $scope.checked = false;

        $timeout(function() {
          $scope.checked = true;
        }, 500);

        var sectionsName = $filter('filter')($rootScope.entities.tab, {id: $rootScope.activeTabId})[0].sections;
        $scope.sections = [];
        angular.forEach(sectionsName, function(item){
          var section = $filter('filter')($rootScope.entities.section, {id: item})[0];
          $scope.sections.push(section);
        });
      });

      
      $scope.gotoAnchor = function(x) {

        var lastAnchor = (!!$scope.lastAnchor) ? $scope.lastAnchor : $scope.sections[0].id;
        var newHash = 'anchor' + x;
        $anchorScroll.yOffset = 70;
        if(!!lastAnchor) {
          $location.hash('anchor' + lastAnchor);
          $scope.lastAnchor = x;
          anchorSmoothScroll.scrollTo('anchor' + x);
        } else {
          if ($location.hash() !== newHash) {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash('anchor' + x);
        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          anchorSmoothScroll.scrollTo('anchor' + x);  
        }
      }
    };

  }
};
});
