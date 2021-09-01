import Utils from "./utils";

class Product {
    constructor(data = {}) {
      this.id = data.id ?? Utils.generateId("product");
      this.title = data.title;
      this.description = data.description;
      this.price = data.price;
      this.image = data.image || 'no-image.jpg';
      this.inCart = data.inCart ?? 0;
    }
  
    increaseQuantity() {
      this.inCart += 1;
    }
  
    decreaseQuantity() {
      this.inCart = Math.max(0, this.inCart - 1);
    }
  
    getFormattedPrice() {
      return Utils.formatPrice(this.price);
    }
  }
  export default Product