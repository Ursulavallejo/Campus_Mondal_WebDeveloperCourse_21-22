let myCartShop = []
let totalSumCart = 0

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
        findTotal();
        findTotalCD();
        freeShippingCart();
    } else {
        if (itemAlreadyInCart(cd)) {
            updateQuantityAndPrice(cd);
        } else {
            insertItemToCart(cd);
        }
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

function findTotal() {
    let tot = 0;
    for (const item of myCartShop) {
        tot += parseInt(item.totalSum);
    }
    console.log(tot);
    document.getElementById('totalPay').innerHTML = String(tot);
}

// add how many cd we add to the cart:
function findTotalCD(){
    let totCD = 0;
    for (const item of myCartShop) {
        totCD += item.quantity;
    }
    document.getElementById("totalCds").innerHTML = String(totCD) ;
}

// message of free Shipping price:
function freeShippingCart() {
    let limitFreeShip = 256 - totalSumCart;
    let freeShippingText = '';
    if (limitFreeShip <= 0) {
        freeShippingText = 'Congratulation! You are entitled to free freight!'
    } else {
        freeShippingText = "Need to buy" + limitFreeShip + "kr more items cd to free freight!"
    }
    document.getElementById("freeShipmt").innerHTML = freeShippingText
}

// information on cart with quantity:
function updateAlbumInCartWithNewValue(cd, newValue) {
    let totalSumOfAlbum = 0
    for (const item of myCartShop) {
        if (item.tag === cd) {
            item.quantity = newValue
            item.totalSum = item.price * item.quantity;
            totalSumOfAlbum =  item.totalSum ;
        }
    }
    return totalSumOfAlbum
}


// update information with the input
function addMore(cd) {
    let newValue = document.getElementById("inputQty" + cd).value;
    if (parseInt(newValue) <= 0) {
        for (let i = 0; i < myCartShop.length; i++) {
            if (myCartShop[i].tag === cd) {
                myCartShop.splice(i, 1);
                document.getElementById("cardCDInfo" + cd).remove()
            }
        }
    }
    else {
        let totalSum = updateAlbumInCartWithNewValue(cd, newValue)
        if(!!totalSum) {
            document.getElementById("totalPay" + cd).innerText = "Total: " + totalSum + ":-";
        }
    }
    findTotal()
    freeShippingCart()
    findTotalCD()
}


/*
// READ INPUT   what the teacher explained in class but some conexion is not working as mine is dinamic he did it for one
function readInput(cd ) {
    for (const item of myCartShop) {
        item.quantity = Number(document.getElementById("inputQty-${ cd.tag }").value)
        if (item.tag === cd) &&& (item.quantity < 1) {
            document.getElementById("${ cd.tag }").style.display = 'none'
        } else {
            document.getElementById("${ cd.tag }").style.display = 'block'
        }
        let sum = item.quantity * item.price;

        document.getElementById('subPriceCart').innerText = String(sum);
    }
}
*/


// Delete information from cart with button X
/*

function removeShoppingCartItem(cd) {
    const buttonClicked = cd.tag;
    buttonClicked.closest('.cardCDInfoCart').remove();
    updateDropdownContent (cd);
}
document.getElementById('removeCDCart').addEventListener("click", removeShoppingCartItem )
*/
