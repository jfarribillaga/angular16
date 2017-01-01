const stateRoutes = {
		Home: {
			url: '/',
			controller: 'ExampleCtrl as home',
			templateUrl: 'home.html',
			title: 'Home'
		}, 
		About: {
			url: '/about',
			controller: 'AboutCtrl as about',
			templateUrl: 'about.html',
			title: 'About'
		}, 
		Contact: {
			url: '/contact',
			controller: 'ContactCtrl as contact',
			templateUrl: 'contact.html',
			title: 'Contact Us'
		}
};

const AppSettings = {
  appTitle: 'Example Application',
  apiUrl: '/api/v1',
  stateRoutes
};

export default AppSettings;
