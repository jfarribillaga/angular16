/* global module */

describe('Unit: ChartBox Directive', function() {

  let element;
  let scope;
  let parent;

  const mockedDashboard = [{"id":1,"name":"Tenrox-R1_1235","type":2,"owner":"","ts":"1483823417477","state":1,"values":{"metrics":{"overall":0,"specs":{"test":100,"maintainability":53,"security":64,"workmanship":30}},"build":0,"unit":{"passed":142,"failed":80,"percent":73,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":2,"name":"432462","type":1,"owner":"jtuck","ts":"1083823928586","state":2,"values":{"metrics":{"overall":33,"specs":{"test":64,"maintainability":53,"security":64,"workmanship":30}},"build":68,"unit":{"passed":142,"failed":10,"percent":73,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":3,"name":"432461","type":1,"owner":"samy","ts":"1483823981920","state":3,"values":{"metrics":{"overall":100,"specs":{"test":64,"maintainability":23,"security":64,"workmanship":0}},"build":100,"unit":{"passed":142,"failed":10,"percent":100,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":4,"name":"Tenrox-R1_1234","type":2,"owner":"","ts":"1443821417477","state":4,"values":{"metrics":{"overall":50,"specs":{"test":64,"maintainability":53,"security":64,"workmanship":0}},"build":30,"unit":{"passed":142,"failed":10,"percent":31,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":5,"name":"43246","type":1,"owner":"samy","ts":"1483823961920","state":3,"values":{"metrics":{"overall":100,"specs":{"test":64,"maintainability":53,"security":64,"workmanship":0}},"build":0,"unit":{"passed":142,"failed":10,"percent":0,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":6,"name":"432459","type":1,"owner":"samy","ts":"1483822981920","state":5,"values":{"metrics":{"overall":98,"specs":{"test":64,"maintainability":53,"security":64,"workmanship":0}},"build":100,"unit":{"passed":142,"failed":10,"percent":73,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false}];

  beforeEach(function() {
    angular.mock.module('app', function($provide) {
      $provide.value('Storage', {
        getSession: (value) => {
          if (value === 'buildItems') {
            return mockedDashboard;
          }
        },

        getLocal: (value) => {
          if (value === 'types') {
            return mockedTypes;
          } else {
            return mockedStates;
          }
        }
      });
    });
    angular.mock.inject(($compile, $rootScope) => {
      scope = $rootScope;
      scope.index = 0;
      element = angular.element(
        '<div chartbox-directive name="Unit Test" index="{{index}}" selector="unit" class="col-md-6"></div>'
      );

      $compile(element)(scope);
      scope.$digest();
    });
  });

  it('should bind itself to the element', function() {
    element.triggerHandler('click');
  });
});