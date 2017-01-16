describe('Unit: StorageService', function() {

  let service;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject((Storage) => {
      service = Storage;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  it('local storage test', function() {
    service.storeLocal('test', {key: 'objectTest'});
    expect(service.getLocal('test').key).toEqual('objectTest');

    service.storeLocal('test', "stringTest");
    expect(service.getLocal('test')).toEqual('stringTest');
  });

  it('session storage test', function() {
    service.storeSession('test', {key: "objectTest"});
    expect(service.getSession('test').key).toEqual('objectTest');

    service.storeSession('test', "stringTest");
    expect(service.getSession('test')).toEqual('stringTest');    
  });
});