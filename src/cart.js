import constants from "./constants";
import Storage from "./storage";
import Product from "./product";
import MyCartView from "./myCartView";

class Cart {
  constructor() {
    this.load();
  }

  load() {
    this.products = (Storage.getItem(constants.CART_ITEMS_STORAGE_KEY) ?? []).map(
      (productData) => new Product(productData)
    );
  }

  save() {
    Storage.setItem(constants.CART_ITEMS_STORAGE_KEY, this.products);
  }

  getProductsCount() {
    return this.products.length;
  }

  increaseQuantity(product) {
    product.inCart += 1;
    //product.increaseQuantity();
    this.save();
  }

  decreaseQuantity(product) {
    if (product.quantity === 1) {
      this.removeProduct();
    } else {
      product.decreaseQuantity();
      this.save();
    }
  }


  addProduct(product) {
    product.inCart = 1;
    this.products = [...this.products, product];
    this.save();
  }

  increaseOrAdd(product) {
    this.load();

    if (this.products.length === 0) {
      console.log('empty', product)
      this.addProduct(product);
    } else if (!(this.products.some(elem => elem.id === product.id))) {
      console.log('not in array', product);
      this.addProduct(product);

    } else {
      this.products.forEach(item => {
        if (item.id == product.id) {
          console.log('in array', product);
          this.increaseQuantity(item)
        }
      });
    }
  }

  removeProduct(product) {
    this.products = this.products.filter((p) => p.id !== product.id);
    this.save();
  }

  displayCartItems() {
    
    const myCartView = new MyCartView();
    myCartView.displayCart(this.products);
  }

  clearCart(){
    localStorage.removeItem(constants.CART_ITEMS_STORAGE_KEY);
    this.displayCartItems();
  }
}

export default Cart