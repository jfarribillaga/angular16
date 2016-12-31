function AboutCtrl(ApiConnect) {
	'ngInject';

  // ViewModel
  const vm = this;

  vm.getCollaborators = () => {
  	let userData = {};
  	
  	ApiConnect.getRequest('https://api.github.com/repos/octokit/octokit.rb')
  		.then((response) => { userData = response.data;})
  		.catch((response) => { console.error('Ooops, something wen\'t wrong getting User Data', response) });

  	ApiConnect.getRequest(userData.collaborators_url)
  		.then((response) => {console.log(response.data)})
  		.catch((response) => { console.error('Ooops, something wen\'t wrong getting', response) });
  };



  vm.title = 'About US page ...';
  vm.description = 'Some text here ...';

  
}

export default {
  name: 'AboutCtrl',
  fn: AboutCtrl
};
