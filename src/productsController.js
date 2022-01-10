import Storage from "./storage";
import constants from "./constants";
import ProductsView from "./productsView";

function ProductsController(products){

    const deleteBtn = document.querySelectorAll('.btn-danger');

    for (let i = 0; i < deleteBtn.length; i++) {

        deleteBtn[i].addEventListener('click', () => {
            products.splice(i, 1);
            Storage.setItem(constants.PRODUCTS_STORAGE_KEY, products);
            const productsView = new ProductsView();
            productsView.displayProducts(products);

        })
    }
}

export default ProductsController