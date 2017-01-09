function BuildboxDirective() {

  return {
    restrict: 'A',
    templateUrl: 'directives/buildBox.html',
    scope: {
      name: '@'
    },
    link: (scope, element) => {
      element.bind('click', () => { alert('clicked')});
    }
  };
}

export default {
  name: 'buildboxDirective',
  fn: BuildboxDirective
};
