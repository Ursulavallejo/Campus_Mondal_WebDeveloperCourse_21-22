function createDropMenu (){
    return`
    <section class="dropdown">
            <div class="checkOut">
              <img src="img/shoppingCart.png" alt="cartBuy" />
              <button class="checkoutDropdownButton" onclick="openMenu()">
                Checkout
              </button>
            </div>
            <div id="dropdown" class="dropdown-content">
              <h2>Your Cart</h2>
              <hr />

              <section class="grid-container-ShopCart">
                <article class="grid-item1 area-item1">side</article>
                <article id="cartProducts" class="grid-item1 area-item2">
                  top
                </article>
                <article class="grid-item1 area-item3">
                  <p>
                    SUM(<span class="totalCds"></span>)
                    <span id="totalPay">SEK</span>
                  </p>
                </article>

                <button onclick="closeMenu()">Close</button>
                <button onclick="toCheckout()">Checkout</button>
              </section>
            </div>
          </section>
    
    `
}

/*
function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.remove('show')
}
function toCheckout(){
    alert ('Thank you for visiting us!! At the moment we cant offer to buy any product!')
}*/
