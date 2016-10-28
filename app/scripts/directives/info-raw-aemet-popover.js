'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoRawAemetPopover
 * @description
 * # infoRawAemetPopover
 */
angular.module('webAppApp')
  .directive('infoRawAemetPopover', function () {
    return {
      templateUrl: 'views/info-raw-aemet-popover.html',
      restrict: 'E',
      scope: {
    	entity: '=entity',
    	field: '=field',
      iter: '=iter',
      hour: '=hour'
      },
      controller : function ($scope,$filter) {

        $scope.newEntity = [];
        angular.forEach($scope.field.popover, function(item) {
          var raw = {};
          switch(item.type) {
            case 'iter':
              raw = {
                label: item.label,
                labelText: $scope.entity[item.id][$scope.iter][item.value]
              };
            break;
            case '_periodo':
            var found = false;
            var i = 0;
            while(!found && i < $scope.entity[item.id].length) {
              var periodo = $scope.entity[item.id][i][item.type];
              var init = periodo.substring(0,2);
              var end = periodo.substring(2,4);
              found = init <= $scope.hour && $scope.hour <= end;
              if(found) {
                var translate = { 
                  prob: $scope.entity[item.id][i][item.value], 
                  init: init,
                  end: end
                };                    
                raw = {
                  label: item.label,
                  labelText: $filter('translate')(item.labelText,translate)
                };
              }
              i++;

            }
            break;
          } 
          $scope.newEntity.push(raw);
        });
      }
    };
  });
