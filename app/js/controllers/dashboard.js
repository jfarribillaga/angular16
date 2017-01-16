function DashboardCtrl(ApiConnect, Storage, AppSettings, $scope) {
	'ngInject';

  // ViewModel
  const vm = this;

  function getTypes() {
    ApiConnect.getRequest(AppSettings.apiUrl + 'types/')
      .then((response) => {
        vm.types = response.data;
        Storage.storeLocal('types', response.data);

      })
      .catch((response) => { console.error('Ooops, something wen\'t wrong getting types', response) });
  };

  function getStates() {
    ApiConnect.getRequest(AppSettings.apiUrl + 'states/')
      .then((response) => {
        vm.states = response.data;
        Storage.storeLocal('states', response.data);
      })
      .catch((response) => { console.error('Ooops, something wen\'t wrong getting States', response) });
  }

  function onToogle(event, actualIndex) {
      let previouslySelectedItem = Storage.getSession('previousItem');
      if (typeof previouslySelectedItem !== 'undefined') {
        $scope.buildItems[previouslySelectedItem].opened = false;
      }
      Storage.storeSession('previousItem', actualIndex);
      $scope.buildItems[actualIndex].opened = true;
      $scope.$apply();
  }

  $scope.getDashboardInfo = () => {
    ApiConnect.getRequest(AppSettings.apiUrl + 'dashboard/')
      .then((response) => {
        $scope.buildItems = response.data;
        Storage.storeSession('buildItems', response.data);
      })
      .catch((response) => { console.error('Ooops, something wen\'t wrong getting Dashboard', response); vm.dashboardError = true});
  }

  $scope.$on('toogle', onToogle);

  vm.title = 'Dashboard';
  getTypes();
  getStates();
  $scope.getDashboardInfo();

  
}

export default {
  name: 'DashboardCtrl',
  fn: DashboardCtrl
};
