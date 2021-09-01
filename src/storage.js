const Storage = {
    getItem(key) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch (e) {
        return null;
      }
    },
    setItem(key, value) {
      const strValue = JSON.stringify(value);
      window.localStorage.setItem(key, strValue);
    },
    removeItem(key) {
      window.localStorage.removeItem(key);
    },
  }
  
  export default Storage