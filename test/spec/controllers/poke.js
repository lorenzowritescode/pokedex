'use strict';

describe('Controller: PokectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('firetodoApp'));

  var PokectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PokectrlCtrl = $controller('PokectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
