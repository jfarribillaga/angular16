function DashboardCtrl(ApiConnect, AppSettings, $scope) {
	'ngInject';

  // ViewModel
  const vm = this;

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
        $scope.buildItems = response.data;
      })
      .catch((response) => { console.error('Ooops, something wen\'t wrong getting Dashboard', response); vm.dashboardError = true});
  }

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
