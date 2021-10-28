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
}

// function that writes html template with dynamic data
function templateSingleCartItemToDropdown(cartItem){
return `
     <article class="cardCDInfo" id="${ cartItem.tag }">
        <img  id="img-${ cartItem.tag }" class="coverCD" src="img/${cartItem.img}" alt="${cartItem.artist} - ${cartItem.album}" />
        <h3 id="artist-${ cartItem.tag }">${cartItem.artist}</h3>
        <p>Album: <span id="album-${ cartItem.tag }">${cartItem.album}</span> </p>
        <p>Price: <span id="price-${ cartItem.tag }">${cartItem.price}</span> Kr </p>
        <button id="button-${ cartItem.tag }" class="buyButton js-button">Buy</button>
    </article>
    `
    console.log(cartItem)
}

/*

function updateDropdownContent(CartItemsArray)
// function that reads data from source and calls template function with this data
// thsi function is beeing called from script.js, with the updated array myCartShop
*/
