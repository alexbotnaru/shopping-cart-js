import "./styles/style.css";
import constants from "./constants";
import Product from "./product";
import Cart from "./cart";
import CartView from "./cartView";
import Storage from "./storage";
import Utils from "./utils";
import ProductsView from "./productsView";
import CartController from "./cartController";
import MyCartView from "./myCartView";



let products = Storage.getItem(constants.PRODUCTS_STORAGE_KEY) ?? [];
const productsView = new ProductsView();


productsView.displayProducts(products);



// const deleteBtn = document.querySelector('.btn-danger');
// deleteBtn.addEventListener('click', {
//
// })

/*
const addCart = document.querySelectorAll('.add-cart');
const cartBtn = document.querySelector('.cart');

let cart = new Cart();

for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', () => {
        
        cart.increaseOrAdd(products[i]);
        cart.displayCartItems();

    })
}   

cartBtn.addEventListener('click', cart.displayCartItems());
*/
CartController(products);





