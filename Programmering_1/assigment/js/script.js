let myCartShop = []

function itemAlreadyInCart(cd) {
    for (const item of myCartShop) {
        if (item.tag === cd) {
            return true
        }
    }
    return false
}
function updateQuantityAndPrice(cd) {
    for (const item of myCartShop) {
        if (item.tag === cd) {
            item.quantity += 1
            item.totalSum = item.price * item.quantity
        }
    }
}


function insertItemToCart(cd) {
    let cdInfo = {
        img: document.getElementById("img-"+cd).src,
        artist: document.getElementById("artist-"+cd).innerHTML,
        album: document.getElementById("album-"+cd).innerHTML,
        price: document.getElementById("price-"+cd).innerHTML,
        tag: cd,
        quantity: 1,
        totalSum:document.getElementById("price-"+cd).innerHTML
    }
    myCartShop.push(cdInfo);
}
function cartIsEmpty() {
    return myCartShop.length === 0
}

function addItemToCart(cd) {
    if (cartIsEmpty()) {
        insertItemToCart(cd);
    } else {
        if (itemAlreadyInCart(cd)) {
            updateQuantityAndPrice(cd);
        } else {
            insertItemToCart(cd);
        }
        findTotal(myCartShop)
        findTotalCD(myCartShop)
    }


}
// Button
function addButtonEventListeners(elementId) {
   document.getElementById("button-" + elementId)
       .addEventListener('click', function () {
            addItemToCart(elementId),updateDropdownContent (elementId)
        });
}

window.addEventListener('load', function () {
    for (const cdArtist of dataProducts ) {
        addButtonEventListeners(cdArtist.tag)
    }
})

// OPERATIONS CART:
/*
version 1
function findTotal(myCartShop) {
    let tot = 0;
    for (const item of myCartShop) {
        tot += parseInt(item.totalSum);
    }
    console.log(tot);
    document.getElementById('totalPay').innerHTML = tot;
}
*/

// add how many cd we add to the cart:
function findTotalCD(myCartShop){
    let totCD = 0;
    for (const item of myCartShop) {
        totCD += item.quantity;
    }
    console.log(totCD);
    document.getElementById('totalCds').innerHTML = totCD ;
}
// Uppdate information on cart with quantity:

/*function updateTotalPriceSelector(myCartShop) {
    let ValueAllCd = 0
    for (const item of myCartShop) {
        if (item.totalSum) {
            ValueAllCd += 1
        }
    }*/


// Uppdate information on cart with cd:


// message of free Shipping price:
function freeShippingCart() {
    let freeShipping = ''
    let limitFreeShip = 256
    if (limitFreeShip => 256) {
        freeShipping = 'uff just in the gap to free freight!'
    } else if (limitFreeShip > 256) {
        freeShipping = 'Congratulation! You are entitled to free freight!'
    } else {
        freeShipping = 'Need to buy more items cd to free freight!'
    }
}
// Delete information from cart:

function removeShoppingCartItem(cd) {
    const buttonClicked = cd.tag;
    buttonClicked.closest('.cardCDInfoCart').remove();
    updateDropdownContent (cd);
}
document.getElementById('removeCDCart').addEventListener("click", removeShoppingCartItem )



