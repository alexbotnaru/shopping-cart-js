import "./styles/style.css";
import constants from "./constants";
import Storage from "./storage";
import Product from "./product";

let products = Storage.getItem(constants.PRODUCTS_STORAGE_KEY) ?? [];

const form = document.querySelector('.add-product-form');

const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const product = new Product({
        title: formData.get('title'),
        description: formData.get('description'),
        price: formData.get('price'),
        image: formData.get('image')
    });

    
    products.push(product);
    Storage.setItem(constants.PRODUCTS_STORAGE_KEY, products);

    title.value = '';
    description.value = '';
    price.value = '';
    image.value = '';

    alert('Product created!');
}

form.addEventListener('submit', onSubmit);

