function AboutCtrl(ApiConnect, $scope) {
	'ngInject';

  // ViewModel
  const vm = this;

  $scope.getCollaborators = () => {
    let userData = {};
  	
  	ApiConnect.getRequest('https://api.github.com/repos/octokit/octokit.rb')
  		.then((response) => { 
        userData = response.data;
        ApiConnect.getRequest(userData.contributors_url)
          .then((response) => {
            $scope.contributors = response.data;
          })
          .catch((response) => { console.error('Ooops, something wen\'t wrong getting', response) });
      })
  		.catch((response) => { console.error('Ooops, something wen\'t wrong getting User Data', response) });
  };

  vm.title = 'About US page ...';
  vm.description = 'Some text here ...';

  
}

export default {
  name: 'AboutCtrl',
  fn: AboutCtrl
};
