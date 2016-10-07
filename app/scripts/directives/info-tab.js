'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoTab
 * @description
 * # infoTab
 */
 angular.module('webAppApp')
 .directive('infoTab', function () {
 	return {
 		templateUrl: 'views/info-tab.html',
 		restrict: 'E',
 		scope: {
 		},
 		controller : function ($scope,$rootScope,$routeParams,$filter,$timeout) {


      var tabsName = $filter('filter')($rootScope.entities.menu, {id: $routeParams.id})[0].tabs;
      $scope.tabs = [];
      $scope.sections = [];
      angular.forEach(tabsName, function(item){
        var tab = $filter('filter')($rootScope.entities.tab, {id: item})[0];
        $scope.tabs.push(tab);
      });
  
      if($scope.tabs.length !== 0) {
        $scope.activeTab = $filter('filter')($scope.tabs, { id: $rootScope.activeTab})[0];
        $scope.activeTabId = $scope.activeTab.id;
      
      
      angular.forEach($scope.activeTab.sections, function(item){
        var section = $filter('filter')($rootScope.entities.section, {id: item})[0];
        $scope.sections.push(section);
      });
      }
      $scope.clickTab = function(activeTabId) {

        $rootScope.activeTabId = $scope.activeTabId = activeTabId;
        
        $scope.$emit('change-tab', activeTabId);

        $scope.activeTab = $filter('filter')($scope.tabs, { id: $rootScope.activeTabId})[0];
        $scope.sections = [];
        angular.forEach($scope.activeTab.sections, function(item){
          var section = $filter('filter')($rootScope.entities.section, {id: item})[0];
          $scope.sections.push(section);
        });
      };

      $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
      };
    }
  };
});
