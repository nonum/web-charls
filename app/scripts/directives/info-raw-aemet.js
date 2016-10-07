'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoRawAemet
 * @description
 * # infoRawAemet
 */
 angular.module('webAppApp')
 .directive('infoRawAemet', function ($filter,$compile,$http, x2js) {
 	return {
    link: function(scope, element, attrs){

     scope.getContentUrl = function() {
       return 'views/info-raw-' + (scope.type !== undefined ? scope.type : 'simple-field') + '.html';
     }

     var template = '<div ng-include="getContentUrl()"></div>';

     var linkFn = $compile(template);
     var content = linkFn(scope);
     element.append(content);
   },
   restrict: 'E',
   scope: {
    entity: '=entity',
    field: '=field',
    type: '=type',
    iter: '=iter',
    infoEntity: '=infoEntity'
  },
  controller : function ($scope) {
    var getValueImage = function() {
      if($scope.field.img == '_periodo') {
        return   $scope.entity[$scope.iter][$scope.field.img].contains('n') ? 'night' : 'day';
      } else {
       return   $scope.entity[$scope.iter][$scope.field.img];
     }
   };
   var getValueValue = function() {
    return $scope.field.value != undefined ?   $scope.entity[$scope.iter][$scope.field.value] : '';
  };
  switch($scope.type) {
    case 'aemet-image':
    $scope.raw = {
      value: getValueValue(),
      img: getValueImage()
    };
    break;
    case 'table-graphic':
    
      $scope.items = $scope.infoEntity;
      $scope.raw = {
        value :   $scope.entity[$scope.iter][$scope.field.value]
      };
    break;
    default:  
    $scope.raw = {
     type: 'string',
     value :   $scope.entity[$scope.iter][$scope.field.value]
   };
   break;
 }
}
};
});