function ChartboxDirective(Storage, ngDialog) {
  'ngInject';

  function showDialog(scope) {
    ngDialog.open({
      template: scope.template,
      plain: true
    });
  };

  return {
    restrict: 'A',
    templateUrl: 'directives/chartBox.html',
    scope: {
      index: '@',
      selector: '@',
      name: '@'
    },

    link: (scope, element) => {
      const buildItems = Storage.getSession('buildItems');
      const selectedItem = buildItems[scope.index];
      scope.specs = selectedItem.values[scope.selector];
      element.bind('click', (event) => {event.stopPropagation(); showDialog(scope)});

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

       scope.template = '<div><br/><br/>' +
        '<div>' + scope.name + '</div>' +
        '<ul>' +
        '<li>Tests passed: 142</li>' +
        '<li>Tests failed: 20</li>' +
        '<li>Tests failed: 20</li>' +
        '</ul>' +
        '<label>Code Covered</label>' +
        '<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:' + scope.specs.coverage + '%;" aria-valuenow="' + scope.specs.coverage + ' " aria-valuemin="0" aria-valuemax="100">' + scope.specs.coverage +' %</div></div>' +
        '</div>' + 
        '<div>';

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Runner'],
          ['Passed', 142],
          ['Failed', 20]
        ]);

        var options = {
          pieHole: 0.4,
          sliceVisibilityThreshold: .1
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart-'+scope.name+'-'+scope.index));

        chart.draw(data, options);
      }
    }
  };
}

export default {
  name: 'chartboxDirective',
  fn: ChartboxDirective
};
