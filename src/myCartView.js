import Cart from "./cart";

class MyCartView {
    constructor(){
        this.node = document.querySelector('.products-container');
        this.cartSpan = document.querySelector('.cart span');
        this.clearBtn = document.querySelector('.clear-cart');
        this.cartTotal = document.querySelector('.cart-total');

    }

    displayCart(cartItems){
        this.cartSpan.innerText = cartItems.length;
        if (cartItems === null || cartItems.length === 0 ) {
            this.node.innerHTML = '<h5> Your cart is empty!</h5>';
            this.clearBtn.classList.add('hidden');
        } else {

            if (this.clearBtn.classList.contains('hidden')) this.clearBtn.classList.remove('hidden');
            if (this.cartTotal.classList.contains('hidden')) this.cartTotal.classList.remove('hidden');

            let totalCost = 0;
            this.node.innerHTML = `
            <table class='cart-table table'>
            <thead>
            <tr>
                <th class='w-5-pct bg-dark text-white' style="text-align: center; width: 20%;">Image</th>
                <th class='w-5-pct bg-dark text-white' style="text-align: center">Product</th>
                <th class='w-5-pct bg-dark text-white' style="text-align: center">Price</th>
                <th class='w-5-pct bg-dark text-white' style="text-align: center">Amount</th>
                <th class='w-5-pct bg-dark text-white' style="text-align: center">Total</th>
                <th class='w-5-pct bg-dark text-white' style="text-align: center">Action</th>
             </tr>
             </thead>
            `;

                cartItems.forEach(item => {
                    
                let totalItemCost = item.price * item.inCart;
                
    
                let itemRow = document.createElement('tr');
    
                const cartTable = document.querySelector('.cart-table');
    
                let itemImg = document.createElement('img');
                itemImg.src = `../src/img/${item.image}`
                itemImg.style = "width: 100%;"
    
                let titleTD = document.createElement('td');
                titleTD.innerText = item.title
    
                let priceTD = document.createElement('td');
                priceTD.innerText = item.price + '$';
    
                let amountTD = document.createElement('td');
                amountTD.innerHTML = `<i class="bi bi-arrow-down"></i> ${item.inCart} <i class="bi bi-arrow-up"></i>`;
    
                let totalTD = document.createElement('td');
                totalTD.innerText = totalItemCost + '$';
    
                let deleteButtonTD = document.createElement('td');
    
    
                let deleteIcon = document.createElement('i');
                deleteIcon.classList.add("bi");
                deleteIcon.classList.add("bi-trash");
                deleteIcon.dataset.productId = item.id;
    
                deleteButtonTD.append(deleteIcon);
    
                itemRow.append(itemImg, titleTD, priceTD, amountTD, totalTD, deleteButtonTD);
                cartTable.append(itemRow);
    
                totalCost += totalItemCost;
            });
        
            this.cartTotal.innerHTML = `<h4>Summary: <b>${totalCost}$</b></h4>`
        }
    }

}
export default MyCartView