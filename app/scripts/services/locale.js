'use strict';

/**
 * @ngdoc service
 * @name webAppApp.locale
 * @description
 * # locale
 * Service in the webAppApp.
 */
angular.module('webAppApp')
  .factory('locale',function($http){
    return {
        get: function (file) {
            console.log("inside function");
            return $http.get('http://localhost:9000/locale/' + file + '.json');
        }
    };
});
