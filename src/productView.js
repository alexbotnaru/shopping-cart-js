import "./styles/style.css";
console.log('products detail page');
function fetchProduct(){
    let urlString = window.location.href;
    let url = new URL(urlString);
    let productId = url.searchParams.get("id");
    let productsArray = JSON.parse(localStorage.getItem('products'));
    var ourProduct = {};
    let productHtml = ``;

    const productDetails = document.querySelector('.productDetails');

    for(let product of productsArray){
        if(product.id === productId) {
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
                    <a href="#" class="btn btn-success mt-5"> Buy now</a>
                    <a href="#" class="btn btn-warning mt-5"> Add to cart</a>

                </div>

        </div>
        `

    productDetails.innerHTML = productHtml;

}
fetchProduct();