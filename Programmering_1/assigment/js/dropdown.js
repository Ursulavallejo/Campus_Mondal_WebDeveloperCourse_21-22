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

// PRINT/INFO CART:
// function that writes html template with dynamic data
function templateSingleCartItemToDropdown(cd){
return `
     <article class="cardCDInfoCart" id="${ cd.tag }">
        <img  id="img-${ cd.tag }" class="coverCD" src="${cd.img}" alt="${cd.artist} - ${cd.album}" />
        <h3 id="artist-${ cd.tag }">${cd.artist}</h3>
        <p>Album: <span id="album-${ cd.tag }">${cd.album}</span> </p>
        <p>Price: <span id="price-${ cd.tag }">${cd.price}</span> Kr </p>
        <input type="number" name="amount" value="${cd.quantity}" />
         <p id="subPriceCart"><span>${cd.totalSum}</span> Kr</p>
        <button id="removeCDCart" type="button" >X</button>
    </article>  
`
}
// includes html to the kundkorg
// function that reads data from source and calls template function with this data
// this function is being called from script.js, with the updated array myCartShop


function updateDropdownContent (elementId){
let showCartAlbums = [];
for (const item of myCartShop){
showCartAlbums += templateSingleCartItemToDropdown(item)

}
updateElementIdHtml('cartProducts', showCartAlbums)
}

// OPERATIONS CART:

function totalCostCart(cd){
    let priceTotalSum =`${cd.price} + ${cd.price}`
}

function updateShoppingCartTotal (cd){
    let totalPriceCart = 0;
    for (const item of updateDropdownContent){
        totalPriceCart = totalCost(cd)
    }
}
// add how many cd we add to the cart:

function howManyCd(){
    let numberCD = [];

}
// message of free Shipping price:

function freeShippingCart(){
    let freeShipping = ''
let limitFreeShip  = 256
if ( limitFreeShip => 256 ){
    freeShipping = 'uff just in the gap to free freight!'
}else if (limitFreeShip > 256 ){
    freeShipping = 'Congratulation! You are entitled to free freight!'
}else {
    freeShipping = 'Need to buy more items cd to free freight!'
}
    updateElementIdText('freeShipmt', freeShipping)
    console.log(hej)
}

// need a function to remove and item from the kundkorg









