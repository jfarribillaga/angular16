function Storage() {
  'ngInject';

  const service = {};

  const isStorageSupported = () => {
    try {
      localStorage.available = true;
    } catch (e) {
      return false;  // lcoal sotrage not available
    }
      return true;
  };

  const store = (storage, key, value) => {
    if (isStorageSupported()) {
      if (typeof value === 'object') {
        storage.setItem(key, JSON.stringify(value));
      } else {
        storage.setItem(key, value);
      }
    } else {
      //TODO: Add cookies to private browser support. (jQuery plugin)
    }
  };

  const load = (storage, key) => {
    let localValue;
    let parsedValue;

    if (isStorageSupported()) {
        localValue = storage.getItem(key);
    } else {
        //TODO: Add cookies to private browser support.
    }

    if (localValue) {
        try {
            parsedValue = JSON.parse(localValue);
        } catch(e) {
            parsedValue = localValue;
        }
    }
    return parsedValue;
  };

  service.storeLocal = (key, value) => {
    store(localStorage, key, value);
  };

  service.getLocal = (key) => {
    return load(localStorage, key);
  };

  service.storeSession = (key, value) => {
    store(sessionStorage, key, value);
  };

  service.getSession = (key) => {
    return load(sessionStorage, key);
  };

  return service;
}

export default {
  name: 'Storage',
  fn: Storage
};
  