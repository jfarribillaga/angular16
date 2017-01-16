function ArrowsboxDirective(Storage, ngDialog) {
  'ngInject';

  function showDialog(scope) {
    ngDialog.open({
      template: '<p>' + JSON.stringify(scope.specs) + '</p>',
      plain: true
    });
  };

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
      element.bind('click', (event) => {event.stopPropagation(); showDialog(scope)});
    }
  };
}

export default {
  name: 'arrowsboxDirective',
  fn: ArrowsboxDirective
};
