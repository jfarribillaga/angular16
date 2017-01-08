function BuilditemDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/builditem.html',
    scope: {
      name: '@',
      owner: '@',
      timestamp: '@',
      state: '@',
      type: '@',
      metrics: '@',
      build: '@',
      unit: '@',
      functional: '@'
    }
  };
}

export default {
  name: 'builditemDirective',
  fn: BuilditemDirective
};
