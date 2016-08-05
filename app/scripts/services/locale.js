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
            return $http.get(constants.HOST_SERVER_LOCALE + file + '.json');
        }
    };
});
