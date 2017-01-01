function ApiConnect($http) {
  'ngInject';

  const service = {};

  /**
   * Simple service method for http requests (promises).
   * @param {String} url
   * @returns {Promise}
   */

  service.getRequest = (url, type = 'GET', data = '') => {
    return $http({
        method: type,
        url: url,
        data: data,
        cache: false
    });
  };

  return service;
}

export default {
  name: 'ApiConnect',
  fn: ApiConnect
};
