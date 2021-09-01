import { v4 as uuid } from 'uuid';

const Utils = {
    formatPrice(price) {
      return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    },
    generateId(prefix) {
      return prefix + "-" + uuid();
    }
  }

  export default Utils