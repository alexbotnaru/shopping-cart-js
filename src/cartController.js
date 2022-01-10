import Cart from "./cart";

function CartController(products) {
    const addCart = document.querySelectorAll('.add-cart');
    const cartBtn = document.querySelector('.cart');
    const clearBtn = document.querySelector('.clear-cart');
    const cartTotal = document.querySelector('.cart-total');

    let cart = new Cart();

    for (let i = 0; i < addCart.length; i++) {
        addCart[i].addEventListener('click', () => {
            cart.increaseOrAdd(products[i]);
            cart.displayCartItems();
        })
    }
    cartBtn.addEventListener('click', cart.displayCartItems());

    clearBtn.addEventListener('click', () => {
        cart.clearCart();
        cart.load();
        cartTotal.classList.add('hidden');
        cart.displayCartItems();
    });

}

export default CartController