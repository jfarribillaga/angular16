function ChartboxDirective(Storage) {
  'ngInject';

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
      element.bind('click', (event) => {event.stopPropagation(); console.log('Show Modal !');});

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

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
