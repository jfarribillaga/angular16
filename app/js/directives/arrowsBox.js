function ArrowsboxDirective(Storage, ngDialog) {
  'ngInject';

  function showDialog(scope) {
    ngDialog.open({
      template: scope.template,
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
      scope.template = '<div><br/><br/>' +
        '<div>METRICS</div>' +
        '<label>Test</label>' +
        '<div class="progress">' +
            '<div class="progress-bar progress-bar-striped"  ng-class="{\'progress-bar-danger\' :' + scope.specs.test + '<50, \'progress-bar-warning]\':' + scope.specs.test + '<100, \'progress-bar-success\':' + scope.specs.test + '==100}"' +
            'role="progressbar"  style="width: ' + scope.specs.test + '%;" aria-valuenow="' + scope.specs.test + '" aria-valuemin="0" aria-valuemax="100">' + scope.specs.test + '%</div>' +
        '</div>' + 
    
        '<label>Maintanability</label>' +
        '<div class="progress">' +
            '<div class="progress-bar progress-bar-striped"  ng-class="{\'progress-bar-danger\':' + scope.specs.maintainability + '<50, \'progress-bar-warning]\':' + scope.specs.maintainability + '<100, \'progress-bar-success\':' + scope.specs.test + '==100}"' +
            'role="progressbar"  style="width: ' + scope.specs.maintainability + '%;" aria-valuenow="' + scope.specs.maintainability + '" aria-valuemin="0" aria-valuemax="100">' + scope.specs.maintainability + '%</div>' +
        '</div>' + 
        '<label>Security</label>' +
        '<div class="progress">' +
            '<div class="progress-bar progress-bar-striped"  ng-class="{\'progress-bar-danger\':' + scope.specs.security + '<50, \'progress-bar-warning]\':' + scope.specs.security + '<100, \'progress-bar-success\':' + scope.specs.test + '==100}"' +
            'role="progressbar"  style="width: ' + scope.specs.security + '%;" aria-valuenow="' + scope.specs.security + '" aria-valuemin="0" aria-valuemax="100">' + scope.specs.security + '%</div>' +
        '</div>' + 
        '<label>Workmanship</label>' +
        '<div class="progress">' +
            '<div class="progress-bar progress-bar-striped"  ng-class="{\'progress-bar-danger\':' + scope.specs.workmanship + '<50, \'progress-bar-warning]\':' + scope.specs.workmanship + '<100, \'progress-bar-success\':' + scope.specs.test + '==100}"' +
            'role="progressbar"  style="width: ' + scope.specs.workmanship + '%;" aria-valuenow="' + scope.specs.workmanship + '" aria-valuemin="0" aria-valuemax="100">' + scope.specs.workmanship + '%</div>' +
        '</div>' + 
    '</div>';

      element.bind('click', (event) => {event.stopPropagation(); showDialog(scope)});
    }
  };
}

export default {
  name: 'arrowsboxDirective',
  fn: ArrowsboxDirective
};


    
