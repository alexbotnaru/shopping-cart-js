class ProductsView {
    constructor() {
        this.node = document.querySelector('.product-card');
    }

    displayProducts(products) {
        let displayProduct = '';


        products.forEach((item, i) => {
            if (i % 4 === 0) {
                displayProduct += `<div class="row">`;
            }


            displayProduct +=
                `
            <div class="card col-md-4 col-6 col-lg-3 mt-4 col">
            
            <a href="product.html?id=${item.id}">
                <img src="../src/img/${item.image}" class="card-img-top" alt="${item.image}">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}<br> ${item.price}$</p>
                    <a href="#" class="btn btn-primary btn add-cart"> Add to cart<i class="bi bi-cart-plus"></i></a> <span> <a href="" class="btn btn-danger">Delete</a></span>
                </div>
            </div>
       `;

            if (i % 4 === 3) {
                displayProduct += `</div>`
            }

            this.node.innerHTML = displayProduct;

        });

    }
}

export default ProductsView