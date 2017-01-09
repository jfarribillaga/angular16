function ChartboxDirective() {

  return {
    restrict: 'A',
    templateUrl: 'directives/chartBox.html',
    scope: {
      name: '@'
    },
    link: (scope, element) => {
      element.bind('click', () => { alert('clicked')});
    }
  };
}

export default {
  name: 'chartboxDirective',
  fn: ChartboxDirective
};
