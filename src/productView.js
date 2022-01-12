import "./styles/style.css";
import CartController from "./cartController";
import Storage from "./storage";
import constants from "./constants";
import Cart from "./cart";

function fetchProduct() {
    let urlString = window.location.href;
    let url = new URL(urlString);
    let productId = url.searchParams.get("id");
    let productsArray = Storage.getItem(constants.PRODUCTS_STORAGE_KEY);
    var ourProduct = {};
    let productHtml = ``;

    const productDetails = document.querySelector('.productDetails');

    CartController(productsArray);

    for (let product of productsArray) {
        if (product.id === productId) {
            ourProduct = JSON.parse(JSON.stringify(product));
        }
    }

    productHtml += `
        <br>
        <div class="container-xl">
            <div class="row">
                <div class="col">
                    <img src="../src/img/${ourProduct.image}" class="card-img-top" alt="${ourProduct.image}">
                </div>
                <div class="col mt-5" style="text-align: center" >

                    <br>
                    <br>
                    <h2>${ourProduct.title}</h2>
                    <h4>${ourProduct.description}</h4>
                    <h3>${ourProduct.price}$</h3><span>*includes tax</span>
                    <br>
                    <a href="#" class="btn btn-success mt-5 disabled"> Buy now</a>
                    <a href="#" class="btn btn-warning mt-5 addToCart"> Add to cart</a>

                </div>

        </div>
        `

    productDetails.innerHTML = productHtml;


    const addToCartBtn = document.querySelector('.addToCart');

    addToCartBtn.addEventListener('click', () => {
        let cartItems = Storage.getItem(constants.CART_ITEMS_STORAGE_KEY);

        for (let item of cartItems) {
            if (ourProduct.id === item.id) {
                item.inCart++;
            }
        }

        var found = cartItems.find(function(item, index){
            if (item.id === ourProduct.id) {
                return true
            } else {
                return false
            }
        });

        if (found === undefined){
            ourProduct.inCart = 1;
            cartItems.push(ourProduct);
        }

        const cart = new Cart();

        Storage.setItem(constants.CART_ITEMS_STORAGE_KEY, cartItems);
        cart.load();
        cart.displayCartItems();

    })
}

fetchProduct();