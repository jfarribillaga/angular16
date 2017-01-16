function ArrowsboxDirective(Storage) {
  'ngInject';

  return {
    restrict: 'A',
    templateUrl: 'directives/arrowsBox.html',
    transclude: true,
    scope: {
      index: '@',
      name: '@'
    },
    link: (scope, element) => {
      const buildItems = Storage.getSession('buildItems');
      const selectedItem = buildItems[scope.index];
      scope.specs = selectedItem.values.metrics.specs;
      element.bind('click', (event) => {event.stopPropagation(); console.log('Show Modal !');});
    }
  };
}

export default {
  name: 'arrowsboxDirective',
  fn: ArrowsboxDirective
};
