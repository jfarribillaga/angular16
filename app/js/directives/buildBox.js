function BuildboxDirective(ngDialog) {
  'ngInject';

  function showDialog(scope) {
    ngDialog.open({
      template: scope.template,
      plain: true
    });
  };

  return {
    restrict: 'A',
    templateUrl: 'directives/buildBox.html',
    scope: {
      name: '@'
    },
    link: (scope, element) => {
      element.bind('click', (event) => {event.stopPropagation(); showDialog(scope)});
      scope.template = '<div><br/><br/>' +
      '<div>BUILD</div>' +
      '<div class="buttons-wrapper row">' +
      '<div class="col-md-6 item text-center">' +
      '<img src="images/computer.png"/>' +
      '<span>Debug</span>' +
      '</div>' +
      '<div class="col-md-6 item text-center">' +
      '<img src="images/computer.png"/>' +
      '<span>Release</span>' +
      '</div>' +
      '<div class="date row text-center">10:46am - 4/17/2014</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    }
  };
}

export default {
  name: 'buildboxDirective',
  fn: BuildboxDirective
};
