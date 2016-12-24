function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('About', {
    url: '/about',
    controller: 'AboutCtrl as about',
    templateUrl: 'about.html',
    title: 'About'
  })
  .state('Contact', {
    url: '/contact',
    controller: 'ContactCtrl as contact',
    templateUrl: 'contact.html',
    title: 'Contact Us'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
