function createContentHeader(){
    return`

   <section class="grid-container-header">
          <div class="logo">
           <img src="img/amoebaLogo.png" alt="shopLogo">
          </div>
          <div class="searchArea">
            <label>
              <input type="text" value="artist name, keywords" />
            </label>
            <button onclick="#">SEARCH</button>
          </div>
          <div class="dropdown">
            <div class="checkOut">
              <img src="img/shoppingCart.png" alt="cartBuy" />
              <button class="checkoutDropdownButton" onclick="openMenu()">
                Checkout
              </button>
            </div>
`
}
document.getElementById('header').innerHTML = createContentHeader()