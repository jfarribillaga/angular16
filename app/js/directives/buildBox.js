function BuildboxDirective() {

  return {
    restrict: 'A',
    templateUrl: 'directives/buildBox.html',
    scope: {
      name: '@'
    },
    link: (scope, element) => {
      element.bind('click', (event) => {event.stopPropagation(); console.log('Show Modal !');});
    }
  };
}

export default {
  name: 'buildboxDirective',
  fn: BuildboxDirective
};
