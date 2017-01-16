function BuilditemDirective(Storage) {
  'ngInject';

  const toogle = (scope, element, selectedItem) => {
    scope.opened = !scope.opened;
    scope.$parent.$emit('toogle', selectedItem);
  };

  return {
    restrict: 'A',
    templateUrl: 'directives/builditem.html',
    scope: {
      index: '@',
      type: '@'
    },
    link: (scope, element) => {
      const buildItems = Storage.getSession('buildItems');
      const types = Storage.getLocal('types');
      const states = Storage.getLocal('states');
      const selectedItem = buildItems[scope.index];

      console.log(buildItems);

      scope.name = selectedItem.name;
      scope.owner = selectedItem.owner;
      scope.timestamp = selectedItem.ts;
      scope.state = states[selectedItem.state - 1].name;
      scope.type = types[selectedItem.type - 1].name;
      scope.metrics = selectedItem.values.metrics;
      scope.build = selectedItem.values.build;
      scope.unit = selectedItem.values.unit;
      scope.functional = selectedItem.values.functional;
      scope.opened = selectedItem.opened;

      element.bind('click', () => {toogle(scope, element, scope.index)});
    }
  };
}

export default {
  name: 'builditemDirective',
  fn: BuilditemDirective
};
