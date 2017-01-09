function BuilditemDirective() {

  const toogle = (scope, element, attrs) => {
    // console.log(scope);
    // console.log(element);
    // console.log(attrs);

    scope.$on('callothers', (event, data) => {
      console.log(event, data);
    });
    // scope.$broadcast('callothers', attrs);

    scope.$parent.$emit('calling', attrs);
  };

  return {
    restrict: 'A',
    templateUrl: 'directives/builditem.html',
    scope: {
      itemid: '@',
      name: '@',
      owner: '@',
      timestamp: '@',
      state: '@',
      type: '@',
      metrics: '@',
      build: '@',
      unit: '@',
      functional: '@',
      opened: '@'
    },
    link: (scope, element, attrs) => {
      element.bind('click', () => {toogle(scope, element, attrs)});
    }
  };
}

export default {
  name: 'builditemDirective',
  fn: BuilditemDirective
};
