function DashboardCtrl(ApiConnect, AppSettings, $scope) {
	'ngInject';

  // ViewModel
  const vm = this;
  let buildItems = [];
  let previousItemSelected = null;

  function getTypes() {
    ApiConnect.getRequest(AppSettings.apiUrl + 'types/')
      .then((response) => {
        vm.types = response.data;
      })
      .catch((response) => { console.error('Ooops, something wen\'t wrong getting types', response) });
  };

  function getStates() {
    ApiConnect.getRequest(AppSettings.apiUrl + 'states/')
      .then((response) => {
        vm.states = response.data;
      })
      .catch((response) => { console.error('Ooops, something wen\'t wrong getting States', response) });
  }

  $scope.getDashboardInfo = () => {
    ApiConnect.getRequest(AppSettings.apiUrl + 'dashboard/')
      .then((response) => {
        $scope.buildItems = buildItems = response.data;
      })
      .catch((response) => { console.error('Ooops, something wen\'t wrong getting Dashboard', response); vm.dashboardError = true});
  }

  $scope.$on('calling', (event, data) => {
    $scope.$broadcast('callothers', data);
  });

  $scope.$on('toogle', (event, data) => {
      let i = 0;
      let size = buildItems.length;
      const selectedItem = parseInt(data.itemid, 10);

      console.log(data);
      console.log($scope.buildItems);

      //Previous item set to false.
      if (previousItemSelected !== null) {
        //previous item was selected and variable set.
        for (i; i < size; ++i) {
          if ($scope.buildItems[i].id === previousItemSelected) {
            $scope.buildItems[i].opened = false;
          }
          break;
        }  
      }

      for (i = 0; i < size; ++i) {
        if ($scope.buildItems[i].id === selectedItem) {
          $scope.buildItems[i].opened = true;
          previousItemSelected = selectedItem;
          break;
        }
      }

      // $scope.buildItems = buildItems;
      $scope.$apply();
  });

  vm.title = 'Dashboard';
  vm.dashboardError = false;
  getTypes();
  getStates();
  $scope.getDashboardInfo();

  
}

export default {
  name: 'DashboardCtrl',
  fn: DashboardCtrl
};
