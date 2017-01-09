function ArrowsboxDirective() {

  return {
    restrict: 'E',
    templateUrl: 'directives/arrowsBox.html',
    scope: {
      specs: '='
    },
    link: (scope, element) => {
      console.log(scope.specs)
      element.bind('click', () => { alert('clicked')});
    }
  };
}

export default {
  name: 'arrowsboxDirective',
  fn: ArrowsboxDirective
};
