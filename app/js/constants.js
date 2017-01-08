const stateRoutes = {
	Dashboard: {
		url: '/',
		controller: 'DashboardCtrl as dashboard',
		templateUrl: 'dashboard.html',
		title: 'Application Dashboard'
	}
};

const AppSettings = {
  appTitle: 'CO Test',
  // apiUrl: 'https://buildservices.herokuapp.com/',
  apiUrl: 'http://localhost:1338/',
  stateRoutes
};

export default AppSettings;
