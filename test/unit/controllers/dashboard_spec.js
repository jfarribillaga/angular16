describe('Unit: DashboardCtrl', function() {

  let ctrl;
  let localApiConnect;
  let localStorage;
  let localAppSettings;
  let _$scope;

  beforeEach(function() {
    
    angular.mock.module('app');

    angular.mock.inject( ($controller, $httpBackend, ApiConnect, Storage, AppSettings, $rootScope) => {
      localApiConnect = ApiConnect;
      localStorage = Storage;
      localAppSettings = AppSettings;
      _$scope = $rootScope;

      const mockedTypes = [{"id": "1","name": "Firewall"},{"id": "2","name": "Build"}];
      const mockedStates = [{"id":1,"name":"Pending","color":"#CCCCCC"},{"id":2,"name":"Running","color":"#5e9cd3"},{"id":3,"name":"Rejected","color":"#BE0712"},{"id":4,"name":"Complete","color":"#548039"},{"id":5,"name":"Accepted","color":"#548039"}];
      const mockedDashboard = [{"id":1,"name":"Tenrox-R1_1235","type":2,"owner":"","ts":"1483823417477","state":1,"values":{"metrics":{"overall":0,"specs":{"test":100,"maintainability":53,"security":64,"workmanship":30}},"build":0,"unit":{"passed":142,"failed":80,"percent":73,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":2,"name":"432462","type":1,"owner":"jtuck","ts":"1083823928586","state":2,"values":{"metrics":{"overall":33,"specs":{"test":64,"maintainability":53,"security":64,"workmanship":30}},"build":68,"unit":{"passed":142,"failed":10,"percent":73,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":3,"name":"432461","type":1,"owner":"samy","ts":"1483823981920","state":3,"values":{"metrics":{"overall":100,"specs":{"test":64,"maintainability":23,"security":64,"workmanship":0}},"build":100,"unit":{"passed":142,"failed":10,"percent":100,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":4,"name":"Tenrox-R1_1234","type":2,"owner":"","ts":"1443821417477","state":4,"values":{"metrics":{"overall":50,"specs":{"test":64,"maintainability":53,"security":64,"workmanship":0}},"build":30,"unit":{"passed":142,"failed":10,"percent":31,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":5,"name":"43246","type":1,"owner":"samy","ts":"1483823961920","state":3,"values":{"metrics":{"overall":100,"specs":{"test":64,"maintainability":53,"security":64,"workmanship":0}},"build":0,"unit":{"passed":142,"failed":10,"percent":0,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false},{"id":6,"name":"432459","type":1,"owner":"samy","ts":"1483822981920","state":5,"values":{"metrics":{"overall":98,"specs":{"test":64,"maintainability":53,"security":64,"workmanship":0}},"build":100,"unit":{"passed":142,"failed":10,"percent":73,"coverage":76},"functional":{"passed":142,"failed":80,"percent":73,"coverage":76}},"opened":false}];

      // Every time we hit the specified url,
      // respond with mockResponse( in this case an empty array).
      $httpBackend.when('GET', AppSettings.apiUrl + 'types/').respond(mockedTypes);
      $httpBackend.when('GET', AppSettings.apiUrl + 'states/').respond(mockedStates);
      $httpBackend.when('GET', AppSettings.apiUrl + 'dashboard/').respond(mockedDashboard);
      
      spyOn(localStorage, 'storeLocal');
      spyOn(localStorage, 'storeSession');
      spyOn(localStorage, 'getSession');

      ctrl = $controller('DashboardCtrl', {
        ApiConnect: localApiConnect,
        Storage: localStorage,
        AppSettings: localAppSettings,
        $scope: _$scope
      });

      //flous
      $httpBackend.flush();
    });
  });

  // After every spec, do the following:
  afterEach(inject(function ($httpBackend) {
      // Make sure we have flushed all of our requests.
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  }));


  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('title should be set', function() {
    expect(ctrl.title).toEqual("Dashboard");
  });

  it('toogle function is called', inject(function () {
      expect(localStorage.storeLocal).toHaveBeenCalled();
      expect(localStorage.storeSession).toHaveBeenCalled();
  }));
});