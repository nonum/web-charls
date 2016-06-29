'use strict';

describe('Controller: DevelopmentCtrl', function () {

  // load the controller's module
  beforeEach(module('webAppApp'));

  var DevelopmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevelopmentCtrl = $controller('DevelopmentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DevelopmentCtrl.awesomeThings.length).toBe(3);
  });
});
