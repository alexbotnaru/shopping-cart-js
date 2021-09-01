class CartView {
    constructor(options) {
      this.node = document.getElementById("cart");
      this.options = options;
    }
  
    showProducts(products) {
      const list = document.createElement("ul");
      list.addEventListener("click", () => this.options.onListClick);
  
      products.forEach((product) => {
        const item = document.createElement("li");
        item.innerText = `${product.name}
        ${product.getFormattedPrice()}
        `;
  
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", (event) => {
          event.stopPropagation();
          this.options.onProductDelete(product);
        });
  
        item.appendChild(deleteButton);
  
        item.addEventListener("click", () =>
          this.options.onProductClick(product)
        );
        list.appendChild(item);
      });
  
      this.node.innerHTML = "";
      this.node.appendChild(list);
    }
  }

  export default CartView