import Cart from "./cart";
import Product from "./product";

function CartController(products) {
    const addCart = document.querySelectorAll('.add-cart');
    const cartBtn = document.querySelector('.cart');
    const clearBtn = document.querySelector('.clear-cart');


    let cart = new Cart();

    
    
    /* addCart.forEach((item, i) => {
         item.addEventListener('click',() => {
             cart.addProduct(products[i]);
             cart.save;
         })
     });*/
    for (let i = 0; i < addCart.length; i++) {
        addCart[i].addEventListener('click', () => {
            cart.increaseOrAdd(products[i]);
            cart.displayCartItems();
        })
    }
    cartBtn.addEventListener('click', cart.displayCartItems());

    clearBtn.addEventListener('click', () => {
        cart.clearCart();
        //cart.load();
        cart.displayCartItems();
    });

}

export default CartController