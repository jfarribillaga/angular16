/* global module */

describe('Unit: BuildBox Directive', function() {

  let element;
  let scope;
  let parent;

  beforeEach(function() {
    angular.mock.module('app');
    
    angular.mock.inject(($compile, $rootScope) => {
      scope = $rootScope;
    
      element = angular.element(
        '<div buildbox-directive name="Build" class="row text-center"></div>'
      );

      $compile(element)(scope);
      scope.$digest();
    });
  });

  it('should bind itself to the element', function() {
    element.triggerHandler('click');
  });
});