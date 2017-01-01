function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, AppSettings) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  
  for (let key in AppSettings.stateRoutes) {
    $stateProvider.state(key, AppSettings.stateRoutes[key]);
  }
  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
